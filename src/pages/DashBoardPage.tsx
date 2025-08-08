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

// ✅ 타입 확장
interface RequestData {
  design_request_id?: string;
  id?: string;
  request_date?: string;
  requester?: string;
  completion_dt?: string;
  open_dt?: string;
  task_form?: string;
  task_type?: string;
  requirement?: string;
  url?: string;
  note?: string;
  status?: string;
  review_status?: string;
  assigned_designer?: string;
  result_url?: string;
  emergency?: boolean;
  requester_edit_state?: boolean;
  created_at?: any;
}


export default function DashBoardPage() {
  const [userRole, setUserRole] = useState<number | null>(null);
  const [requests, setRequests] = useState<RequestData[]>([]);
  const [userName, setUserName] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // ✅ editData 상태 추가
  const [editData, setEditData] = useState<RequestData | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserName(user.displayName || "");

        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          const role = data.role;
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
            const list: RequestData[] = snapshot.docs.map(doc => {
              const d = doc.data();
              return {
                status: d.status || "대기중"
              };
            });
            setRequests(list);
          });
        }
      } else {
        setUserRole(null);
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
      <RequestDrawer isOpen={isDrawerOpen} onClose={() => { setEditData(null); setIsDrawerOpen(false); }}>
        <RequestForm userName={userName} onClose={() => {setEditData(null); setIsDrawerOpen(false);}} editData={editData}/>
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
