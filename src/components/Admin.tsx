import styled from "styled-components";
import { useEffect, useState, useCallback } from "react";
import { auth, db } from "../firebaseconfig";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

type PendingUser = {
  uid: string;
  name: string;
  email: string;
  company: string;
  role: number | null;
};

const roleName = (role: number | null) => {
  switch (role) {
    case 1: return "요청자";
    case 2: return "디자이너";
    case 3: return "담당자";
    default: return "-";
  }
};

export default function Admin() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null); // null=확인중
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<PendingUser[]>([]);
  const [busyUid, setBusyUid] = useState<string>("");

  // 현재 사용자가 관리자(can_switch_account)인지 확인
  useEffect(() => {
    const run = async () => {
      const user = auth.currentUser;
      if (!user) { setIsAdmin(false); return; }
      const snap = await getDoc(doc(db, "users", user.uid));
      setIsAdmin(snap.exists() && (snap.data() as any)?.can_switch_account === true);
    };
    run();
  }, []);

  // 승인 대기 목록 조회 (approved == false)
  const loadPending = useCallback(async () => {
    setLoading(true);
    try {
      const qs = await getDocs(
        query(collection(db, "users"), where("approved", "==", false))
      );
      const list: PendingUser[] = qs.docs.map((d) => {
        const data = d.data() as any;
        return {
          uid: d.id,
          name: String(data.name ?? ""),
          email: String(data.email ?? ""),
          company: String(data.company ?? ""),
          role: typeof data.role === "number" ? data.role : null,
        };
      });
      setRows(list);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAdmin) loadPending();
  }, [isAdmin, loadPending]);

  const approve = async (u: PendingUser) => {
    if (busyUid) return;
    if (!confirm(`${u.name}(${u.email}) 계정을 승인할까요?`)) return;
    setBusyUid(u.uid);
    try {
      await updateDoc(doc(db, "users", u.uid), { approved: true });
      setRows((prev) => prev.filter((x) => x.uid !== u.uid));
    } catch (e: any) {
      alert("승인 중 오류가 발생했습니다: " + e.message);
    } finally {
      setBusyUid("");
    }
  };

  const reject = async (u: PendingUser) => {
    if (busyUid) return;
    if (!confirm(`${u.name}(${u.email}) 가입을 거절(삭제)할까요?\n\n프로필이 삭제됩니다. (로그인 계정 자체는 콘솔에서 별도 삭제 필요)`)) return;
    setBusyUid(u.uid);
    try {
      await deleteDoc(doc(db, "users", u.uid));
      setRows((prev) => prev.filter((x) => x.uid !== u.uid));
    } catch (e: any) {
      alert("거절 중 오류가 발생했습니다: " + e.message);
    } finally {
      setBusyUid("");
    }
  };

  if (isAdmin === null) {
    return <Wrap><Info>확인 중...</Info></Wrap>;
  }

  if (!isAdmin) {
    return (
      <Wrap>
        <Title>가입 승인 관리</Title>
        <Info>이 페이지는 관리자만 접근할 수 있습니다.</Info>
      </Wrap>
    );
  }

  return (
    <Wrap>
      <TitleRow>
        <TitleWrap>
          <Title>가입 승인 관리</Title>
          {rows.length > 0 && <PendingLabel>대기 {rows.length}명</PendingLabel>}
        </TitleWrap>
        <RefreshBtn type="button" onClick={loadPending} disabled={loading}>
          {loading ? "불러오는 중..." : "새로고침"}
        </RefreshBtn>
      </TitleRow>

      <Table>
        <thead>
          <tr>
            <Th>이름</Th>
            <Th>이메일</Th>
            <Th>회사</Th>
            <Th>권한</Th>
            <Th>처리</Th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <Td colSpan={5} style={{ textAlign: "center", color: "#888" }}>
                {loading ? "불러오는 중..." : "승인 대기 중인 계정이 없습니다."}
              </Td>
            </tr>
          ) : (
            rows.map((u) => (
              <tr key={u.uid}>
                <Td>{u.name || "-"}</Td>
                <Td>{u.email || "-"}</Td>
                <Td>{u.company || "-"}</Td>
                <Td>{roleName(u.role)}</Td>
                <Td>
                  <ApproveBtn type="button" onClick={() => approve(u)} disabled={busyUid === u.uid}>
                    승인
                  </ApproveBtn>
                  <RejectBtn type="button" onClick={() => reject(u)} disabled={busyUid === u.uid}>
                    거절
                  </RejectBtn>
                </Td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 30px 40px;
`;

const TitleRow = styled.div`
  ${({ theme }) => theme.mixin.flex("center", "space-between")};
  margin-bottom: 20px;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.navy};
`;

const PendingLabel = styled.span`
  padding: 3px 10px;
  border-radius: 6px;
  background: #fcebeb;
  color: #a32d2d;
  font-size: 12px;
  font-weight: 500;
`;

const Info = styled.p`
  margin-top: 16px;
  font-size: 15px;
  color: #555;
`;

const RefreshBtn = styled.button`
  padding: 8px 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #fff;
  font-size: 14px;
  cursor: pointer;
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

const Th = styled.th`
  padding: 12px;
  border-bottom: 2px solid #e5e5e5;
  text-align: left;
  color: #333;
  background: #fafafa;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
  color: #333;
`;

const ApproveBtn = styled.button`
  padding: 6px 14px;
  margin-right: 8px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.navy};
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

const RejectBtn = styled.button`
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid #d9534f;
  background: #fff;
  color: #d9534f;
  font-size: 13px;
  cursor: pointer;
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;
