import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";
import { auth, db } from "../firebaseconfig";
import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type CompanyOpt = {
  id: string;
  company_name: string;
};

const roleOptions = [
  { value: 1, label: "요청자" },
  { value: 2, label: "디자이너" },
  { value: 3, label: "담당자" },
];

const normKey = (v: any) =>
  String(v ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "");

const isPushComzCompany = (companyName: string) => normKey(companyName) === "pushcomz";

export default function SwitchRole({ isOpen, onClose }: Props) {
  const [loading, setLoading] = useState(false);

  const [companies, setCompanies] = useState<CompanyOpt[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<number>(1);

  // 권한 플래그
  const [canSwitchAccount, setCanSwitchAccount] = useState<boolean>(false);

  const isPushComz = useMemo(() => isPushComzCompany(selectedCompany), [selectedCompany]);

  const canSubmit = useMemo(() => {
    if (!canSwitchAccount) return false; // ★ 추가
    if (!selectedCompany) return false;
    if (isPushComz) return [2, 3].includes(selectedRole);
    return selectedRole === 1;
  }, [canSwitchAccount, selectedCompany, selectedRole, isPushComz]);

  useEffect(() => {
    if (!selectedCompany) return;

    if (isPushComz) {
      // PushComz면 기본을 담당자(3)로 맞춤 (값이 이상하면 3으로)
      if (![2, 3].includes(selectedRole)) setSelectedRole(3);
      return;
    }

    // 클라이언트 계정은 요청자(1)만
    if (selectedRole !== 1) setSelectedRole(1);
  }, [selectedCompany, isPushComz]); // eslint-disable-line react-hooks/exhaustive-deps

  const visibleRoleOptions = useMemo(() => {
    if (isPushComz) {
      // PushComz에서 옵션 순서를 "담당자(3) -> 디자이너(2)"로
      return roleOptions
        .filter((r) => r.value === 2 || r.value === 3)
        .sort((a, b) => b.value - a.value);
    }
    return roleOptions.filter((r) => r.value === 1);
  }, [isPushComz]);

  useEffect(() => {
    if (!isOpen) return;

    const run = async () => {
      const user = auth.currentUser;
      if (!user) return;

      setLoading(true);
      try {
        const snap = await getDocs(collection(db, "companies"));
        const list: CompanyOpt[] = snap.docs
          .map((d) => {
            const data = d.data() as any;
            const name = String(data.company_name ?? "").trim();
            if (!name) return null;
            return { id: d.id, company_name: name };
          })
          .filter(Boolean) as CompanyOpt[];

        list.sort((a, b) => a.company_name.localeCompare(b.company_name, "ko"));
        setCompanies(list);

        const userSnap = await getDoc(doc(db, "users", user.uid));
        if (userSnap.exists()) {
          const u = userSnap.data() as any;

          // can_switch_account 읽기
          setCanSwitchAccount(!!u.can_switch_account);

          const curCompany = String(u.company ?? "").trim();
          const curRole = Number(u.role ?? 1);

          setSelectedCompany(curCompany);

          if (isPushComzCompany(curCompany)) {
            setSelectedRole(curRole === 3 ? 3 : 2);
          } else {
            setSelectedRole(1);
          }
        } else {
          setCanSwitchAccount(false); // ★ 추가
        }
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [isOpen]);

  const handleSubmit = async () => {
    const user = auth.currentUser;
    if (!user) return;
    if (!canSubmit) return;

    setLoading(true);
    try {
      // 저장 직전 재검증(방어)
      const meSnap = await getDoc(doc(db, "users", user.uid));
      const me = meSnap.exists() ? (meSnap.data() as any) : null;
      if (!me?.can_switch_account) {
        alert("권한 변경 권한이 없습니다.");
        setCanSwitchAccount(false);
        return;
      }

      const finalRole = isPushComz ? (selectedRole === 3 ? 3 : 2) : 1;

      await updateDoc(doc(db, "users", user.uid), {
        company: selectedCompany,
        role: finalRole,
      });

      onClose();
      window.location.reload();
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <Modal>
        <ModalHeader>
          <Title>권한 변경</Title>
          <CloseBtn type="button" onClick={onClose} aria-label="close">
            ×
          </CloseBtn>
        </ModalHeader>

        <ModalBody>
          {/* ★ 추가: 권한 없으면 안내만 */}
          {!canSwitchAccount ? (
            <NoAuthBox>
              <b>권한 없음</b>
              <div>이 계정은 권한 변경 기능을 사용할 수 없습니다.</div>
            </NoAuthBox>
          ) : (
            <>
              <Row>
                <Label>회사</Label>
                <Select
                  value={selectedCompany}
                  onChange={(e) => setSelectedCompany(e.target.value)}
                  disabled={loading}
                >
                  <option value="">선택</option>
                  {companies.map((c) => (
                    <option key={c.id} value={c.company_name}>
                      {c.company_name}
                    </option>
                  ))}
                </Select>
              </Row>

              <Row>
                <Label>권한</Label>
                <Select
                  value={String(selectedRole)}
                  onChange={(e) => setSelectedRole(Number(e.target.value))}
                  disabled={loading || !isPushComz}
                  title={!isPushComz ? "클라이언트 계정은 요청자만 가능합니다." : undefined}
                >
                  {visibleRoleOptions.map((r) => (
                    <option key={r.value} value={String(r.value)}>
                      {r.label}
                    </option>
                  ))}
                </Select>
              </Row>
            </>
          )}
        </ModalBody>

        <ModalFooter>
          <FooterBtn type="button" onClick={onClose} disabled={loading}>
            취소
          </FooterBtn>
          <PrimaryBtn type="button" onClick={handleSubmit} disabled={loading || !canSubmit}>
            변경하기
          </PrimaryBtn>
        </ModalFooter>
      </Modal>
    </Overlay>
  );
}

const NoAuthBox = styled.div`
  padding: 14px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  background: #fafafa;
  font-size: 14px;
  color: #333;

  b {
    display: block;
    margin-bottom: 6px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  width: 500px;
  max-width: calc(100vw - 48px);
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  padding: 18px 20px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

const CloseBtn = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
`;

const ModalBody = styled.div`
  padding: 22px 20px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
`;

const Label = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: 600;
`;

const Select = styled.select`
  height: 40px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 0 10px;
  font-size: 14px;
  background: #fff;
`;

const ModalFooter = styled.div`
  padding: 16px 20px 22px;
  display: flex;
  justify-content: center;
  gap: 16px;
  border-top: 1px solid #f0f0f0;
`;

const FooterBtn = styled.button`
  min-width: 140px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid #cfcfcf;
  background: #fff;
  font-size: 14px;
  cursor: pointer;
`;

const PrimaryBtn = styled.button`
  min-width: 140px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid #111;
  background: #111;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;