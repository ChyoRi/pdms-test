// ★ 전체 업데이트: company 인풋 수정 불가 + URL 파라미터 변경 시 자동 갱신

import styled from "styled-components"
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate, useSearchParams } from "react-router-dom";

// ★ 회사 매핑
const COMPANY_MAP: Record<string, string> = {
  homeplus: "HomePlus",
  nsmall: "NSmall",
};

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");           // ← 표시만, 사용자 편집 불가
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // ★ 변경: URL의 ?company= 값이 바뀔 때마다 항상 반영 (초기 1회 제한 제거)
  useEffect(() => {
    const raw = (searchParams.get("company") || "").toLowerCase();
    const mapped = COMPANY_MAP[raw];
    setCompany(mapped ?? ""); // 잘못된 값이면 비움
  }, [searchParams]);

  const signUp = async () => {
    const nameTrim = name.trim();
    const companyTrim = company.trim();
    const emailTrim = email.trim();

    if (!nameTrim) { alert("이름을 입력해주세요."); return; }
    if (!companyTrim) { alert("회사명을 입력해주세요."); return; }
    if (!emailTrim) { alert("이메일을 입력해주세요."); return; }
    if (password !== passwordCheck) { alert("비밀번호가 일치하지 않습니다."); return; }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        await updateProfile(user, { displayName: name });

        await setDoc(doc(db, "users", user.uid), {
          name: nameTrim,
          company: companyTrim, // URL로 잠근 값이 저장됨
          role: 1,
          createdAt: serverTimestamp(),
        });
      })
      .then(() => {
        alert("회원가입이 완료되었습니다!");
        navigate("/"); // HashRouter면 #/로 이동
      })
      .catch((error) => {
        alert("회원가입 중 오류 발생: " + error.message);
      });
  }

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
            readOnly                                 // ★ 추가: 편집 불가
            aria-readonly="true"                    // ★ 접근성
            placeholder="회사명이 자동으로 설정됩니다."
            title="이 필드는 캠페인 링크로 자동 설정됩니다."
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
            placeholder="비밀번호를 입력해주세요."
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
const Company_input = styled(BaseInput)`
  background-color: #f5f6f7;      /* 잠금 느낌 */
  color: #555;
  cursor: not-allowed;            /* 포인터로도 수정 불가 느낌 */
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
