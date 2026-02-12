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

// AssignRow 삭제 -> AssignedDesigner로 통일
// - _rowId: UI 전용(렌더 key), DB 저장 X
// - uid/name: 디자이너 식별
// - requirement: 회사 공수 스펙의 “업무형태” 값(드롭다운)
// - (작업항목은 문서 requirement를 별도로 표시)
export type AssignedDesigner = {
  _rowId: string;
  uid: string;
  name: string;
  task_form: string;
  task_type: string;
  requirement: string;
  task_type_detail?: string;
  count: string;
  out_work_hour: number;
  in_work_hour: number;
  out_work_price: number;
  in_work_price: number;
};

interface AssignDesignerProps {
  isOpen: boolean;
  onClose: () => void;

  target?: RequestData | null;
  onAssign?: (rows: AssignedDesigner[]) => void;
}

// 값 정리
const norm = (v: any) => String(v ?? "").trim();

// 회사 키 정규화
const normalizeCompanyKey = (v: any) =>
  String(v ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "");

// count 파싱(0 허용, 빈값/비정상은 0)
const toCount = (v: any) => {
  const s = String(v ?? "").trim();
  if (s === "") return 0;
  const n = Number(s);
  return Number.isFinite(n) && n >= 0 ? n : 0;
};

const toNumLoose = (v: any) => {
  if (typeof v === "number") return Number.isFinite(v) ? v : 0;
  if (typeof v === "string") {
    const n = Number(v.replace(/[, ]/g, ""));
    return Number.isFinite(n) ? n : 0;
  }
  return 0;
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
  const parsed = parseTaskTypeSpec(rawTaskType, forms);

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

  const out = toNumLoose((node as any).out_work_hour); // ★ 변경
  const inn = toNumLoose((node as any).in_work_hour);  // ★ 변경
  return { out, in: inn };
};

