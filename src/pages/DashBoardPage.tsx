import styled from "styled-components";
import Header from "../components/Header";
import Main from '../components/Main';
import Aside from '../components/Aside';
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { doc, getDoc, collection, query, where, onSnapshot } from "firebase/firestore";

interface RequestData {
  id: string;
  design_request_id: string;
  status: string;
}

export default function DashBoardPage() {
  const [userRole, setUserRole] = useState<number | null>(null);
  const [requests, setRequests] = useState<RequestData[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setUserRole(data.role);

          if (data.role === 1) {
            const q = query(collection(db, "design_request"), where("requester", "==", user.displayName));
            onSnapshot(q, (snapshot) => {
              const list: RequestData[] = snapshot.docs.map(doc => {
                const d = doc.data();
                return {
                  id: doc.id,
                  design_request_id: d.design_request_id || "",
                  status: d.status || "대기중"
                };
              });

              setRequests(list);
            });
          }
        }
      } else {
        setUserRole(null);
        setRequests([]);
      }
    });

    return () => unsubscribe();
  }, []);


  return(
    <Container>
      <Aside requests={requests} />
      <DashBoardFrame>
        <Header />
        <Main userRole={userRole} />
      </DashBoardFrame>
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
