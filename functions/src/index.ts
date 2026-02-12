// functions/src/index.ts
import * as admin from "firebase-admin";
import nodemailer = require("nodemailer");
import { onDocumentCreated } from "firebase-functions/v2/firestore";

admin.initializeApp();
const db = admin.firestore();

const isEmail = (s: any) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s ?? "").trim());

function uniq(arr: string[]) {
  return Array.from(new Set(arr.map((x) => String(x).trim()).filter(Boolean)));
}

function escapeHtml(s: string) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** ───────── SMTP lazy init (Secrets 주입 타이밍 안전) ───────── */
let _mailer: nodemailer.Transporter | null = null;

function getMailer() {
  const MAIL_USER = process.env.MAIL_USER || "";
  const MAIL_PASS = process.env.MAIL_PASS || "";

  if (!MAIL_USER || !MAIL_PASS) {
    throw new Error(
      "MAIL_USER / MAIL_PASS missing (Secrets not injected or .env missing)"
    );
  }

  if (_mailer) return _mailer;

  _mailer = nodemailer.createTransport({
    service: "gmail",
    auth: { user: MAIL_USER, pass: MAIL_PASS },
  });

  return _mailer;
}

async function sendMail(to: string[], subject: string, html: string) {
  const recipients = uniq(to).filter(isEmail);
  if (recipients.length === 0) return;

  const MAIL_USER = process.env.MAIL_USER || "";
  const MAIL_FROM = process.env.MAIL_FROM || MAIL_USER;

  const mailer = getMailer();

  await mailer.sendMail({
    from: MAIL_FROM,
    to: recipients.join(","),
    subject,
    html,
  });
}

/** ───────── users lookup helpers ───────── */
async function getUserEmailByUid(uid: string): Promise<string | null> {
  const u = String(uid ?? "").trim();
  if (!u) return null;

  const snap = await db.collection("users").doc(u).get();
  if (!snap.exists) return null;

  const email = (snap.data() as any)?.email;
  return isEmail(email) ? String(email).trim() : null;
}

async function getUserEmailsByName(name: string): Promise<string[]> {
  const n = String(name ?? "").trim();
  if (!n) return [];

  const qs = await db.collection("users").where("name", "==", n).get();
  const out: string[] = [];

  qs.forEach((d) => {
    const email = (d.data() as any)?.email;
    if (isEmail(email)) out.push(String(email).trim());
  });

  return uniq(out);
}

async function getManagerEmails(): Promise<string[]> {
  const qs = await db.collection("users").where("name", "==", "푸시컴즈").get();
  const out: string[] = [];

  qs.forEach((d) => {
    const email = (d.data() as any)?.email;
    if (isEmail(email)) out.push(String(email).trim());
  });

  return uniq(out);
}

async function getDesignerEmailsFromAssignedDesigners(
  assigned: any
): Promise<string[]> {
  if (!Array.isArray(assigned) || assigned.length === 0) return [];

  // 케이스 A) 객체 배열: [{uid,name,...}]
  if (typeof assigned[0] === "object" && assigned[0] !== null) {
    const out: string[] = [];

    const uids = uniq(
      assigned
        .map((x: any) => String(x?.uid ?? "").trim())
        .filter(Boolean)
    );

    for (const uid of uids) {
      const email = await getUserEmailByUid(uid);
      if (email) out.push(email);
    }

    const names = uniq(
      assigned
        .map((x: any) => String(x?.name ?? "").trim())
        .filter(Boolean)
    );

    for (const name of names) {
      const emails = await getUserEmailsByName(name);
      out.push(...emails);
    }

    return uniq(out);
  }

  // 케이스 B) 레거시 이름 배열: ["홍길동","김디자이너"]
  if (typeof assigned[0] === "string") {
    const names = uniq(
      assigned.map((x: any) => String(x ?? "").trim()).filter(Boolean)
    );
    const out: string[] = [];
    for (const name of names) {
      const emails = await getUserEmailsByName(name);
      out.push(...emails);
    }
    return uniq(out);
  }

  return [];
}

