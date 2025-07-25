import styled from "styled-components";
import logo from "../assets/logo.svg";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState<number | null>(null); // ✅ role 상태
  const navigate = useNavigate(); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (user.displayName) {
          setUserName(user.displayName);
        }

        // ✅ Firestore에서 role 가져오기
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserRole(userDoc.data().role);
        } else {
          setUserRole(null);
        }
      } else {
        setUserName("");
        setUserRole(null);
      }
    });

    return () => unsubscribe(); // 컴포넌트 언마운트 시 리스너 해제
  }, []);

  const logout = () => {
    signOut(auth)
    .then(() => {
      navigate("/"); // ✅ 로그아웃 후 로그인 페이지 이동
    })
    .catch((error) => {
      alert("로그아웃 중 오류가 발생했습니다: " + error.message);
    });
  }

  const getRoleName = (role: number | null) => {
    switch (role) {
      case 1: return "요청자";
      case 2: return "디자이너";
      case 3: return "담당자";
      default: return "역할 없음";
    }
  };

  return (
    <HeaderElement>
      <HomePlusLogo src={logo}></HomePlusLogo>
      <UtilWrap>
        <UserName>{userName}님 ({getRoleName(userRole)})환영합니다.</UserName>
        <LogoutButton onClick={logout}>로그아웃</LogoutButton>
        <Lole></Lole>
      </UtilWrap>
    </HeaderElement>
  )
}

const HeaderElement = styled.header`
  ${({ theme }) => theme.mixin.flex('center', 'space-between')};
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.colors.navy};
`;

const HomePlusLogo = styled.img`
  
`;

const UtilWrap = styled.div`

`;

const UserName = styled.span`
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  line-height: 20px;
`;

const LogoutButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  line-height: 20px;
`;

const Lole = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  line-height: 20px;
`;