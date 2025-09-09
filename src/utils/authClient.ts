// src/utils/authClient.ts
// 서버 없이 '가림(암호화+base64) + 자동로그인' 유틸

import {
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  inMemoryPersistence,
  type Auth,
} from "firebase/auth";

/** ───── Base64 유틸 ───── */
const b64encode = (buf: ArrayBuffer) =>
  btoa(String.fromCharCode(...new Uint8Array(buf)));
const b64decode = (b64: string): ArrayBuffer => {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes.buffer;
};

/** ───── Buffer 변환 헬퍼 ───── */
const u8ToArrayBuffer = (view: Uint8Array): ArrayBuffer => {
  const out = new Uint8Array(view.byteLength);
  out.set(view);
  return out.buffer as ArrayBuffer;
};

/** ───── Cookie 유틸 ───── */
function setCookie(name: string, value: string, days = 7, path = "/") {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; Expires=${expires}; Path=${path}; SameSite=Lax`;
}
function getCookie(name: string): string | null {
  const key = `${encodeURIComponent(name)}=`;
  const list = document.cookie.split("; ");
  for (const p of list) if (p.startsWith(key)) return decodeURIComponent(p.slice(key.length));
  return null;
}
function deleteCookie(name: string, path = "/") {
  document.cookie = `${encodeURIComponent(name)}=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=${path}; SameSite=Lax`;
}

/** ───── 키 파생(PBKDF2) ───── */
async function deriveKey(passphrase: string, saltAb: ArrayBuffer): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const baseKey = await crypto.subtle.importKey(
    "raw",
    enc.encode(passphrase),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: saltAb,
      iterations: 100_000,
      hash: "SHA-256",
    },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

/** ───── 암/복호화 ─────
 * 저장 바이트 포맷: [1B ver][12B IV][16B salt][cipher...]
 */
const VERSION = 1;

async function encryptToB64(plain: object, passphrase: string): Promise<string> {
  const enc = new TextEncoder();
  const ivU8 = crypto.getRandomValues(new Uint8Array(12));
  const saltU8 = crypto.getRandomValues(new Uint8Array(16));

  const ivAB   = u8ToArrayBuffer(ivU8);
  const saltAB = u8ToArrayBuffer(saltU8);
  const dataAB = u8ToArrayBuffer(enc.encode(JSON.stringify(plain)));

  const key = await deriveKey(passphrase, saltAB);
  const cipherAB = await crypto.subtle.encrypt({ name: "AES-GCM", iv: ivAB }, key, dataAB);

  const header = new Uint8Array(1 + ivU8.length + saltU8.length);
  header[0] = VERSION;
  header.set(ivU8, 1);
  header.set(saltU8, 1 + ivU8.length);

  const out = new Uint8Array(header.length + new Uint8Array(cipherAB).length);
  out.set(header, 0);
  out.set(new Uint8Array(cipherAB), header.length);

  return b64encode(out.buffer);
}

async function decryptFromB64(b64: string, passphrase: string): Promise<any> {
  const all = new Uint8Array(b64decode(b64));
  if (all[0] !== VERSION) throw new Error("Unsupported version");

  const ivU8     = all.slice(1, 13);
  const saltU8   = all.slice(13, 29);
  const cipherU8 = all.slice(29);

  const ivAB     = u8ToArrayBuffer(ivU8);
  const saltAB   = u8ToArrayBuffer(saltU8);
  const cipherAB = u8ToArrayBuffer(cipherU8);

  const key = await deriveKey(passphrase, saltAB);
  const plainAB = await crypto.subtle.decrypt({ name: "AES-GCM", iv: ivAB }, key, cipherAB);
  return JSON.parse(new TextDecoder().decode(plainAB));
}

/** ───── Firebase 메모리 퍼시스턴스 ───── */
export async function initAuthMemoryPersistence(auth: Auth) {
  await setPersistence(auth, inMemoryPersistence);
}

/** ───── 자동로그인 쿠키 설정 ───── */
const COOKIE_NAME = "pcz_auth_shadow";

// ★ 변경: .env 의 VITE_AUTH_PASSPHRASE 사용 (없을 때만 개발용 기본값)
const PASSPHRASE =
  import.meta.env.VITE_AUTH_PASSPHRASE || "dev-only-fallback-change-this";

export async function loginWithRemember(
  auth: Auth,
  email: string,
  password: string,
  remember: boolean,
  days = 7
) {
  const cred = await signInWithEmailAndPassword(auth, email, password);

  if (remember) {
    const payload = { email, password, t: Date.now() };
    const b64 = await encryptToB64(payload, PASSPHRASE);
    setCookie(COOKIE_NAME, b64, days);
  } else {
    deleteCookie(COOKIE_NAME);
  }
  return cred;
}

export async function tryAutoLogin(auth: Auth): Promise<boolean> {
  const b64 = getCookie(COOKIE_NAME);
  if (!b64) return false;
  try {
    const { email, password } = await decryptFromB64(b64, PASSPHRASE);
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch {
    deleteCookie(COOKIE_NAME);
    return false;
  }
}

export async function logoutAll(auth: Auth) {
  deleteCookie(COOKIE_NAME);
  await signOut(auth);
}