/** ★ 추가: KyungDong 요청자 이메일 찾기 (uid/email/name + requester_edit_read_by_client 폴백) */
async function getRequesterEmailsFromParent(parent: any): Promise<string[]> {
  const requesterEmails: string[] = [];

  const requesterRaw = String(parent?.requester ?? "").trim();
  const requesterUid = String(parent?.requester_uid ?? "").trim(); // (있으면 사용)

  // (A) requester_uid가 있으면 최우선
  if (requesterUid) {
    const email = await getUserEmailByUid(requesterUid);
    if (email) requesterEmails.push(email);
  }

  // (B) requester가 이메일이면(users에도 존재할 때만)
  if (requesterEmails.length === 0 && isEmail(requesterRaw)) {
    const qs = await db
      .collection("users")
      .where("email", "==", requesterRaw)
      .limit(1)
      .get();
    if (!qs.empty) requesterEmails.push(requesterRaw);
  }

  // (C) requester가 이름이면(users.name 매칭)
  if (requesterEmails.length === 0 && requesterRaw && !isEmail(requesterRaw)) {
    const emails = await getUserEmailsByName(requesterRaw);
    requesterEmails.push(...emails);
  }

  // (D) 폴백: requester_edit_read_by_client의 key(uid)로 조회
  if (requesterEmails.length === 0 && parent?.requester_edit_read_by_client) {
    const m = parent.requester_edit_read_by_client;
    if (m && typeof m === "object") {
      const uids = Object.keys(m)
        .map((x) => String(x).trim())
        .filter(Boolean);
      for (const uid of uids) {
        const email = await getUserEmailByUid(uid);
        if (email) requesterEmails.push(email);
      }
    }
  }

  return uniq(requesterEmails);
}

/**
 * ✅ Kyungdong 메모Talk 댓글 알림 (Functions v2)
 * - design_request/{docId}/comments/{commentId} 생성 시
 */
export const notifyKyungdongComment = onDocumentCreated(
  {
    region: "asia-northeast3",
    document: "design_request/{docId}/comments/{commentId}",
    secrets: ["MAIL_USER", "MAIL_PASS", "MAIL_FROM"],
  },
  async (event) => {
    const comment = event.data?.data() as any;
    const parentId = event.params.docId as string;

    if (!comment || !parentId) return;

    const parentSnap = await db.collection("design_request").doc(parentId).get();
    if (!parentSnap.exists) return;

    const parent = parentSnap.data() as any;

    // ★ kyungdong 문서만
    const companyNorm = String(parent?.company ?? "").trim().toLowerCase();
    if (companyNorm !== "kyungdong") return;

    // 1) 요청자 (★ 변경: 이메일/이름/uid/폴백까지 전부 커버)
    const requesterEmails = await getRequesterEmailsFromParent(parent);

    // 2) 매니저(이름이 "푸시컴즈")
    const managerEmails = await getManagerEmails();

    // 3) 디자이너(assigned_designers에 있는 사람)
    const designerEmails = await getDesignerEmailsFromAssignedDesigners(
      parent?.assigned_designers
    );

    const to = uniq([...requesterEmails, ...managerEmails, ...designerEmails]);

    const designRequestId = String(parent?.design_request_id ?? "").trim();
    const authorName = String(comment?.author_name ?? "").trim();
    const body = String(comment?.body ?? "").trim();

    const subject = `[PDMS] (${designRequestId || "문서"}) 메모 Talk 댓글 알림`;
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h3 style="margin:0 0 10px;">메모 Talk에 새 댓글이 등록되었습니다.</h3>
        <div><b>문서번호:</b> ${escapeHtml(designRequestId || "-")}</div>
        <div><b>회사:</b> ${escapeHtml(String(parent?.company ?? "-"))}</div>
        <div><b>작성자:</b> ${escapeHtml(authorName || "-")}</div>
        <div style="margin-top:10px;padding:12px;border:1px solid #eee;border-radius:8px;background:#fafafa;white-space:pre-wrap;">
          ${escapeHtml(body || "-")}
        </div>
      </div>
    `;

    await sendMail(to, subject, html);
  }
);