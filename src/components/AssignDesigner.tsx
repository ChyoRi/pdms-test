import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { db } from "../firebaseconfig";
import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import SelectBox from "./SelectBox";
import type { SelectBoxOption } from "./SelectBox";

// 디자이너 옵션
type DesignerOpt = {
  uid: string;
  name: string;
};

// ★ 추가: 내부용(정렬/표시용 __name 포함)
type DesignerOptEx = DesignerOpt & { __name: string };

// 타입: 한 줄(row)
export type AssignRow = {
  id: string;
  task_form: string;
  task_type: string;

  // ★ 유지: 업무형태상세
  task_type_detail?: string;

  task_detail: string; // 저장/전달용(= requirement 고정)
  count: string; // 카운트
  designer_uid: string;

  out_work_hour?: number;
  in_work_hour?: number;
};

interface AssignDesignerProps {
  isOpen: boolean;
  onClose: () => void;

  target?: RequestData | null;
  onAssign?: (rows: AssignRow[]) => void;
}

// 값 정리
const norm = (v: any) => String(v ?? "").trim();

// 회사 키 정규화
const normalizeCompanyKey = (v: any) =>
  String(v ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "");

// count 파싱
const toCount = (v: any) => {
  const n = Number(String(v ?? "").trim());
  return Number.isFinite(n) && n > 0 ? n : 1;
};

// ★ 추가: 문자열 배열 보정
const _toStrArray = (v: any): string[] => {
  if (!v) return [];
  if (Array.isArray(v)) return v.map(String).map((x) => x.trim()).filter(Boolean);
  return [];
};

// ★ 추가: RequestForm과 동일한 task_type 자동 파서
type TaskTypeParsed =
  | { mode: "flat"; allTypes: string[] }
  | { mode: "type_detail"; allTypes: string[]; detailsByType: Record<string, string[]> }
  | { mode: "form_type"; typesByForm: Record<string, string[]> }
  | { mode: "form_type_detail"; spec: Record<string, Record<string, string[]>> };

const parseTaskTypeSpec = (taskType: any, forms: string[]): TaskTypeParsed => {
  // (A) string[]
  if (Array.isArray(taskType)) {
    return { mode: "flat", allTypes: _toStrArray(taskType) };
  }

  // object
  if (taskType && typeof taskType === "object") {
    const keys = Object.keys(taskType || {});
    const vals = keys.map((k) => taskType[k]);

    const allArrays = vals.length > 0 && vals.every((v) => Array.isArray(v));
    const allObjects =
      vals.length > 0 && vals.every((v) => v && typeof v === "object" && !Array.isArray(v));

    // (B) or (C): { [k]: string[] }
    if (allArrays) {
      const map: Record<string, string[]> = {};
      keys.forEach((k) => (map[k] = _toStrArray(taskType[k])));

      // keys가 forms와 전부 일치하면 (C) form -> types
      const keyMatchesForms = forms.length > 0 && keys.every((k) => forms.includes(k));
      if (keyMatchesForms) {
        return { mode: "form_type", typesByForm: map };
      }

      // 아니면 (B) type -> details
      return { mode: "type_detail", allTypes: keys, detailsByType: map };
    }

    // (D): { [form]: { [type]: string[] } }
    if (allObjects) {
      const spec: Record<string, Record<string, string[]>> = {};
      keys.forEach((form) => {
        const inner = taskType[form] || {};
        const typeKeys = Object.keys(inner || {});
        const obj: Record<string, string[]> = {};
        typeKeys.forEach((t) => (obj[t] = _toStrArray(inner[t])));
        spec[form] = obj;
      });
      return { mode: "form_type_detail", spec };
    }

    // 예외: keys를 types로 간주
    return { mode: "flat", allTypes: keys.map(String).map((x) => x.trim()).filter(Boolean) };
  }

  return { mode: "flat", allTypes: [] };
};

// ★ 추가: AssignDesigner에서도 RequestForm처럼 "form -> type -> detail"을 뽑기 위한 companyCfg
type CompanyOptionsDoc = {
  task_form?: string[];
  task_type?: any;
  task_type_form?: any;
  task_type_detail_required?: boolean;
  task_work_hour_form?: any;
};

