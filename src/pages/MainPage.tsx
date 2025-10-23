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
import { doc, getDoc, collection, query, where, onSnapshot } from "firebase/firestore";

// ✅ Drawer 콘텐츠 모드 타입
type DrawerMode = 'create' | 'edit' | 'detail' | null;

export default function DashBoardPage() {
  const [userRole, setUserRole] = useState<number>(0);
  const [requests, setRequests] = useState<RequestLite[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  // ✅ 선택된 요청 데이터(수정/상세 공용)
  const [selectedData, setSelectedData] = useState<RequestData | undefined>(undefined);

  // ✅ Drawer 표시 모드 (기본 detail)
  const [drawerMode, setDrawerMode] = useState<DrawerMode>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserName(user.displayName || "");

        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          const role: number = data.role;
          const displayName = user.displayName;

          setUserRole(role);

          let q;

          if (role === 1) {
            // 요청자
            q = query(
              collection(db, "design_request"),
              where("requester", "==", displayName)
            );
          } else if (role === 2) {
            // 디자이너
            q = query(
              collection(db, "design_request"),
              where("assigned_designer", "==", displayName)
            );
          } else {
            // 매니저
            q = collection(db, "design_request");
          }

          onSnapshot(q, (snapshot) => {
            const list: RequestLite[] = snapshot.docs.map(docSnap => {
              const d = docSnap.data();
              return {
                id: docSnap.id,
                status: (d.status as RequestData["status"]) ?? "대기중", // any → 좁히기
              };
            });
            setRequests(list);
          });
        }
      } else {
        setUserRole(0);
        setUserName("");
        setRequests([]);
      }
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


  return(
    <Container>
      <Aside requests={requests} userName={userName} role={userRole} onRequestButtonClick={handleOpenCreate} />
      <DashBoardFrame>
        <Header />
        {/* ✅ Main에 setEditData 전달 */}
        <Main userRole={userRole} setIsDrawerOpen={setIsDrawerOpen} 
        setEditData={(data: RequestData) => {   // 수정 버튼 → edit
            setSelectedData(data);
            setDrawerMode('edit');
        }}
        setDetailData={(data: RequestData) => { // 메모/작업항목 → detail
            setSelectedData(data);
            setDrawerMode('detail');
          }}
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
