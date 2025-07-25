import styled from "styled-components";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import Requester from "./Requester";
// import Designer from "./Designer";
import Manager from "./Manager";

export default function Main() {
  const [userName, setUserName] = useState<string>("");
  const [userRole, setUserRole] = useState<number | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserName(user.displayName || "");
        // Firestore에서 role 가져오기
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserRole(userDoc.data().role);
        }
      } else {
        setUserName("");
        setUserRole(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // ✅ 권한별 컴포넌트 렌더링
  const renderComponent = () => {
    if (userRole === 1) return <Requester />;
    if (userRole === 2) return <Designer />;
    if (userRole === 3) return <Manager />;
  }

  return <Container>{renderComponent()}</Container>;
}

const Container = styled.main`
  
`;