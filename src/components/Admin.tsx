import styled from "styled-components";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { app, auth, db } from "../firebaseconfig";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  orderBy,
  limit,
  writeBatch,
  serverTimestamp,
} from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import RequestSearch from "./RequestSearch";

// ★ 변경: 거절은 Cloud Function이 처리한다.
//   (브라우저에서는 남의 Auth 계정을 삭제할 수 없어 프로필만 지워졌고,
//    그 결과 로그인 가능한 '유령 계정'이 남아 거절이 무효화됐다)
const rejectSignupFn = httpsCallable<{ uid: string }, { ok: boolean; authDeleted: boolean }>(
  getFunctions(app, "asia-northeast3"),
  "rejectSignup"
);

// 회원 삭제도 users 문서 + Auth 계정을 함께 지워야 하므로 Cloud Function이 처리
const deleteMemberFn = httpsCallable<{ uid: string }, { ok: boolean; authDeleted: boolean }>(
  getFunctions(app, "asia-northeast3"),
  "deleteMember"
);

// 회원 목록은 Auth 계정과 users 문서를 합쳐야 해서 Cloud Function이 조회
type MemberStatus = "ok" | "no_approved" | "no_profile" | "no_auth";

type MemberRow = {
  uid: string;
  name: string;
  email: string;
  company: string;
  role: number | null;
  isAdmin: boolean;
  createdAt: number | null; // ms
  status: MemberStatus;
};

const listMembersFn = httpsCallable<void, { members: MemberRow[] }>(
  getFunctions(app, "asia-northeast3"),
  "listMembers"
);

const STATUS_LABEL: Record<Exclude<MemberStatus, "ok">, string> = {
  no_approved: "승인값 없음",
  no_profile: "프로필 없음",
  no_auth: "계정 없음",
};

const STATUS_HINT: Record<Exclude<MemberStatus, "ok">, string> = {
  no_approved: "users 문서에 approved 값이 없어 로그인할 수 없습니다.",
  no_profile: "Auth 계정만 있고 users 문서가 없습니다.",
  no_auth: "users 문서만 있고 Auth 로그인 계정이 없습니다.",
};

// 승인/거절 이력 컬렉션 (승인=클라이언트, 거절=rejectSignup 함수가 기록)
const HISTORY_COL = "signup_history";
const HISTORY_LIMIT = 300;

type AdminTab = "pending" | "members" | "history";

const TABS: { key: AdminTab; label: string }[] = [
  { key: "pending", label: "가입 승인 관리" },
  { key: "members", label: "회원 목록" },
  { key: "history", label: "가입 승인 이력" },
];

type UserRow = {
  uid: string;
  name: string;
  email: string;
  company: string;
  role: number | null;
  isAdmin: boolean;
  createdAt: any;
};

type HistoryAction = "approved" | "rejected";

const ACTION_LABEL: Record<HistoryAction, string> = {
  approved: "승인",
  rejected: "거절",
};

type HistoryRow = {
  id: string;
  action: HistoryAction;
  name: string;
  email: string;
  company: string;
  role: number | null;
  processedAt: any;
};

type Me = { uid: string; name: string };

const roleName = (role: number | null) => {
  switch (role) {
    case 1: return "요청자";
    case 2: return "디자이너";
    case 3: return "담당자";
    default: return "-";
  }
};

const toUserRow = (id: string, data: any): UserRow => ({
  uid: id,
  name: String(data.name ?? ""),
  email: String(data.email ?? ""),
  company: String(data.company ?? ""),
  role: typeof data.role === "number" ? data.role : null,
  isAdmin: data.can_switch_account === true,
  createdAt: data.createdAt ?? null,
});

// Firestore Timestamp 또는 ms 숫자
const formatTS = (ts: any) => {
  const d: Date | null =
    typeof ts === "number" ? new Date(ts) : ts?.toDate ? ts.toDate() : null;
  if (!d) return "-";
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
};

