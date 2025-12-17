import styled from "styled-components";
import { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth, db } from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, updateDoc, doc, getDoc, serverTimestamp, Timestamp, query, where, getDocs, writeBatch, increment } from "firebase/firestore";
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

const defaultRequestData: Partial<RequestData> = {
  completion_date: "",
  open_date: "",
  merchandiser: "",
  task_form: "",
  task_type: "",
  task_type_detail: "",
  requirement: "",
  url: "",
  emergency: false
}

// 회사별 옵션 정의
const HOMEPLUS_FORMS = ["GHS", "MHC"] as readonly string[];
const HOMEPLUS_TYPES_GHS = [
  "핫새배너",
  "홈테마",
  "프론트테마",
  "페이/카드프로모션",
  "팝업",
  "트레이딩",
  "즉시배송",
  "제휴",
  "일자별배너",
  "이벤트배너",
  "별도기획전",
  "GNB-택배배송관",
  "GNB-주류이지픽업",
  "GNB-기획전",
  "이벤트",
  "기타",
] as const;
const HOMEPLUS_TYPES_MHC = [
  "프론트테마",
  "푸시",
  "트레이딩",
  "클럽",
  "이벤트배너",
  "이벤트",
  "기타",
] as const;
const HOMEPLUS_TYPES_BY_FORM: Record<string, readonly string[]> = {
  GHS: HOMEPLUS_TYPES_GHS,
  MHC: HOMEPLUS_TYPES_MHC,
};
const NSMALL_FORMS = [
  "M영업기획팀","디지털마케팅팀","M상품1팀","M상품2팀","M상품3팀",
  "TV영업기획팀","TC영업기획팀","미디어컨텐츠팀","전략기획팀", "마케팅본부직할", "MC서비스기획팀"
] as const;
const NSMALL_TYPES = [
  "프로모션","배너(프로모션,연관)","배너(마케팅)","배너(식품)","배너(리빙)","배너(패션)","배너(etv/etcom)","배너(엔라방)","썸네일(그룹)"
] as readonly string[];
const NSMALL_DETAIL_MAP: Record<string, string[]> = {
  프로모션: ["마케팅","마케팅-FULL","마케팅-템플릿","마케팅-모션적용","상품(식품/공산품)","상품(식품/공산품)-브랜드템플릿","etv/etcom","프로모션 수정"],
  "배너(프로모션,연관)": ["템플릿","템플릿-모션","템플릿-썸네일형","공통","기타-QT배너_BG", "기타-쿠폰팩"],
  "배너(마케팅)": ["템플릿","템플릿-썸네일형","공통","광고성-푸시배너","광고성-푸시팝업","광고성-카카오캐러셀","기타-QT배너_BG","기타-쿠폰팩","기타-홈전단지컨셉"],
  "배너(식품)": ["템플릿","공통"],
  "배너(리빙)": ["템플릿","공통"],
  "배너(패션)": ["템플릿","공통"],
  "배너(etv/etcom)": ["템플릿","공통"],
  "배너(엔라방)": ["템플릿","공통"],
  "썸네일(그룹)": ["마케팅","그룹코드_프로모션","1팀","2팀","3팀","etv/etcom","엔라방"],
};

const normalize = (s?: string) => (s ?? "").trim().toLowerCase();
const isNSMall = (company?: string) => normalize(company) === "nsmall";

const getHomeplusTypesByForm = (form?: string): string[] => {
  const key = (form ?? "").trim();
  const list = HOMEPLUS_TYPES_BY_FORM[key];
  if (list && list.length) return [...list] as string[];
  // 안전 폴백: 두 세트 합집합(옵션만, DB 스키마엔 영향 없음)
  return Array.from(new Set<string>([...HOMEPLUS_TYPES_GHS, ...HOMEPLUS_TYPES_MHC]));
};

// Homeplus 부서 기본 업무유형 = 해당 부서 리스트의 첫 항목
const getDefaultHomeplusType = (form?: string) => {
  const arr = getHomeplusTypesByForm(form);
  return arr[0] ?? "";
};

