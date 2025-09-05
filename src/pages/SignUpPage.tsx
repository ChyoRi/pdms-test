import styled from "styled-components"
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const navigate = useNavigate();

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

        await updateProfile(user, { displayName: name }); // ✅ 이름 추가

        // ✅ Firestore에 role 저장 (users/{uid})
        await setDoc(doc(db, "users", user.uid), {
          name: nameTrim,
          company: companyTrim,
          role: 2, // 기본값: 요청자
          createdAt: serverTimestamp(),
        });
      })
      .then(() => {
        alert("회원가입이 완료되었습니다!");
        navigate("/"); // 회원가입 후 로그인 페이지로 이동
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
          <Name_input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름을 입력해주세요." />
          <Company_input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="회사명을 입력해주세요." /> {/* ⬅ 추가 */}
          <Id_input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일을 입력해주세요." />
          <Pw_input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호를 입력해주세요." />
          <PwCheck_input type="password" value={passwordCheck} onChange={(e) => setPasswordCheck(e.target.value)} placeholder="비밀번호 확인을 입력해주세요." />
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

const Name_input = styled.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`;

const Company_input = styled.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
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

const PwCheck_input = styled.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
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