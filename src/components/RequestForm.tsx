import styled from "styled-components";
import { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth, db } from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, doc, getDoc, serverTimestamp, Timestamp, query, where, getDocs, writeBatch, increment, orderBy, limit} from "firebase/firestore";
import requestFormExitButton from "../assets/requestformexit-button.svg";
import checkBoxChecked from "../assets/checkbox-checked.svg";
import selectBoxArrow from "../assets/selectbox-arrow.svg";
import SelectBox from "./SelectBox";

interface RequestFormProps {
  userName: string;
  editData?: RequestData | null;
  isDrawerOpen: boolean;
  onClose: () => void;
}

type RequestFormState = Omit<RequestData, "url"> & { url: string };

const defaultRequestData: Partial<RequestFormState> = {
  completion_date: "",
  open_date: "",
  merchandiser: "",
  task_form: "",
  task_type: "",
  task_type_detail: "",
  requirement: "",
  url: "",
  emergency: false,
};

type CompanyOptionsDoc = {
  task_form?: string[];
  task_type?: any;
  task_type_form?: any;
  type_select_mode?: "native" | "custom";
  task_type_detail_required?: boolean;
  task_work_hour_form?: any;
};

type TaskTypeParsed =
  | { mode: "flat"; allTypes: string[] }
  | { mode: "type_detail"; allTypes: string[]; detailsByType: Record<string, string[]> }
  | { mode: "form_type"; typesByForm: Record<string, string[]> }
  | { mode: "form_type_detail"; spec: Record<string, Record<string, string[]>> };

const normalize = (s?: string) => (s ?? "").trim().toLowerCase();
const normalizeCompanyKey = (s?: string) => normalize(s).replace(/\s+/g, "");

const _toStrArray = (v: any): string[] => {
  if (!v) return [];
  if (Array.isArray(v)) return v.map(String).map((x) => x.trim()).filter(Boolean);
  return [];
};

// task_type 자동 파서 (A/B/C/D 형태 자동 판별)
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
      vals.length > 0 &&
      vals.every((v) => v && typeof v === "object" && !Array.isArray(v));

    // (B) or (C): { [k]: string[] }
    if (allArrays) {
      const map: Record<string, string[]> = {};
      keys.forEach((k) => (map[k] = _toStrArray(taskType[k])));

      // keys가 forms와 전부 일치하면 (C) form -> types 로 판단
      const keyMatchesForms =
        forms.length > 0 && keys.every((k) => forms.includes(k));

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

    // 혼합/예외: keys를 types로 간주하고 flat 처리
    return { mode: "flat", allTypes: keys.map(String).map((x) => x.trim()).filter(Boolean) };
  }

  return { mode: "flat", allTypes: [] };
};

// companies.task_work_hour_form 스펙에서 (form/type/detail)로 공수 조회
const getWorkHourFromCompanySpec = (
  spec: any,
  task_form?: string,
  task_type?: string,
  task_type_detail?: string
): { base: number | null; times: number | null } => {
  const f = (task_form ?? "").trim();
  const t = (task_type ?? "").trim();
  const d = (task_type_detail ?? "").trim();

  if (!spec || typeof spec !== "object" || !t) return { base: null, times: null };

  // - spec[form]이 객체면 homeplus 구조로 간주
  const looksLikeFormSpec = !!(f && spec[f] && typeof spec[f] === "object");

  const baseNode = looksLikeFormSpec ? spec[f]?.[t] : spec[t];
  if (!baseNode || typeof baseNode !== "object") return { base: null, times: null };

  // (A) leaf: {hour, times}
  if (typeof baseNode.hour === "number" && typeof baseNode.times === "number") {
    return { base: baseNode.hour, times: baseNode.times };
  }

  // (B) detail: { [detail]: {hour, times} }
  if (d && baseNode[d] && typeof baseNode[d] === "object") {
    const leaf = baseNode[d];
    return {
      base: typeof leaf.hour === "number" ? leaf.hour : null,
      times: typeof leaf.times === "number" ? leaf.times : null,
    };
  }

  return { base: null, times: null };
};

// task_work_hour_form 기반 옵션 파싱 유틸
/* const _isLeafHourNode = (node: any) =>
  node &&
  typeof node === "object" &&
  typeof node.hour === "number" &&
  typeof node.times === "number"; */

// task_work_hour_form -> { forms, typesByForm, detailsByFormType, isDetailMode }
/* const parseWorkHourSpec = (workSpec: any) => {
  const forms: string[] = [];
  const typesByForm: Record<string, string[]> = {};
  const detailsByFormType: Record<string, Record<string, string[]>> = {};

  let isDetailMode = false;

  if (!workSpec || typeof workSpec !== "object") {
    return { forms, typesByForm, detailsByFormType, isDetailMode };
  }

  for (const form of Object.keys(workSpec)) {
    const byForm = workSpec[form];
    if (!byForm || typeof byForm !== "object") continue;

    forms.push(form);

    const types: string[] = [];
    const detailsMap: Record<string, string[]> = {};

    for (const type of Object.keys(byForm)) {
      const node = byForm[type];
      if (!node || typeof node !== "object") continue;

      types.push(type);

      // leaf면 상세 없음
      if (_isLeafHourNode(node)) {
        detailsMap[type] = [];
        continue;
      }

      // detail map 형태면 상세 존재
      const details = Object.keys(node).filter((d) => _isLeafHourNode(node[d]));
      if (details.length > 0) {
        isDetailMode = true;
        detailsMap[type] = details;
      } else {
        // 혹시 detail이 leaf 판별이 안 되는 예외 구조라도 안전 처리
        detailsMap[type] = Object.keys(node);
        if (detailsMap[type].length > 0) isDetailMode = true;
      }
    }

    typesByForm[form] = types;
    detailsByFormType[form] = detailsMap;
  }

  return { forms, typesByForm, detailsByFormType, isDetailMode };
}; */

