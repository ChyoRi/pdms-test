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

// 내부용(정렬/표시용 __name 포함)
type DesignerOptEx = DesignerOpt & { __name: string };

// ★ 변경: AssignRow 삭제 -> AssignedDesigner로 통일
// - _rowId: UI 전용(렌더 key), DB 저장 X
// - uid/name: 디자이너 식별
// - requirement: 회사 공수 스펙의 “업무형태” 값(드롭다운)
// - (작업항목은 문서 requirement를 별도로 표시)
export type AssignedDesigner = {
  _rowId: string; // ★ 추가: UI 전용 key
  uid: string;
  name: string;

  task_form: string;
  requirement: string; // ★ 변경: task_type -> requirement
  task_type_detail?: string;

  count: string; // 편집용
  out_work_hour: number;
  in_work_hour: number;
};

interface AssignDesignerProps {
  isOpen: boolean;
  onClose: () => void;

  target?: RequestData | null;
  onAssign?: (rows: AssignedDesigner[]) => void; // ★ 변경
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

// count 입력값(숫자만/빈값 허용)
const normalizeCountInput = (v: string) => {
  const s = String(v ?? "");
  if (s === "") return "";
  if (!/^\d+$/.test(s)) return s.replace(/[^\d]/g, "");
  return s;
};

// 문자열 배열 보정
const _toStrArray = (v: any): string[] => {
  if (!v) return [];
  if (Array.isArray(v)) return v.map(String).map((x) => x.trim()).filter(Boolean);
  return [];
};

// RequestForm과 동일한 task_type 자동 파서
type TaskTypeParsed =
  | { mode: "flat"; allTypes: string[] }
  | { mode: "type_detail"; allTypes: string[]; detailsByType: Record<string, string[]> }
  | { mode: "form_type"; typesByForm: Record<string, string[]> }
  | { mode: "form_type_detail"; spec: Record<string, Record<string, string[]>> };

const parseTaskTypeSpec = (taskType: any, forms: string[]): TaskTypeParsed => {
  if (Array.isArray(taskType)) {
    return { mode: "flat", allTypes: _toStrArray(taskType) };
  }

  if (taskType && typeof taskType === "object") {
    const keys = Object.keys(taskType || {});
    const vals = keys.map((k) => taskType[k]);

    const allArrays = vals.length > 0 && vals.every((v) => Array.isArray(v));
    const allObjects =
      vals.length > 0 && vals.every((v) => v && typeof v === "object" && !Array.isArray(v));

    if (allArrays) {
      const map: Record<string, string[]> = {};
      keys.forEach((k) => (map[k] = _toStrArray(taskType[k])));

      const keyMatchesForms = forms.length > 0 && keys.every((k) => forms.includes(k));
      if (keyMatchesForms) {
        return { mode: "form_type", typesByForm: map };
      }

      return { mode: "type_detail", allTypes: keys, detailsByType: map };
    }

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

    return { mode: "flat", allTypes: keys.map(String).map((x) => x.trim()).filter(Boolean) };
  }

  return { mode: "flat", allTypes: [] };
};

type CompanyOptionsDoc = {
  task_form?: string[];
  task_type?: any;
  task_type_form?: any;
  task_type_detail_required?: boolean;
  task_work_hour_form?: any;
};

const buildCompanyCfg = (docData: CompanyOptionsDoc | null, companyKey?: string) => {
  const isHomeplus = companyKey === "homeplus";

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

const getSpecNode = (spec: any, task_form: string, task_type: string, task_type_detail?: string) => {
  const f = norm(task_form);
  const t = norm(task_type);
  const d = norm(task_type_detail);

  if (!spec || typeof spec !== "object" || !t) return null;

  const byForm = f && spec?.[f] && typeof spec?.[f] === "object";
  const base = byForm ? spec?.[f]?.[t] : spec?.[t];

  if (!base || typeof base !== "object") return null;

  if (d && base?.[d] && typeof base?.[d] === "object") return base[d];

  return base;
};

const getBaseHours = (spec: any, task_form: string, task_type: string, task_type_detail?: string) => {
  const node = getSpecNode(spec, task_form, task_type, task_type_detail);
  if (!node || typeof node !== "object") return { out: 0, in: 0 };

  const out = typeof (node as any).out_work_hour === "number" ? (node as any).out_work_hour : 0;
  const inn = typeof (node as any).in_work_hour === "number" ? (node as any).in_work_hour : 0;
  return { out, in: inn };
};

const isDummyByName = (name: string) => {
  const n = String(name ?? "").trim();
  return !!n && n.startsWith("★");
};

const toSelectOptions = (arr: string[], placeholder = "선택"): SelectBoxOption[] => {
  const base = arr.map((x) => String(x).trim()).filter(Boolean);
  return [{ value: "", label: placeholder }, ...base.map((v) => ({ value: v, label: v }))];
};

// ★ 변경: 저장된 assigned_designers(row형) 복원 타입
type SavedAssignedDesigner = {
  uid?: string;
  name?: string;
  task_form?: string;
  requirement?: string;
  task_type?: string; // legacy fallback
  task_type_detail?: string;
  count?: number | string;
  out_work_hour?: number;
  in_work_hour?: number;
};

const normalizeSavedAssignedDesigners = (raw: any): AssignedDesigner[] => {
  const arr: SavedAssignedDesigner[] = Array.isArray(raw) ? raw : [];

  const rows = arr
    .map((r) => {
      const uid = norm(r.uid);
      const name = norm(r.name);

      const requirement = norm((r as any).requirement ?? (r as any).task_type);

      const countNum = toCount(r.count ?? 1);

      return {
        _rowId: crypto.randomUUID(),
        uid,
        name,
        task_form: norm(r.task_form),
        requirement,
        task_type_detail: norm(r.task_type_detail) || "",
        count: String(countNum),
        out_work_hour: typeof r.out_work_hour === "number" ? r.out_work_hour : 0,
        in_work_hour: typeof r.in_work_hour === "number" ? r.in_work_hour : 0,
      } as AssignedDesigner;
    })
    .filter((r) => !!r.task_form || !!r.requirement || !!r.uid);

  return rows.length > 0
    ? rows
    : [
        {
          _rowId: crypto.randomUUID(),
          uid: "",
          name: "",
          task_form: "",
          requirement: "",
          task_type_detail: "",
          count: "1",
          out_work_hour: 0,
          in_work_hour: 0,
        },
      ];
};

export default function AssignDesigner({ isOpen, onClose, target, onAssign }: AssignDesignerProps) {
  const [designers, setDesigners] = useState<DesignerOpt[]>([]);
  const [loadingDesigners, setLoadingDesigners] = useState(false);

  const [companySpec, setCompanySpec] = useState<any>(null);
  const [companyDoc, setCompanyDoc] = useState<CompanyOptionsDoc | null>(null);
  const [companyKey, setCompanyKey] = useState<string>("");

  const initialTaskForm = norm((target as any)?.task_form);
  const initialRequirement = norm((target as any)?.task_type); // ★ 유지: 원천 데이터는 기존 task_type(업무형태)
  const initialTaskTypeDetail = norm((target as any)?.task_type_detail);

  const docRequirement = norm((target as any)?.requirement); // ★ 추가: 작업항목(해당 문서 requirement)

  const companyCfg = useMemo(() => buildCompanyCfg(companyDoc, companyKey), [companyDoc, companyKey]);

  // ★ 변경: "업무형태상세" 컬럼은 '문서에 task_type_detail이 있을 때만' 표시
  const showTypeDetailCol = !!initialTaskTypeDetail;

  // ★ 변경: rows 타입 AssignedDesigner[]
  const [rows, setRows] = useState<AssignedDesigner[]>(() => [
    {
      _rowId: crypto.randomUUID(),
      uid: "",
      name: "",
      task_form: "",
      requirement: "",
      task_type_detail: "",
      count: "1",
      out_work_hour: 0,
      in_work_hour: 0,
    },
  ]);

  const designerNameByUid = useMemo(() => {
    const m = new Map<string, string>();
    for (const d of designers ?? []) {
      const uid = String(d.uid ?? "").trim();
      const name = String(d.name ?? "").trim();
      if (uid) m.set(uid, name);
    }
    return m;
  }, [designers]);

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

  useEffect(() => {
    if (!isOpen) return;

    (async () => {
      const companyRaw = (target as any)?.company;
      const key = normalizeCompanyKey(companyRaw);

      let docData: any = null;

      if (key) {
        const snap = await getDoc(doc(db, "companies", key));
        if (snap.exists()) docData = snap.data();
      }

      if (!docData && companyRaw) {
        const qRef = query(collection(db, "companies"), where("company_name", "==", companyRaw));
        const qs = await getDocs(qRef);
        if (!qs.empty) docData = qs.docs[0].data();
      }

      const spec = (docData as any)?.task_work_hour_form ?? null;

      setCompanyDoc((docData ?? null) as CompanyOptionsDoc | null);
      setCompanySpec(spec);
      setCompanyKey(key || "");

      const requestId = String((target as any)?.id ?? "").trim();
      if (requestId) {
        const reqSnap = await getDoc(doc(db, "design_request", requestId));
        if (reqSnap.exists()) {
          const reqData = reqSnap.data() as any;

          // ★ 변경: assigned_designers(row형) 복원만 사용
          const saved = reqData?.assigned_designers;
          if (Array.isArray(saved) && saved.length > 0) {
            // row형인지 최소 판별
            const rowShape = saved[0]?.task_form || saved[0]?.requirement || saved[0]?.task_type;
            if (rowShape) {
              setRows(normalizeSavedAssignedDesigners(saved));
              return;
            }
          }
        }
      }

      // 기본 1행 생성
      setRows([
        {
          _rowId: crypto.randomUUID(),
          uid: "",
          name: "",
          task_form: initialTaskForm,
          requirement: initialRequirement,
          task_type_detail: initialTaskTypeDetail,
          count: "1",
          out_work_hour: 0,
          in_work_hour: 0,
        },
      ]);
    })();
  }, [isOpen, target, initialTaskForm, initialRequirement, initialTaskTypeDetail]);

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

  const taskFormOptionsUI: SelectBoxOption[] = useMemo(() => {
    const forms = (companyCfg.forms ?? []).slice();
    if (initialTaskForm && !forms.includes(initialTaskForm)) forms.unshift(initialTaskForm);
    return toSelectOptions(forms);
  }, [companyCfg.forms, initialTaskForm]);

  const calcHoursForRow = (
    task_form: string,
    requirement: string,
    task_type_detail: string | undefined,
    count: string
  ) => {
    const c = toCount(count);
    const base = getBaseHours(companySpec, task_form, requirement, task_type_detail);
    return {
      out_work_hour: base.out * c,
      in_work_hour: base.in * c,
    };
  };

  const updateRow = (rowId: string, patch: Partial<AssignedDesigner>) => {
    setRows((prev) =>
      prev.map((r) => {
        if (r._rowId !== rowId) return r;

        const next: AssignedDesigner = { ...r, ...patch };

        if (patch.task_form !== undefined) {
          const newForm = String(patch.task_form ?? "").trim();
          const allowedTypes = companyCfg.getTypes(newForm);

          const prevType = String(next.requirement ?? "").trim();
          const nextType = allowedTypes.includes(prevType) ? prevType : (allowedTypes[0] ?? "");

          next.task_form = newForm;
          next.requirement = nextType;
          next.task_type_detail = "";
        }

        if (patch.requirement !== undefined) {
          next.requirement = String(patch.requirement ?? "").trim();
          next.task_type_detail = "";
        }

        // ★ 유지: 컬럼을 표시할 때만 디테일 리스트 정합성 체크
        if (showTypeDetailCol) {
          const f = String(next.task_form ?? "").trim();
          const t = String(next.requirement ?? "").trim();

          const details = companyCfg.getDetails(f, t);
          const curDetail = String(next.task_type_detail ?? "").trim();

          if (curDetail && details.length > 0 && !details.includes(curDetail)) {
            next.task_type_detail = "";
          }
        }

        if (patch.uid !== undefined) {
          const uid = String(patch.uid ?? "").trim();
          next.uid = uid;
          next.name = uid ? (designerNameByUid.get(uid) ?? next.name ?? "") : "";
        }

        const hours = calcHoursForRow(next.task_form, next.requirement, next.task_type_detail, next.count);
        next.out_work_hour = hours.out_work_hour;
        next.in_work_hour = hours.in_work_hour;

        return next;
      })
    );
  };

  const handleAddRow = () => {
    const baseForm = initialTaskForm || companyCfg.formDefault || "";
    const allowedTypes = companyCfg.getTypes(baseForm);
    const baseType = allowedTypes.includes(initialRequirement)
      ? initialRequirement
      : (allowedTypes[0] ?? initialRequirement ?? "");

    setRows((prev) => [
      ...prev,
      {
        _rowId: crypto.randomUUID(),
        uid: "",
        name: "",
        task_form: baseForm,
        requirement: baseType,
        task_type_detail: initialTaskTypeDetail,
        count: "1",
        out_work_hour: 0,
        in_work_hour: 0,
      },
    ]);
  };

  const handleRemoveRow = (rowId: string) => {
    setRows((prev) => {
      if (prev.length <= 1) return prev;
      return prev.filter((r) => r._rowId !== rowId);
    });
  };

  const handleAssign = () => {
    const validRows = rows.filter((r) => norm(r.task_form) && norm(r.requirement) && norm(r.uid));
    if (!validRows.length) {
      alert("업무부서/업무형태/디자이너를 선택하세요.");
      return;
    }

    const cleaned = validRows.map((r) => {
      const c = toCount(r.count);
      const base = getBaseHours(companySpec, r.task_form, r.requirement, r.task_type_detail);

      return {
        ...r,
        count: String(c),
        out_work_hour: base.out * c,
        in_work_hour: base.in * c,
        name: norm(r.name) || "(이름없음)",
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
                <col style={{ width: "100%" }} />
                <col style={{ width: 110 }} />
                <col style={{ width: 155 }} />
              </colgroup>

              <thead>
                <tr>
                  <th />
                  <th>업무부서</th>
                  <th>업무형태</th>
                  {showTypeDetailCol && <th>업무형태상세</th>}
                  <th>작업항목</th> {/* ★ 추가 */}
                  <th>카운트</th>
                  <th>디자이너</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((r) => {
                  const formValue = r.task_form || initialTaskForm || companyCfg.formDefault || "";
                  const typeListRaw = companyCfg.getTypes(formValue);
                  const typeList = typeListRaw.slice();
                  if (r.requirement && !typeList.includes(r.requirement)) typeList.unshift(r.requirement);
                  const taskTypeOptionsUI = toSelectOptions(typeList);

                  // 디테일은 컬럼을 표시할 때만 의미 있음
                  const detailListRaw = showTypeDetailCol ? companyCfg.getDetails(formValue, r.requirement) : [];
                  const detailList = detailListRaw.slice();
                  if (r.task_type_detail && detailListRaw.length > 0 && !detailList.includes(r.task_type_detail)) {
                    detailList.unshift(r.task_type_detail);
                  }
                  const typeDetailOptionsUI = toSelectOptions(detailList);

                  const detailDisabled = !showTypeDetailCol || !r.requirement || detailListRaw.length === 0;

                  return (
                    <tr key={r._rowId}>
                      <td>
                        <RemoveBtn
                          type="button"
                          aria-label="행 삭제"
                          title="행 삭제"
                          disabled={rows.length <= 1}
                          onClick={() => handleRemoveRow(r._rowId)}
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
                          onChange={(next) => updateRow(r._rowId, { task_form: next })}
                        />
                      </td>

                      <td>
                        <SelectBox
                          full
                          value={r.requirement}
                          placeholder="선택"
                          options={taskTypeOptionsUI}
                          onChange={(next) => updateRow(r._rowId, { requirement: next })}
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
                            onChange={(next) => updateRow(r._rowId, { task_type_detail: next })}
                          />
                        </td>
                      )}

                      <td>{docRequirement || "-"}</td> {/* ★ 추가: 작업항목(문서 requirement) */}

                      <td>
                        <CountInput
                          inputMode="numeric"
                          placeholder="예: 3"
                          value={r.count}
                          onChange={(e) => {
                            const v = normalizeCountInput(e.target.value);
                            updateRow(r._rowId, { count: v });
                          }}
                          onBlur={() => {
                            if (String(r.count ?? "") === "") {
                              updateRow(r._rowId, { count: "1" });
                            } else {
                              const c = toCount(r.count);
                              updateRow(r._rowId, { count: String(c) });
                            }
                          }}
                        />
                      </td>

                      <td>
                        <SelectBox
                          full
                          value={r.uid}
                          placeholder={loadingDesigners ? "불러오는 중…" : "선택"}
                          options={designerOptions}
                          disabled={loadingDesigners}
                          onChange={(next) => updateRow(r._rowId, { uid: next })}
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