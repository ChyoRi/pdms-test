import styled from "styled-components";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { logoutAll } from "../utils/authClient";

interface HeaderProps {
  onResetFilters?: () => void;
}

type CompanyDoc = {
  logo_url?: string;
  company_name?: string;
};

export default function Header({ onResetFilters }: HeaderProps) {
  const [userName, setUserName] = useState("");
  const [userCompany, setUserCompany] = useState("");
  const [userRole, setUserRole] = useState<number | null>(null); // ✅ role 상태
  const [companyLogoUrl, setCompanyLogoUrl] = useState("");
  const navigate = useNavigate();

   // users.company(표시명) -> companies 문서 id로 변환
  const normalizeCompanyKey = (v: any) => {
    return String(v ?? "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ""); // 공백 제거(혹시 있을 경우)
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUserName("");
        setUserRole(null);
        setUserCompany("");
        setCompanyLogoUrl("");
        return;
      }

      setUserName(user.displayName ?? "");

      // 1) users 문서 읽기
      const userSnap = await getDoc(doc(db, "users", user.uid));
      if (!userSnap.exists()) {
        setUserRole(null);
        setUserCompany("");
        setCompanyLogoUrl("");
        return;
      }

      const userData = userSnap.data() as any;

      const role = userData.role ?? null;
      const company = userData.company ?? ""; // 예: "HomePlus"
      setUserRole(role);
      setUserCompany(company);

      // companyKey 필드 안 쓰고 users.company로 companies 문서 찾기
      const companyKey = normalizeCompanyKey(company); // "HomePlus" -> "homeplus"
      if (!companyKey) {
        setCompanyLogoUrl("");
        return;
      }

      const companySnap = await getDoc(doc(db, "companies", companyKey));
      if (!companySnap.exists()) {
        setCompanyLogoUrl("");
        return;
      }

      const companyData = companySnap.data() as CompanyDoc;
      setCompanyLogoUrl(companyData.logo_url ?? "");
    });

    return () => unsubscribe();
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

  const hasLogo = !!companyLogoUrl;

  return (
    <HeaderElement>
      <LogoFrame $hasLogo={hasLogo}>
        {hasLogo && (
          <LogoWrap>
            <Logo src={companyLogoUrl} alt="company logo" />
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