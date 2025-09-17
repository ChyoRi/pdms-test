import styled from "styled-components";
import { useState, useEffect, useMemo } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { collection, onSnapshot, query, where, updateDoc, doc, orderBy, getDoc } from "firebase/firestore";
import RequesterRequestList from "./RequesterRequestList";
import MainTitle from "./MainTitle";
import RequestFilterSearchWrap from "./RequestFilterSearchWrap";
import DashBoard from "./DashBoard";
import { makeSearchIndex, matchesQuery } from "../utils/search.ts";

type ViewType = "dashboard" | "myrequestlist" | "allrequestlist" | "inworkhour";

interface RequesterProps {
  view: ViewType;
  setIsDrawerOpen: (value: boolean) => void;
  setEditData: (data: RequestData) => void;
  setDetailData: (data: RequestData) => void;
  userRole: number | null;
}

const DEFAULT_STATUS = "진행 상태 선택";

// 회사 문자열 변형 세트(공백 trim + 대/소문자 변형)
const companyVariants = (raw: string) => {
  const t = (raw ?? "").trim();
  if (!t) return [] as string[];
  const lower = t.toLowerCase();
  const upper = t.toUpperCase();
  const cap = t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
  // 중복 제거
  return Array.from(new Set([t, lower, upper, cap]));
};

