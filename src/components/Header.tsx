import styled from "styled-components";
import logo from "../assets/logo.svg";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

export default function Header() {
  const [userName, setUserName] = useState("");
  const [userCompany, setUserCompany] = useState("");
  const [userRole, setUserRole] = useState<number | null>(null); // ✅ role 상태
  const navigate = useNavigate(); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (user.displayName) {
          setUserName(user.displayName);
        }

        // ✅ Firestore에서 role 가져오기
        const snap = await getDoc(doc(db, "users", user.uid));
        if (snap.exists()) {
          const data = snap.data() as any;
          setUserRole(data.role ?? null);
          setUserCompany(data.company ?? "");  
        } else {
          setUserRole(null);
          setUserCompany("");
        }
      } else {
        setUserName("");
        setUserRole(null);
        setUserCompany("");
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
      <LogoWrap>
        <HomePlusLogo src={logo}></HomePlusLogo>
        <Nav />
      </LogoWrap>
      <UtilWrap>
        <UserNameWrap><UserName>{userName}</UserName>님({getRoleName(userRole)}) {userCompany}환영합니다.</UserNameWrap>
        <LogoutButton onClick={logout}>로그아웃</LogoutButton>
        <Lole></Lole>
      </UtilWrap>
    </HeaderElement>
  )
}

const HeaderElement = styled.header`
  ${({ theme }) => theme.mixin.flex('center', 'space-between')};
  padding: 12px 48px;
  font-family: 'Pretendard';
  background-color: ${({ theme }) => theme.colors.black};
`;

const LogoWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center')};
  gap: 0 10px;
`

const HomePlusLogo = styled.img``;

const UtilWrap = styled.div``;

const UserNameWrap = styled.span`
  margin-right: 24px;
  color: ${({ theme }) => theme.colors.white01};
  font-size: 16px;
`;

const UserName = styled.span`
  font-weight: 700;
`;

const LogoutButton = styled.button`
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.white01};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white01};
  font-size: 16px;
`;

const Lole = styled.span`
  color: ${({ theme }) => theme.colors.white01};
  font-size: 16px;
`;