export default function Admin() {
  const [me, setMe] = useState<Me | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null); // null=확인중
  const [searchParams, setSearchParams] = useSearchParams();

  const tabParam = searchParams.get("tab") as AdminTab | null;
  const tab: AdminTab = TABS.some((t) => t.key === tabParam) ? (tabParam as AdminTab) : "pending";

  const changeTab = (t: AdminTab) => {
    setSearchParams((prev) => {
      const sp = new URLSearchParams(prev);
      sp.set("tab", t);
      return sp;
    });
  };

  // 현재 사용자가 관리자(can_switch_account)인지 확인
  useEffect(() => {
    const run = async () => {
      const user = auth.currentUser;
      if (!user) { setIsAdmin(false); return; }
      const snap = await getDoc(doc(db, "users", user.uid));
      const data = snap.data() as any;
      setIsAdmin(snap.exists() && data?.can_switch_account === true);
      setMe({ uid: user.uid, name: String(data?.name ?? user.displayName ?? "") });
    };
    run();
  }, []);

  if (isAdmin === null) {
    return <Wrap><Info>확인 중...</Info></Wrap>;
  }

  if (!isAdmin || !me) {
    return (
      <Wrap>
        <Info>이 페이지는 관리자만 접근할 수 있습니다.</Info>
      </Wrap>
    );
  }

  return (
    <Wrap>
      <TabWrap>
        {TABS.map((t) => (
          <TabButton
            key={t.key}
            type="button"
            $active={tab === t.key}
            onClick={() => changeTab(t.key)}
          >
            {t.label}
          </TabButton>
        ))}
      </TabWrap>

      {tab === "pending" && <PendingPanel me={me} />}
      {tab === "members" && <MembersPanel me={me} />}
      {tab === "history" && <HistoryPanel />}
    </Wrap>
  );
}

