import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { auth } from "../firebaseconfig";
import { loginWithRemember } from "../utils/authClient";
import { FirebaseError } from "firebase/app";

interface LoginPageProps {
  onLoginSuccess: () => void; // ✅ props 타입 정의
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function mapLoginError(err: unknown): string {
  const unified = "이메일 또는 비밀번호가 올바르지 않습니다."; // 단일 문구
  if (!(err instanceof FirebaseError)) return unified;

  if (err.code === "auth/invalid-email") {
    return "이메일 형식이 올바르지 않습니다.";
  }

  return unified;
}



export default function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const navigate = useNavigate();

  const moveSignUp = () => navigate('/signup');
  const moveFindPassword = () => navigate('/find-password');

  const login = async () => {
    // ★ 변경: 정규화 제거, 입력값 그대로 사용
    const emailInput = email;

    // 입력 검증(형식까지만 세분화)
    if (!emailInput) { alert("이메일을 입력해주세요."); return; }
    if (!EMAIL_RE.test(emailInput)) { alert("이메일 형식이 올바르지 않습니다. 예) name@example.com"); return; }
    if (!password) { alert("비밀번호를 입력해주세요."); return; }

    try {
      await loginWithRemember(auth, emailInput, password, remember);
      onLoginSuccess();
      navigate('/main');
    } catch (err) {
      alert(mapLoginError(err));
    }
  };

  return (
    <Container>
      <LoginFrame>
        <LoginHeader>
          <Logo>PDMS</Logo>
          <SubTitle>Pushcomz Design Management System</SubTitle>
        </LoginHeader>
        <LoginWrap>
          <Id_input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일을 입력해주세요." />
          <Pw_input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호를 입력해주세요." />
          <LoginInfo>
            <StayLoginLabel>
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
              <span>새로고침시 로그인 유지</span>
            </StayLoginLabel>
            <FindPasswordButton type="button" onClick={moveFindPassword}>비밀번호 찾기</FindPasswordButton>
          </LoginInfo>
        </LoginWrap>
        <LoginButton onClick={login}>로그인</LoginButton>
        <SignUpWrap>
          <SignUpWrapText>계정이 없습니까?</SignUpWrapText><SignUp onClick={moveSignUp}>등록하기</SignUp>
        </SignUpWrap>
      </LoginFrame>
      <CopyLight>© Pushcomz Corp.</CopyLight>
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'center')};
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray01};
`;

const LoginFrame = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'center')};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.colors.white01};
`;

const LoginHeader = styled.div`
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
`;

const Id_input = styled.input`
  width: 460px;
  margin-bottom: 10px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`;

const Pw_input = styled.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`;

const LoginInfo = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'space-between')};
  width: 100%;
  margin-top: 15px;
  color: #555;
  font-size: 13px;
`;

const StayLoginLabel = styled.label`
   ${({ theme }) => theme.mixin.flex('center')};

   input {
    margin-right: 5px;
   }

   span {
    color: ${({ theme }) => theme.colors.navy};
   }
`;

const FindPasswordButton = styled.button`
  color: ${({ theme }) => theme.colors.navy};
`;

const LoginButton = styled.button`
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

const CopyLight = styled.p`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
`;

const SignUpWrap = styled.div`
  
`;

const SignUpWrapText = styled.span`
  margin-right: 10px;
  font-size: 13px;
`;

const SignUp = styled.button`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.navy};
`;