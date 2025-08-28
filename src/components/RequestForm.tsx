import styled from "styled-components";
import { useState, useEffect, useMemo } from "react";
import { auth, db } from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, updateDoc, doc, getDoc, serverTimestamp, Timestamp, query, where, getDocs } from "firebase/firestore";
import requestFormExitButton from "../assets/requestformexit-button.svg";
import checkBoxChecked from "../assets/checkbox-checked.svg";
import selectBoxArrow from "../assets/selectbox-arrow.svg";

interface RequestFormProps {
  userName: string;
  editData?: RequestData | null;
  isDrawerOpen: boolean;
  onClose: () => void;
}

const defaultRequestData: Partial<RequestData> = {
  completion_dt: "",
  open_dt: "",
  merchandiser: "",
  task_form: "",
  task_type: "",
  task_type_detail: "",
  requirement: "",
  url: "",
  note: "",
  emergency: false
}

// ★ 변경: 회사별 옵션 정의
const HOMEPLUS_FORMS = ["GHS", "MHC", "MHC/GHS"] as readonly string[];
const HOMEPLUS_TYPES = [
  "프론트테마","별도기획전","일자별배너","핫새배너","큐레이션배너",
  "GNB-기획전(전문관)","GNB-주류이지픽업","GNB-택배배송관","페이/카드프로모션",
  "이벤트배너","상품상세","제휴","클럽","팝업","푸시","홈테마","즉시배송",
  "트레이딩","이벤트","기타"
] as readonly string[];

const NSMALL_FORMS = [
  "M영업기획팀","디지털마케팅팀","M상품1팀","M상품2팀","M상품3팀",
  "TV영업기획팀","TC영업기획팀","미디어컨텐츠팀","전략기획팀","MC서비스기획팀"
] as readonly string[];
const NSMALL_TYPES = [
  "프로모션","배너(프로모션,연관)","배너(마케팅)","배너(상품)","배너(etv/etcom)","배너(엔라방)","썸네일(그룹)"
] as readonly string[];
const NSMALL_DETAIL_MAP: Record<string, string[]> = {
  프로모션: [
    "마케팅",
    "L-FULL",
    "L-템플릿",
    "상품(식품/공산품)",
    "브랜드템플릿",
    "etv/etcom",
    "프로모션 수정",
  ],
  "배너(프로모션,연관)": ["템플릿", "N썸네일형", "공통", "기타"],
  "배너(마케팅)": ["템플릿", "N썸네일형", "공통", "광고성", "몰전단기간성"],
  "배너(상품)": ["템플릿", "공통"],
  "배너(etv/etcom)": ["템플릿", "공통"],
  "배너(엔라방)": ["템플릿", "공통", "마케팅"],
  "썸네일(그룹)": ["그룹코드_프로모", "1팀", "2팀", "3팀", "etv/etcom", "엔라방"],
};

const normalize = (s?: string) => (s ?? "").trim().toLowerCase();
const isNSMall = (company?: string) => normalize(company) === "nsmall";

const getCompanyConfig = (company?: string) => {
  if (isNSMall(company)) {
    // NSmall: 업무유형은 "선택해주세요" placeholder가 기본
    return {
      forms: [...NSMALL_FORMS],
      types: [...NSMALL_TYPES],
      formDefault: NSMALL_FORMS[0],
      typeDefault: "업무유형을 선택해주세요.", // ← select 기본값(placeholder)
    };
  }
  // 기본: HomePlus
  return {
    forms: [...HOMEPLUS_FORMS],
    types: [...HOMEPLUS_TYPES],
    formDefault: HOMEPLUS_FORMS[0],
    typeDefault: HOMEPLUS_TYPES[0],
  };
};