const buildCompanyCfg = (docData: CompanyOptionsDoc | null, companyKey?: string) => {
  const isHomeplus = companyKey === "homeplus";

  // forms
  const forms = _toStrArray(docData?.task_form);
  const formDefault = forms[0] ?? "";

  const rawTaskType = (docData as any)?.task_type ?? (docData as any)?.task_type_form ?? null;

  const parsed = parseTaskTypeSpec(rawTaskType, isHomeplus ? forms : []);

  const getTypes = (form?: string): string[] => {
    const f = (form ?? "").trim();

    if (parsed.mode === "flat") return [...parsed.allTypes];
    if (parsed.mode === "type_detail") return [...parsed.allTypes];
    if (parsed.mode === "form_type") return [..._toStrArray(parsed.typesByForm[f] ?? [])];
    if (parsed.mode === "form_type_detail") {
      const inner = parsed.spec[f] || {};
      return Object.keys(inner);
    }
    return [];
  };

  const getDetails = (form?: string, type?: string): string[] => {
    const f = (form ?? "").trim();
    const t = (type ?? "").trim();
    if (!t) return [];

    if (parsed.mode === "type_detail") return _toStrArray(parsed.detailsByType[t] ?? []);
    if (parsed.mode === "form_type_detail") return _toStrArray(parsed.spec?.[f]?.[t] ?? []);
    return [];
  };

  const isDetailMode = parsed.mode === "type_detail" || parsed.mode === "form_type_detail";

  return {
    isHomeplus,
    forms,
    formDefault,
    getTypes,
    getDetails,
    isDetailMode,
    detailRequiredFlag: !!docData?.task_type_detail_required,
  };
};

// ★ 추가: (form/type/detail) 기반으로 스펙 leaf 찾기 (공수 계산용)
const getSpecNode = (spec: any, task_form: string, task_type: string, task_type_detail?: string) => {
  const f = norm(task_form);
  const t = norm(task_type);
  const d = norm(task_type_detail);

  if (!spec || typeof spec !== "object" || !t) return null;

  // form 구조
  const byForm = f && spec?.[f] && typeof spec?.[f] === "object";
  const base = byForm ? spec?.[f]?.[t] : spec?.[t];

  if (!base || typeof base !== "object") return null;

  // detail이 있으면 detail 먼저
  if (d && base?.[d] && typeof base?.[d] === "object") return base[d];

  return base;
};

// ★ 추가: leaf(out/in) 추출
const getBaseHours = (spec: any, task_form: string, task_type: string, task_type_detail?: string) => {
  const node = getSpecNode(spec, task_form, task_type, task_type_detail);
  if (!node || typeof node !== "object") return { out: 0, in: 0 };

  const out = typeof (node as any).out_work_hour === "number" ? (node as any).out_work_hour : 0;
  const inn = typeof (node as any).in_work_hour === "number" ? (node as any).in_work_hour : 0;
  return { out, in: inn };
};

// 허수계정 판별
const isDummyByName = (name: string) => {
  const n = String(name ?? "").trim();
  return !!n && n.startsWith("★");
};

// ★ 추가: SelectBox 옵션 유틸
const toSelectOptions = (arr: string[], placeholder = "선택"): SelectBoxOption[] => {
  const base = arr.map((x) => String(x).trim()).filter(Boolean);
  return [{ value: "", label: placeholder }, ...base.map((v) => ({ value: v, label: v }))];
};