const getCompanyConfig = (company?: string) => {
  if (isNSMall(company)) {
    return {
      forms: [...NSMALL_FORMS],
      types: [...NSMALL_TYPES],
      formDefault: NSMALL_FORMS[0],
      typeDefault: "" as string, // placeholder 사용
    };
  }
  // Homeplus
  const formDefault = HOMEPLUS_FORMS[0];
  return {
    forms: [...HOMEPLUS_FORMS],
    // types는 렌더 시 부서 기반 필터링, 여기선 합집합만 보유
    types: Array.from(new Set<string>([...HOMEPLUS_TYPES_GHS, ...HOMEPLUS_TYPES_MHC])),
    formDefault,
    typeDefault: getDefaultHomeplusType(formDefault),
  };
};

export default function RequestForm({ userName, editData, isDrawerOpen, onClose }: RequestFormProps) {
  const isEdit = !!editData;

  const [requestData, setRequestData] = useState<Partial<RequestData>>(defaultRequestData);
  const [extras, setExtras] = useState<Partial<RequestData>[]>([]);
  const [userCompany, setUserCompany] = useState<string>("");
  const [userUid, setUserUid] = useState<string>(""); // ★ 현재 로그인한 uid 보관

  // 필드별 에러 상태
  const [errorFields, setErrorFields] = useState<Record<string, boolean>>({});

  const companyCfg = useMemo(() => getCompanyConfig(userCompany), [userCompany]);

  const navigate = useNavigate();
  const location = useLocation();

  const goMyRequestList = () => {
    const sp = new URLSearchParams(location.search);
    sp.set("view", "myrequestlist");
    // /main으로 확실히 보내고 싶다면 pathname: "/main" 사용
    navigate({ pathname: "/main", search: sp.toString() }, { replace: true });
  };

  // 상세옵션 안전 헬퍼
  const getNSmallDetails = (type?: string) => {
    const t = (type ?? "").trim();
    return NSMALL_DETAIL_MAP[t] ?? [];
  };

  const mainDetailOptions = useMemo(() => {
    if (!isNSMall(userCompany)) return [];
    return getNSmallDetails(requestData.task_type as string);
  }, [userCompany, requestData.task_type]);

  // 수정모드 보존 렌더 목록
  const renderForms = useMemo(() => {
    const list = [...companyCfg.forms];
    if (isEdit && requestData.task_form && !list.includes(requestData.task_form as any)) {
      list.unshift(requestData.task_form as any);
    }
    return list as string[];
  }, [companyCfg.forms, isEdit, requestData.task_form]);

  const renderTypes = useMemo(() => {
    if (isNSMall(userCompany)) {
      const list = [...companyCfg.types];
      if (isEdit && requestData.task_type && !list.includes(requestData.task_type as any)) {
        list.unshift(requestData.task_type as any);
      }
      return list as string[];
    }
    const form = (requestData.task_form as string) || companyCfg.formDefault;
    const list = getHomeplusTypesByForm(form);
    if (isEdit && requestData.task_type && !list.includes(requestData.task_type as string)) {
      list.unshift(requestData.task_type as string);
    }
    return list;
  }, [userCompany, companyCfg.types, companyCfg.formDefault, isEdit, requestData.task_form, requestData.task_type]);

  // 입력 변경
  const requsetForm = (field: string, value: string | boolean) => {
    // NSMall: type 변경 시 detail 초기화
    if (field === "task_type" && isNSMall(userCompany)) {
      setRequestData((prev) => ({
        ...prev,
        task_type: value as string,
        task_type_detail: "",
      }));
      return;
    }
    // Homeplus 부서 변경 시 유형 자동 보정
    if (field === "task_form" && !isNSMall(userCompany)) {
      const newForm = value as string;
      const allowed = getHomeplusTypesByForm(newForm);
      setRequestData((prev) => ({
        ...prev,
        task_form: newForm,
        task_type: allowed.includes((prev.task_type as string) || "") ? prev.task_type : allowed[0],
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
    f: Partial<RequestData>,
    ns: boolean
  ): { message: string; fieldId: ValidationFieldKey } | null => {
    if (isEmpty(f.completion_date))
      return { message: "완료 요청일을 선택하세요.", fieldId: "completion_date" };
    if (isPastDate(f.completion_date as string))
      return {
        message: "완료 요청일은 오늘 이후 날짜로만 선택 가능합니다.",
        fieldId: "completion_date",
      };
    if (isEmpty(f.open_date))
      return { message: "오픈일을 선택하세요.", fieldId: "open_date" };
    if (isPastDate(f.open_date as string))
      return {
        message: "오픈일은 오늘 이후 날짜로만 선택 가능합니다.",
        fieldId: "open_date",
      };
    if (isEmpty(f.task_form))
      return { message: "업무 부서를 선택하세요.", fieldId: "task_form" };
    if (isEmpty(f.task_type))
      return { message: "업무 유형을 선택하세요.", fieldId: "task_type" };
    if (ns && isEmpty(f.task_type_detail))
      return {
        message: "업무 유형 상세를 선택하세요.",
        fieldId: "task_type_detail",
      };
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
  const addExtra = () => setExtras(prev => [
    ...prev,
    {
      ...defaultRequestData,
      task_form: companyCfg.formDefault,
      task_type: companyCfg.typeDefault, // ★ 변경: NSMALL이면 ""
      task_type_detail: ""
    }
  ]);
  const removeExtra = (idx: number) => setExtras(prev => prev.filter((_, i) => i !== idx));
  const updateExtra = (idx: number, field: keyof RequestData, value: any) =>
    setExtras((prev) => {
      const next = [...prev];
      if (field === "task_type" && isNSMall(userCompany)) {
        next[idx] = { ...next[idx], task_type: value, task_type_detail: "" }; // ★ 변경
      } else {
        next[idx] = { ...next[idx], [field]: value };
      }
      return next;
    });

  const toTimestamp = (dateStr: string | undefined) => dateStr ? Timestamp.fromDate(new Date(dateStr)) : null;

  // ─────────────────────────────────────────────────────────────
  // ★ 추가: “수정 로그 댓글” 생성 유틸
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

  // ★ 추가: 목적격 조사(을/를) 자동 선택
  const _objJosa = (word: string) => {
    const w = (word ?? "").trim();
    if (!w) return "을";
    const ch = w.charCodeAt(w.length - 1);
    // 한글 음절 범위가 아니면 기본 "을"
    if (ch < 0xac00 || ch > 0xd7a3) return "을";
    const jong = (ch - 0xac00) % 28;
    return jong === 0 ? "를" : "을";
  };

  const buildEditLogBody = (prev: any, next: any) => { // ★ 추가
    // next는 patch(저장될 값)
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
        if ((a || "") !== (b || "")) {
          diffs.push({ label: f.label, from: a || "-", to: b || "-" });
        }
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
      if ((a || "") !== (b || "")) {
        diffs.push({ label: f.label, from: a || "-", to: b || "-" });
      }
    }

    const actor = userName || "(익명)";

    // 1개만 바뀌면: 딱 한 문장
    if (diffs.length === 1) {
      const d = diffs[0];
      const josa = _objJosa(d.label);
      return `${actor}님이 ${d.label}${josa} '${d.from}'에서 '${d.to}'으로 수정했습니다.`; // ★ 변경
    }

    // 여러 개면: 문장 여러 줄 (원하면 첫줄 헤더도 붙일 수 있음)
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
      // ★ 변경: 개수(snapshot.size)가 아니라, 같은 prefix를 가진 문서들을 전부 가져온 뒤
      // 그 안에서 "가장 큰 번호"를 찾기 위해 쿼리만 범위 지정
      where("design_request_id", ">=", `${prefix}0000`),
      where("design_request_id", "<",  `${prefix}9999`)
    );

    const snapshot = await getDocs(q);

    // ★ 변경: 최대 시퀀스 계산
    let maxSeq = 0;
    snapshot.forEach((docSnap) => {
      const data = docSnap.data() as any;
      const id = String(data.design_request_id ?? "");

      if (!id.startsWith(prefix)) return;

      // prefix 뒤 숫자 부분만 잘라서 파싱 (예: "H25120031" -> "31", "0031" 등 모두 숫자로)
      const tail = id.slice(prefix.length); 
      const num = parseInt(tail, 10);

      if (!Number.isNaN(num) && num > maxSeq) {
        maxSeq = num;
      }
    });

    // base를 "현재 존재하는 문서 중 가장 큰 번호"로 리턴
    return { year, month, base: maxSeq };  // ★ 변경
  };
  const buildDocNumber = (y: string, m: string, seq: number) =>
    `H${y}${m}${seq.toString().padStart(4, "0")}`; // padStart(4, "0")

  // Homeplus 폴백 쿼리 유틸
  const _queryHomeplusPreset = async (task_form: string, task_type: string) => {
    const qy = query(
      collection(db, "homeplus_task_work_hour"),
      where("homeplus_task_form", "==", task_form),
      where("homeplus_task_type", "==", task_type)
    );
    const snap = await getDocs(qy);
    return snap;
  };

  // 회사별 공수 프리셋 조회 로직으로 업데이트 (시그니처에 optional detail 추가)
  const fetchWorkHourPreset = async (
    task_form?: string,
    task_type?: string,
    task_type_detail?: string
  ): Promise<{ base: number | null; times: number | null }> => {
    // NSMall 분기: type + detail 매칭
    if (isNSMall(userCompany)) {
      if (!task_type || !task_type_detail) return { base: null, times: null };
      const qy = query(
        collection(db, "nsmall_task_work_hour"),
        where("nsmall_task_type", "==", task_type),
        where("nsmall_task_type_detail", "==", task_type_detail)
      );
      const snap = await getDocs(qy);
      if (snap.empty) return { base: null, times: null };
      const data = snap.docs[0].data() as any;
      const base = typeof data.nsmall_task_work_hour === "number" ? data.nsmall_task_work_hour : null;
      const times = typeof data.nsmall_task_work_times === "number" ? data.nsmall_task_work_times : null;
      return { base, times };
    }

    // Homeplus 분기: form + type 매칭 (+ 폴백)
    if (!task_form || !task_type) return { base: null, times: null };

    // 1차: 정확 매칭
    let snap = await _queryHomeplusPreset(task_form, task_type);
    // 3차 폴백(선택): GHS↔MHC 상호 폴백
    if (snap.empty && (task_form === "GHS" || task_form === "MHC")) {
      const alt = task_form === "GHS" ? "MHC" : "GHS";
      snap = await _queryHomeplusPreset(alt, task_type);
    }

    if (snap.empty) return { base: null, times: null };
    const data = snap.docs[0].data() as any;
    const base = typeof data.homeplus_task_work_hour === "number" ? data.homeplus_task_work_hour : null;
    const times = typeof data.homeplus_task_work_times === "number" ? data.homeplus_task_work_times : null;
    return { base, times };
  };

  // 등록/수정 submit
  const requestFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isEdit) {
      const err = validateDesignForm(requestData, isNSMall(userCompany));   // ★ 변경
      if (err) {
        alert(err.message);
        markError(err.fieldId);
        focusById(err.fieldId);
        return;
      }
    }
    
    const uid = auth.currentUser?.uid || userUid || ""; // 문서 수정자 uid
    
    if (isEdit && editData?.id) {
      // 부서/유형 변경 시 공수 재계산
      const formChanged = (requestData.task_form || "") !== (editData.task_form || "");
      const typeChanged = (requestData.task_type || "") !== (editData.task_type || "");
      const detailChanged = isNSMall(userCompany) && ( // ◎ 수정: NSMall 상세 변경도 감지
        (requestData.task_type_detail || "") !== ((editData as any).task_type_detail || "")
      );

      const patch: any = {
        completion_date: toTimestamp(requestData.completion_date),
        open_date: toTimestamp(requestData.open_date),
        merchandiser: requestData.merchandiser ?? "",
        task_form: requestData.task_form || companyCfg.formDefault,
        task_type: isNSMall(userCompany) ? (requestData.task_type ?? "") : (requestData.task_type || companyCfg.typeDefault),
        task_type_detail: requestData.task_type_detail ?? "",
        requirement: requestData.requirement,
        url: requestData.url,
        emergency: requestData.emergency,
        // ★ 변경: 저장이 완료되었으니 '문서 수정됨' 표시를 true로
       requester_edit_state: true, // ★ 문서 수정됨
        requester_edit_last_uid: uid || null, // ★ 추가
        requester_edit_last_at: serverTimestamp(), // ★ 추가
        [`requester_edit_read_by.${uid}`]:
          serverTimestamp(), // ★ 본인은 읽음 처리
        [`requester_edit_read_by_client.${uid}`]:
          Date.now(),
        updated_date: serverTimestamp(),
      };

      if (formChanged || typeChanged || detailChanged) {
        const { base: baseHour, times } = await fetchWorkHourPreset(
          patch.task_form,
          patch.task_type,
          patch.task_type_detail
        );
        patch.out_work_hour = baseHour;
        patch.in_work_hour = (baseHour != null && times != null) ? Number((baseHour * times).toFixed(2)) : null;
        patch.work_hour_edit_state = false;
      }


      // ★ 추가: 수정 로그 생성 (바뀐 값만)
      const logBody = buildEditLogBody(editData, patch);

      // ★ 변경: updateDoc 단독 호출 대신 writeBatch로 “문서 업데이트 + 로그 댓글”을 한 번에 처리
      const docRef = doc(db, "design_request", editData.id);
      const batch = writeBatch(db);

      batch.update(docRef, patch);

      if (logBody) {
        const commentsCol = collection(docRef, "comments");
        const newCommentRef = doc(commentsCol); // auto id

        batch.set(newCommentRef, {
          author_name: userName || "(익명)",   // ★ 추가
          author_uid: uid || "",              // ★ 추가
          body: logBody,                      // ★ 추가
          kind: "edit_log",                   // ★ 추가: UI에서 구분하고 싶으면 사용
          createdAt: serverTimestamp(),
        });

        batch.update(docRef, {
          comments_count: increment(1),           // ★ 추가
          comments_last_date: serverTimestamp(),  // ★ 추가
          comments_last_author_uid: uid,          // ★ 추가
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
      const err = validateDesignForm(f, isNSMall(userCompany));
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
      const typeValue = isNSMall(userCompany)
        ? ((f.task_type as string) || "")
        : ((f.task_type as string) || getDefaultHomeplusType(formValue)); // ★ 변경: 부서 기준 기본값

      const { base: baseHour, times } = await fetchWorkHourPreset(
        f.task_form as string,
        f.task_type as string,
        f.task_type_detail as string
      );
      const computedIn = (baseHour != null && times != null) ? Number((baseHour * times).toFixed(2)) : null;

      await addDoc(collection(db, "design_request"), {
        design_request_id,
        request_date: toTimestamp(today.toISOString()),
        merchandiser: f.merchandiser ?? "",
        requester: userName,
        company: userCompany,
        completion_date: toTimestamp(f.completion_date as any),
        open_date: toTimestamp(f.open_date as any),
        task_form: formValue,
        task_type: typeValue,
        task_type_detail: f.task_type_detail ?? "",
        requirement: f.requirement,
        url: f.url,
        status: "대기",
        assigned_designers: [],
        requester_review_status: "검수대기",
        manager_review_status: "",
        result_url: "",
        designer_start_date: null,
        designer_end_date: null,
        emergency: f.emergency,
        // ★ 문서수정 관련 필드 초기값
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
        completion_date: editData.completion_date ? (editData.completion_date as any).toDate().toISOString().slice(0, 10) : "",
        open_date: editData.open_date ? (editData.open_date as any).toDate().toISOString().slice(0, 10) : "",
        merchandiser: editData.merchandiser ?? "",
        task_form: editData.task_form ?? "",
        task_type: editData.task_type ?? "",
        task_type_detail: (editData as any).task_type_detail ?? "",
        requirement: editData.requirement ?? "",
        url: editData.url ?? "",
        emergency: editData.emergency ?? false,
      });
    }
  }, [isEdit, editData]);

  // 드로어 열릴 때(등록 모드) 기본값 주입
  useEffect(() => {
    if (!isDrawerOpen || isEdit) return;
    setRequestData({
      ...defaultRequestData,
      task_form: companyCfg.formDefault,
      task_type: companyCfg.typeDefault, // NSMALL이면 "", placeholder 사용
      task_type_detail: ""
    });
    setExtras([]);
  }, [isDrawerOpen, isEdit, companyCfg.formDefault, companyCfg.typeDefault]);

  // 로그인 사용자 company
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        setUserCompany("");
        setUserUid("");
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
    setRequestData(prev => {
      const next = { ...prev };
      if (!companyCfg.forms.includes((next.task_form as string) || "")) {
        next.task_form = companyCfg.formDefault;
      }
      if (!companyCfg.types.includes((next.task_type as string) || "")) {
        next.task_type = companyCfg.typeDefault; // NSMALL이면 ""
        next.task_type_detail = "";
      }
      return next;
    });
  }, [companyCfg.forms, companyCfg.types, companyCfg.formDefault, companyCfg.typeDefault, isEdit])

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
                  <RequestFormSelectBox id="task_form" $wide={isNSMall(userCompany)} value={requestData.task_form || companyCfg.formDefault} $error={!!errorFields["task_form"]} 
                    onChange={(e) => {
                      clearError("task_form");
                      requsetForm("task_form", e.target.value)
                    }}
                  >
                    {renderForms.map(v => <option key={v} value={v}>{v}</option>)}
                  </RequestFormSelectBox>
                </RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="task_type">업무 유형</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  {isNSMall(userCompany) ? (
                    <>
                      {/* 기존 NSmall 셀렉트 그대로 유지 */}
                      <RequestFormSelectBox
                        id="task_type"
                        $wide
                        value={isEdit ? (requestData.task_type || (renderTypes[0] as string || "")) : (requestData.task_type ?? "")}
                        $error={!!errorFields["task_type"]}
                        onChange={(e) => {
                          clearError("task_type");
                          requsetForm("task_type", e.target.value);
                        }}
                      >
                        {!isEdit && <option value="">업무 유형을 선택해주세요</option>}
                        {renderTypes.map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </RequestFormSelectBox>

                      {!!requestData.task_type && (
                        <RequestFormSelectBox
                          id="task_type_detail"
                          $wide
                          value={requestData.task_type_detail || ""}
                          $error={!!errorFields["task_type_detail"]}
                          onChange={(e) => {
                            clearError("task_type_detail");
                            requsetForm(
                              "task_type_detail",
                              e.target.value
                            );
                          }}
                        >
                          <option value="">상세 유형을 선택해주세요</option>
                          {mainDetailOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </RequestFormSelectBox>
                      )}
                    </>
                  ) : (
                    // ★ Homeplus만 커스텀 SelectDown 사용 (항상 아래로 펼침)
                    <SelectBox
                      value={
                        requestData.task_type ||
                        getDefaultHomeplusType(
                          (requestData.task_form as string) || companyCfg.formDefault
                        )
                      }
                      options={renderTypes as string[]}
                      onChange={(v) => requsetForm("task_type", v)}
                      // wide={false} // 필요 시 폭 조절 (기본 168px)
                    />
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
                  <RequestFormTextArea id="url" value={requestData.url} onChange={(e) => requsetForm("url", e.target.value)} placeholder="요청 기획안 URL을 입력하세요." />
                </RequestFormTableTd>
              </tr>
            </tbody>
          </RequestFormTable>
          {!isEdit && 
            extras.map((f, idx) => {
              // const detailOptions = isNSMall(userCompany) ? getNSmallDetails(f.task_type as string) : [];
              // const showDetail = isNSMall(userCompany) && !!f.task_type;
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
                          <RequestFormSelectBox id={`task_form_ex_${idx}`} $wide={isNSMall(userCompany)} value={f.task_form || companyCfg.formDefault} 
                            $error={
                              !!errorFields[`task_form_ex_${idx}`]
                            }
                            onChange={(e) => {
                              clearError(`task_form_ex_${idx}`); // ★ 추가
                              updateExtra(
                                idx,
                                "task_form",
                                e.target.value
                              );
                            }}
                          >
                            {companyCfg.forms.map((v) => <option key={v} value={v}>{v}</option>)}
                          </RequestFormSelectBox>
                        </RequestFormTableTd>
                      </tr>
                      <tr>
                        <RequestFormTableTh><RequestFormItemLabel htmlFor={`task_type_ex_${idx}`}>업무 유형</RequestFormItemLabel></RequestFormTableTh>
                        <RequestFormTableTd>
                          {isNSMall(userCompany) ? (
                            <>
                              {/* 추가 폼은 f와 updateExtra를 사용 */}
                              <RequestFormSelectBox
                                id={`task_type_ex_${idx}`} /* 고유 id */
                                $wide
                                value={(f.task_type as string) || ""}
                                $error={
                                  !!errorFields[
                                    `task_type_ex_${idx}`
                                  ]
                                }
                                onChange={(e) => {
                                  clearError(
                                    `task_type_ex_${idx}`
                                  ); // ★ 추가
                                  updateExtra(
                                    idx,
                                    "task_type",
                                    e.target.value
                                  );
                                }}
                              >
                                <option value="">업무 유형을 선택해주세요</option>
                                {(companyCfg.types as string[]).map((v) => (
                                  <option key={v} value={v}>{v}</option>
                                ))}
                              </RequestFormSelectBox>

                              {/* 기준 상세 옵션 계산 */}
                              {Boolean(f.task_type) && (
                                <RequestFormSelectBox
                                  id={`task_type_detail_ex_${idx}`} /* 고유 id */
                                  $wide
                                  value={(f.task_type_detail as string) || ""}
                                  $error={
                                    !!errorFields[
                                      `task_type_detail_ex_${idx}`
                                    ]
                                  }
                                  onChange={(e) => {
                                    clearError(
                                      `task_type_detail_ex_${idx}`
                                    );
                                    updateExtra(
                                      idx,
                                      "task_type_detail",
                                      e.target.value
                                    );
                                  }}
                                >
                                  <option value="">상세 유형을 선택해주세요</option>
                                  {getNSmallDetails(f.task_type as string).map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                  ))}
                                </RequestFormSelectBox>
                              )}
                            </>
                          ) : (
                            /* ★ Homeplus: f.task_form 기준으로 유형 목록 결정 + f와 updateExtra 사용 */
                            <SelectBox
                              value={
                                (f.task_type as string) ||
                                getDefaultHomeplusType(
                                  (f.task_form as string) || companyCfg.formDefault
                                )
                              }
                              options={
                                getHomeplusTypesByForm(
                                  (f.task_form as string) || companyCfg.formDefault
                                ) as string[]
                              }
                              onChange={(v) => updateExtra(idx, "task_type", v)}
                            />
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
                          <RequestFormTextArea id={`url_ex_${idx}`} value={f.url || ""} onChange={(e) => updateExtra(idx, "url", e.target.value)} placeholder="요청 기획안 URL을 입력하세요." />
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