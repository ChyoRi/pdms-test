import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  const [isExpanded, setIsExpanded] = useState(false);
  const modalTitleId = useId();
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const expandButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const backdropPointerDownRef = useRef(false);
  const scrollPositionRef = useRef({ top: 0, atBottom: true });

  // 입력 상태
  const [body, setBody] = useState("");
  const [saving, setSaving] = useState(false);

  // 입력 조합 상태(IME) — 한글/일본어 입력 조합 중 Enter 등록 방지
  const isComposingRef = useRef(false);

  // 편집 상태
  const [editingId, setEditingId] = useState<string>("");
  const [editingBody, setEditingBody] = useState<string>("");
  const [updating, setUpdating] = useState<boolean>(false);

  // 편집 영역 IME 조합 상태
  const isEditingComposingRef = useRef(false);
  const editTextareaRef = useRef<HTMLTextAreaElement | null>(null);
  const editButtonsRef = useRef(new Map<string, HTMLButtonElement>());
  const previousEditingIdRef = useRef("");

  const currentUid = auth.currentUser?.uid || "";

  // 스크롤 제어용 ref/상태
  const listRef = useRef<HTMLDivElement | null>(null);     // 스크롤 컨테이너
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
    c.scrollTo({ top: c.scrollHeight, behavior: smooth ? "smooth" : "instant" });
  };

  const changeExpanded = (expanded: boolean) => {
    const list = listRef.current;
    if (list) {
      scrollPositionRef.current = {
        top: list.scrollTop,
        atBottom: list.scrollHeight - list.clientHeight - list.scrollTop < 24,
      };
    }
    setEmojiOpen(false);
    backdropPointerDownRef.current = false;
    isComposingRef.current = false;
    isEditingComposingRef.current = false;
    setIsExpanded(expanded);
  };

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!isExpanded || !dialog) return;

    dialog.showModal();
    const expandButton = expandButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus({ preventScroll: true });

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      expandButton?.focus({ preventScroll: true });
    };
  }, [isExpanded]);

  useLayoutEffect(() => {
    const previousEditingId = previousEditingIdRef.current;
    previousEditingIdRef.current = editingId;
    isEditingComposingRef.current = false;

    if (editingId) {
      const editor = editTextareaRef.current;
      editor?.focus({ preventScroll: true });
      editor?.setSelectionRange(editor.value.length, editor.value.length);
    } else if (previousEditingId && (
      document.activeElement === document.body ||
      listRef.current?.contains(document.activeElement)
    )) {
      // 저장/취소로 입력칸이 사라져도 배경으로 포커스가 빠지지 않게 한다.
      editButtonsRef.current.get(previousEditingId)?.focus({ preventScroll: true });
    }
  }, [editingId, isExpanded]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const { top, atBottom } = scrollPositionRef.current;
    list.scrollTo({ top: atBottom ? list.scrollHeight : top, behavior: "instant" });
  }, [isExpanded]);

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
      .replace(/^[([{"'`]+/g, "")
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
    // 브라우저에 따라 compositionend가 마지막 Enter보다 먼저 발생한다.
    if (isComposingRef.current || e.nativeEvent.isComposing || e.nativeEvent.keyCode === 229) return;
    if (!body.trim() || saving || !parentDocId) return;

    e.preventDefault();
    handleAdd();
  };

  // 편집 textarea 키다운 — Enter=저장, Shift+Enter=줄바꿈, IME 조합 중 무시
  const handleEditKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>, id: string) => {
    if (e.key !== "Enter") return;
    if (e.shiftKey) return;
    if (isEditingComposingRef.current || e.nativeEvent.isComposing || e.nativeEvent.keyCode === 229) return;
    if (!editingBody.trim() || updating) return;

    e.preventDefault();
    handleUpdate(id);
  };

  // 이모지 버튼 토글 핸들러 (완료/취소면 토글 불가)
  const handleToggleEmoji = () => {
    if (isEnded) return;
    setEmojiOpen(v => !v);
  };

  const commentPanel = (
    <>
      {/* 목록 */}
      <CommentContentWrap ref={listRef} $expanded={isExpanded}>
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
                        <SmallBtn
                          ref={(button) => {
                            if (button) editButtonsRef.current.set(row.id, button);
                            else editButtonsRef.current.delete(row.id);
                          }}
                          onClick={() => startEdit(row)}
                        >수정</SmallBtn>
                        <SmallBtn $danger onClick={() => handleDelete(row.id)}>삭제</SmallBtn>
                      </Actions>
                    )}
                  </Meta>
                </CommentWriterFrame>
                {editingId === row.id ? (
                  <EditRow>
                    <EditTextarea
                      ref={editTextareaRef}
                      aria-label="메모 수정 내용"
                      value={editingBody}
                      onChange={(e) => setEditingBody(e.target.value)}
                      rows={1}
                      // 편집 Enter 저장/Shift+Enter 줄바꿈 & IME 처리
                      onKeyDown={(e) => handleEditKeyDown(e, row.id)}
                      onCompositionStart={() => { isEditingComposingRef.current = true; }}
                      onCompositionEnd={() => { isEditingComposingRef.current = false; }}
                    />
                    <BtnRow>
                      <EditActionButton type="button" onClick={() => handleUpdate(row.id)} disabled={!editingBody.trim() || updating}>
                        저장
                      </EditActionButton>
                      <EditActionButton type="button" onClick={() => { setEditingId(""); setEditingBody(""); }}>
                        취소
                      </EditActionButton>
                    </BtnRow>
                  </EditRow>
                ) : (
                  <Body>{renderBodyWithLinks(row.body)}</Body>
                )}
              </CommentContent>
            );
          })
        )}
        {/* 작성 영역 */}
      </CommentContentWrap>
      <Editor>
        <InputWrap>
          <CommentWrite
            ref={textareaRef}
            aria-label="메모 내용"
            placeholder="내용을 입력하세요"
            value={body}
             disabled={isEnded}
            onChange={(e) => setBody(e.target.value)}
            rows={isExpanded ? 3 : 1}
            onKeyDown={handleAddKeyDown}
            onCompositionStart={() => { isComposingRef.current = true; }}
            onCompositionEnd={() => { isComposingRef.current = false; }}
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
    </>
  );

  return (
    <Wrap>
      <CommentTitleWrap>
        <CommentTitle>메모 Talk</CommentTitle>
        <CommentIcon aria-hidden="true" />
        <ExpandButton
          ref={expandButtonRef}
          type="button"
          aria-haspopup="dialog"
          aria-label="메모톡 크게 보기"
          onClick={() => changeExpanded(true)}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 2h4v4M14 2 9 7M6 14H2v-4M2 14l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          크게 보기
        </ExpandButton>
      </CommentTitleWrap>
      {isExpanded ? (
        <ExpandedPlaceholder>크게 보기 창에서 메모를 확인하고 있습니다.</ExpandedPlaceholder>
      ) : commentPanel}
      {createPortal(
        <MemoDialog
          ref={dialogRef}
          aria-labelledby={modalTitleId}
          aria-modal="true"
          onKeyDown={(event) => {
            if (event.key === "Escape" && (
              isComposingRef.current || isEditingComposingRef.current ||
              event.nativeEvent.isComposing || event.nativeEvent.keyCode === 229
            )) {
              event.preventDefault();
              event.stopPropagation();
              return;
            }
            if (event.key !== "Tab") return;
            const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(
              'button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
            )).filter((element) => element.getClientRects().length > 0);
            const first = controls[0];
            const last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first?.focus();
            }
          }}
          onCancel={(event) => {
            event.preventDefault();
            if (isComposingRef.current || isEditingComposingRef.current) return;
            if (emojiOpen) setEmojiOpen(false);
            else changeExpanded(false);
          }}
          onPointerDown={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            backdropPointerDownRef.current = event.button === 0 &&
              event.target === event.currentTarget && (
                event.clientX < rect.left || event.clientX > rect.right ||
                event.clientY < rect.top || event.clientY > rect.bottom
              );
          }}
          onPointerCancel={() => { backdropPointerDownRef.current = false; }}
          onClick={(event) => {
            // 입력칸에서 시작해 배경에서 끝난 드래그도 dialog의 click으로 전달된다.
            const startedOnBackdrop = backdropPointerDownRef.current;
            backdropPointerDownRef.current = false;
            if (!startedOnBackdrop || event.target !== event.currentTarget) return;
            const rect = event.currentTarget.getBoundingClientRect();
            if (event.clientX < rect.left || event.clientX > rect.right ||
                event.clientY < rect.top || event.clientY > rect.bottom) {
              changeExpanded(false);
            }
          }}
        >
          {isExpanded && (
            <>
              <ModalHeader>
                <ModalHeading>
                  <ModalTitle id={modalTitleId}>메모 Talk <CommentIcon aria-hidden="true" /></ModalTitle>
                  <ModalDescription>{designRequestId} · 메모를 더 넓게 확인하고 작성하세요.</ModalDescription>
                </ModalHeading>
                <CloseButton ref={closeButtonRef} type="button" aria-label="메모톡 닫기" onClick={() => changeExpanded(false)}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </CloseButton>
              </ModalHeader>
              <ModalContent>{commentPanel}</ModalContent>
            </>
          )}
        </MemoDialog>,
        document.body
      )}
    </Wrap>
  );
}

