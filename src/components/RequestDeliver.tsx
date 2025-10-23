// RequestDeliver.tsx
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebaseconfig";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

interface Props {
  designRequestId: string;
  currentRequester: string;
  company?: string;
  onDone?: () => void;
}

type UserLite = {
  uid: string;
  displayName: string;      // ★ 통일된 표시명 (name or displayName 중 하나를 채택)
  company?: string;
};

export default function RequestDeliver({ designRequestId, currentRequester, company, onDone }: Props) {
  const [candidates, setCandidates] = useState<UserLite[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        let comp = company?.trim();

        // ★ 변경: 현재 요청자의 company를 users에서 탐색 (name/displayName 모두 시도)
        // Firestore는 OR가 안 되므로 두 번 조회 후 병합
        if (!comp) {
          // 1) displayName == currentRequester
          const qByDisplayName = query(
            collection(db, "users"),
            where("displayName", "==", currentRequester)
          );
          const snapA = await getDocs(qByDisplayName);

          // 2) name == currentRequester
          const qByName = query(
            collection(db, "users"),
            where("name", "==", currentRequester)
          );
          const snapB = await getDocs(qByName);

          const docA = !snapA.empty ? snapA.docs[0] : undefined;
          const docB = !snapB.empty ? snapB.docs[0] : undefined;
          const picked = (docA || docB)?.data() as any | undefined;

          if (picked?.company) {
            comp = String(picked.company).trim();
          }
        }

        // ★ 변경: 후보 조회 시에도 표시명 필드 이중 대응
        // 같은 회사 + role=1 (요청자)
        const qUsers = comp
          ? query(
              collection(db, "users"),
              where("company", "==", comp),
              where("role", "==", 1)
            )
          : query(
              collection(db, "users"),
              where("role", "==", 1)
            );

        const snap = await getDocs(qUsers);
        const list: UserLite[] = snap.docs
          .map(d => {
            const u = d.data() as any;
            const display =
              u.displayName?.toString().trim() ||
              u.name?.toString().trim() ||           // ★ name fallback
              "";
            return {
              uid: d.id,
              displayName: display,
              company: u.company,
            };
          })
          .filter(u => u.displayName)                 // ★ 빈 이름 제거
          .filter(u => u.displayName !== currentRequester) // ★ 현재 본인 제외
          .sort((a, b) => a.displayName.localeCompare(b.displayName, "ko"));

        setCandidates(list);
        if (list.length > 0) setSelected(list[0].displayName);
      } catch (e) {
        console.error(e);
        alert("요청자 후보 로드 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    })();
  }, [currentRequester, company]);

  const disabled = loading || candidates.length === 0 || !selected;

  const handleTransfer = async () => {
    if (!selected || selected === currentRequester) return;
    setLoading(true);
    try {
      // design_request_id로 문서 조회
      const qReq = query(
        collection(db, "design_request"),
        where("design_request_id", "==", designRequestId)
      );
      const snap = await getDocs(qReq);
      if (snap.empty) {
        alert("해당 요청 문서를 찾을 수 없습니다.");
        setLoading(false);
        return;
      }
      const ref = doc(db, "design_request", snap.docs[0].id);

      // ★ 오직 requester 필드만 교체
      await updateDoc(ref, {
        requester: selected,
      });

      onDone?.();
    } catch (e: any) {
      console.error(e);
      alert("요청자 전달 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrap>
      <Select
        disabled={loading || candidates.length === 0}
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {candidates.length === 0 ? (
          <option value="">동일 회사 요청자 없음</option>
        ) : (
          candidates.map((u) => (
            <option key={u.uid} value={u.displayName}>
              {u.displayName}
            </option>
          ))
        )}
      </Select>

      <TransferBtn type="button" disabled={disabled} onClick={handleTransfer}>
        전달
      </TransferBtn>
    </Wrap>
  );
}

const Wrap = styled.div`
  ${({ theme }) => theme.mixin.flex("center", "space-between")};
`;

const Select = styled.select`
  height: 34px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0 10px;
  font-size: 14px;
`;

const TransferBtn = styled.button`
  height: 34px;
  padding: 0 14px;
  border-radius: 8px;
  border: 1px solid #111;
  background: #111;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }
`;