// 회사 설정 빌더
const buildCompanyCfg = (docData: CompanyOptionsDoc | null, companyKey?: string) => {
  const isHomeplus = companyKey === "homeplus";

  const forms = _toStrArray(docData?.task_form);
  const formDefault = forms[0] ?? "";

  const rawTaskType =
    (docData as any)?.task_type ??
    (docData as any)?.task_type_form ??
    null;

  const parsed = parseTaskTypeSpec(rawTaskType, isHomeplus ? forms : []);

  const typeSelectMode: "native" | "custom" =
    docData?.type_select_mode === "custom" ? "custom" : "native";

  const getTypes = (form?: string): string[] => {
    const f = (form ?? "").trim();

    if (parsed.mode === "flat") return [...parsed.allTypes];
    if (parsed.mode === "type_detail") return [...parsed.allTypes];
    if (parsed.mode === "form_type") return [...(_toStrArray(parsed.typesByForm[f] ?? []))];
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

    if (parsed.mode === "type_detail") {
      return _toStrArray(parsed.detailsByType[t] ?? []);
    }

    if (parsed.mode === "form_type_detail") {
      return _toStrArray(parsed.spec?.[f]?.[t] ?? []);
    }

    return [];
  };

  const isDetailMode = parsed.mode === "type_detail" || parsed.mode === "form_type_detail";
  const detailRequiredFlag = !!docData?.task_type_detail_required;

  // 공수 조회 시 homeplus만 task_form을 사용, 그 외는 formKey를 "공통"으로 고정해서 계산만 통일
  const getWorkHour = (form?: string, type?: string, detail?: string) => {
  
  return getWorkHourFromCompanySpec(docData?.task_work_hour_form, form, type, detail);
};

  return {
    isHomeplus,
    forms,
    formDefault,
    typeSelectMode,
    getTypes,
    getDetails,
    isDetailMode,
    detailRequiredFlag,
    getWorkHour
  };
};

