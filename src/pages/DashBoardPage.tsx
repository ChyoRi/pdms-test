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

interface RequestData {
  status: string;
}

export default function DashBoardPage() {
  const [userRole, setUserRole] = useState<number | null>(null);
  const [requests, setRequests] = useState<RequestData[]>([]);
  const [userName, setUserName] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        <Main userRole={userRole} />
      </DashBoardFrame>
      <RequestDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <RequestForm userName={userName}/>
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
