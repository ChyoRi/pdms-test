// src/utils/authClient.ts

import {
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
  inMemoryPersistence,
  type Auth,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseconfig";

/**
 * ★ 변경: "로그인 유지"에서 비밀번호 저장을 제거
 *
 * (기존) 이메일/비밀번호를 pcz_auth_shadow 쿠키에 AES-GCM으로 넣어두고
 *        새로고침 때마다 꺼내서 재로그인했다.
 *        복호화 패스프레이즈(VITE_AUTH_PASSPHRASE)가 비어 있어 하드코딩 폴백이 쓰였고,
 *        그 값이 배포 번들에 그대로 포함되어 사실상 평문 보관이었다.
 *
 * (변경) Firebase 공식 persistence(갱신 토큰)를 사용한다.
 *        비밀번호는 메모리에도, 쿠키에도, 스토리지에도 남지 않는다.
 */

/** ───── 레거시 쿠키 정리 ─────
 *  이미 사용자 브라우저에 깔려 있는 비밀번호 쿠키를 지우기 위해 당분간 유지한다.
 *  (배포 후 충분한 기간이 지나면 제거 가능)
 */
const LEGACY_COOKIE_NAME = "pcz_auth_shadow";

export function clearLegacyAuthCookie(path = "/") {
  document.cookie =
    `${encodeURIComponent(LEGACY_COOKIE_NAME)}=` +
    `; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=${path}; SameSite=Lax`;
}

/** ───── 로그인 ─────
 *  remember=true  : browserLocalPersistence (브라우저를 닫았다 열어도 유지)
 *  remember=false : inMemoryPersistence     (새로고침하면 해제 — 기존 동작과 동일)
 *  persistence는 반드시 signIn 전에 지정해야 한다.
 */
export async function loginWithRemember(
  auth: Auth,
  email: string,
  password: string,
  remember: boolean
) {
  await setPersistence(
    auth,
    remember ? browserLocalPersistence : inMemoryPersistence
  );
  clearLegacyAuthCookie();
  return signInWithEmailAndPassword(auth, email, password);
}

/** ───── 관리자 승인 여부 ─────
 *  로그인 시점과 세션 복구 시점 양쪽에서 같은 기준을 쓰기 위해 분리했다.
 */
export async function isUserApproved(uid: string): Promise<boolean> {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() && (snap.data() as { approved?: unknown }).approved === true;
}

/** ───── 로그아웃 ───── */
export async function logoutAll(auth: Auth) {
  clearLegacyAuthCookie();
  await signOut(auth);
}