// ── styled ──────────────────────────────────────────────────
const Wrap = styled.div`
  flex: 1;
  min-width: 0;
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
const CommentContentWrap = styled.div<{ $expanded?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: ${({ $expanded }) => $expanded ? "auto" : "max(140px, calc(100dvh - 670px))"};
  flex: ${({ $expanded }) => $expanded ? "1 1 0" : "none"};
  min-height: 0;
  padding: ${({ $expanded }) => $expanded ? "20px" : "10px 10px 0"};
  border-radius: ${({ $expanded }) => $expanded ? "8px" : "0"};
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
  ${({ theme }) => theme.mixin.flex("center")};
  width: 100%;
  min-width: 0;
  gap: 8px;
  margin-top: 4px;
`;
const EditTextarea = styled(Textarea)`
  display: block;
  flex: 1;
  width: auto;
  min-width: 0;
  height: 32px;
  padding: 5px;
  border-radius: 6px;
  font-size: 13px;
  line-height: 18px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.orange};
    outline: none;
  }
`;
const BtnRow = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 6px;
`;
const EditActionButton = styled(SmallBtn)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0;
  border: 0;
  background: transparent;
  white-space: nowrap;

  &:hover:not(:disabled) { opacity: 0.8; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.orange}; outline-offset: 2px; }
`;
const CommentIcon = styled.i` 
  display: inline-block;
  flex-shrink: 0;
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
  display: block;
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
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
  width: min(320px, calc(100vw - 80px));
  max-height: min(360px, 45dvh);
  overflow: auto;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
  padding: 6px;             /* emoji-mart 자체 패딩이 있어도 얇게 */
  z-index: 40;
`;

const ExpandButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;
  padding: 6px 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.white01};
  color: ${({ theme }) => theme.colors.black};
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;

  &:hover { background: ${({ theme }) => theme.colors.beige01}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.orange}; outline-offset: 2px; }
`;

const ExpandedPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: max(140px, calc(100dvh - 670px));
  background: #fff6ee;
  color: ${({ theme }) => theme.colors.gray06};
  font-size: 13px;
`;

const MemoDialog = styled.dialog`
  position: fixed;
  inset: 0;
  margin: auto;
  width: min(880px, calc(100vw - 32px));
  height: min(760px, calc(100vh - 48px));
  height: min(760px, calc(100dvh - 48px));
  max-width: none;
  max-height: none;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.white01};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  font-family: inherit;

  &[open] { display: flex; flex-direction: column; }
  &::backdrop { background: rgba(0, 0, 0, 0.45); }
  button:focus-visible, ${CommentWrite}:focus-visible, a:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.orange};
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    width: calc(100vw - 16px);
    height: calc(100dvh - 24px);
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-shrink: 0;
  padding: 18px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray01};

  @media (max-width: 600px) { padding: 14px; }
`;

const ModalHeading = styled.div`
  min-width: 0;
`;

const ModalTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 18px;
  font-weight: 700;
`;

const ModalDescription = styled.p`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.gray06};
  font-size: 12px;
  line-height: 1.5;
  overflow-wrap: anywhere;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.gray06};
  &:hover { background: ${({ theme }) => theme.colors.gray04}; }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  padding: 20px;

  ${Editor} { flex-shrink: 0; margin-top: 16px; }
  ${Body} { font-size: 15px; line-height: 1.65; }
  ${CommentContent} { flex-shrink: 0; }
  ${CommentWriterWrap} { flex-wrap: wrap; }

  @media (max-width: 600px) {
    padding: 12px;
    ${CommentContentWrap} { padding: 14px; }
  }
`;