export default function Requester({ view, userRole, setIsDrawerOpen, setEditData, setDetailData }: RequesterProps) {
  const [userName, setUserName] = useState("");
  const [userCompany, setUserCompany] = useState<string>("");
  const [requests, setRequests] = useState<RequestData[]>([]); // request DB 배열
  const [statusFilter, setStatusFilter] = useState<string>("진행 상태 선택");
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>({ start: null, end: null });

  // 🔍 검색: 입력값과 적용값 분리
  const [keywordInput, setKeywordInput] = useState<string>(""); // 인풋 바인딩(타이핑용)
  const [keyword, setKeyword] = useState<string>("");           // 검색 버튼 클릭 시에만 적용
  // 전체 리스트에서 "타인 요청 수정/취소 잠금" 토글
  const lockOthers = view === "allrequestlist";

  // ✅ 로그인 사용자 이름 가져오기
  // ✅ 로그인 사용자 이름 + company 가져오기
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return;
      if (user.displayName) setUserName(user.displayName);

      const uref = doc(db, "users", user.uid);
      const usnap = await getDoc(uref);
      if (usnap.exists()) {
        const data = usnap.data() as any;
        setUserCompany((data?.company ?? "").trim());
      } else {
        setUserCompany("");
      }
    });
    return () => unsubscribe();
  }, []);

  // ✅ 요청자가 보낸 요청만 가져오기
  // 요청 데이터: view에 따라 쿼리 스위칭
  // ✅ 목록 구독: view/userCompany/userName 변화에 반응
  useEffect(() => {
    // 항상 먼저 비워서 이전 구독 잔상 제거
    setRequests([]);

    // 대시보드/공수 화면은 이 컴포넌트에서 목록 없음
    if (view === "dashboard" || view === "inworkhour") {
      return;
    }

    // myrequestlist: 본인이 요청한 것
    if (view === "myrequestlist") {
      if (!userName) return;
      const qRef = query(
        collection(db, "design_request"),
        where("requester", "==", userName),
        orderBy("design_request_id", "desc")
      );
      const unsubscribe = onSnapshot(qRef, (snapshot) => {
        const data = snapshot.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<RequestData, "id">),
        }));
        setRequests(data);
      });
      return () => unsubscribe();
    }

    // allrequestlist: 같은 회사의 모든 요청
    if (view === "allrequestlist") {
      if (!userCompany) return;

      const variants = companyVariants(userCompany);
      const col = collection(db, "design_request");

      const seen = new Map<string, RequestData>(); // dedup
      const unsubs: Array<() => void> = [];

      const publish = () => {
        const arr = Array.from(seen.values()).sort((a: any, b: any) => {
          // design_request_id가 문자열일 가능성 고려
          const aa = String(a.design_request_id ?? "");
          const bb = String(b.design_request_id ?? "");
          return bb.localeCompare(aa, "en", { numeric: true });
        });
        setRequests(arr);
      };

      variants.forEach((v) => {
        const qRef = query(
          col,
          where("company", "==", v),
          orderBy("design_request_id", "desc")
        );
        const unsub = onSnapshot(qRef, (snap) => {
          snap.docs.forEach((d) => {
            seen.set(d.id, { id: d.id, ...(d.data() as Omit<RequestData, "id">) });
          });
          publish();
        });
        unsubs.push(unsub);
      });

      return () => unsubs.forEach((f) => f());
    }
  }, [view, userCompany, userName]);

  // 필터 적용 콜백 (하위에서 올라옴)
  const applyRange  = (r: { start: Date | null; end: Date | null }) => setDateRange(r); // ⬅️ 추가
  const applyStatus = (status: string) => setStatusFilter(status);

  // 🔍 실시간 검색 (버튼 개념 X)
  const applySearch = (kw: string) => setKeyword(kw);

  // ⭐ 요청자 화면용 status 매핑 함수
  const mapStatusForRequester = (status: string) => {
    if (status === "검수요청") return "진행중";
    return status; // 나머지는 그대로
  };

  // ▼ 헬퍼: 요청일 가져오기 (Timestamp | string | Date 모두 대응)
  const toMidnight = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const parseLoose = (v: any): Date | null => {
    if (!v) return null;
    // Firestore Timestamp
    if (typeof v === "object" && typeof v.toDate === "function") return toMidnight(v.toDate());
    if (v instanceof Date) return toMidnight(v);
    if (typeof v === "number") return toMidnight(new Date(v));
    if (typeof v === "string") {
      // 'YYYY-MM-DD' | 'YYYY.MM.DD' | 'M/D' 등 관대 파싱
      const s = v.replace(/\./g, "-").replace(/\//g, "-");
      const parts = s.split("-");
      if (parts.length === 3) {
        const [y, m, d] = parts.map(Number);
        const year = y > 31 ? y : new Date().getFullYear(); // '8-20-..' 형태 보호
        return new Date(year, m - 1, d);
      }
      if (parts.length === 2) {
        const [m, d] = parts.map(Number);
        const year = new Date().getFullYear();
        return new Date(year, m - 1, d);
      }
      const dt = new Date(v);
      return isNaN(+dt) ? null : toMidnight(dt);
    }
    return null;
  };

  // ① 준비 단계: 표시상태 + 검색 인덱스 세팅
  const prepared = useMemo(() => {
    return requests.map((r) => {
      const displayStatus = mapStatusForRequester(r.status);
      return makeSearchIndex({ ...r, displayStatus });
    });
  }, [requests]);

  // ⭐ 화면에 보여줄 리스트
  // ② 뷰 리스트(기간 + 상태 + 실시간 검색)
  type Action = "review" | "edit" | "cancel";

  const viewList = useMemo(() => {
    const s = dateRange.start ? toMidnight(dateRange.start) : null;
    const e = dateRange.end ? toMidnight(dateRange.end) : null;
    const q = keyword.trim(); // matchesQuery 내부에서 소문자/초성 처리는 끝남

    return prepared.filter((r: any) => {
      // 상태 필터(표시 상태 기준)
      if (statusFilter !== DEFAULT_STATUS && r.displayStatus !== statusFilter) return false;

      // 날짜 필터(inclusive)
      if (s && e) {
        const reqDate =
          parseLoose(r.request_date) ||
          parseLoose(r.requested_at) ||
          parseLoose(r.requestDate);
        if (!reqDate || reqDate < s || reqDate > e) return false;
      }

      // 키워드(초성/영문/숫자 즉시 매칭)
      if (!matchesQuery(r, q)) return false;

      return true;
    });
  }, [prepared, statusFilter, dateRange, keyword]);

  const canMutate = (id: string, action: Action) => {
    const row = requests.find(r => r.id === id);
    if (!row) return false;

    // allrequestlist에서 타인 문서는 모든 액션 금지
    if (view === "allrequestlist" && row.requester !== userName) return false;

    // 완료/취소 문서는 어떤 액션도 금지
    if (row.status === "완료" || row.status === "취소") return false;

    // 매니저 검수완료 이후 잠금: 단, 'review'(요청자 검수확정)만 예외 허용
    if (row.manager_review_status === "검수완료" && action !== "review") return false;

    return true;
  };

  // ✅ 검수완료 처리
  const reviewComplete = async (id: string) => {
    if (!canMutate(id, "review")) return;
    await updateDoc(doc(db, "design_request", id), {
      status: "완료",
      requester_review_status: "검수완료"
    });

    setRequests(prev =>
      prev.map(req =>
        req.id === id ? { ...req, status: "완료", requester_review_status: "검수완료" } : req
      )
    );

    alert("완료 처리되었습니다.");
  };

  const editRequest = async (id: string) => {
    if (!canMutate(id, "edit")) return;
    const docRef = doc(db, "design_request", id);
    await updateDoc(docRef, { requester_edit_state: true });

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = { id: docSnap.id, ...(docSnap.data() as Omit<RequestData, "id">) };
      setEditData(data);
      setIsDrawerOpen(true);
    }
  }

  // ✅ 메모/작업항목 클릭 → 디테일 모드
  const openDetail = (item: RequestData) => {
    setDetailData(item);     // 상위에서 drawerMode='detail' 세팅
    setIsDrawerOpen(true);
  };

  // ✅ 취소 처리
  const cancelRequest = async (id: string) => {
    if (!canMutate(id, "cancel")) return; // 🔒 권한 없음
    const row = requests.find(r => r.id === id);
    const ok = window.confirm(
      `문서번호 ${row?.design_request_id ?? ""} 요청을 취소하시겠습니까?` 
    );
    if (!ok) return; // 사용자가 "취소" 누르면 아무 것도 안 함

    try {
      await updateDoc(doc(db, "design_request", id), { status: "취소" });
      setRequests(prev =>
        prev.map(req => (req.id === id ? { ...req, status: "취소" } : req))
      );
    } catch (e) {
      console.error(e);
      alert("취소 처리 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <>
      <MainTitle userRole={userRole} />
      {view === "dashboard" && (
        <DashBoardWrap>
          <DashBoard capacityHoursPerMonth={704} />
        </DashBoardWrap>
      )}

      {view === "allrequestlist" && (
        <MainContentWrap>
          <RequestFilterSearchWrap
            roleNumber={1}
            onApplyStatus={applyStatus}
            onApplyRange={applyRange}
            onSearch={applySearch}
            keyword={keywordInput}
            onKeywordChange={setKeywordInput}
          />
          <RequesterRequestList
            data={viewList}
            disableActions={false}
            lockOthers={lockOthers}
            currentUserName={userName}
            onReviewComplete={reviewComplete}
            onCancel={cancelRequest}
            onEditClick={editRequest}
            onDetailClick={openDetail}
          />
        </MainContentWrap>
      )}

      {view === "myrequestlist" && (
        <MainContentWrap>
          <RequestFilterSearchWrap roleNumber={1} onApplyStatus={applyStatus} onApplyRange={applyRange} onSearch={applySearch} keyword={keywordInput} onKeywordChange={setKeywordInput}/>
          <RequesterRequestList data={viewList} disableActions={false} onReviewComplete={reviewComplete} onCancel={cancelRequest} onEditClick={editRequest} onDetailClick={openDetail} />
        </MainContentWrap>
      )}
    </>
  );
}

const MainContentWrap = styled.div`
  padding: 0 48px;
`;

const DashBoardWrap = styled.div`
  max-height: 766px;
  padding: 0 48px;
  overflow: auto;
`;