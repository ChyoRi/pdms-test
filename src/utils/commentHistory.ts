// ★ NEW: src/utils/commentHistory.ts
import { auth, db } from "../firebaseconfig";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  increment,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";

/**
 * design_request_id(문서번호) 기준으로 히스토리 댓글 한 줄 남기기
 *
 * @param designRequestId  예: "H25120032"
 * @param body             댓글 내용 (히스토리 문장)
 */
export async function addHistoryComment(
  designRequestId: string,
  body: string
) {
  if (!designRequestId || !body.trim()) return;

  // 1) 부모 design_request 문서 찾기
  const qReq = query(
    collection(db, "design_request"),
    where("design_request_id", "==", designRequestId)
  );
  const snap = await getDocs(qReq);
  if (snap.empty) return;

  const parentDoc = snap.docs[0];
  const parentRef = doc(db, "design_request", parentDoc.id);

  // 2) 작성자 정보 (없으면 시스템)
  const user = auth.currentUser;
  const authorName =
    user?.displayName || user?.email || "시스템";
  const authorUid = user?.uid || "system";

  // 3) /comments 서브컬렉션에 추가
  const commentsCol = collection(parentRef, "comments");
  await addDoc(commentsCol, {
    author_name: authorName,
    author_uid: authorUid,
    body: body.trim(),
    kind: "edit_log",
    createdAt: serverTimestamp(),
  });

  // 4) 상위 문서 메타 업데이트 (새 댓글 카운트/마지막 댓글 정보)
  await updateDoc(parentRef, {
    comments_count: increment(1),
    comments_last_date: serverTimestamp(),
    comments_last_author_uid: authorUid,
  });
}
