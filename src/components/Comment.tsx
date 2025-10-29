// ★ 추가: Comments.tsx
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebaseconfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDoc, increment } from "firebase/firestore";
import commentIcon from "../assets/comment.svg";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

// ─────────────────────────────────────────────────────────────
// 요구사항
// - 필드: 작성자 이름(currentUserName), 내용(body), 작성일시(createdAt) 표시
// - 기능: 추가(create), 수정(update), 삭제(delete)
// - 위치: 상세페이지 테이블 아래
// - visibility/mention 불필요
// - 부모 문서 접근: design_request_id(문서번호)로 역조회 후 /comments 서브컬렉션 사용
// ─────────────────────────────────────────────────────────────

interface CommentsProps {
  designRequestId: string; // 비즈니스 키 (예: "DR-2025-001")
  currentUserName: string; // 로그인 사용자 이름
}

type CommentDoc = {
  id: string;
  author_name: string;
  author_uid: string;
  body: string;
  createdAt?: any;
  editedAt?: any;
};

export default function Comments({ designRequestId, currentUserName }: CommentsProps) {
  const [parentDocId, setParentDocId] = useState<string>("");     // Firestore 문서 id
  const [items, setItems] = useState<CommentDoc[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // 입력 상태
  const [body, setBody] = useState("");
  const [saving, setSaving] = useState(false);

  // 편집 상태
  const [editingId, setEditingId] = useState<string>("");
  const [editingBody, setEditingBody] = useState<string>("");
  const [updating, setUpdating] = useState<boolean>(false);

  const currentUid = auth.currentUser?.uid || "";

  // 스크롤 제어용 ref/상태
  const listRef = useRef<HTMLDivElement | null>(null);     // 스크롤 컨테이너
  const endRef  = useRef<HTMLDivElement | null>(null);     // 맨 아래 앵커
  const mountedRef = useRef(false);                     // ★ 추가: 최초 로딩 여부
  const [justAdded, setJustAdded] = useState(false);       // 내가 방금 등록했는가

  // textarea / 이모지
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [emojiOpen, setEmojiOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  // 공용 스크롤 헬퍼(맨 아래로 이동)
  const scrollToBottom = (smooth = false) => {
    const c = listRef.current;
    if (!c) return;
    // 두 가지 모두 시도 (브라우저/레이아웃 상황별 안전)
    c.scrollTop = c.scrollHeight;
    endRef.current?.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
  };

  // 1) 부모 문서 id 역조회 + 댓글 구독
  useEffect(() => {
    let unsub: (() => void) | undefined;

    (async () => {
      setLoading(true);
      try {
        const qReq = query(
          collection(db, "design_request"),
          where("design_request_id", "==", designRequestId)
        );
        const snap = await getDocs(qReq);
        if (snap.empty) {
          setParentDocId("");
          setItems([]);
          setLoading(false);
          return;
        }
        const parentId = snap.docs[0].id;
        setParentDocId(parentId);

        const commentsCol = collection(doc(db, "design_request", parentId), "comments");
        const q = query(commentsCol, orderBy("createdAt", "asc"));
        unsub = onSnapshot(q, (ss) => {
          const rows: CommentDoc[] = ss.docs.map((d) => {
            const data = d.data() as any;
            return {
              id: d.id,
              author_name: data.author_name || "",
              author_uid: data.author_uid || "",
              body: data.body || "",
              createdAt: data.createdAt,
              editedAt: data.editedAt,
            };
          });
          setItems(rows);
          setLoading(false);

          if (!mountedRef.current) {
            mountedRef.current = true;

            // 상세 처음 열렸을 때 1회만 '즉시' 바닥으로 스크롤
            // Drawer의 0.3s transform 애니메이션을 고려해 raf + micro-delay 2회 호출
            requestAnimationFrame(() => {
              scrollToBottom(false);              // 즉시
              setTimeout(() => scrollToBottom(false), 0); // 레이아웃 반영 직후
            });
          }
        });
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    })();

    return () => {
      if (unsub) unsub();
      mountedRef.current = false;
      setJustAdded(false);          // 문서 전환 시 플래그 초기화
    };
  }, [designRequestId]);

  // 2) 내가 방금 등록했을 때만 자동 스크롤
  useEffect(() => {
    if (!mountedRef.current) return;
    if (!justAdded) return;
    // ★ 변경: 헬퍼 사용 + 부드러운 스크롤
    scrollToBottom(true);
    setJustAdded(false);
  }, [items, justAdded]);

  // 3) 상세를 열면 "내 읽음 시각"만 갱신 (전역 false 제거)
  useEffect(() => {
    if (!parentDocId) return;
    const uid = auth.currentUser?.uid;
    if (!uid) return;
    updateDoc(doc(db, "design_request", parentDocId), {
      [`comment_read_by.${uid}`]: serverTimestamp(), // ★ 추가
    }).catch(console.error);
  }, [parentDocId]);

  // 3) 추가
  const handleAdd = async () => {
    if (!parentDocId || !body.trim()) return;
    setSaving(true);
    try {
      const uid = auth.currentUser?.uid || "";
      const colRef = collection(doc(db, "design_request", parentDocId), "comments");
      await addDoc(colRef, {
        author_name: currentUserName || "(익명)",
        author_uid: uid,
        body: body.trim(),
        createdAt: serverTimestamp(),
      });

      // ★ 마지막 댓글 메타 갱신
      await updateDoc(doc(db, "design_request", parentDocId), {
        comments_count: increment(1),
        comments_last_date: serverTimestamp(),       // ★ 추가
        comments_last_author_uid: uid,             // ★ 추가
      });

      setBody("");
      setJustAdded(true);
    } finally {
      setSaving(false);
    }
  };

  // 4) 편집 시작
  const startEdit = (row: CommentDoc) => {
    setEditingId(row.id);
    setEditingBody(row.body);
  };

  // 5) 수정 저장
  const handleUpdate = async (id: string) => {
    if (!parentDocId || !editingBody.trim()) return;
    setUpdating(true);
    try {
      const ref = doc(db, "design_request", parentDocId, "comments", id);
      await updateDoc(ref, {
        body: editingBody.trim(),
        editedAt: serverTimestamp(),
      });
      setEditingId("");
      setEditingBody("");
    } catch (e) {
      console.error(e);
      alert("댓글 수정 중 오류가 발생했습니다.");
    } finally {
      setUpdating(false);
    }
  };

  // 6) 삭제
  const handleDelete = async (id: string) => {
    if (!parentDocId) return;
    if (!confirm("이 댓글을 삭제할까요?")) return;

    try {
      const parentRef  = doc(db, "design_request", parentDocId);
      const commentRef = doc(db, "design_request", parentDocId, "comments", id);

      await deleteDoc(commentRef);

      const parentSnap = await getDoc(parentRef);
      const cur = Number(parentSnap.get("comments_count") ?? 0);

      if (cur > 0) {
        await updateDoc(parentRef, {
          comments_count: increment(-1),
          updated_date: serverTimestamp(),
          // 필요 시 마지막 댓글 재계산 로직 추가 가능
        });
      }
    } catch (e) {
      console.error(e);
      alert("댓글 삭제 중 오류가 발생했습니다.");
    }
  };

  // 커서 위치 삽입 유틸
  const insertAtCursor = (text: string) => {
    const el = textareaRef.current;
    if (!el) {
      setBody(prev => prev + text);
      return;
    }
    const start = el.selectionStart ?? el.value.length;
    const end   = el.selectionEnd ?? el.value.length;
    const next  = el.value.slice(0, start) + text + el.value.slice(end);
    setBody(next);
    requestAnimationFrame(() => {
      el.focus();
      const caret = start + text.length;
      el.setSelectionRange(caret, caret);
    });
  };

  // 이모지 선택 핸들러 (emoji-mart는 e.native or e.skins… 형태, 기본은 e.native)
  const handleEmojiSelect = (e: any) => {
    insertAtCursor(e?.native ?? "");
    setEmojiOpen(false);
    requestAnimationFrame(() => {
      textareaRef.current?.focus();
    });
  };

  const formatTS = (ts: any) => {
    // 서버 타임스탬프가 reify되기 전엔 undefined일 수 있음
    if (!ts || !ts.toDate) return "-";
    const d = ts.toDate() as Date;
    const mm = `${d.getMonth() + 1}`.padStart(2, "0");
    const dd = `${d.getDate()}`.padStart(2, "0");
    const hh = `${d.getHours()}`.padStart(2, "0");
    const mi = `${d.getMinutes()}`.padStart(2, "0");
    return `${mm}/${dd} ${hh}:${mi}`;
  };

  return (
    <Wrap>
      <CommentTitleWrap>
        <CommentTitle>메모 Talk</CommentTitle>
        <CommentIcon />
      </CommentTitleWrap>
      {/* 목록 */}
      <CommentContentWrap ref={listRef}>
        {loading ? (
          <Empty>불러오는 중…</Empty>
        ) : items.length === 0 ? (
          <Empty>작성된 댓글이 없습니다.</Empty>
        ) : (
          items.map((row) => {
            const isMine = !!currentUid && currentUid === row.author_uid;
            return (
              <CommentContent key={row.id}>
                <CommentWriterFrame>
                  <CommentWriterWrap>
                    <strong className="author">{row.author_name}</strong>
                    <span className="date">{formatTS(row.createdAt)}</span>
                  </CommentWriterWrap>
                  <Meta>
                    {isMine && editingId !== row.id && (
                      <Actions>
                        <SmallBtn onClick={() => startEdit(row)}>수정</SmallBtn>
                        <SmallBtn $danger onClick={() => handleDelete(row.id)}>삭제</SmallBtn>
                      </Actions>
                    )}
                  </Meta>
                </CommentWriterFrame>
                {editingId === row.id ? (
                  <EditRow>
                    <EditTextarea
                      value={editingBody}
                      onChange={(e) => setEditingBody(e.target.value)}
                      rows={1}
                    />
                    <BtnRow>
                      <SmallBtn onClick={() => handleUpdate(row.id)} disabled={!editingBody.trim() || updating}>
                        저장
                      </SmallBtn>
                      <SmallBtn $ghost onClick={() => { setEditingId(""); setEditingBody(""); }}>
                        취소
                      </SmallBtn>
                    </BtnRow>
                  </EditRow>
                ) : (
                  <Body>{row.body}</Body>
                )}
              </CommentContent>
            );
          })
        )}
        <div ref={endRef} id="comments-end-anchor" />
        {/* 작성 영역 */}
      </CommentContentWrap>
      <Editor>
        <InputWrap>
          <CommentWrite
            ref={textareaRef}
            placeholder="내용을 입력하세요"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={1}
          />
          <EmojiBtn
            type="button"
            aria-label="이모지"
            onClick={() => setEmojiOpen(v => !v)}
            title="이모지"
          >
            😊
          </EmojiBtn>

          {emojiOpen && (
            <EmojiPopover ref={popoverRef}>
              <Picker
                data={data}
                onEmojiSelect={handleEmojiSelect}
                locale="ko"                 // 한국어 UI
                theme="light"               // "light" | "dark" | "auto"
                navPosition="top"           // 카테고리 탭 위치
                previewPosition="none"      // 하단 프리뷰 숨김(선호에 따라 "bottom")
                searchPosition="top"        // 검색창 위치
                emojiVersion="14.0"
                set="native"                // 네이티브 이모지 사용(이미지 스프라이트 불필요)
              />
            </EmojiPopover>
          )}
        </InputWrap>

        <AddBtn
          type="button"
          disabled={!body.trim() || saving || !parentDocId}
          onClick={handleAdd}
        >
          등록
        </AddBtn>
      </Editor>
    </Wrap>
  );
}

// ── styled ──────────────────────────────────────────────────
const Wrap = styled.div`
  flex: 1;
`;
const CommentTitleWrap = styled.div`
  ${({ theme }) => theme.mixin.flex("center")};
  padding-left: 10px;
  gap: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
`
const CommentTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
`;
const Editor = styled.div`
  ${({ theme }) => theme.mixin.flex("center")};
  gap: 8px;
  margin-top: 10px;
`;
const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
`;
const AddBtn = styled.button`
  height: 38px;
  padding: 0 14px;
  border-radius: 8px;
  border: 1px solid #111;
  background: #111;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
  &:disabled { opacity:.5; cursor: not-allowed; }
`;
const CommentContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: calc(100vh - 670px);
  padding: 10px 10px 0 10px;
  overflow-y: auto;
  scrollbar-width: thin;
  background-color: #fff6ee;
  scroll-behavior: smooth;
`;
const Empty = styled.div`
  color: #888;
  font-size: 14px;
`;
const CommentContent = styled.div`
  ${({ theme }) => theme.mixin.flex("flex-start")};
  flex-direction: column;
  strong {
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
  }
  .date { color: #777; font-size: 12px; }
`;
const CommentWriterFrame = styled.div`
  ${({ theme }) => theme.mixin.flex("center", "space-between")};
  width: 100%;
  margin-bottom: 2px;
`;
const CommentWriterWrap = styled.div`
  ${({ theme }) => theme.mixin.flex("center")};
  gap: 5px;
`
const Meta = styled.div`
  ${({ theme }) => theme.mixin.flex("center")};
  gap: 8px;
  white-space: nowrap;
  .author { font-weight: 500; }
  .edited { color: #999; font-size: 12px; }
`;
const Body = styled.p`
  white-space: pre-wrap;
  font-size: 14px;
  overflow-wrap: anywhere;
`;
const Actions = styled.div`
  display: flex;
  gap: 8px;
`;
const SmallBtn = styled.button<{ $danger?: boolean; $ghost?: boolean }>`
  font-size: 13px;
  font-weight: 500;
  color: ${({ $danger, $ghost }) => $ghost ? "#111" : ($danger ? "#000" : "#000")};
`;
const EditRow = styled.div`
  ${({ theme }) => theme.mixin.flex("center", "space-between")};
  width: 100%;
`;
const EditTextarea = styled(Textarea)``;
const BtnRow = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
  button {
    white-space: nowrap;
  }
`;
const CommentIcon = styled.i` 
  width:20px; 
  height:20px;
  background: url(${commentIcon}) no-repeat center / contain;
`;

const InputWrap = styled.div`
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
`;

const CommentWrite = styled.textarea`
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 10px 12px;
  padding-right: 44px;   /* 이모지 버튼 폭만큼 */
  font-size: 14px;
  line-height: 1.4;
  resize: vertical;
  max-height: 200px;
`;

const EmojiBtn = styled.button`
  position: absolute;
  top: 47%;
  right: 8px;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: #fff;
  font-size: 16px;
  transform: translateY(-50%);
  &:hover { background: #f6f7f9; }
`;

const EmojiPopover = styled.div`
  position: absolute;
  right: 0;
  bottom: calc(100% + 8px);
  width: 320px;             /* emoji-mart에 맞게 조금 넉넉하게 */
  max-height: 360px;
  overflow: auto;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
  padding: 6px;             /* emoji-mart 자체 패딩이 있어도 얇게 */
  z-index: 40;
`;
