import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig";


interface LoginPageProps {
  onLoginSuccess: () => void; // ✅ props 타입 정의
}

export default function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const moveSignUp = () => {
    navigate('/signup');
  }

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      onLoginSuccess();  // ✅ App.tsx에서 isAuthenticated = true
      navigate('/dashboard'); // ✅ 로그인 후 이동
    })
    .catch((err) => {
      alert("로그인 실패: " + err.message);
    });
  }

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