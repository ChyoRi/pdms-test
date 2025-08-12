import styled from "styled-components";
import Header from "../components/Header";
import Main from '../components/Main';
import Aside from '../components/Aside';
import RequestDrawer from "../components/RequestDrawer";
import RequestForm from "../components/RequestForm";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { doc, getDoc, collection, query, where, onSnapshot } from "firebase/firestore";

export default function DashBoardPage() {
  const [userRole, setUserRole] = useState<number>(0);
  const [requests, setRequests] = useState<RequestLite[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  // ✅ editData 상태 추가
  const [editData, setEditData] = useState<RequestData>();

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


  return(
    <Container>
      <Aside requests={requests} role={userRole} onRequestButtonClick={() => setIsDrawerOpen(true)} />
      <DashBoardFrame>
        <Header />
        {/* ✅ Main에 setEditData 전달 */}
        <Main userRole={userRole} setIsDrawerOpen={setIsDrawerOpen} setEditData={setEditData} />
      </DashBoardFrame>
      {/* ✅ RequestForm에 editData 전달 */}
      <RequestDrawer isOpen={isDrawerOpen} onClose={() => { setEditData(undefined); setIsDrawerOpen(false); }}>
        <RequestForm userName={userName} isDrawerOpen={isDrawerOpen} onClose={() => {setEditData(undefined); setIsDrawerOpen(false);}} editData={editData}/>
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