export default function RequestForm({ userName, editData, isDrawerOpen, onClose }: RequestFormProps) {
  const isEdit = editData?.requester_edit_state === true; // ✅ 수정모드 판별

  const [requestData, setRequestData] = useState<Partial<RequestData>>(defaultRequestData);

  // ==== 수정: 추가 폼 세트 상태 (등록 모드에서 같은 폼을 아래로 추가)
  const [extras, setExtras] = useState<Partial<RequestData>[]>([]);

  // 회사 상태
  const [userCompany, setUserCompany] = useState<string>("");

  // ★ 변경: 회사별 설정 메모
  const companyCfg = useMemo(() => getCompanyConfig(userCompany), [userCompany]);

  // ★ 추가: 현재 선택된 업무유형에 따른 NSmall 상세옵션 (메인 폼)
  const mainDetailOptions = useMemo(() => {
    if (!isNSMall(userCompany)) return [];
    return NSMALL_DETAIL_MAP[requestData.task_type as string] ?? [];
  }, [userCompany, requestData.task_type]);

  // ★ 변경: 수정모드에서 현재 값 보존(현 회사 옵션에 없어도 상단에 표시)
  const renderForms = useMemo(() => {
    const list = [...companyCfg.forms];
    if (isEdit && requestData.task_form && !list.includes(requestData.task_form as string)) {
      list.unshift(requestData.task_form as string);
    }
    return list;
  }, [companyCfg.forms, isEdit, requestData.task_form]);

  const renderTypes = useMemo(() => {
    const list = [...companyCfg.types];
    if (isEdit && requestData.task_type && !list.includes(requestData.task_type as string)) {
      list.unshift(requestData.task_type as string);
    }
    return list;
  }, [companyCfg.types, isEdit, requestData.task_type]);

  // ✅ 입력 변경 핸들러
  const requsetForm = (field: string, value: string | boolean) => {
    // ★ 변경: NSmall에서 업무유형이 바뀌면 상세유형 초기화
    if (field === "task_type" && isNSMall(userCompany)) {
      setRequestData((prev) => ({
        ...prev,
        task_type: value as string,
        task_type_detail: "",
      }));
      return;
    }
    setRequestData((prev) => ({ ...prev, [field]: value }));
  };

  // ==== 수정: 추가 폼 세트용 변경/추가/삭제 핸들러
  // 추가 폼 세트
  const addExtra = () => setExtras(prev => [
    ...prev,
    {
      ...defaultRequestData,
      task_form: companyCfg.formDefault,
      task_type: companyCfg.typeDefault,
      task_type_detail: ""
    }
  ]);
  const removeExtra = (idx: number) => setExtras(prev => prev.filter((_, i) => i !== idx));
  const updateExtra = (idx: number, field: keyof RequestData, value: any) =>
    setExtras((prev) => {
      const next = [...prev];
      // ★ 변경: NSmall에서 업무유형이 바뀌면 해당 extra의 상세유형 초기화
      if (field === "task_type" && isNSMall(userCompany)) {
        next[idx] = { ...next[idx], task_type: value, task_type_detail: "" };
      } else {
        next[idx] = { ...next[idx], [field]: value };
      }
      return next;
    });

  const toTimestamp = (dateStr: string | undefined) => {
    return dateStr ? Timestamp.fromDate(new Date(dateStr)) : null;
  };

  // ==== 수정: 다건 등록을 위한 월별 베이스/연속번호 유틸
  const getMonthSeqBase = async () => {
    const now = new Date();
    const year = now.getFullYear().toString().slice(2);
    const month = (now.getMonth() + 1).toString().padStart(2, "0");

    const q = query(
      collection(db, "design_request"),
      where("design_request_id", ">=", `H${year}${month}000`),
      where("design_request_id", "<",  `H${year}${month}999`)
    );
    const snapshot = await getDocs(q);
    return { year, month, base: snapshot.size };
  };
  const buildDocNumber = (y: string, m: string, seq: number) =>
    `H${y}${m}${seq.toString().padStart(3, "0")}`;

  // 업무 형태/유형으로 task_work_hour 문서의 기본 공수와 배율 둘 다 조회
  const fetchWorkHourPreset = async (
    task_form?: string,
    task_type?: string
  ): Promise<{ base: number | null; times: number | null }> => {
    if (!task_form || !task_type) return { base: null, times: null };
    const qy = query(
      collection(db, "task_work_hour"),
      where("task_form", "==", task_form),
      where("task_type", "==", task_type)
    );
    const snap = await getDocs(qy);
    if (snap.empty) return { base: null, times: null };
    const data = snap.docs[0].data() as any;
    const base = typeof data.task_work_hour === "number" ? data.task_work_hour : null;
    const times = typeof data.task_work_times === "number" ? data.task_work_times : null;
    return { base, times };
  };
  
  // ✅ 요청 등록
  const requestFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!requestData.requirement) {
      alert("요청 내용을 입력하세요.");
      return;
    }

    if (isEdit && editData?.id) {
      await updateDoc(doc(db, "design_request", editData.id), {
        completion_dt: toTimestamp(requestData.completion_dt),
        open_dt: toTimestamp(requestData.open_dt),
        merchandiser: requestData.merchandiser ?? "",
        task_form: requestData.task_form || companyCfg.formDefault,   // ★ 변경: 빈 값 방어
        task_type: requestData.task_type || companyCfg.typeDefault,   // ★ 변경
        task_type_detail: requestData.task_type_detail ?? "",
        requirement: requestData.requirement,
        url: requestData.url,
        note: requestData.note,
        emergency: requestData.emergency,
        requester_edit_state: false,
        updated_at: serverTimestamp()
      });

      alert("요청이 수정되었습니다!");
      onClose();
      return;
    }

    // ==== 수정: 등록 모드 — 상단 폼 + 추가 폼 세트를 한 번에 등록
    const forms = [requestData, ...extras];

    // 필수값 검증 (상단 폼부터 순서대로)
    const missing = forms.findIndex(f => !f.requirement);
    if (missing !== -1) {
      alert(`${missing + 1}번째 폼의 "작업 항목"을 입력하세요.`);
      return;
    }

    // 월별 베이스 개수 읽고, 상단 폼부터 연속 번호 부여
    const { year, month, base } = await getMonthSeqBase();
    let seq = base;

    const today = new Date();

    // 순서 보장을 위해 for..of + await (맨 위 폼이 더 이른 번호)
    for (const f of forms) {
      seq += 1;
      const design_request_id = buildDocNumber(year, month, seq);

      const formValue = (f.task_form as string) || companyCfg.formDefault;   // ★ 변경
      const typeValue = (f.task_type as string) || companyCfg.typeDefault;

      // 기본 공수/배율 조회 → out_work_hour & in_work_hour 계산
      const { base: baseHour, times } = await fetchWorkHourPreset(
        f.task_form as string,
        f.task_type as string
      );
      const computedIn = (baseHour != null && times != null)
        ? Number((baseHour * times).toFixed(2))
        : null;

      await addDoc(collection(db, "design_request"), {
        design_request_id,
        request_date: toTimestamp(today.toISOString()),
        merchandiser: f.merchandiser ?? "",
        requester: userName,
        company: userCompany,
        completion_dt: toTimestamp(f.completion_dt as any),
        open_dt: toTimestamp(f.open_dt as any),
        task_form: formValue,
        task_type: typeValue,
        task_type_detail: f.task_type_detail ?? "",
        requirement: f.requirement,
        url: f.url,
        note: f.note,
        status: "대기",
        assigned_designer: "미배정",
        requester_review_status: "검수대기",
        manager_review_status: "",
        result_url: "",
        designer_start_date: null,
        designer_end_date: null,
        emergency: f.emergency,
        requester_edit_state: false,
        designer_edit_state: false,
        in_work_hour: computedIn,
        out_work_hour: baseHour,
        work_hour_edit_state: false,
        created_at: serverTimestamp(),
        updated_at: null,
        delete_at: null,
      });
    }

    alert(`${forms.length}건이 등록되었습니다!`);
    // 초기화
    setExtras([]);                                  // ==== 수정: 추가 폼 비우기
    setRequestData(defaultRequestData);
    onClose();
  };

  // ✅ 수정 모드일 경우 editData로 초기값 설정
  useEffect(() => {
    if (isEdit && editData) {
      setRequestData({
        completion_dt: editData.completion_dt ? (editData.completion_dt as any).toDate().toISOString().slice(0, 10) : "",
        open_dt: editData.open_dt ? (editData.open_dt as any).toDate().toISOString().slice(0, 10) : "",
        merchandiser: editData.merchandiser ?? "",
        task_form: editData.task_form ?? "",     // ★ 변경
        task_type: editData.task_type ?? "", 
        task_type_detail: (editData as any).task_type_detail ?? "",
        requirement: editData.requirement ?? "",
        url: editData.url ?? "",
        note: editData.note ?? "",
        emergency: editData.emergency ?? false,
      });
    }
  }, [isEdit, editData]);

  // 드로어 열릴 때(등록 모드) 회사별 기본값 주입
  useEffect(() => {
    if (!isDrawerOpen || isEdit) return;
    setRequestData({
      ...defaultRequestData,
      task_form: companyCfg.formDefault, // ★ 변경
      task_type: companyCfg.typeDefault,  // ★ 변경
      task_type_detail: ""
    });
    setExtras([]);
  }, [isDrawerOpen, isEdit, companyCfg.formDefault, companyCfg.typeDefault]);

  // 로그인 사용자 company 읽기
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        setUserCompany("");
        return;
      }
      const snap = await getDoc(doc(db, "users", u.uid));
      setUserCompany((snap.data() as any)?.company ?? "");
    });
    return () => unsub();
  }, []);

  // 회사 변경 시(등록 모드) 선택값 보정
  useEffect(() => {
    if (isEdit) return;
    setRequestData(prev => {
      const next = { ...prev };
      if (!companyCfg.forms.includes((next.task_form as string) || "")) {
        next.task_form = companyCfg.formDefault;
      }
      if (!companyCfg.types.includes((next.task_type as string) || "")) {
        next.task_type = companyCfg.typeDefault;
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
          {!isEdit && 
            extras.map((f, idx) => {
              const detailOptions = isNSMall(userCompany)
                ? NSMALL_DETAIL_MAP[f.task_type as string] ?? []
                : [];
              const showDetail =
                isNSMall(userCompany) &&
                (f.task_type as string) &&
                f.task_type !== companyCfg.typeDefault;
              return (
                <div key={idx} style={{ marginBottom: 24 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      margin: "8px 0 4px",
                    }}
                  >
                    <strong>추가 요청 {idx + 1}</strong>
                    <button type="button" onClick={() => removeExtra(idx)}>
                      삭제
                    </button>
                  </div>

                  <RequestFormTable>
                    <RequestFormTableCaption>
                      디자인 요청 추가 등록
                    </RequestFormTableCaption>
                    <colgroup>
                      <col style={{ width: "120px" }} />
                    </colgroup>
                    <tbody>
                      <tr>
                        <RequestFormTableTh>문서번호</RequestFormTableTh>
                        <RequestFormTableTd></RequestFormTableTd>
                      </tr>
                      <tr>
                        <RequestFormTableTh>
                          <RequestFormItemLabel htmlFor={`merchandiser_ex_${idx}`}>
                            담당 MD
                          </RequestFormItemLabel>
                        </RequestFormTableTh>
                        <RequestFormTableTd>
                          <RequestFormTextInput
                            id={`merchandiser_ex_${idx}`}
                            type="text"
                            value={(f.merchandiser as string) || ""}
                            onChange={(e) =>
                              updateExtra(idx, "merchandiser", e.target.value)
                            }
                            placeholder="담당 MD 이름 또는 ID를 입력하세요."
                          />
                        </RequestFormTableTd>
                      </tr>
                      <tr>
                        <RequestFormTableTh>
                          <RequestFormItemLabel htmlFor={`completion_dt_ex_${idx}`}>
                            완료 요청일
                          </RequestFormItemLabel>
                        </RequestFormTableTh>
                        <RequestFormTableTd>
                          <RequestFormDateInput
                            id={`completion_dt_ex_${idx}`}
                            type="date"
                            value={(f.completion_dt as string) || ""}
                            onChange={(e) =>
                              updateExtra(idx, "completion_dt", e.target.value)
                            }
                          />
                        </RequestFormTableTd>
                      </tr>
                      <tr>
                        <RequestFormTableTh>
                          <RequestFormItemLabel htmlFor={`open_dt_ex_${idx}`}>
                            오픈일
                          </RequestFormItemLabel>
                        </RequestFormTableTh>
                        <RequestFormTableTd>
                          <RequestFormDateInput
                            id={`open_dt_ex_${idx}`}
                            type="date"
                            value={(f.open_dt as string) || ""}
                            onChange={(e) =>
                              updateExtra(idx, "open_dt", e.target.value)
                            }
                          />
                        </RequestFormTableTd>
                      </tr>
                      <tr>
                        <RequestFormTableTh>
                          <RequestFormItemLabel htmlFor={`task_form_ex_${idx}`}>
                            업무 부서
                          </RequestFormItemLabel>
                        </RequestFormTableTh>
                        <RequestFormTableTd>
                          <RequestFormSelectBox
                            id={`task_form_ex_${idx}`}
                            $wide={isNSMall(userCompany)}
                            value={f.task_form || companyCfg.formDefault}
                            onChange={(e) =>
                              updateExtra(idx, "task_form", e.target.value)
                            }
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
                        <RequestFormTableTh>
                          <RequestFormItemLabel htmlFor={`task_type_ex_${idx}`}>
                            업무 유형
                          </RequestFormItemLabel>
                        </RequestFormTableTh>
                        <RequestFormTableTd>
                          <RequestFormSelectBox
                            id={`task_type_ex_${idx}`}
                            $wide={isNSMall(userCompany)}
                            value={f.task_type || companyCfg.typeDefault}
                            onChange={(e) =>
                              updateExtra(idx, "task_type", e.target.value)
                            }
                          >
                            {isNSMall(userCompany) && (
                              <option value="">
                                업무 유형을 선택해주세요
                              </option>
                            )}
                            {companyCfg.types.map((v) => (
                              <option key={v as string} value={v as string}>
                                {v as string}
                              </option>
                            ))}
                          </RequestFormSelectBox>
                        </RequestFormTableTd>
                      </tr>

                      {/* ★ 추가: NSmall 등록 모드일 때 업무유형 상세 셀렉트 */}
                      {showDetail && (
                        <tr>
                          <RequestFormTableTh>
                            <RequestFormItemLabel htmlFor={`task_type_detail_ex_${idx}`}>
                              업무 유형 상세
                            </RequestFormItemLabel>
                          </RequestFormTableTh>
                          <RequestFormTableTd>
                            <RequestFormSelectBox
                              id={`task_type_detail_ex_${idx}`}
                              $wide={isNSMall(userCompany)}
                              value={(f.task_type_detail as string) || ""}
                              onChange={(e) =>
                                updateExtra(idx, "task_type_detail", e.target.value)
                              }
                            >
                              <option value="">상세 유형을 선택해주세요</option>
                              {detailOptions.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </RequestFormSelectBox>
                          </RequestFormTableTd>
                        </tr>
                      )}

                      <tr>
                        <RequestFormTableTh>
                          <RequestFormItemLabel htmlFor={`requirement_ex_${idx}`}>
                            작업 항목
                          </RequestFormItemLabel>
                        </RequestFormTableTh>
                        <RequestFormTableTd>
                          <RequestFormTextInput
                            id={`requirement_ex_${idx}`}
                            type="text"
                            value={f.requirement || ""}
                            onChange={(e) =>
                              updateExtra(idx, "requirement", e.target.value)
                            }
                            placeholder="작업 항목을 입력하세요."
                          />
                        </RequestFormTableTd>
                      </tr>
                      <tr>
                        <RequestFormTableTh>
                          <RequestFormItemLabel htmlFor={`emergency_ex_${idx}`}>
                            긴급 일정
                          </RequestFormItemLabel>
                        </RequestFormTableTh>
                        <RequestFormTableTd>
                          <EmergencyWrap>
                            <RequestFormChackBoxLabel htmlFor={`emergency_ex_${idx}`}>
                              <RequestFormChackBoxInput
                                id={`emergency_ex_${idx}`}
                                type="checkbox"
                                checked={!!f.emergency}
                                onChange={(e) =>
                                  updateExtra(idx, "emergency", e.target.checked)
                                }
                              />
                              <RequestFormChackBox />
                              <span>긴급 일정으로 설정</span>
                            </RequestFormChackBoxLabel>
                          </EmergencyWrap>
                        </RequestFormTableTd>
                      </tr>
                      <tr>
                        <RequestFormTableTh>
                          <RequestFormItemLabel htmlFor={`url_ex_${idx}`}>
                            요청서 URL
                          </RequestFormItemLabel>
                        </RequestFormTableTh>
                        <RequestFormTableTd>
                          <RequestFormTextArea
                            id={`url_ex_${idx}`}
                            value={f.url || ""}
                            onChange={(e) =>
                              updateExtra(idx, "url", e.target.value)
                            }
                            placeholder="요청 기획안 URL을 입력하세요."
                          />
                        </RequestFormTableTd>
                      </tr>
                      <tr>
                        <RequestFormTableTh>
                          <RequestFormItemLabel htmlFor={`note_ex_${idx}`}>
                            메모
                          </RequestFormItemLabel>
                        </RequestFormTableTh>
                        <RequestFormTableTd>
                          <RequestFormMemoTextArea
                            id={`note_ex_${idx}`}
                            rows={4}
                            value={f.note || ""}
                            onChange={(e) =>
                              updateExtra(idx, "note", e.target.value)
                            }
                            placeholder="메모를 입력하세요."
                          />
                        </RequestFormTableTd>
                      </tr>
                    </tbody>
                  </RequestFormTable>
                </div>
              );
            })}

          <RequestFormTable>
            <RequestFormTableCaption>디자인 요청 등록</RequestFormTableCaption>
            <colgroup>
              <col style={{ width: '120px' }} />
            </colgroup>
            <tbody>
              <tr>
                <RequestFormTableTh>문서번호</RequestFormTableTh>
                <RequestFormTableTd>{isEdit ? editData?.design_request_id : ""}</RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="completion_dt">완료 요청일</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <RequestFormDateInput
                    type="date"
                    id="completion_dt"
                    value={requestData.completion_dt}
                    onChange={(e) => requsetForm("completion_dt", e.target.value)}
                  />
                </RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="open_dt">오픈일</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <RequestFormDateInput
                    type="date"
                    id="open_dt"
                    value={requestData.open_dt}
                    onChange={(e) => requsetForm("open_dt", e.target.value)}
                  />
                </RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh>
                  <RequestFormItemLabel htmlFor="merchandiser">담당 MD</RequestFormItemLabel>
                </RequestFormTableTh>
                <RequestFormTableTd>
                  <RequestFormTextInput
                    type="text"
                    id="merchandiser"
                    value={requestData.merchandiser || ""}
                    onChange={(e) => requsetForm("merchandiser", e.target.value)}
                    placeholder="담당 MD 이름을 입력하세요."
                  />
                </RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="task_form">업무 부서</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <RequestFormSelectBox
                    id="task_form"
                    $wide={isNSMall(userCompany)}
                    value={requestData.task_form || companyCfg.formDefault} // ★ 변경
                    onChange={(e) => requsetForm("task_form", e.target.value)}
                  >
                    {renderForms.map(v => <option key={v} value={v}>{v}</option>)}
                  </RequestFormSelectBox>
                </RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="task_type">업무 유형</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <RequestFormSelectBox
                    id="task_type"
                    $wide={isNSMall(userCompany)}
                    value={requestData.task_type || companyCfg.typeDefault} // ★ 변경
                    onChange={(e) => requsetForm("task_type", e.target.value)}
                  >
                  {isNSMall(userCompany) && (
                    <option value="">업무 유형을 선택해주세요</option>
                  )}
                  {renderTypes.map((v) => (
                    <option key={v as string} value={v as string}>
                      {v as string}
                    </option>
                  ))}
                  </RequestFormSelectBox>
                </RequestFormTableTd>
              </tr>
              {isNSMall(userCompany) &&
                (isEdit ? (
                  requestData.task_type_detail ? (
                    <tr>
                      <RequestFormTableTh>업무 유형 상세</RequestFormTableTh>
                      <RequestFormTableTd>
                        <RequestFormSelectBox
                          $wide
                          value={requestData.task_type_detail}
                          onChange={() => {}}
                          disabled
                        >
                          <option value={requestData.task_type_detail as string}>
                            {requestData.task_type_detail as string}
                          </option>
                        </RequestFormSelectBox>
                      </RequestFormTableTd>
                    </tr>
                  ) : null
                ) : requestData.task_type &&
                  requestData.task_type !== companyCfg.typeDefault ? (
                  <tr>
                    <RequestFormTableTh>
                      <RequestFormItemLabel htmlFor="task_type_detail">
                        업무 유형 상세
                      </RequestFormItemLabel>
                    </RequestFormTableTh>
                    <RequestFormTableTd>
                      <RequestFormSelectBox
                        id="task_type_detail"
                        $wide
                        value={requestData.task_type_detail || ""}
                        onChange={(e) =>
                          requsetForm("task_type_detail", e.target.value)
                        }
                      >
                        <option value="">상세 유형을 선택해주세요</option>
                        {mainDetailOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </RequestFormSelectBox>
                    </RequestFormTableTd>
                  </tr>
                ) : null)}
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="requirement">작업 항목</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <RequestFormTextInput
                    type="text"
                    id="requirement"
                    value={requestData.requirement}
                    onChange={(e) => requsetForm("requirement", e.target.value)}
                    placeholder="작업 항목을 입력하세요."
                  />
                </RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="emergency">긴급 일정</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <EmergencyWrap>
                    <RequestFormChackBoxLabel htmlFor="emergency">
                      <RequestFormChackBoxInput
                        type="checkbox"
                        id="emergency"
                        checked={requestData.emergency}
                        onChange={(e) => requsetForm("emergency", e.target.checked)}
                      />
                      <RequestFormChackBox />
                      <span>긴급 일정으로 설정</span>
                    </RequestFormChackBoxLabel>
                  </EmergencyWrap>
                </RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="url">요청서 URL</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <RequestFormTextArea
                    id="url"
                    value={requestData.url}
                    onChange={(e) => requsetForm("url", e.target.value)}
                    placeholder="요청 기획안 URL을 입력하세요."
                  />
                </RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="note">메모</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <RequestFormMemoTextArea
                    id="note"
                    rows={2}
                    value={requestData.note}
                    onChange={(e) => requsetForm("note", e.target.value)}
                    placeholder="메모를 입력하세요."
                  />
                </RequestFormTableTd>
              </tr>
            </tbody>
          </RequestFormTable>
          {/* ==== 수정: 추가 폼 세트 렌더링 (등록 모드에서만 노출) */}
        </RequestFormTableWrap>
        <RequestSubmitButtonWrap>
          <RequestSubmitButton type="submit">{isEdit ? "수정 완료" : "등록하기"}</RequestSubmitButton>
          {!isEdit && (
            <RequestAddSubmitButton type="button" onClick={addExtra}>
              추가 등록하기
            </RequestAddSubmitButton>
          )}
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
`;

const RequestFormTableWrap = styled.div`
  max-height: 690px;
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
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-left: none;
  background-color: ${({ theme }) => theme.colors.gray04};
`;

const RequestFormTableTd = styled.td`
  padding: 12px 24px;
  border-right: none;
`

const RequestFormItemLabel = styled.label`
  width: 100%;
  text-align: center;
  font-weight: 700;
`;

const RequestFormDateInput = styled.input`
  width: 168px;
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`;

const RequestFormTextInput = styled.input`
  width: 100%;
  padding: 8.5px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`;

const RequestFormTextArea = styled.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`;

const RequestFormMemoTextArea = styled.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: #fffff1;
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
    background-image: url(${checkBoxChecked}); // 체크 이미지 경로
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

const RequestFormSelectBox = styled.select<{ $wide?: boolean }>`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: ${({ $wide }) => ($wide ? "215px" : "168px")};
  padding: 7.5px 32px 7.5px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.white01};
  background-image: url(${selectBoxArrow}); // ✅ 직접 제작한 화살표 아이콘 경로
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.black};
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