import { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebaseconfig";
import { sendPasswordResetEmail } from "firebase/auth";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function FindPasswordPage() {
  const [email, setEmail] = useState("");

  const sendResetMail = async () => {
    if (!email) { alert("이메일을 입력해주세요."); return; }
    if (!EMAIL_RE.test(email)) { alert("이메일 형식이 올바르지 않습니다."); return; }

    try {
      const BASE = "/pdms";
      await sendPasswordResetEmail(auth, email, {
        url: `${window.location.origin}${BASE}`,
        handleCodeInApp: true,
      });
      alert("비밀번호 재설정 메일을 보냈습니다. 받은 메일함을 확인해 주세요.");
    } catch (e: any) {
      if (e?.code === "auth/user-not-found") {
        alert("등록되지 않은 이메일입니다.");
        return;
      }
      alert("메일 발송 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <Container>
      <FindPasswordFrame>
        <FindPasswordHeader>
          <Logo>PDMS</Logo>
          <SubTitle>Pushcomz Design Management System</SubTitle>
        </FindPasswordHeader>
        <FindPasswordText>
          회원가입 시 등록하신 이메일 주소를 입력해 주세요. <br />
          해당 이메일로 비밀번호 재설정 메일을 보내드립니다.
        </FindPasswordText>
        <Id_input
          type="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MailSendButton onClick={sendResetMail}>인증메일 보내기</MailSendButton>
      </FindPasswordFrame>
      <CopyLight>© Pushcomz Corp.</CopyLight>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'center')};
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray01};
`;

const FindPasswordFrame = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'center')};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.colors.white01};
`;

const FindPasswordHeader = styled.div`
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

const FindPasswordText = styled.p`
  align-self: flex-start;
  font-size: 12px;
`;

const Id_input = styled.input`
  width: 460px;
  margin: 25px 0;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`;

const MailSendButton = styled.button`
  width: 100%;
  padding: 12px 14px;
  border-radius: 6px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white01};
  background: ${({ theme }) => theme.colors.navy};
`;

const CopyLight = styled.p`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
`;
