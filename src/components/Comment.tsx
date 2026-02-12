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
  status?: string;
}

type CommentDoc = {
  id: string;
  author_name: string;
  author_uid: string;
  body: string;
  kind?: string;
  createdAt?: any;
  editedAt?: any;
};

export default function Comment({ designRequestId, currentUserName, status }: CommentsProps) {
  const [parentDocId, setParentDocId] = useState<string>("");     // Firestore 문서 id
  const [items, setItems] = useState<CommentDoc[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // 입력 상태
  const [body, setBody] = useState("");
  const [saving, setSaving] = useState(false);

  // 입력 조합 상태(IME) — 한글/일본어 입력 조합 중 Enter 등록 방지
  const [isComposing, setIsComposing] = useState(false);

  // 편집 상태
  const [editingId, setEditingId] = useState<string>("");
  const [editingBody, setEditingBody] = useState<string>("");
  const [updating, setUpdating] = useState<boolean>(false);

  // 편집 영역 IME 조합 상태
  const [isEditingComposing, setIsEditingComposing] = useState(false);

  const currentUid = auth.currentUser?.uid || "";

  // 스크롤 제어용 ref/상태
  const listRef = useRef<HTMLDivElement | null>(null);     // 스크롤 컨테이너
  const endRef  = useRef<HTMLDivElement | null>(null);     // 맨 아래 앵커
  const mountedRef = useRef(false);                        // 최초 로딩 여부
  const [justAdded, setJustAdded] = useState(false);       // 내가 방금 등록했는가

  // textarea / 이모지
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [emojiOpen, setEmojiOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  // edit_log 판별 헬퍼 (전역에서 row 쓰지 않도록)
  const isEditLog = (c?: CommentDoc) => (c?.kind ?? "") === "edit_log";
  const isEnded = status === "완료" || status === "취소";

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
              kind: data.kind || "",
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
      setJustAdded(false);
      // 문서 바뀔 때 편집 상태도 초기화 (로그 편집 잔상 방지)
      setEditingId("");
      setEditingBody("");
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
    if (isEnded) return;
    if (!parentDocId || !body.trim()) return;
    setSaving(true);
    try {
      const uid = auth.currentUser?.uid || "";
      const colRef = collection(doc(db, "design_request", parentDocId), "comments");
      await addDoc(colRef, {
        author_name: currentUserName || "(익명)",
        author_uid: uid,
        body: body.trim(),
        kind: "comment",
        createdAt: serverTimestamp(),
      });

      // ★ 마지막 댓글 메타 갱신
      await updateDoc(doc(db, "design_request", parentDocId), {
        comments_count: increment(1),
        comments_last_date: serverTimestamp(),
        comments_last_author_uid: uid,
      });

      setBody("");
      setJustAdded(true);
    } finally {
      setSaving(false);
    }
  };

  // 4) 편집 시작
  const startEdit = (row: CommentDoc) => {
    if (isEnded) return;
    // 로그(edit_log)는 편집 진입 자체 차단
    if (isEditLog(row)) return;

    setEditingId(row.id);
    setEditingBody(row.body);
  };

  // 5) 수정 저장
  const handleUpdate = async (id: string) => {
    if (isEnded) return;
    // 함수 레벨에서도 로그(edit_log) 수정 차단
    const target = items.find((x) => x.id === id);
    if (isEditLog(target)) {
      // 로그는 절대 수정 금지
      setEditingId("");
      setEditingBody("");
      return;
    }

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
    if (isEnded) return;
    // 함수 레벨에서도 로그(edit_log) 삭제 차단
    const target = items.find((x) => x.id === id);
    if (isEditLog(target)) return;

    if (!parentDocId) return;
    if (!confirm("이 댓글을 삭제할까요?")) return;

    try {
      const parentRef = doc(db, "design_request", parentDocId);
      const commentRef = doc(db, "design_request", parentDocId, "comments", id);

      await deleteDoc(commentRef);

      const parentSnap = await getDoc(parentRef);
      const cur = Number(parentSnap.get("comments_count") ?? 0);

      if (cur > 0) {
        await updateDoc(parentRef, {
          comments_count: increment(-1),
          updated_date: serverTimestamp(),
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

  // URL을 <a>로 변환 (dangerouslySetInnerHTML 없이 안전하게)
  const URL_RE =
    /https?:\/\/[^\s<>"']+|www\.[^\s<>"']+|(?:docs|drive)\.google\.com\/[^\s<>"']+|figma\.com\/[^\s<>"']+/gi;

  const cleanUrl = (u: string) =>
    u
      .trim()
      // 앞에 괄호/따옴표가 붙는 케이스
      .replace(/^[(\[{"'`]+/g, "")
      // 뒤에 붙는 흔한 문장부호/괄호/따옴표 제거
      .replace(/[)\]}>"'`,.;:!?]+$/g, "");

  const toHref = (u: string) => {
    const x = cleanUrl(u);
    if (!x) return "";
    if (/^https?:\/\//i.test(x)) return x;
    if (/^www\./i.test(x)) return `https://${x}`;
    // docs.google.com / drive.google.com / figma.com 같은 프로토콜 없는 케이스
    return `https://${x}`;
  };

  const renderBodyWithLinks = (text: string) => {
    const lines = String(text ?? "").split("\n");

    return lines.map((line, lineIdx) => {
      const nodes: React.ReactNode[] = [];
      let last = 0;

      for (const m of line.matchAll(URL_RE)) {
        const raw = m[0];
        const start = m.index ?? 0;
        const end = start + raw.length;

        // 매치 전 텍스트
        if (start > last) nodes.push(line.slice(last, start));

        const href = toHref(raw);
        const label = cleanUrl(raw);

        if (href) {
          nodes.push(
            <a
              key={`url-${lineIdx}-${start}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          );
        } else {
          nodes.push(raw);
        }

        last = end;
      }

      // 남은 텍스트
      if (last < line.length) nodes.push(line.slice(last));

      return (
        <span key={`line-${lineIdx}`}>
          {nodes}
          {lineIdx < lines.length - 1 ? <br /> : null}
        </span>
      );
    });
  };

  // 입력 textarea 키다운 — Enter=등록, Shift+Enter=줄바꿈, IME 조합 중 무시
  const handleAddKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (isEnded) return;
    if (e.key !== "Enter") return;
    if (e.shiftKey) return;                 // 줄바꿈 허용
    if (isComposing) return;                // 한글 조합 중이면 무시
    if (!body.trim() || saving || !parentDocId) return;

    e.preventDefault();
    handleAdd();
  };

  // 편집 textarea 키다운 — Enter=저장, Shift+Enter=줄바꿈, IME 조합 중 무시
  const handleEditKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>, id: string) => {
    if (e.key !== "Enter") return;
    if (e.shiftKey) return;
    if (isEditingComposing) return;
    if (!editingBody.trim() || updating) return;

    e.preventDefault();
    handleUpdate(id);
  };

  // 이모지 버튼 토글 핸들러 (완료/취소면 토글 불가)
  const handleToggleEmoji = () => {
    if (isEnded) return;
    setEmojiOpen(v => !v);
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
            const isLog = isEditLog(row);
            return (
              <CommentContent key={row.id}>
                <CommentWriterFrame>
                  <CommentWriterWrap>
                    <strong className="author">{row.author_name}</strong>
                    <span className="date">{formatTS(row.createdAt)}</span>
                  </CommentWriterWrap>
                  <Meta>
                    {isMine && !isLog && editingId !== row.id && ( // 로그면 버튼 숨김
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
                      // 편집 Enter 저장/Shift+Enter 줄바꿈 & IME 처리
                      onKeyDown={(e) => handleEditKeyDown(e, row.id)}
                      onCompositionStart={() => setIsEditingComposing(true)}
                      onCompositionEnd={() => setIsEditingComposing(false)}
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
                  <Body>{renderBodyWithLinks(row.body)}</Body>
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
             disabled={isEnded}
            onChange={(e) => setBody(e.target.value)}
            rows={1}
            onKeyDown={handleAddKeyDown}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
          />
          <EmojiBtn
            type="button"
            aria-label="이모지"
            onClick={handleToggleEmoji}
            title="이모지"
            disabled={isEnded}
          >
            😊
          </EmojiBtn>

          {emojiOpen && !isEnded && (
            <EmojiPopover ref={popoverRef}>
              <Picker
                data={data}
                onEmojiSelect={handleEmojiSelect}
                locale="ko"
                theme="light"
                navPosition="top"
                previewPosition="none"
                searchPosition="top"
                emojiVersion="14.0"
                set="native"
              />
            </EmojiPopover>
          )}
        </InputWrap>

        <AddBtn
          type="button"
          disabled={isEnded || !body.trim() || saving || !parentDocId}
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

  a {
    text-decoration: underline;
    word-break: break-word;
  }
  a:hover {
    opacity: 0.85;
  }
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
  max-height: 200px;

  &:disabled {
    background: ${({ theme }) => theme.colors.gray04};
    cursor: not-allowed;
  }
`;

const EmojiBtn = styled.button`
  position: absolute;
  top: 45%;
  right: 18px;
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
