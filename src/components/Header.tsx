import styled from "styled-components";
import logo from "../assets/logo.svg";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseconfig";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.displayName) {
        setUserName(user.displayName); // ✅ Firebase에 저장된 이름 가져오기
      } else {
        setUserName(""); // 로그아웃 상태 처리
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

  return (
    <HeaderElement>
      <HomePlusLogo src={logo}></HomePlusLogo>
      <UtilWrap>
        <UserName>{userName}님 환영합니다.</UserName>
        <LogoutButton onClick={logout}>로그아웃</LogoutButton>
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