export default function RequestForm({ userName, editData, isDrawerOpen, onClose }: RequestFormProps) {
  const isEdit = !!editData;

  const [requestData, setRequestData] = useState<Partial<RequestFormState>>(defaultRequestData);
  const [extras, setExtras] = useState<Partial<RequestFormState>[]>([]);
  const [userCompany, setUserCompany] = useState<string>("");
  const [userUid, setUserUid] = useState<string>(""); // ★ 현재 로그인한 uid 보관

  // 회사 옵션 문서 상태
  const [companyDoc, setCompanyDoc] = useState<CompanyOptionsDoc | null>(null);

  // 필드별 에러 상태
  const [errorFields, setErrorFields] = useState<Record<string, boolean>>({});

  const navigate = useNavigate();
  const location = useLocation();

  // companyKey (users.company -> companies/{companyKey})
  const companyKey = useMemo(() => normalizeCompanyKey(userCompany), [userCompany]);

  // 회사 설정은 DB 문서 기반으로 생성
  const companyCfg = useMemo(() => buildCompanyCfg(companyDoc, companyKey), [companyDoc, companyKey]);

  const currentDetailOptions = useMemo(() => {
    const form = (requestData.task_form as string) || companyCfg.formDefault;
    const type = (requestData.task_type as string) || "";
    return companyCfg.getDetails(form, type);
  }, [requestData.task_form, requestData.task_type, companyCfg]);

  const isDetailRequiredFor = (form?: string, type?: string) => {
    if (companyCfg.detailRequiredFlag) return true;
    if (!companyCfg.isDetailMode) return false;
    const details = companyCfg.getDetails(form, type);
    return details.length > 0;
  };

  const goMyRequestList = () => {
    const sp = new URLSearchParams(location.search);
    sp.set("view", "myrequestlist");
    // /main으로 확실히 보내고 싶다면 pathname: "/main" 사용
    navigate({ pathname: "/main", search: sp.toString() }, { replace: true });
  };

  useEffect(() => {
    let alive = true;

    const run = async () => {
      if (!companyKey) {
        if (alive) setCompanyDoc(null);
        return;
      }

      const ref = doc(db, "companies", companyKey);
      const snap = await getDoc(ref);

      if (!alive) return;

      if (snap.exists()) {
        setCompanyDoc(snap.data() as CompanyOptionsDoc);
      } else {
        // 문서가 없으면 null (UI는 빈 옵션으로 안전 동작)
        setCompanyDoc(null);
      }
    };

    run();

    return () => {
      alive = false;
    };
  }, [companyKey]);

  // 수정모드 보존 렌더 목록
  const renderForms = useMemo(() => {
    const list = [...companyCfg.forms];
    if (isEdit && requestData.task_form && !list.includes(requestData.task_form as any)) {
      list.unshift(requestData.task_form as any);
    }
    return list as string[];
  }, [companyCfg.forms, isEdit, requestData.task_form]);

  const renderTypes = useMemo(() => {
    const form = (requestData.task_form as string) || companyCfg.formDefault;
    const list = companyCfg.getTypes(form);

    if (isEdit && requestData.task_type && !list.includes(requestData.task_type as any)) {
      list.unshift(requestData.task_type as any);
    }
    return list as string[];
  }, [companyCfg, isEdit, requestData.task_form, requestData.task_type]);

  // 입력 변경
  const requsetForm = (field: string, value: string | boolean) => {
    // task_form 변경 시, 해당 form에서 가능한 type로 자동 보정 + detail 초기화
    if (field === "task_form") {
      const newForm = String(value);
      const allowedTypes = companyCfg.getTypes(newForm);
      setRequestData((prev) => {
        const prevType = (prev.task_type as string) || "";
        const nextType = allowedTypes.includes(prevType) ? prevType : (allowedTypes[0] ?? "");
        return {
          ...prev,
          task_form: newForm,
          task_type: nextType,
          task_type_detail: "", // form 바뀌면 detail 초기화
        };
      });
      return;
    }

    // task_type 변경 시 detail 초기화
    if (field === "task_type") {
      setRequestData((prev) => ({
        ...prev,
        task_type: value as string,
        task_type_detail: "",
      }));
      return;
    }

    setRequestData((prev) => ({ ...prev, [field]: value }));
  };

  // 공통 유효성 검사 헬퍼
  const isEmpty = (v?: any) => (typeof v !== "string" || v.trim() === "");

  // 오늘 날짜(YYYY-MM-DD) 문자열 생성
  const getTodayStr = () => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  // dateStr 가 오늘 이전인지 여부 체크
  const isPastDate = (dateStr?: string) => {
    if (!dateStr) return false;
    const today = getTodayStr();
    // input[type="date"]는 YYYY-MM-DD 포맷이므로 문자열 비교로도 안전하게 사용 가능
    return dateStr < today;
  };

  type ValidationFieldKey =
  | "completion_date"
  | "open_date"
  | "task_form"
  | "task_type"
  | "task_type_detail"
  | "requirement";

  const validateDesignForm = (
    f: Partial<RequestFormState>
  ): { message: string; fieldId: ValidationFieldKey } | null => {
    if (isEmpty(f.completion_date))
      return { message: "완료 요청일을 선택하세요.", fieldId: "completion_date" };
    if (isPastDate(f.completion_date as string))
      return {
        message: "완료 요청일은 오늘 이후 날짜로만 선택 가능합니다.",
        fieldId: "completion_date",
      };
    if (isEmpty(f.open_date)) return { message: "오픈일을 선택하세요.", fieldId: "open_date" };
    if (isPastDate(f.open_date as string))
      return {
        message: "오픈일은 오늘 이후 날짜로만 선택 가능합니다.",
        fieldId: "open_date",
      };
    if (isEmpty(f.task_form)) return { message: "업무 부서를 선택하세요.", fieldId: "task_form" };
    if (isEmpty(f.task_type)) return { message: "업무 유형을 선택하세요.", fieldId: "task_type" };

    // ★ 변경: 메인/isDetailRequired가 아니라 "해당 폼의 form/type 기준"으로 필수 판단
    const needDetail = isDetailRequiredFor(f.task_form as string, f.task_type as string);
    if (needDetail && isEmpty(f.task_type_detail))
      return { message: "업무 유형 상세를 선택하세요.", fieldId: "task_type_detail" };

    if (isEmpty(f.requirement))
      return { message: "작업 항목을 입력하세요.", fieldId: "requirement" };
    return null;
  };

  // 에러 여부 인자 추가 + error 클래스 제어
  const focusById = (id: string) => {
    const el = document.getElementById(id) as HTMLElement | null;
    if (!el) return;
    el.focus();
  };

  // 에러 마킹/해제 헬퍼
  const markError = (id: string) => {
    setErrorFields({ [id]: true });
  };

  const clearError = (id: string) => {
    setErrorFields((prev) => {
      if (!prev[id]) return prev;
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  };

  // 드로어 닫힐 때 에러 전체 리셋
  useEffect(() => {
    if (!isDrawerOpen) {
      setErrorFields({});
    }
  }, [isDrawerOpen]);


  // 추가 폼 세트
  const addExtra = () => {
    const baseForm = (requestData.task_form as string) || companyCfg.formDefault;
    const allowedTypes = companyCfg.getTypes(baseForm);

    const prevType = (requestData.task_type as string) || "";
    const baseType = allowedTypes.includes(prevType) ? prevType : (allowedTypes[0] ?? "");

    setExtras((prev) => [
      ...prev,
      {
        ...defaultRequestData,
        // ★ 메인폼 값 복사
        completion_date: requestData.completion_date ?? "",
        open_date: requestData.open_date ?? "",
        merchandiser: requestData.merchandiser ?? "",
        task_form: baseForm,
        task_type: baseType as any,
        task_type_detail: requestData.task_type_detail ?? "",
      },
    ]);
  };
  const removeExtra = (idx: number) => setExtras(prev => prev.filter((_, i) => i !== idx));
  const updateExtra = (idx: number, field: keyof RequestFormState, value: any) =>
    setExtras((prev) => {
      const next = [...prev];

      // 추가 폼도 task_form 변경 시 type 보정 + detail 초기화
      if (field === "task_form") {
        const newForm = String(value);
        const allowedTypes = companyCfg.getTypes(newForm);
        const prevType = (next[idx].task_type as string) || "";
        const nextType = allowedTypes.includes(prevType) ? prevType : (allowedTypes[0] ?? "");
        next[idx] = {
          ...next[idx],
          task_form: newForm,
          task_type: nextType,
          task_type_detail: "",
        };
        return next;
      }

      // 추가 폼도 task_type 변경 시 detail 초기화
      if (field === "task_type") {
        next[idx] = { ...next[idx], task_type: value, task_type_detail: "" };
        return next;
      }

      next[idx] = { ...next[idx], [field]: value };
      return next;
    });

  const toTimestamp = (dateStr: string | undefined) =>
    dateStr ? Timestamp.fromDate(new Date(dateStr)) : null;

  // 요청자 마지막 등록값 preset 가져오기 (등록 모드에서만 사용)
  const fetchLastRequesterPreset = async (uid: string) => {
    const qy = query(
      collection(db, "design_request"),
      where("requester_uid", "==", uid),
      orderBy("created_date", "desc"),
      limit(1)
    );

    const snap = await getDocs(qy);
    if (snap.empty) return null;

    const d = snap.docs[0].data() as any;

    return {
      completion_date: d.completion_date?.toDate?.().toISOString().slice(0, 10) ?? "",
      open_date: d.open_date?.toDate?.().toISOString().slice(0, 10) ?? "",
      merchandiser: d.merchandiser ?? "",
      task_form: d.task_form ?? "",
    } as Partial<RequestFormState>;
  };

  // ─────────────────────────────────────────────────────────────
  // “수정 로그 댓글” 생성 유틸
  // - editData(기존) vs patch(저장될 값) 비교
  // - 바뀐 필드만 "- 라벨: old → new" 형태로 만든 뒤 댓글 body 생성
  // ─────────────────────────────────────────────────────────────
  const _toYMD = (v: any) => {
    if (!v) return "";
    if (typeof v === "string") return v.slice(0, 10);
    if (v?.toDate) {
      const d = v.toDate() as Date;
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${y}-${m}-${day}`;
    }
    if (v instanceof Date) {
      const y = v.getFullYear();
      const m = String(v.getMonth() + 1).padStart(2, "0");
      const day = String(v.getDate()).padStart(2, "0");
      return `${y}-${m}-${day}`;
    }
    return "";
  };

  const _asTrim = (v: any) => (typeof v === "string" ? v.trim() : (v ?? ""));

  // 목적격 조사(을/를) 자동 선택
  const _objJosa = (word: string) => {
    const w = (word ?? "").trim();
    if (!w) return "을";
    const ch = w.charCodeAt(w.length - 1);
    // 한글 음절 범위가 아니면 기본 "을"
    if (ch < 0xac00 || ch > 0xd7a3) return "을";
    const jong = (ch - 0xac00) % 28;
    return jong === 0 ? "를" : "을";
  };

  const buildEditLogBody = (prev: any, next: any) => {
    const fields: Array<{ key: string; label: string; type: "date" | "text" | "bool" }> = [
      { key: "completion_date", label: "완료 요청일", type: "date" },
      { key: "open_date", label: "오픈일", type: "date" },
      { key: "merchandiser", label: "담당 MD", type: "text" },
      { key: "task_form", label: "업무 부서", type: "text" },
      { key: "task_type", label: "업무 유형", type: "text" },
      { key: "task_type_detail", label: "업무 유형 상세", type: "text" },
      { key: "requirement", label: "작업 항목", type: "text" },
      { key: "url", label: "요청서 URL", type: "text" },
      { key: "emergency", label: "긴급 일정", type: "bool" },
    ];

    const diffs: Array<{ label: string; from: string; to: string }> = [];

    for (const f of fields) {
      const prevVal = prev?.[f.key];
      const nextVal = next?.[f.key];

      if (f.type === "date") {
        const a = _toYMD(prevVal);
        const b = _toYMD(nextVal);
        if ((a || "") !== (b || "")) diffs.push({ label: f.label, from: a || "-", to: b || "-" });
        continue;
      }

      if (f.type === "bool") {
        const a = !!prevVal;
        const b = !!nextVal;
        if (a !== b) {
          diffs.push({
            label: f.label,
            from: a ? "긴급" : "일반",
            to: b ? "긴급" : "일반",
          });
        }
        continue;
      }

      const a = _asTrim(prevVal);
      const b = _asTrim(nextVal);
      if ((a || "") !== (b || "")) diffs.push({ label: f.label, from: a || "-", to: b || "-" });
    }

    const actor = userName || "(익명)";

    if (diffs.length === 1) {
      const d = diffs[0];
      const josa = _objJosa(d.label);
      return `${actor}님이 ${d.label}${josa} '${d.from}'에서 '${d.to}'으로 수정했습니다.`;
    }

    return diffs
      .map((d) => {
        const josa = _objJosa(d.label);
        return `${actor}님이 ${d.label}${josa} '${d.from}'에서 '${d.to}'으로 수정했습니다.`;
      })
      .join("\n");
  };

  // ==== 월별 베이스/연속번호 유틸
  const getMonthSeqBase = async () => {
    const now = new Date();
    const year = now.getFullYear().toString().slice(2);
    const month = (now.getMonth() + 1).toString().padStart(2, "0");

    const prefix = `H${year}${month}`;

    const q = query(
      collection(db, "design_request"),
      where("design_request_id", ">=", `${prefix}0000`),
      where("design_request_id", "<", `${prefix}9999`)
    );

    const snapshot = await getDocs(q);

    let maxSeq = 0;
    snapshot.forEach((docSnap) => {
      const data = docSnap.data() as any;
      const id = String(data.design_request_id ?? "");
      if (!id.startsWith(prefix)) return;
      const tail = id.slice(prefix.length);
      const num = parseInt(tail, 10);
      if (!Number.isNaN(num) && num > maxSeq) maxSeq = num;
    });

    return { year, month, base: maxSeq };
  };

  const buildDocNumber = (y: string, m: string, seq: number) =>
    `H${y}${m}${seq.toString().padStart(4, "0")}`; // padStart(4, "0")

  // 회사별 공수 프리셋 조회
  const fetchWorkHourPreset = async (
    task_form?: string,
    task_type?: string,
    task_type_detail?: string
  ): Promise<{ base: number | null; times: number | null }> => {
    // companies 문서가 아직 로드 전이면 null
    if (!companyDoc) return { base: null, times: null };

    const { base, times } = companyCfg.getWorkHour(task_form, task_type, task_type_detail);
    return { base, times };
  };

  // textarea의 raw 문자열 -> string[] URL 리스트
  const parseUrls = (raw?: any): string[] => {
    if (raw == null) return [];
    if (Array.isArray(raw)) {
      return raw.map(String).map((s) => s.replace(/\r/g, "").trim()).filter(Boolean);
    }
    return String(raw)
      .replace(/\r/g, "")
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
  };

  // 등록/수정 submit
  const requestFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isEdit) {
      const err = validateDesignForm(requestData);
      if (err) {
        alert(err.message);
        markError(err.fieldId);
        focusById(err.fieldId);
        return;
      }
    }
    
    const uid = auth.currentUser?.uid || userUid || ""; // 문서 수정자 uid
    
    if (isEdit && editData?.id) {
      const patch: any = {
        completion_date: toTimestamp(requestData.completion_date),
        open_date: toTimestamp(requestData.open_date),
        merchandiser: requestData.merchandiser ?? "",
        task_form: requestData.task_form || companyCfg.formDefault,
        task_type: requestData.task_type ?? "",
        task_type_detail: requestData.task_type_detail ?? "",
        requirement: requestData.requirement,
        url: parseUrls(requestData.url),
        emergency: requestData.emergency,
        requester_edit_state: true,
        requester_edit_last_uid: uid || null,
        requester_edit_last_at: serverTimestamp(),
        [`requester_edit_read_by.${uid}`]: serverTimestamp(),
        [`requester_edit_read_by_client.${uid}`]: Date.now(),
        updated_date: serverTimestamp(),
      };

      // 공수 재계산 조건: form/type/detail 변경 감지
      const formChanged = (requestData.task_form || "") !== (editData.task_form || "");
      const typeChanged = (requestData.task_type || "") !== (editData.task_type || "");
      const detailChanged =
        (requestData.task_type_detail || "") !== ((editData as any).task_type_detail || "");

      if (formChanged || typeChanged || detailChanged) {
        const { base: baseHour, times } = await fetchWorkHourPreset(
          patch.task_form,
          patch.task_type,
          patch.task_type_detail
        );
        patch.out_work_hour = baseHour;
        patch.in_work_hour = baseHour != null && times != null ? Number((baseHour * times).toFixed(2)) : null;
        patch.work_hour_edit_state = false;
      }

      const logBody = buildEditLogBody(editData, patch);

      const docRef = doc(db, "design_request", editData.id);
      const batch = writeBatch(db);

      batch.update(docRef, patch);

      if (logBody) {
        const commentsCol = collection(docRef, "comments");
        const newCommentRef = doc(commentsCol);

        batch.set(newCommentRef, {
          author_name: userName || "(익명)",
          author_uid: uid || "",
          body: logBody,
          kind: "edit_log",
          createdAt: serverTimestamp(),
        });

        batch.update(docRef, {
          comments_count: increment(1),
          comments_last_date: serverTimestamp(),
          comments_last_author_uid: uid,
        });
      }

      await batch.commit();

      alert("요청이 수정되었습니다!");
      onClose();
      return;
    }

    // 등록 모드 — 상단 + 추가 폼 일괄 등록
    const forms = [requestData, ...extras];

    // 등록 모드 유효성 검사 (메인 + 추가폼)
    for (let i = 0; i < forms.length; i++) {
      const f = forms[i];
      const err = validateDesignForm(f); // ★ 변경
      if (err) {
        const prefix = i === 0 ? "메인 폼" : `추가 요청 ${i}`;
        alert(`${prefix} ${err.message}`);

        const fieldId = i === 0 ? err.fieldId : `${err.fieldId}_ex_${i - 1}`;
        markError(fieldId);
        focusById(fieldId);
        return;
      }
    }

    const { year, month, base } = await getMonthSeqBase();
    let seq = base;
    const today = new Date();

    for (const f of forms) {
      seq += 1;
      const design_request_id = buildDocNumber(year, month, seq);

      const formValue = (f.task_form as string) || companyCfg.formDefault;

      // task_type 기본값도 회사 DB 기반으로 안전 보정
      const allowedTypes = companyCfg.getTypes(formValue);
      const rawType = (f.task_type as string) || "";
      const typeValue = allowedTypes.includes(rawType) ? rawType : (allowedTypes[0] ?? rawType);

      const { base: baseHour, times } = await fetchWorkHourPreset(
        formValue,
        typeValue,
        f.task_type_detail as string
      );
      const computedIn = baseHour != null && times != null ? Number((baseHour * times).toFixed(2)) : null;

      await addDoc(collection(db, "design_request"), {
        design_request_id,
        request_date: toTimestamp(today.toISOString()),
        merchandiser: f.merchandiser ?? "",
        requester: userName,
        requester_uid: uid,
        company: userCompany,
        completion_date: toTimestamp(f.completion_date as any),
        open_date: toTimestamp(f.open_date as any),
        task_form: formValue,
        task_type: typeValue,
        task_type_detail: f.task_type_detail ?? "",
        requirement: f.requirement,
        url: parseUrls(f.url),
        status: "대기",
        assigned_designers: [],
        requester_review_status: "검수대기",
        manager_review_status: "",
        result_url: "",
        designer_start_date: null,
        designer_end_date: null,
        emergency: f.emergency,
        requester_edit_state: false,
        requester_edit_last_date: null,
        requester_edit_last_uid: null,
        requester_edit_read_by: {},
        requester_edit_read_by_client: {},
        designer_edit_state: false,
        requester_design_edit_state: false,
        comments_count: 0,
        comments_last_date: null,
        comments_last_author_uid: null,
        comment_read_by: {},
        comment_new_state: false,
        in_work_hour: computedIn,
        out_work_hour: baseHour,
        work_hour_edit_state: false,
        created_date: serverTimestamp(),
        updated_date: null,
        delete_date: null,
      });
    }

    alert(`${forms.length}건이 등록되었습니다!`);
    setExtras([]);
    setRequestData(defaultRequestData);
    goMyRequestList();
    onClose();
  };

  // 수정 모드 초기값
  useEffect(() => {
    if (isEdit && editData) {
      setRequestData({
        completion_date: editData.completion_date
          ? (editData.completion_date as any).toDate().toISOString().slice(0, 10)
          : "",
        open_date: editData.open_date ? (editData.open_date as any).toDate().toISOString().slice(0, 10) : "",
        merchandiser: editData.merchandiser ?? "",
        task_form: editData.task_form ?? "",
        task_type: editData.task_type ?? "",
        task_type_detail: (editData as any).task_type_detail ?? "",
        requirement: editData.requirement ?? "",
        url: parseUrls((editData as any).url).join("\n"),
        emergency: editData.emergency ?? false,
      });
    }
  }, [isEdit, editData]);

  // 드로어 열릴 때(등록 모드) 기본값 주입
  useEffect(() => {
    if (!isDrawerOpen || isEdit) return;

    let alive = true;

    const run = async () => {
      const uid = auth.currentUser?.uid || userUid || "";

      const base: Partial<RequestFormState> = {
        ...defaultRequestData,
        task_form: companyCfg.formDefault,
        task_type: "",
        task_type_detail: "",
        url: "",
      };

      // formDefault가 있고, 해당 form의 types 첫값을 type 기본으로 세팅
      const defaultTypes = companyCfg.getTypes(base.task_form as string);
      base.task_type = defaultTypes[0] ?? "";

      if (!uid) {
        if (alive) setRequestData(base);
        setExtras([]);
        return;
      }

      const preset = await fetchLastRequesterPreset(uid);

      const next: Partial<RequestFormState> = {
        ...base,
        completion_date: preset?.completion_date ?? base.completion_date,
        open_date: preset?.open_date ?? base.open_date,
        merchandiser: preset?.merchandiser ?? base.merchandiser,
        task_form: preset?.task_form ?? base.task_form,
      };

      // 회사 옵션에 없는 task_form이면 기본값으로 안전 보정
      if (companyCfg.forms.length && !companyCfg.forms.includes((next.task_form as string) || "")) {
        next.task_form = companyCfg.formDefault;
      }

      // task_form이 바뀌면 type도 해당 form에 맞춰 보정
      const allowed = companyCfg.getTypes(next.task_form as string);
      next.task_type = allowed[0] ?? "";

      if (alive) {
        setRequestData(next);
        setExtras([]);
      }
    };

    run();

    return () => {
      alive = false;
    };
  }, [isDrawerOpen, isEdit, companyCfg, userUid]);

  // 로그인 사용자 company
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        setUserCompany("");
        setUserUid("");
        setCompanyDoc(null);

        setRequestData(defaultRequestData);
        setExtras([]);
        setErrorFields({});

        return;
      }
      const snap = await getDoc(doc(db, "users", u.uid));
      setUserCompany((snap.data() as any)?.company ?? "");
      setUserUid(u.uid);
    });
    return () => unsub();
  }, []);

  // 회사 변경 시(등록 모드) 보정
  useEffect(() => {
    if (isEdit) return;

    setRequestData((prev) => {
      const next = { ...prev };

      // form 보정
      if (companyCfg.forms.length && !companyCfg.forms.includes((next.task_form as string) || "")) {
        next.task_form = companyCfg.formDefault;
      }

      // type 보정
      const form = (next.task_form as string) || companyCfg.formDefault;
      const allowedTypes = companyCfg.getTypes(form);
      const curType = (next.task_type as string) || "";
      if (allowedTypes.length && !allowedTypes.includes(curType)) {
        next.task_type = allowedTypes[0] ?? "";
        next.task_type_detail = "";
      }

      return next;
    });
  }, [companyCfg, isEdit]);

  return (
    <>
      <RequestTitleWrap>
        <RequestTitle>{isEdit ? "디자인 요청 수정" : "디자인 요청 등록"}</RequestTitle>
        <RequestExitButton type="button" onClick={onClose} />
      </RequestTitleWrap>
      <RequestFormContainer onSubmit={requestFormSubmit}>
        <RequestFormTableWrap>
          <RequestFormTable>
            <RequestFormTableCaption>디자인 요청 등록</RequestFormTableCaption>
            <colgroup><col style={{ width: '120px' }} /></colgroup>
            <tbody>
              <tr>
                <RequestFormTableTh>문서번호</RequestFormTableTh>
                <RequestFormTableTd>{isEdit ? editData?.design_request_id : ""}</RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="completion_date">완료 요청일</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <RequestFormDateInput type="date" id="completion_date" value={requestData.completion_date} $error={!!errorFields["completion_date"]} 
                    onChange={(e) => {
                      clearError("completion_date");
                      requsetForm("completion_date", e.target.value);
                    }}
                  />
                </RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="open_date">오픈일</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <RequestFormDateInput type="date" id="open_date" value={requestData.open_date}  $error={!!errorFields["open_date"]} 
                    onChange={(e) => { 
                      clearError("open_date");
                      requsetForm("open_date", e.target.value)
                    }} 
                  />
                </RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="merchandiser">담당 MD</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <RequestFormTextInput type="text" id="merchandiser" value={requestData.merchandiser || ""} placeholder="담당 MD 이름을 입력하세요." onChange={(e) => requsetForm("merchandiser", e.target.value)} />  
                </RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="task_form">업무 부서</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <RequestFormSelectBox
                    id="task_form"
                    $wide
                    value={requestData.task_form || companyCfg.formDefault}
                    $error={!!errorFields["task_form"]}
                    onChange={(e) => {
                      clearError("task_form");
                      requsetForm("task_form", e.target.value);
                    }}
                  >
                    {renderForms.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </RequestFormSelectBox>
                </RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="task_type">업무 유형</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  {/* ★ 변경: 회사 DB 기반 타입 셀렉트(옵션으로 native/custom 선택 가능) */}
                  {companyCfg.typeSelectMode === "custom" ? (
                    <SelectBox
                      value={requestData.task_type || (renderTypes[0] as string) || ""}
                      options={renderTypes as string[]}
                      onChange={(v) => requsetForm("task_type", v)}
                    />
                  ) : (
                    <RequestFormSelectBox
                      id="task_type"
                      $wide
                      value={requestData.task_type ?? ""}
                      $error={!!errorFields["task_type"]}
                      onChange={(e) => {
                        clearError("task_type");
                        requsetForm("task_type", e.target.value);
                      }}
                    >
                      {!isEdit && !requestData.task_type && (
                        <option value="">업무 유형을 선택해주세요</option>
                      )}
                      {renderTypes.map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                    </RequestFormSelectBox>
                  )}

                  {/* ★ 변경: detail 옵션이 있을 때만 상세 셀렉트 노출 */}
                  {!!requestData.task_type && currentDetailOptions.length > 0 && (
                    <RequestFormSelectBox
                      id="task_type_detail"
                      $wide
                      value={requestData.task_type_detail || ""}
                      $error={!!errorFields["task_type_detail"]}
                      onChange={(e) => {
                        clearError("task_type_detail");
                        requsetForm("task_type_detail", e.target.value);
                      }}
                    >
                      <option value="">상세 유형을 선택해주세요</option>
                      {currentDetailOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </RequestFormSelectBox>
                  )}
                </RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="requirement">작업 항목</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <RequestFormTextInput type="text" id="requirement" value={requestData.requirement} placeholder="작업 항목을 입력하세요." $error={!!errorFields["requirement"]} 
                    onChange={(e) => {
                      clearError("requirement");
                      requsetForm("requirement", e.target.value);
                    }}
                  />
                </RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="emergency">긴급 일정</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <EmergencyWrap>
                    <RequestFormChackBoxLabel htmlFor="emergency">
                      <RequestFormChackBoxInput type="checkbox" id="emergency" checked={requestData.emergency} onChange={(e) => requsetForm("emergency", e.target.checked)} />
                      <RequestFormChackBox />
                      <span>긴급 일정으로 설정</span>
                    </RequestFormChackBoxLabel>
                  </EmergencyWrap>
                </RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="url">요청서 URL</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <RequestFormTextArea id="url" rows={5} value={requestData.url} onChange={(e) => requsetForm("url", e.target.value)} placeholder="요청 기획안 URL을 입력하세요." />
                </RequestFormTableTd>
              </tr>
            </tbody>
          </RequestFormTable>

          {!isEdit && 
            extras.map((f, idx) => {
              const exForm = (f.task_form as string) || companyCfg.formDefault;
              const exTypes = companyCfg.getTypes(exForm);
              const exDetails = companyCfg.getDetails(exForm, f.task_type as string);

              return (
                <div key={idx} style={{ marginBottom: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "8px 0 4px" }}>
                    <strong>추가 요청 {idx + 1}</strong>
                    <button type="button" onClick={() => removeExtra(idx)}>삭제</button>
                  </div>

                  <RequestFormTable>
                    <RequestFormTableCaption>디자인 요청 추가 등록</RequestFormTableCaption>
                    <colgroup><col style={{ width: "120px" }} /></colgroup>
                    <tbody>
                      <tr><RequestFormTableTh>문서번호</RequestFormTableTh><RequestFormTableTd /></tr>
                      <tr>
                        <RequestFormTableTh><RequestFormItemLabel htmlFor={`completion_date_ex_${idx}`}>완료 요청일</RequestFormItemLabel></RequestFormTableTh>
                        <RequestFormTableTd>
                          <RequestFormDateInput id={`completion_date_ex_${idx}`} type="date" value={(f.completion_date as string) || ""} 
                            $error={
                              !!errorFields[
                                `completion_date_ex_${idx}`
                              ]
                            }
                            onChange={(e) => {
                              clearError(
                                `completion_date_ex_${idx}`
                              );
                              updateExtra(
                                idx,
                                "completion_date",
                                e.target.value
                              );
                            }} />
                        </RequestFormTableTd>
                      </tr>
                      <tr>
                        <RequestFormTableTh><RequestFormItemLabel htmlFor={`open_date_ex_${idx}`}>오픈일</RequestFormItemLabel></RequestFormTableTh>
                        <RequestFormTableTd>
                          <RequestFormDateInput id={`open_date_ex_${idx}`} type="date" value={(f.open_date as string) || ""}  
                            $error={
                              !!errorFields[`open_date_ex_${idx}`]
                            }
                            onChange={(e) => {
                              clearError(`open_date_ex_${idx}`);
                              updateExtra(
                                idx,
                                "open_date",
                                e.target.value
                              );
                            }} 
                          />
                        </RequestFormTableTd>
                      </tr>
                      <tr>
                        <RequestFormTableTh><RequestFormItemLabel htmlFor={`merchandiser_ex_${idx}`}>담당 MD</RequestFormItemLabel></RequestFormTableTh>
                        <RequestFormTableTd>
                          <RequestFormTextInput id={`merchandiser_ex_${idx}`} type="text" value={(f.merchandiser as string) || ""} onChange={(e) => updateExtra(idx, "merchandiser", e.target.value)} placeholder="담당 이름을 입력하세요." />
                        </RequestFormTableTd>
                      </tr>
                      <tr>
                        <RequestFormTableTh><RequestFormItemLabel htmlFor={`task_form_ex_${idx}`}>업무 부서</RequestFormItemLabel></RequestFormTableTh>
                        <RequestFormTableTd>
                          <RequestFormSelectBox
                            id={`task_form_ex_${idx}`}
                            $wide
                            value={f.task_form || companyCfg.formDefault}
                            $error={!!errorFields[`task_form_ex_${idx}`]}
                            onChange={(e) => {
                              clearError(`task_form_ex_${idx}`);
                              updateExtra(idx, "task_form", e.target.value);
                            }}
                          >
                            {companyCfg.forms.map((v) => (
                              <option key={v} value={v}>
                                {v}
                              </option>
                            ))}
                          </RequestFormSelectBox>
                        </RequestFormTableTd>
                      </tr>
                      <tr>
                        <RequestFormTableTh><RequestFormItemLabel htmlFor={`task_type_ex_${idx}`}>업무 유형</RequestFormItemLabel></RequestFormTableTh>
                        <RequestFormTableTd>
                          {companyCfg.typeSelectMode === "custom" ? (
                            <SelectBox
                              value={(f.task_type as string) || (exTypes[0] ?? "")} // ★ 변경
                              options={exTypes as string[]} // ★ 변경
                              onChange={(v) => updateExtra(idx, "task_type", v)}
                            />
                          ) : (
                            <RequestFormSelectBox
                              id={`task_type_ex_${idx}`}
                              $wide
                              value={(f.task_type as string) || ""}
                              $error={!!errorFields[`task_type_ex_${idx}`]}
                              onChange={(e) => {
                                clearError(`task_type_ex_${idx}`);
                                updateExtra(idx, "task_type", e.target.value);
                              }}
                            >
                              <option value="">업무 유형을 선택해주세요</option>
                              {exTypes.map((v) => ( // ★ 변경
                                <option key={v} value={v}>
                                  {v}
                                </option>
                              ))}
                            </RequestFormSelectBox>
                          )}

                          {Boolean(f.task_type) && exDetails.length > 0 && ( // ★ 변경
                            <RequestFormSelectBox
                              id={`task_type_detail_ex_${idx}`}
                              $wide
                              value={(f.task_type_detail as string) || ""}
                              $error={!!errorFields[`task_type_detail_ex_${idx}`]}
                              onChange={(e) => {
                                clearError(`task_type_detail_ex_${idx}`);
                                updateExtra(idx, "task_type_detail", e.target.value);
                              }}
                            >
                              <option value="">상세 유형을 선택해주세요</option>
                              {exDetails.map((opt: string) => ( // ★ 변경: opt 타입 지정(noImplicitAny 대응)
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </RequestFormSelectBox>
                          )}
                        </RequestFormTableTd>
                      </tr>
                      <tr>
                        <RequestFormTableTh><RequestFormItemLabel htmlFor={`requirement_ex_${idx}`}>작업 항목</RequestFormItemLabel></RequestFormTableTh>
                        <RequestFormTableTd>
                          <RequestFormTextInput id={`requirement_ex_${idx}`} type="text" value={f.requirement || ""} placeholder="작업 항목을 입력하세요." $error={!!errorFields[`requirement_ex_${idx}`]} 
                            onChange={(e) => {
                              clearError(`requirement_ex_${idx}`);
                              updateExtra(idx, "requirement", e.target.value);
                            }} 
                          />
                        </RequestFormTableTd>
                      </tr>
                      <tr>
                        <RequestFormTableTh><RequestFormItemLabel htmlFor={`emergency_ex_${idx}`}>긴급 일정</RequestFormItemLabel></RequestFormTableTh>
                        <RequestFormTableTd>
                          <EmergencyWrap>
                            <RequestFormChackBoxLabel htmlFor={`emergency_ex_${idx}`}>
                              <RequestFormChackBoxInput id={`emergency_ex_${idx}`} type="checkbox" checked={!!f.emergency} onChange={(e) => updateExtra(idx, "emergency", e.target.checked)} />
                              <RequestFormChackBox />
                              <span>긴급 일정으로 설정</span>
                            </RequestFormChackBoxLabel>
                          </EmergencyWrap>
                        </RequestFormTableTd>
                      </tr>
                      <tr>
                        <RequestFormTableTh><RequestFormItemLabel htmlFor={`url_ex_${idx}`}>요청서 URL</RequestFormItemLabel></RequestFormTableTh>
                        <RequestFormTableTd>
                          <RequestFormTextArea id={`url_ex_${idx}`} rows={5} value={f.url || ""} onChange={(e) => updateExtra(idx, "url", e.target.value)} placeholder="요청 기획안 URL을 입력하세요." />
                        </RequestFormTableTd>
                      </tr>
                    </tbody>
                  </RequestFormTable>
                </div>
              );
            })}
        </RequestFormTableWrap>
        <RequestSubmitButtonWrap>
          <RequestSubmitButton type="submit">{isEdit ? "수정 완료" : "등록하기"}</RequestSubmitButton>
          {!isEdit && <RequestAddSubmitButton type="button" onClick={addExtra}>추가 등록하기</RequestAddSubmitButton>}
        </RequestSubmitButtonWrap>
      </RequestFormContainer>
    </>
  )
}

const RequestFormContainer = styled.form`
  font-family: 'Pretendard';
`;

const RequestTitleWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'space-between')};
  margin-bottom: 24px;
`;

const RequestTitle = styled.h3`
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: -0.48px;
`;

const RequestExitButton = styled.button`
  width: 24px;
  height: 24px;
  background: url(${requestFormExitButton}) no-repeat center;
  background-size: contain;
`;

const RequestFormTable = styled.table`
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray02};
`;

const RequestFormTableWrap = styled.div`
  overflow: auto;
`;

const RequestFormTableCaption = styled.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

const RequestFormTableTh = styled.th`
  padding: 14px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-left: none;
  border-bottom: none;
  border-right: none;
  background-color: ${({ theme }) => theme.colors.gray04};
`;

const RequestFormTableTd = styled.td`
  padding: 10px 24px;
  border-right: none;
  border-bottom: none;
`;

const RequestFormItemLabel = styled.label`
  width: 100%;
  text-align: center;
  font-weight: 700;
`;

const RequestFormDateInput = styled.input<{ $error?: boolean }>`
  width: 168px;
  padding: 6px 12px;
  border: 1px solid
    ${({ theme, $error }) =>
      $error ? theme.colors.red : theme.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${({ theme, $error }) =>
      $error ? theme.colors.red : theme.colors.black};
  }
`;

const RequestFormTextInput = styled.input<{ $error?: boolean }>`
  width: 100%;
  padding: 8.5px 16px;
  border: 1px solid
    ${({ theme, $error }) =>
      $error ? theme.colors.red : theme.colors.gray02};
  border-radius: 4px;
  font-family: "Pretendard";
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${({ theme, $error }) =>
      $error ? theme.colors.red : theme.colors.black};
  }
`;

const RequestFormTextArea = styled.textarea<{ $error?: boolean }>`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid
    ${({ theme, $error }) =>
      $error ? theme.colors.red : theme.colors.gray02};
  border-radius: 4px;
  font-family: "Pretendard";
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${({ theme, $error }) =>
      $error ? theme.colors.red : theme.colors.black};
  }
`;

const EmergencyWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center')};
  gap: 5px;
`;

const RequestFormChackBoxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const RequestFormChackBoxInput = styled.input`
  display: none;

  &:checked + span {
    background-color: ${({ theme }) => theme.colors.red};
    background-image: url(${checkBoxChecked});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 12px;
  }
`;

const RequestFormChackBox = styled.span`
  width: 18px;
  height: 18px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 2px;
`;

const RequestFormSelectBox = styled.select<{ $wide?: boolean; $error?: boolean }>`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: ${({ $wide }) => ($wide ? "215px" : "168px")};
  height: 36px;
  padding: 0 32px 0 16px;
  border: 1px solid
    ${({ theme, $error }) =>
      $error ? theme.colors.red : theme.colors.gray02};   // ★ 변경
  border-radius: 4px;
  font-family: "Pretendard";
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.white01};
  background-image: url(${selectBoxArrow});
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;
  vertical-align: top;

  &:focus {
    outline: none;
    border-color: ${({ theme, $error }) =>
      $error ? theme.colors.red : theme.colors.black};   // ★ 변경
  }

  &:first-of-type {
    margin-right: 10px;
  }
`;

const RequestSubmitButtonWrap = styled.div`
  margin-top: 24px;
  text-align: center;
`;

const RequestSubmitButton = styled.button`
  margin-right: 12px;
  padding: 12.5px 32px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white01};
`;

const RequestAddSubmitButton = styled.button`
  padding: 10.5px 31.5px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white01};
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;