import styled from "styled-components";
import Header from "../components/Header";
import Main from '../components/Main';
import Aside from '../components/Aside';
import RequestDrawer from "../components/RequestDrawer";
import RequestForm from "../components/RequestForm";
import RequestDetail from "../components/RequestDetail";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { doc, getDoc, collection, updateDoc, query, where, onSnapshot } from "firebase/firestore";
import AssignDesigner from "../components/AssignDesigner"
import type { AssignRow } from "../components/AssignDesigner";

// ✅ Drawer 콘텐츠 모드 타입
type DrawerMode = 'create' | 'edit' | 'detail' | null;

// 사이드바에서 쓰는 경량 타입(완료일 추가)
interface RequestLite {
  id: string;
  status?: RequestData["status"];
  completion_date?: any; // Firestore Timestamp | string | Date | undefined
}

// assigned_designer 객체 타입
type AssignedDesignerObj = {
  uid: string;
  name: string;
  out_work_hour: number;
  in_work_hour: number;
};

export default function MainPage() {
  const [userRole, setUserRole] = useState<number>(0);
  const [requests, setRequests] = useState<RequestLite[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  // ✅ 선택된 요청 데이터(수정/상세 공용)
  const [selectedData, setSelectedData] = useState<RequestData | undefined>(undefined);

  // ✅ Drawer 표시 모드 (기본 detail)
  const [drawerMode, setDrawerMode] = useState<DrawerMode>(null);

  // 사이드바에서 클릭한 상태값을 보관
  const [statusFromAside, setStatusFromAside] = useState<string | null>(null);

  // 필터 리셋 트리거
  const [filterResetKey, setFilterResetKey] = useState(0);

   // AssignDesigner 모달 상태
  const [assignOpen, setAssignOpen] = useState(false);
  const [assignTarget, setAssignTarget] = useState<RequestData | null>(null);

  // 자식(ManagerRequestItem)에서 호출할 “모달 열기”
  const openAssignDesigner = (target: RequestData) => {
    setAssignTarget(target);
    setAssignOpen(true);
  };

  // 모달 닫기
  const closeAssignDesigner = () => {
    setAssignOpen(false);
    setAssignTarget(null);
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUserRole(0);
        setUserName("");
        setRequests([]);
        return;
      }

      const displayName = user.displayName || "";
      setUserName(displayName);

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) return;

      const data = userDoc.data() as any;
      const role: number = data.role;
      setUserRole(role);

      // ★ 변경: role=2도 assigned_designer_uids 쿼리 제거(필드 자체를 저장 안 하기로 했으니까)
      //         대신 전체 구독 후, 클라에서 assigned_designers.name 기준으로 필터링
      let qRef: any;

      if (role === 1) {
        qRef = query(collection(db, "design_request"), where("requester", "==", displayName));
      } else if (role === 2) {
        qRef = query(
          collection(db, "design_request"),
          where("assigned_designer_uids", "array-contains", user.uid) // ★ 추가
        );
      } else {
        // role 3(매니저) 등
        qRef = collection(db, "design_request");
      }

      onSnapshot(qRef, (snapshot: any) => {
        const listAll: RequestLite[] = snapshot.docs.map((docSnap: any) => {
          const d = docSnap.data() as any;
          return {
            id: docSnap.id,
            status: (d.status as RequestData["status"]) ?? "대기중",
            completion_date:
              d.completion_date ?? d.complete_date ?? d.completion_dt ?? d.completed_at ?? null,
          };
        });

        if (role !== 2) {
          setRequests(listAll);
          return;
        }

        // ★ 추가: 디자이너는 assigned_designers.name(또는 하위호환 assigned_designer)로 클라 필터
        const filtered = snapshot.docs
          .filter((docSnap: any) => {
            const d = docSnap.data() as any;
            const legacySingle = String(d.assigned_designer ?? "").trim();

            const arr = Array.isArray(d.assigned_designers) ? d.assigned_designers : [];
            const namesFromArr =
              arr.length > 0 && typeof arr[0] === "string"
                ? arr.map((x: any) => String(x).trim())
                : arr.map((x: any) => String(x?.name ?? "").trim());

            return legacySingle === displayName || namesFromArr.includes(displayName);
          })
          .map((docSnap: any) => {
            const d = docSnap.data() as any;
            return {
              id: docSnap.id,
              status: (d.status as RequestData["status"]) ?? "대기중",
              completion_date:
                d.completion_date ?? d.complete_date ?? d.completion_dt ?? d.completed_at ?? null,
            } as RequestLite;
          });

        setRequests(filtered);
      });
    });

    return () => unsubscribe();
  }, []);

  const handleOpenCreate = () => {
    setSelectedData(undefined); // 이전 상세/수정 데이터 제거
    setDrawerMode('create');
    setIsDrawerOpen(true);
  };

  // ✅ Drawer 닫기
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedData(undefined);
  };

  // 사이드바 status 클릭 → Main에게 전달할 값 세팅
  const handleClickStatusFromAside = (status: string) => {
    setStatusFromAside(status);
  };

  // Aside 연동 상태 리셋용
  const clearStatusFromAside = () => {
    setStatusFromAside(null);
  };

  // 상단 Nav에서 "나의 요청 리스트" 눌렀을 때 전역 필터 초기화
  const handleResetAllFilters = () => {
    setStatusFromAside(null);              // Aside 연동 상태 초기화
    setFilterResetKey(prev => prev + 1);   // 필터 리셋 신호 증가
  };

  const getUserNameByUid = async (uid: string) => {
    const snap = await getDoc(doc(db, "users", uid));
    if (!snap.exists()) return "";
    const data = snap.data() as any;
    return String(data.displayName || data.name || "").trim();
  };

  // 소수 오차 방지
  const round3 = (n: number) => Math.round(n * 1000) / 1000;

  // AssignDesigner rows를 design_request 문서에 저장
  const saveAssignDesignerToFirestore = async (target: RequestData, rows: AssignRow[]) => {
    if (!target?.id) return;

    const cleaned = rows.filter(
      (r) => String(r.task_form).trim() && String(r.task_type).trim() && String(r.designer_uid).trim()
    );
    if (!cleaned.length) {
      alert("저장할 배정 행이 없습니다.");
      return;
    }

    // uid 목록
    const uids = Array.from(new Set(cleaned.map((r) => String(r.designer_uid).trim()).filter(Boolean)));

    // uid -> name 조회
    const names = await Promise.all(uids.map(getUserNameByUid));
    const uidToName: Record<string, string> = {};
    uids.forEach((uid, i) => (uidToName[uid] = String(names[i] ?? "").trim()));

    // ★ 변경: per 키를 uid로 (이게 제일 안전함. 동명이인 방지)
    const per: Record<string, AssignedDesignerObj> = {};

    for (const r of cleaned) {
      const uid = String(r.designer_uid).trim();
      const name = String(uidToName[uid] ?? "").trim();
      if (!uid || !name) continue;

      if (!per[uid]) per[uid] = { uid, name, out_work_hour: 0, in_work_hour: 0 };

      per[uid].out_work_hour += Number(r.out_work_hour ?? 0);
      per[uid].in_work_hour += Number(r.in_work_hour ?? 0);
    }

    const assigned_designers: AssignedDesignerObj[] = Object.values(per).map((d) => ({
      ...d,
      out_work_hour: round3(d.out_work_hour),
      in_work_hour: round3(d.in_work_hour),
    }));

    const totalOut = round3(assigned_designers.reduce((s, d) => s + Number(d.out_work_hour ?? 0), 0));
    const totalIn  = round3(assigned_designers.reduce((s, d) => s + Number(d.in_work_hour ?? 0), 0));

    await updateDoc(doc(db, "design_request", target.id), {
      out_work_hour: totalOut,
      in_work_hour: totalIn,

      assigned_designers,

      // ★ 복구: 디자이너 화면 쿼리 인덱스용 (UI에 안 보이게만 하면 됨)
      assigned_designer_uids: uids,
    });

    alert("디자이너 배정 저장 완료!");
  };

  return(
    <Container>
      <Aside requests={requests} userName={userName} role={userRole} onRequestButtonClick={handleOpenCreate} onClickStatus={handleClickStatusFromAside} />
      <DashBoardFrame>
        <Header onResetFilters={handleResetAllFilters} />
        {/* ✅ Main에 setEditData 전달 */}
        <Main 
          userRole={userRole} 
          setIsDrawerOpen={setIsDrawerOpen} 
          setEditData={(data: RequestData) => {   // 수정 버튼 → edit
            setSelectedData(data);
            setDrawerMode('edit');
          }}
          setDetailData={(data: RequestData) => { // 메모/작업항목 → detail
            setSelectedData(data);
            setDrawerMode('detail');
          }}
          statusFromAside={statusFromAside}
          clearStatusFromAside={clearStatusFromAside}
          filterResetKey={filterResetKey}
          onOpenAssignDesigner={openAssignDesigner}
        />
      </DashBoardFrame>
      {/* ✅ RequestForm에 editData 전달 */}
      <RequestDrawer isOpen={isDrawerOpen} onClose={closeDrawer} isDetail={drawerMode === 'detail'}>
        {drawerMode === 'create' && (
          <RequestForm userName={userName} isDrawerOpen={isDrawerOpen} onClose={closeDrawer} />
        )}

        {drawerMode === 'edit' && selectedData && (
          <RequestForm userName={userName} isDrawerOpen={isDrawerOpen} editData={selectedData} onClose={closeDrawer} />
        )}

        {drawerMode === 'detail' && selectedData && (
          <RequestDetail data={selectedData} onClose={closeDrawer} currentUserName={userName} currentUserRole={userRole} />
        )}
      </RequestDrawer>

      {/* AssignDesigner를 MainPage 최하단(최상단 오버레이)로 */}
      <AssignDesigner
        isOpen={assignOpen}
        onClose={closeAssignDesigner}
        target={assignTarget} // ★ 추가
        onAssign={async (rows) => {
          if (!assignTarget) return;
          await saveAssignDesignerToFirestore(assignTarget, rows); // ★ 변경: Firestore 저장 호출
        }}
      />
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex()};
  width: 100%;
  height: 100%;
`;

const DashBoardFrame = styled.div`
  flex: 1;
`;