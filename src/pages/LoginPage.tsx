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
  const fallback = "로그인에 실패했습니다. 입력 정보를 확인해 주세요.";
  if (!(err instanceof FirebaseError)) return fallback;

  switch (err.code) {
    case "auth/invalid-email":
      return "이메일 형식이 올바르지 않습니다.";
    case "auth/user-not-found":
      return "해당 이메일의 계정을 찾을 수 없습니다. 아이디를 확인해 주세요.";
    // 🔑 비밀번호 관련은 전부 '비밀번호 불일치'로 통일
    case "auth/wrong-password":
    case "auth/invalid-credential":
    case "auth/invalid-login-credentials":
      return "비밀번호가 일치하지 않습니다.";
    case "auth/too-many-requests":
      return "로그인 시도가 너무 많습니다. 잠시 후 다시 시도해 주세요.";
    case "auth/network-request-failed":
      return "네트워크 오류로 로그인할 수 없습니다. 연결 상태를 확인해 주세요.";
    case "auth/user-disabled":
      return "해당 계정은 비활성화되어 로그인할 수 없습니다.";
    default:
      return fallback;
  }
}

export default function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const navigate = useNavigate();

  const moveSignUp = () => {
    navigate('/signup');
  }

  const login = async () => {
    const emailTrim = email.trim();

    // 입력 검증
    if (!emailTrim) { alert("이메일을 입력해주세요."); return; }
    if (!EMAIL_RE.test(emailTrim)) { alert("올바른 이메일 형식이 아닙니다. 예) name@example.com"); return; }
    if (!password) { alert("비밀번호를 입력해주세요."); return; }

    try {
      await loginWithRemember(auth, emailTrim, password, remember);
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
          <RememberRow>
            <label>
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
              <span> 이 기기에서 로그인 유지</span>
            </label>
          </RememberRow>
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

const RememberRow = styled.div`
  width: 460px;
  margin-top: 10px;
  color: #555;
  font-size: 13px;
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