export default function AssignDesigner({ isOpen, onClose, target, onAssign }: AssignDesignerProps) {
  const [designers, setDesigners] = useState<DesignerOpt[]>([]);
  const [loadingDesigners, setLoadingDesigners] = useState(false);

  // ★ 변경: companySpec + companyDoc 보관
  const [companySpec, setCompanySpec] = useState<any>(null);
  const [companyDoc, setCompanyDoc] = useState<CompanyOptionsDoc | null>(null);

  // ★ 추가: 회사키(홈플러스 판별 등)
  const [companyKey, setCompanyKey] = useState<string>("");

  // 프리필
  const initialTaskForm = norm((target as any)?.task_form);
  const initialTaskType = norm((target as any)?.task_type);
  const initialTaskTypeDetail = norm((target as any)?.task_type_detail);

  // 작업항목은 requirement 고정
  const requirementText = norm((target as any)?.requirement);

  // ★ 추가: RequestForm처럼 회사 설정 생성
  const companyCfg = useMemo(() => buildCompanyCfg(companyDoc, companyKey), [companyDoc, companyKey]);

  // ★ 변경: detail 컬럼 노출 조건
  const showTypeDetailCol = !!initialTaskTypeDetail || !!companyCfg.isDetailMode;

  // rows
  const [rows, setRows] = useState<AssignRow[]>(() => [
    {
      id: crypto.randomUUID(),
      task_form: "",
      task_type: "",
      task_type_detail: "",
      task_detail: "",
      count: "1",
      designer_uid: "",
      out_work_hour: 0,
      in_work_hour: 0,
    },
  ]);

  // 디자이너 목록 그룹 분리
  const { realDesigners, dummyDesigners } = useMemo(() => {
    const list: DesignerOptEx[] = (designers ?? []).map((d) => ({
      ...d,
      __name: String((d as any)?.name ?? "").trim(),
    }));

    const real = list
      .filter((d) => d.__name && !isDummyByName(d.__name))
      .sort((a, b) => a.__name.localeCompare(b.__name, "ko"));

    const dummy = list
      .filter((d) => d.__name && isDummyByName(d.__name))
      .sort((a, b) => a.__name.localeCompare(b.__name, "ko"));

    return { realDesigners: real, dummyDesigners: dummy };
  }, [designers]);

  // 모달 열릴 때: rows reset + 회사 스펙/옵션 로드
  useEffect(() => {
    if (!isOpen) return;

    setRows([
      {
        id: crypto.randomUUID(),
        task_form: initialTaskForm,
        task_type: initialTaskType,
        task_type_detail: initialTaskTypeDetail,
        task_detail: requirementText,
        count: "1",
        designer_uid: "",
        out_work_hour: 0,
        in_work_hour: 0,
      },
    ]);

    (async () => {
      const companyRaw = (target as any)?.company;
      const key = normalizeCompanyKey(companyRaw);

      let docData: any = null;

      // 1) docId로 먼저 찾기
      if (key) {
        const snap = await getDoc(doc(db, "companies", key));
        if (snap.exists()) docData = snap.data();
      }

      // 2) 없으면 company_name 매칭
      if (!docData && companyRaw) {
        const qRef = query(collection(db, "companies"), where("company_name", "==", companyRaw));
        const qs = await getDocs(qRef);
        if (!qs.empty) docData = qs.docs[0].data();
      }

      const spec = (docData as any)?.task_work_hour_form ?? null;

      setCompanyDoc((docData ?? null) as CompanyOptionsDoc | null);
      setCompanySpec(spec);

      setCompanyKey(key || "");
    })();
  }, [isOpen, target, initialTaskForm, initialTaskType, initialTaskTypeDetail, requirementText]);

  // 디자이너(role==2) 로드
  useEffect(() => {
    if (!isOpen) return;

    (async () => {
      setLoadingDesigners(true);
      try {
        const qUsers = query(collection(db, "users"), where("role", "==", 2));
        const snap = await getDocs(qUsers);

        const list: DesignerOpt[] = snap.docs.map((d) => {
          const data = d.data() as any;
          return {
            uid: d.id,
            name: data.displayName || data.name || "(이름없음)",
          };
        });

        setDesigners(list);
      } finally {
        setLoadingDesigners(false);
      }
    })();
  }, [isOpen]);

  // 디자이너 옵션
  const designerOptions: SelectBoxOption[] = useMemo(() => {
    const base: SelectBoxOption[] = [];

    base.push({
      value: "",
      label: loadingDesigners ? "불러오는 중…" : "선택",
      disabled: loadingDesigners,
    });

    for (const d of realDesigners) base.push({ value: d.uid, label: d.__name, group: "디자이너" });
    for (const d of dummyDesigners) base.push({ value: d.uid, label: d.__name, group: "허수계정" });

    return base;
  }, [realDesigners, dummyDesigners, loadingDesigners]);

  // task_form 옵션
  const taskFormOptionsUI: SelectBoxOption[] = useMemo(() => {
    const forms = (companyCfg.forms ?? []).slice();
    if (initialTaskForm && !forms.includes(initialTaskForm)) forms.unshift(initialTaskForm);
    return toSelectOptions(forms);
  }, [companyCfg.forms, initialTaskForm]);

  // 공수 계산(현재 row 기준)
  const calcHoursForRow = (
    task_form: string,
    task_type: string,
    task_type_detail: string | undefined,
    count: string
  ) => {
    const c = toCount(count);
    const base = getBaseHours(companySpec, task_form, task_type, task_type_detail);
    return {
      out_work_hour: base.out * c,
      in_work_hour: base.in * c,
    };
  };

  // form/type 변경 시 종속 옵션 보정
  const updateRow = (id: string, patch: Partial<AssignRow>) => {
    setRows((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;

        const next: AssignRow = { ...r, ...patch };
        next.task_detail = requirementText;

        if (patch.task_form !== undefined) {
          const newForm = String(patch.task_form ?? "").trim();
          const allowedTypes = companyCfg.getTypes(newForm);

          const prevType = String(next.task_type ?? "").trim();
          const nextType = allowedTypes.includes(prevType) ? prevType : (allowedTypes[0] ?? "");

          next.task_form = newForm;
          next.task_type = nextType;
          next.task_type_detail = "";
        }

        if (patch.task_type !== undefined) {
          next.task_type = String(patch.task_type ?? "").trim();
          next.task_type_detail = "";
        }

        if (showTypeDetailCol) {
          const f = String(next.task_form ?? "").trim();
          const t = String(next.task_type ?? "").trim();
          const details = companyCfg.getDetails(f, t);
          const curDetail = String(next.task_type_detail ?? "").trim();

          if (curDetail && details.length > 0 && !details.includes(curDetail)) {
            next.task_type_detail = "";
          }

          if (
            !String(next.task_type_detail ?? "").trim() &&
            initialTaskTypeDetail &&
            details.includes(initialTaskTypeDetail)
          ) {
            next.task_type_detail = initialTaskTypeDetail;
          }
        }

        const hours = calcHoursForRow(next.task_form, next.task_type, next.task_type_detail, next.count);
        next.out_work_hour = hours.out_work_hour;
        next.in_work_hour = hours.in_work_hour;

        return next;
      })
    );
  };

  const handleAddRow = () => {
    const baseForm = initialTaskForm || companyCfg.formDefault || "";
    const allowedTypes = companyCfg.getTypes(baseForm);
    const baseType = allowedTypes.includes(initialTaskType)
      ? initialTaskType
      : (allowedTypes[0] ?? initialTaskType ?? "");

    setRows((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        task_form: baseForm,
        task_type: baseType,
        task_type_detail: initialTaskTypeDetail,
        task_detail: requirementText,
        count: "1",
        designer_uid: "",
        out_work_hour: 0,
        in_work_hour: 0,
      },
    ]);
  };

  const handleRemoveRow = (id: string) => {
    setRows((prev) => {
      if (prev.length <= 1) return prev;
      return prev.filter((r) => r.id !== id);
    });
  };

  const handleAssign = () => {
    const validRows = rows.filter((r) => norm(r.task_form) && norm(r.task_type) && norm(r.designer_uid));
    if (!validRows.length) {
      alert("업무부서/업무형태/디자이너를 선택하세요.");
      return;
    }

    const cleaned = validRows.map((r) => {
      const c = toCount(r.count);
      const base = getBaseHours(companySpec, r.task_form, r.task_type, r.task_type_detail);

      return {
        ...r,
        task_detail: requirementText,
        count: String(c),
        out_work_hour: base.out * c,
        in_work_hour: base.in * c,
      };
    });

    onAssign?.(cleaned);
    onClose();
  };

  if (!isOpen) return null;

  const ui = (
    <Overlay onMouseDown={onClose}>
      <Modal onMouseDown={(e) => e.stopPropagation()}>
        <Header>
          <Title>디자이너 배정</Title>
          <CloseBtn type="button" onClick={onClose} aria-label="닫기">
            ✕
          </CloseBtn>
        </Header>

        <Body>
          <TableScroll>
            <Table>
              <colgroup>
                <col style={{ width: 44 }} />
                <col style={{ width: 150 }} />
                <col style={{ width: 175 }} />
                {showTypeDetailCol && <col style={{ width: 170 }} />}
                <col />
                <col style={{ width: 110 }} />
                <col style={{ width: 155 }} />
              </colgroup>

              <thead>
                <tr>
                  <th />
                  <th>업무부서</th>
                  <th>업무형태</th>
                  {showTypeDetailCol && <th>업무형태상세</th>}
                  <th>작업항목</th>
                  <th>카운트</th>
                  <th>디자이너</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((r) => {
                  const formValue = r.task_form || initialTaskForm || companyCfg.formDefault || "";
                  const typeListRaw = companyCfg.getTypes(formValue);
                  const typeList = typeListRaw.slice();
                  if (r.task_type && !typeList.includes(r.task_type)) typeList.unshift(r.task_type);
                  const taskTypeOptionsUI = toSelectOptions(typeList);

                  const detailListRaw = companyCfg.getDetails(formValue, r.task_type);
                  const detailList = detailListRaw.slice();
                  if (r.task_type_detail && detailListRaw.length > 0 && !detailList.includes(r.task_type_detail)) {
                    detailList.unshift(r.task_type_detail);
                  }
                  const typeDetailOptionsUI = toSelectOptions(detailList);

                  const detailDisabled = !r.task_type || detailListRaw.length === 0;

                  return (
                    <tr key={r.id}>
                      <td>
                        <RemoveBtn
                          type="button"
                          aria-label="행 삭제"
                          title="행 삭제"
                          disabled={rows.length <= 1}
                          onClick={() => handleRemoveRow(r.id)}
                        >
                          −
                        </RemoveBtn>
                      </td>

                      <td>
                        <SelectBox
                          full
                          value={r.task_form}
                          placeholder="선택"
                          options={taskFormOptionsUI}
                          onChange={(next) => updateRow(r.id, { task_form: next })}
                        />
                      </td>

                      <td>
                        <SelectBox
                          full
                          value={r.task_type}
                          placeholder="선택"
                          options={taskTypeOptionsUI}
                          onChange={(next) => updateRow(r.id, { task_type: next })}
                        />
                      </td>

                      {showTypeDetailCol && (
                        <td>
                          <SelectBox
                            full
                            value={r.task_type_detail ?? ""}
                            placeholder={detailDisabled ? "-" : "선택"}
                            options={typeDetailOptionsUI}
                            disabled={detailDisabled}
                            onChange={(next) => updateRow(r.id, { task_type_detail: next })}
                          />
                        </td>
                      )}

                      <td>
                        <RequirementSpan title={requirementText}>{requirementText || "-"}</RequirementSpan>
                      </td>

                      <td>
                        <CountInput
                          inputMode="decimal"
                          placeholder="예: 3"
                          value={r.count}
                          onChange={(e) => {
                            const v = e.target.value;
                            // ★ 추가: 완전 빈칸이면 1로 유지(원하면 blur에서만 처리해도 됨)
                            updateRow(r.id, { count: v === "" ? "1" : v });
                          }}
                        />
                      </td>

                      <td>
                        <SelectBox
                          full
                          value={r.designer_uid}
                          placeholder={loadingDesigners ? "불러오는 중…" : "선택"}
                          options={designerOptions}
                          disabled={loadingDesigners}
                          onChange={(next) => updateRow(r.id, { designer_uid: next })}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </TableScroll>

          <HintRow>
            <Hint>• “추가”를 누르면 동일한 입력 행이 아래로 늘어납니다.</Hint>
          </HintRow>
        </Body>

        <Footer>
          <LeftBtn type="button" onClick={handleAddRow}>
            추가
          </LeftBtn>
          <RightBtn type="button" onClick={handleAssign}>
            배정하기
          </RightBtn>
        </Footer>
      </Modal>
    </Overlay>
  );

  return createPortal(ui, document.body);
}

/* styled */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const Modal = styled.div`
  width: min(1200px, 100%);
  max-height: calc(100vh - 96px);
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  border-bottom: 1px solid #e9ecef;
  flex: 0 0 auto;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

const CloseBtn = styled.button`
  width: 34px;
  height: 34px;
  font-size: 16px;
  cursor: pointer;
`;

const Body = styled.div`
  padding: 18px 20px 10px 20px;
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
`;

const TableScroll = styled.div`
  border-top: 1px solid #111;
  overflow-y: auto;
  scrollbar-width: thin;
  max-height: 400px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  th,
  td {
    border-bottom: 1px solid #e9ecef;
    padding: 10px 8px;
    font-size: 13px;
    text-align: center;
    vertical-align: middle;
  }

  th {
    background: #f7f7f8;
    font-weight: 700;
  }
`;

const RemoveBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: #fff;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;

  &:hover:not(:disabled) {
    border-color: #111;
  }

  &:disabled {
    opacity: 0.25;
    cursor: default;
  }
`;

const RequirementSpan = styled.span`
  display: block;
  padding: 8px 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CountInput = styled.input`
  width: 100%;
  height: 36px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  padding: 0 10px;
  font-size: 13px;
`;

const HintRow = styled.div`
  margin-top: 10px;
`;

const Hint = styled.div`
  font-size: 12px;
  color: #6b7280;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 18px 20px 22px 20px;
  flex: 0 0 auto;
`;

const LeftBtn = styled.button`
  min-width: 120px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid #111;
  background: #fff;
  font-weight: 700;
  cursor: pointer;
`;

const RightBtn = styled.button`
  min-width: 160px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid #111;
  background: #111;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`;