/* ───────── 가입 승인 관리 ───────── */
function PendingPanel({ me }: { me: Me }) {
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<UserRow[]>([]);
  const [busyUid, setBusyUid] = useState<string>("");

  // 승인 대기 목록 조회 (approved == false)
  const load = useCallback(async () => {
    setLoading(true);
    try {
      const qs = await getDocs(
        query(collection(db, "users"), where("approved", "==", false))
      );
      setRows(qs.docs.map((d) => toUserRow(d.id, d.data())));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const approve = async (u: UserRow) => {
    if (busyUid) return;
    if (!confirm(`${u.name}(${u.email}) 계정을 승인할까요?`)) return;
    setBusyUid(u.uid);
    try {
      // 승인 처리 + 이력 기록을 한 번에 커밋
      const batch = writeBatch(db);
      batch.update(doc(db, "users", u.uid), {
        approved: true,
        approved_at: serverTimestamp(),
        approved_by: me.uid,
      });
      batch.set(doc(collection(db, HISTORY_COL)), {
        action: "approved",
        uid: u.uid,
        name: u.name,
        email: u.email,
        company: u.company,
        role: u.role,
        processed_by_uid: me.uid,
        processed_by_name: me.name,
        processed_at: serverTimestamp(),
      });
      await batch.commit();
      setRows((prev) => prev.filter((x) => x.uid !== u.uid));
    } catch (e: any) {
      alert("승인 중 오류가 발생했습니다: " + e.message);
    } finally {
      setBusyUid("");
    }
  };

  const reject = async (u: UserRow) => {
    if (busyUid) return;
    if (!confirm(`${u.name}(${u.email}) 가입을 거절할까요?\n\n프로필과 로그인 계정이 함께 삭제됩니다.`)) return;
    setBusyUid(u.uid);
    try {
      await rejectSignupFn({ uid: u.uid });
      setRows((prev) => prev.filter((x) => x.uid !== u.uid));
    } catch (e: any) {
      alert("거절 중 오류가 발생했습니다: " + (e?.message ?? e));
    } finally {
      setBusyUid("");
    }
  };

  return (
    <>
      <PanelHeader>
        <TitleWrap>
          <SubTitle>승인 대기</SubTitle>
          <CountLabel>{rows.length}건</CountLabel>
        </TitleWrap>
        <RefreshBtn type="button" onClick={load} disabled={loading}>
          {loading ? "불러오는 중..." : "새로고침"}
        </RefreshBtn>
      </PanelHeader>

      <TableScroll>
        <Table>
          <thead>
            <tr>
              <Th>이름</Th>
              <Th>이메일</Th>
              <Th>회사</Th>
              <Th>권한</Th>
              <Th>가입 신청일</Th>
              <Th>처리</Th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <EmptyRow colSpan={6} text={loading ? "불러오는 중..." : "승인 대기 중인 계정이 없습니다."} />
            ) : (
              rows.map((u) => (
                <tr key={u.uid}>
                  <Td>{u.name || "-"}</Td>
                  <Td>{u.email || "-"}</Td>
                  <Td>{u.company || "-"}</Td>
                  <Td>{roleName(u.role)}</Td>
                  <Td>{formatTS(u.createdAt)}</Td>
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
      </TableScroll>
    </>
  );
}

/* ───────── 회원 목록 ───────── */
function MembersPanel({ me }: { me: Me }) {
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<MemberRow[]>([]);
  const [keyword, setKeyword] = useState("");
  const [busyUid, setBusyUid] = useState<string>("");

  // Auth 계정 + users 문서를 합친 회원 목록 (승인 대기 제외), 최근 가입 순
  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await listMembersFn();
      const list = [...data.members];
      list.sort(
        (a, b) =>
          (b.createdAt ?? 0) - (a.createdAt ?? 0) ||
          a.name.localeCompare(b.name, "ko")
      );
      setRows(list);
    } catch (e: any) {
      alert("회원 목록을 불러오는 중 오류가 발생했습니다: " + (e?.message ?? e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const remove = async (u: MemberRow) => {
    if (busyUid) return;
    const who = u.name || u.email ? `${u.name}(${u.email})` : u.uid;
    if (!confirm(`${who} 회원을 삭제할까요?\n\n회원 정보와 로그인 계정이 함께 삭제되며 되돌릴 수 없습니다.`)) return;
    setBusyUid(u.uid);
    try {
      await deleteMemberFn({ uid: u.uid });
      setRows((prev) => prev.filter((x) => x.uid !== u.uid));
    } catch (e: any) {
      alert("삭제 중 오류가 발생했습니다: " + (e?.message ?? e));
    } finally {
      setBusyUid("");
    }
  };

  const kw = keyword.trim().toLowerCase();
  const filtered = kw
    ? rows.filter((u) =>
        [u.name, u.email, u.company].some((v) => v.toLowerCase().includes(kw))
      )
    : rows;

  return (
    <>
      <PanelHeader>
        <TitleWrap>
          <SubTitle>등록된 회원</SubTitle>
          <CountLabel>{filtered.length}명</CountLabel>
        </TitleWrap>
        <HeaderRight>
          <RequestSearch
            keyword={keyword}
            onKeywordChange={setKeyword}
            placeholder="이름, 이메일, 회사를 검색해 주세요."
          />
          <RefreshBtn type="button" onClick={load} disabled={loading}>
            {loading ? "불러오는 중..." : "새로고침"}
          </RefreshBtn>
        </HeaderRight>
      </PanelHeader>

      <TableScroll>
        <Table>
          <thead>
            <tr>
              <Th>이름</Th>
              <Th>이메일</Th>
              <Th>회사</Th>
              <Th>권한</Th>
              <Th>가입 일시</Th>
              <Th>관리</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <EmptyRow
                colSpan={6}
                text={loading ? "불러오는 중..." : kw ? "검색 결과가 없습니다." : "등록된 회원이 없습니다."}
              />
            ) : (
              filtered.map((u) => (
                <tr key={u.uid}>
                  <Td>
                    {u.name || <UidText title={u.uid}>{u.uid}</UidText>}
                    {u.isAdmin && <AdminTag>관리자</AdminTag>}
                    {u.status !== "ok" && (
                      <StatusTag title={STATUS_HINT[u.status]}>{STATUS_LABEL[u.status]}</StatusTag>
                    )}
                  </Td>
                  <Td>{u.email || "-"}</Td>
                  <Td>{u.company || "-"}</Td>
                  <Td>{roleName(u.role)}</Td>
                  <Td>{formatTS(u.createdAt)}</Td>
                  <Td>
                    {/* 관리자 계정·본인은 삭제 불가 (서버에서도 차단) */}
                    {!u.isAdmin && u.uid !== me.uid && (
                      <RejectBtn type="button" onClick={() => remove(u)} disabled={busyUid === u.uid}>
                        삭제
                      </RejectBtn>
                    )}
                  </Td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </TableScroll>
    </>
  );
}

/* ───────── 가입 승인 이력 ───────── */
function HistoryPanel() {
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<HistoryRow[]>([]);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const qs = await getDocs(
        query(collection(db, HISTORY_COL), orderBy("processed_at", "desc"), limit(HISTORY_LIMIT))
      );
      setRows(
        qs.docs
          // 회원 삭제 기록(action=deleted)은 이력에 표시하지 않음 (이전에 기록된 것 포함)
          .filter((d) => (d.data() as any).action in ACTION_LABEL)
          .map((d) => {
            const data = d.data() as any;
            return {
              id: d.id,
              action: data.action as HistoryAction,
              name: String(data.name ?? ""),
              email: String(data.email ?? ""),
              company: String(data.company ?? ""),
              role: typeof data.role === "number" ? data.role : null,
              processedAt: data.processed_at ?? null,
            };
          })
      );
    } catch (e: any) {
      alert("이력을 불러오는 중 오류가 발생했습니다: " + (e?.message ?? e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  return (
    <>
      <PanelHeader>
        <TitleWrap>
          <SubTitle>처리 이력</SubTitle>
          <CountLabel>최근 {rows.length}건</CountLabel>
        </TitleWrap>
        <RefreshBtn type="button" onClick={load} disabled={loading}>
          {loading ? "불러오는 중..." : "새로고침"}
        </RefreshBtn>
      </PanelHeader>

      <TableScroll>
        <Table>
          <thead>
            <tr>
              <Th>이름</Th>
              <Th>이메일</Th>
              <Th>회사</Th>
              <Th>권한</Th>
              <Th>처리 일시</Th>
              <Th>결과</Th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <EmptyRow colSpan={6} text={loading ? "불러오는 중..." : "처리 이력이 없습니다."} />
            ) : (
              rows.map((h) => (
                <tr key={h.id}>
                  <Td>{h.name || "-"}</Td>
                  <Td>{h.email || "-"}</Td>
                  <Td>{h.company || "-"}</Td>
                  <Td>{roleName(h.role)}</Td>
                  <Td>{formatTS(h.processedAt)}</Td>
                  <Td>
                    <ResultLabel $action={h.action}>{ACTION_LABEL[h.action]}</ResultLabel>
                  </Td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </TableScroll>
    </>
  );
}

function EmptyRow({ colSpan, text }: { colSpan: number; text: string }) {
  return (
    <tr>
      <Td colSpan={colSpan} style={{ textAlign: "center", color: "#888" }}>
        {text}
      </Td>
    </tr>
  );
}

/* ───────── styled ───────── */
// 다른 화면(InWorkHour 등)과 같이 화면 높이에 맞추고 표 영역만 스크롤
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  padding: 30px 40px;
  overflow: hidden;
`;

// 대시보드 회사 탭(CompanyToggleButton)과 동일한 스타일
const TabWrap = styled.div`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 30px;
`;

const TabButton = styled.button<{ $active?: boolean }>`
  min-width: 98px;
  height: 40px;
  padding: 0 14px;
  border-radius: 10px;
  border: 1px solid ${({ $active }) => ($active ? "#111" : "#D0D5DD")};
  background: ${({ $active }) => ($active ? "#111" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#111")};
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.2px;
  transition: all 0.15s ease;
  box-shadow: ${({ $active }) => ($active ? "0 1px 3px rgba(0,0,0,0.08)" : "none")};

  &:hover {
    border-color: #111;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(17, 17, 17, 0.12);
  }
`;

const PanelHeader = styled.div`
  ${({ theme }) => theme.mixin.flex("center", "space-between")};
  margin-bottom: 16px;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #111;
`;

const CountLabel = styled.span`
  padding: 4px 12px;
  border-radius: 6px;
  background: #f2f4f7;
  color: #475467;
  font-size: 14px;
  font-weight: 500;
`;

const RESULT_COLORS: Record<HistoryAction, { bg: string; fg: string }> = {
  approved: { bg: "#e7f6ec", fg: "#1e7a3c" },
  rejected: { bg: "#fcebeb", fg: "#a32d2d" },
};

const ResultLabel = styled.span<{ $action: HistoryAction }>`
  padding: 3px 10px;
  border-radius: 6px;
  background: ${({ $action }) => RESULT_COLORS[$action].bg};
  color: ${({ $action }) => RESULT_COLORS[$action].fg};
  font-size: 12px;
  font-weight: 500;
`;

const StatusTag = styled.span`
  margin-left: 6px;
  padding: 2px 6px;
  border-radius: 4px;
  background: #fff4e5;
  color: #b54708;
  font-size: 11px;
  font-weight: 500;
  cursor: help;
`;

const UidText = styled.span`
  color: #98a2b3;
  font-size: 12px;
`;

const AdminTag = styled.span`
  margin-left: 6px;
  padding: 2px 6px;
  border-radius: 4px;
  background: #111;
  color: #fff;
  font-size: 11px;
  font-weight: 500;
`;

const Info = styled.p`
  margin-top: 16px;
  font-size: 15px;
  color: #555;
`;

// 요청 리스트 '필터 초기화' 버튼(RequestFilter ResetButton)과 동일한 스타일
const RefreshBtn = styled.button`
  padding: 11.5px 10px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white01};
  white-space: nowrap;
  cursor: pointer;
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

// 요청 리스트(ManagerRequestList)와 같이 상단 검정 2px 라인은 스크롤 영역에 둔다
// (스크롤 영역 밖이라 스크롤해도 사라지지 않음)
const TableScroll = styled.div`
  flex: 1;
  min-height: 0;
  border-top: 2px solid ${({ theme }) => theme.colors.black};
  overflow-y: auto;
  scrollbar-width: thin;
`;

// collapse 모드에서는 border가 셀이 아닌 표에 속해 sticky 헤더를 따라오지 않는다.
// → separate 유지 + 셀마다 좌측(첫 열 제외)/하단 border만 지정해 이중선 방지
const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 14px;
`;

// 요청 리스트 헤더(RequestListTableTh)와 동일한 스타일, 스크롤 시 고정
const Th = styled.th`
  position: sticky;
  top: 0;
  z-index: 1;
  line-height: 16px;
  padding: 13px 12px;
  border: 0;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.gray08};

  &:first-child { border-left: none; }
`;

const Td = styled.td`
  padding: 12px;
  border: 0;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #eee;
  color: #333;
  text-align: center;

  &:first-child { border-left: none; }
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