// price 읽기
const getBasePrices = (spec: any, task_form: string, task_type: string, task_type_detail?: string) => {
  const node = getSpecNode(spec, task_form, task_type, task_type_detail);
  if (!node || typeof node !== "object") return { out: 0, in: 0 };

  const out = toNumLoose((node as any).out_work_price); // ★ 변경
  const inn = toNumLoose((node as any).in_work_price);  // ★ 변경
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

// 저장된 assigned_designers(row형) 복원 타입
type SavedAssignedDesigner = {
  uid?: string;
  name?: string;
  task_form?: string;
  task_type?: string;
  requirement?: string;
  task_type_legacy?: string;
  task_type_detail?: string;
  count?: number | string;
  out_work_hour?: number;
  in_work_hour?: number;
  out_work_price?: number;
  in_work_price?: number;
};

const normalizeSavedAssignedDesigners = (raw: any, fallbackDocRequirement: string): AssignedDesigner[] => {
  const arr: SavedAssignedDesigner[] = Array.isArray(raw) ? raw : [];

  const rows = arr
    .map((r) => {
      const uid = norm(r.uid);
      const name = norm(r.name);

      const savedTaskType = norm((r as any).task_type);
      const legacyTypeFromRequirement = norm((r as any).requirement); // 레거시에서 업무형태가 들어있던 자리

      // 신규면 task_type를 신뢰, 레거시면 requirement를 task_type로 승격
      const task_type = savedTaskType || legacyTypeFromRequirement || norm((r as any).task_type_legacy);

      // 신규면 requirement가 작업항목, 레거시면 문서 requirement로 채움
      const requirement =
        savedTaskType ? (norm((r as any).requirement) || fallbackDocRequirement) : fallbackDocRequirement;

      const countNum = toCount(r.count ?? 0);

      return {
        _rowId: crypto.randomUUID(),
        uid,
        name,
        task_form: norm((r as any).task_form),

        task_type,
        requirement,

        task_type_detail: norm((r as any).task_type_detail) || "",
        count: String(countNum),

        out_work_hour: typeof (r as any).out_work_hour === "number" ? (r as any).out_work_hour : 0,
        in_work_hour: typeof (r as any).in_work_hour === "number" ? (r as any).in_work_hour : 0,

        out_work_price: typeof (r as any).out_work_price === "number" ? (r as any).out_work_price : 0, // ★ 추가
        in_work_price: typeof (r as any).in_work_price === "number" ? (r as any).in_work_price : 0,   // ★ 추가
      } as AssignedDesigner;
    })
    .filter((r) => !!r.task_form || !!r.task_type || !!r.uid);

  return rows.length > 0
    ? rows
    : [
        {
          _rowId: crypto.randomUUID(),
          uid: "",
          name: "",
          task_form: "",
          task_type: "",
          requirement: fallbackDocRequirement || "",
          task_type_detail: "",
          count: "0",
          out_work_hour: 0,
          in_work_hour: 0,
          out_work_price: 0,
          in_work_price: 0,
        },
      ];
};

export default function AssignDesigner({ isOpen, onClose, target, onAssign }: AssignDesignerProps) {
  const [designers, setDesigners] = useState<DesignerOpt[]>([]);
  const [loadingDesigners, setLoadingDesigners] = useState(false);

  const [companyHourSpec, setCompanyHourSpec] = useState<any>(null);
  const [companyPriceSpec, setCompanyPriceSpec] = useState<any>(null);
  const [companyDoc, setCompanyDoc] = useState<CompanyOptionsDoc | null>(null);
  const [companyKey, setCompanyKey] = useState<string>("");

  const initialTaskForm = norm((target as any)?.task_form);
  const initialTaskType = norm((target as any)?.task_type);
  const initialTaskTypeDetail = norm((target as any)?.task_type_detail);

  const docRequirement = norm((target as any)?.requirement); // 작업항목(해당 문서 requirement)

  const companyCfg = useMemo(() => buildCompanyCfg(companyDoc, companyKey), [companyDoc, companyKey]);

  // "업무형태상세" 컬럼은 '문서에 task_type_detail이 있을 때만' 표시
  const showTypeDetailCol = !!initialTaskTypeDetail;

  // rows 타입 AssignedDesigner[]
  const [rows, setRows] = useState<AssignedDesigner[]>(() => [
    {
      _rowId: crypto.randomUUID(),
      uid: "",
      name: "",
      task_form: "",
      task_type: "",
      requirement: "",
      task_type_detail: "",
      count: "0",
      out_work_hour: 0,
      in_work_hour: 0,
      out_work_price: 0, // ★ 추가
      in_work_price: 0,  // ★ 추가
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

      const hourSpec = (docData as any)?.task_work_hour_form ?? null;
      const priceSpec = (docData as any)?.task_work_price_form ?? null;

      setCompanyHourSpec(hourSpec);
      setCompanyPriceSpec(priceSpec);

      setCompanyDoc((docData ?? null) as CompanyOptionsDoc | null);
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
              setRows(normalizeSavedAssignedDesigners(saved, docRequirement));
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
          task_type: initialTaskType,
          requirement: docRequirement,
          task_type_detail: initialTaskTypeDetail,
          count: "0",
          out_work_hour: 0,
          in_work_hour: 0,
          out_work_price: 0,
          in_work_price: 0,
        },
      ]);
    })();
  }, [isOpen, target, initialTaskForm, initialTaskType, initialTaskTypeDetail, docRequirement]);

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

  // ★ 추가: rows에 있는 uid가 designers 옵션에 없을 경우(계정 삭제/role변경 등)에도
  // SelectBox가 "이름"으로 라벨 표시할 수 있도록 "비활성(삭제됨)" 옵션을 임시로 주입
  const missingDesignerOptions: SelectBoxOption[] = useMemo(() => {
    const known = new Set<string>((designers ?? []).map((d) => String(d.uid ?? "").trim()).filter(Boolean));
    const out: SelectBoxOption[] = [];
    const seen = new Set<string>();

    for (const r of rows ?? []) {
      const uid = String(r.uid ?? "").trim();
      if (!uid) continue;
      if (known.has(uid)) continue;
      if (seen.has(uid)) continue;

      const savedName = String(r.name ?? "").trim();
      const labelBase = savedName || uid;

      out.push({
        value: uid,
        label: `${labelBase}`,
      });

      seen.add(uid);
    }

    return out;
  }, [rows, designers]);

  const designerOptions: SelectBoxOption[] = useMemo(() => {
    const base: SelectBoxOption[] = [];

    base.push({
      value: "",
      label: loadingDesigners ? "불러오는 중…" : "선택",
      disabled: loadingDesigners,
    });

    for (const d of realDesigners) base.push({ value: d.uid, label: d.__name, group: "디자이너" });
    for (const d of dummyDesigners) base.push({ value: d.uid, label: d.__name, group: "허수계정" });

    // ★ 추가: 옵션에 없는 uid(삭제/비활성)도 라벨로 표시되도록 주입
    for (const opt of missingDesignerOptions) base.push(opt);

    return base;
  }, [realDesigners, dummyDesigners, loadingDesigners, missingDesignerOptions]);

  const taskFormOptionsUI: SelectBoxOption[] = useMemo(() => {
    const forms = (companyCfg.forms ?? []).slice();
    if (initialTaskForm && !forms.includes(initialTaskForm)) forms.unshift(initialTaskForm);
    return toSelectOptions(forms);
  }, [companyCfg.forms, initialTaskForm]);

  const calcForRow = (
    task_form: string,
    task_type: string,
    task_type_detail: string | undefined,
    count: string
  ) => {
    const c = toCount(count);

    // ★ 변경: hour는 hourSpec, price는 priceSpec
    const baseH = getBaseHours(companyHourSpec, task_form, task_type, task_type_detail);
    const baseP = getBasePrices(companyPriceSpec, task_form, task_type, task_type_detail);

    return {
      out_work_hour: baseH.out * c,
      in_work_hour: baseH.in * c,
      out_work_price: baseP.out * c,
      in_work_price: baseP.in * c,
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

          const prevType = String(next.task_type ?? "").trim();
          const nextType = allowedTypes.includes(prevType) ? prevType : (allowedTypes[0] ?? "");

          next.task_form = newForm;
          next.task_type = nextType;
          next.task_type_detail = "";
        }

        // ★ 변경: 업무형태 변경
        if ((patch as any).task_type !== undefined) {
          next.task_type = String((patch as any).task_type ?? "").trim();
          next.task_type_detail = "";
        }

        // ★ 유지: 컬럼을 표시할 때만 디테일 리스트 정합성 체크
        if (showTypeDetailCol) {
          const f = String(next.task_form ?? "").trim();
          const t = String(next.task_type ?? "").trim();

          const details = companyCfg.getDetails(f, t);
          const curDetail = String(next.task_type_detail ?? "").trim();

          if (curDetail && details.length > 0 && !details.includes(curDetail)) {
            next.task_type_detail = "";
          }
        }

        if (patch.uid !== undefined) {
          const uid = String(patch.uid ?? "").trim();
          next.uid = uid;

          // ★ 변경: users 목록에 없더라도 기존 저장 name을 최대한 유지
          // - options에 없는 UID라서도, name이 유지되면 "비활성(삭제됨)" 옵션 라벨로 표시 가능
          const resolvedName = uid ? (designerNameByUid.get(uid) ?? next.name ?? "") : "";
          next.name = resolvedName;
        }

        const computed = calcForRow(next.task_form, next.task_type, next.task_type_detail, next.count);
        next.out_work_hour = computed.out_work_hour;
        next.in_work_hour = computed.in_work_hour;
        next.out_work_price = computed.out_work_price; // ★ 추가
        next.in_work_price = computed.in_work_price;   // ★ 추가

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
        _rowId: crypto.randomUUID(),
        uid: "",
        name: "",
        task_form: baseForm,
        task_type: baseType,
        requirement: docRequirement,
        task_type_detail: initialTaskTypeDetail,
        count: "0",
        out_work_hour: 0,
        in_work_hour: 0,
        out_work_price: 0,
        in_work_price: 0,
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
    // ★ 변경: 유효성은 task_form + task_type + uid 기준
    const validRows = rows.filter((r) => norm(r.task_form) && norm(r.task_type) && norm(r.uid));
    if (!validRows.length) {
      alert("업무부서/업무형태/디자이너를 선택하세요.");
      return;
    }

    // ★ 변경: 저장 직전에 hours + price 모두 강제 계산
    const cleaned = validRows.map((r) => {
      const c = toCount(r.count);

      const baseH = getBaseHours(companyHourSpec, r.task_form, r.task_type, r.task_type_detail);
      const baseP = getBasePrices(companyPriceSpec, r.task_form, r.task_type, r.task_type_detail);

      return {
        ...r,
        // ★ 변경: 작업항목은 문서 requirement를 강제로 주입(빈 값 방지)
        requirement: norm(r.requirement) || docRequirement || "",

        count: String(c),

        out_work_hour: baseH.out * c,
        in_work_hour: baseH.in * c,

        out_work_price: baseP.out * c, // ★ 추가
        in_work_price: baseP.in * c,   // ★ 추가

        // ★ 유지: name은 저장된 값 우선(삭제 계정도 표시 목적)
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

                  // 디테일은 컬럼을 표시할 때만 의미 있음
                  const detailListRaw = showTypeDetailCol ? companyCfg.getDetails(formValue, r.task_type) : [];
                  const detailList = detailListRaw.slice();
                  if (r.task_type_detail && detailListRaw.length > 0 && !detailList.includes(r.task_type_detail)) {
                    detailList.unshift(r.task_type_detail);
                  }
                  const typeDetailOptionsUI = toSelectOptions(detailList);

                  const detailDisabled = !showTypeDetailCol || !r.task_type || detailListRaw.length === 0;

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
                          value={r.task_type}
                          placeholder="선택"
                          options={taskTypeOptionsUI}
                          onChange={(next) => updateRow(r._rowId, { task_type: next } as any)}
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

                      <td>{r.requirement || docRequirement || "-"}</td>

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
                              updateRow(r._rowId, { count: "0" });
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