import styled from "styled-components";
import homeplus from "../assets/homeplus-logo.svg";
import nsmall from "../assets/nsmall-logo.svg";
import { useEffect, useState, useMemo } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { logoutAll } from "../utils/authClient";

const COMPANY = { HOMEPLUS: "homeplus", NSMALL: "nsmall" } as const;
type CompanyKind = "homeplus" | "nsmall" | null;

interface HeaderProps {
  onResetFilters?: () => void;
}

export default function Header({ onResetFilters }: HeaderProps) {
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

  const logout = async () => {
    try {
      await logoutAll(auth);  // ★ 쿠키 제거 + Firebase signOut
      navigate("/");
    } catch (error: any) {
      alert("로그아웃 중 오류가 발생했습니다: " + error.message);
    }
  };

  const getRoleName = (role: number | null) => {
    switch (role) {
      case 1: return "요청자";
      case 2: return "디자이너";
      case 3: return "담당자";
      default: return "역할 없음";
    }
  };

  // 회사 종류
  const companyKind: CompanyKind = useMemo(() => {
    const k = String(userCompany ?? "").trim().replace(/\s+/g, "").toLowerCase();
    if (k === "homeplus") return COMPANY.HOMEPLUS;
    if (k === "nsmall" || k === "n-small") return COMPANY.NSMALL;
    return null; // pushcomz 포함 비노출
  }, [userCompany]);

  // 로고 소스
  const logoSrc = companyKind === "homeplus" ? homeplus
                 : companyKind === "nsmall" ? nsmall
                 : null;

  const hasLogo = !!logoSrc;

  return (
    <HeaderElement>
      <LogoFrame $hasLogo={hasLogo}>
        {hasLogo && (
          <LogoWrap>
            <Logo src={logoSrc!} alt="company logo" />
          </LogoWrap>
        )}
        <Nav userRole={userRole} onResetFilters={onResetFilters} />
      </LogoFrame>
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
  height: 64px;
  padding: 0 24px;
  font-family: 'Pretendard';
  background-color: ${({ theme }) => theme.colors.black};
`;

const LogoFrame = styled.div<{ $hasLogo: boolean }>`
  ${({ theme }) => theme.mixin.flex('center')};
  gap: ${({ $hasLogo }) => ($hasLogo ? "0 10px" : "0")};
`

const LogoWrap = styled.div`
  width: 120px;
`;

const Logo = styled.img`
  width: 100%;
  vertical-align: sub;
`;

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