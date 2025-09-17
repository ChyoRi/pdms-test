import styled from "styled-components"
import { useState, useEffect, useMemo } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate, useSearchParams } from "react-router-dom";
import { saveAutoLoginCookie } from "../utils/authClient";

// ★ 회사 매핑
const COMPANY_MAP: Record<string, string> = {
  homeplus: "HomePlus",
  nsmall: "NSmall",
  pushcomz: "PushComz",
};

const ROLE_BY_PARAM: Record<string, number> = {
  homeplus: 1,
  nsmall: 1,
  pushcomz: 2,
};

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [lockCompany, setLockCompany] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const companyParam = useMemo(
    () => (searchParams.get("company") || "").toLowerCase(),
    [searchParams]
  );

  // ★ 변경: URL의 ?company= 값이 바뀔 때마다 항상 반영 (초기 1회 제한 제거)
  useEffect(() => {
    const mapped = COMPANY_MAP[companyParam];
    if (mapped) {
      setCompany(mapped);
      setLockCompany(true);
    } else {
      setCompany("");
      setLockCompany(false);
    }
  }, [companyParam]);

  const signUp = async () => {
    const nameTrim = name.trim();
    const companyTrim = company.trim();
    const emailTrim = email.trim();

    if (!nameTrim) { alert("이름을 입력해주세요."); return; }
    if (!companyTrim) { alert("회사명을 입력해주세요."); return; }
    if (!emailTrim) { alert("이메일을 입력해주세요."); return; }
    if (password !== passwordCheck) { alert("비밀번호가 일치하지 않습니다."); return; }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailTrim, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: nameTrim });

      // 역할 결정: 1) 파라미터 매핑 우선 2) 파라미터 없을 때 입력값이 Pushcomz면 2, 그 외 1
      const role =
        ROLE_BY_PARAM[companyParam] ??
        ((companyTrim || "").toLowerCase() === "pushcomz" ? 2 : 1);

      await setDoc(doc(db, "users", user.uid), {
        name: nameTrim,
        email: emailTrim,
        company: companyTrim,
        role,
        createdAt: serverTimestamp(),
      });

      // 회원가입은 기본적으로 자동로그인 쿠키 저장
      await saveAutoLoginCookie(emailTrim, password);

      alert("회원가입이 완료되었습니다!");
      navigate("/");
    } catch (error: any) {
      alert("회원가입 중 오류 발생: " + error.message);
    }
  };

  return (
    <Container>
      <SignUpFrame>
        <SignUpHeader>
          <Logo>PDMS</Logo>
          <SubTitle>Pushcomz Design Management System</SubTitle>
        </SignUpHeader>
        <LoginWrap>
          <Name_input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력해주세요."
          />

          {/* ★ 변경: readOnly로 잠금, onChange 제거, URL이 바뀌면 위 useEffect로 자동 갱신 */}
          <Company_input
            type="text"
            value={company}
            onChange={(e) => !lockCompany && setCompany(e.target.value)}
            readOnly={lockCompany}
            aria-readonly={lockCompany ? "true" : undefined}
            placeholder={lockCompany ? "" : "회사명을 입력해주세요."}
            title={lockCompany ? "캠페인 링크로 자동 설정되었습니다." : ""}
            $locked={lockCompany}   // ★ 스타일 분기용 prop
          />

          <Id_input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력해주세요."
          />
          <Pw_input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 6자이상 입력해주세요."
          />
          <PwCheck_input
            type="password"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            placeholder="비밀번호 확인을 입력해주세요."
          />
        </LoginWrap>
        <SignUpButton onClick={signUp}>등록하기</SignUpButton>
      </SignUpFrame>
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'center')};
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray01};
`;

const SignUpFrame = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'center')};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.colors.white01};
`;

const SignUpHeader = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'center')};
  flex-direction: column;
  margin-bottom: 50px;
`;

const Logo = styled.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.navy};
`;

const SubTitle = styled.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`;

const LoginWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'center')};
  flex-direction: column;
  gap: 10px;
`;

const BaseInput = styled.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  &:focus { outline: none; border-color: #c7d2fe; box-shadow: 0 0 0 3px rgba(59,130,246,0.15); }
`;

// ★ 공통 인풋
const Name_input = styled(BaseInput)``;
const Id_input = styled(BaseInput)``;
const Pw_input = styled(BaseInput)``;
const PwCheck_input = styled(BaseInput)``;

// ★ 잠금 표시 스타일 (읽기 전용)
const Company_input = styled(BaseInput)<{ $locked: boolean }>`
  background-color: ${({ $locked }) => ($locked ? "#f5f6f7" : "white")};
  color: ${({ $locked }) => ($locked ? "#555" : "#333")};
  cursor: ${({ $locked }) => ($locked ? "default" : "text")};

  ${({ $locked }) =>
    $locked &&
    `
    box-shadow: none;
  `}
`;

const SignUpButton = styled.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.white01};
`;
