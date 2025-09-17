import { useEffect, useMemo, useState } from "react";
import { verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";
import { auth } from "../firebaseconfig";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

type Stage = "checking" | "ready" | "done" | "error";

export default function ResetPasswordPage() {
  const { search: hashSearch } = useLocation();
  const navigate = useNavigate();

  // 해시 라우터에서 쿼리가 해시 앞에 붙어 들어오는 경우까지 커버
  const search = useMemo(
    () => (hashSearch && hashSearch.length > 0 ? hashSearch : window.location.search),
    [hashSearch]
  );
  const sp = new URLSearchParams(search);
  const mode = sp.get("mode");
  const oobCode = sp.get("oobCode");

  const [stage, setStage] = useState<Stage>("checking");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");

  // 링크(oobCode) 검증
  useEffect(() => {
    if (mode !== "resetPassword" || !oobCode) {
      setStage("error");
      return;
    }
    (async () => {
      try {
        const em = await verifyPasswordResetCode(auth, oobCode);
        setEmail(em);
        setStage("ready");
      } catch {
        setStage("error");
      }
    })();
  }, [mode, oobCode]);

  const onSubmit = async () => {
    if (!oobCode) return;
    if (!pw || pw.length < 6) {
      alert("비밀번호는 6자 이상이어야 합니다.");
      return;
    }
    if (pw !== pw2) {
      alert("비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    try {
      await confirmPasswordReset(auth, oobCode, pw);
      alert("비밀번호가 변경되었습니다. 새 비밀번호로 로그인해 주세요.");
      navigate("/", { replace: true }); // 로그인 페이지로 이동
    } catch {
      setStage("error");
      alert("링크가 만료되었거나 유효하지 않습니다. 다시 요청해 주세요.");
    }
  };

  if (stage === "checking") return <Center>링크 확인 중...</Center>;
  if (stage === "error")    return <Center>유효하지 않은 링크입니다.</Center>;
  if (stage === "done")     return <Center>비밀번호 변경이 완료되었습니다.</Center>;

  // stage === "ready"
  return (
    <Container>
      <ResetPasswordFrame>
        <ResetPasswordHeader>
          <Logo>PDMS</Logo>
          <SubTitle>Pushcomz Design Management System</SubTitle>
        </ResetPasswordHeader>
        <ResetPasswordWrap>
          <Id_input
            type="email"
            value={email}
            readOnly
          />
          <Pw_input
            type="password"
            placeholder="새 비밀번호 (6자 이상)"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <Pw_input
            type="password"
            placeholder="새 비밀번호 확인"
            value={pw2}
            onChange={(e) => setPw2(e.target.value)}
          />
        </ResetPasswordWrap>
        <PasswordResetButton onClick={onSubmit}>비밀번호 재설정</PasswordResetButton>
      </ResetPasswordFrame>
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

const ResetPasswordFrame = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'center')};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.colors.white01};
`;

const ResetPasswordHeader = styled.div`
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

const ResetPasswordWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'center')};
  flex-direction: column;
  gap: 10px;
`;

const Id_input = styled.input`
  width: 460px;
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

const PasswordResetButton = styled.button`
  width: 100%;
  margin-top: 12px;
  padding: 12px 14px;
  font-weight: 700;
  border-radius: 6px;
  color: #fff;
  background: ${({ theme }) => theme.colors?.navy ?? "#0a3b70"};
`;

const CopyLight = styled.p`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
`;

const Center = styled.p`
  text-align: center;
  margin: 80px 0;
`;