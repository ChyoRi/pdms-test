import { initializeApp, getApp, getApps } from "firebase/app";
import type { FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

/** base64 → JSON 파서 */
function parseCfgFromB64(b64: string | undefined): FirebaseOptions {
  if (!b64) throw new Error("[ENV] Missing Firebase config B64");

  // 따옴표/공백/줄바꿈 방어
  const cleaned = b64
    .trim()
    .replace(/^["']|["']$/g, "")
    .replace(/\s+/g, "");

  // atob는 브라우저 내장
  const json = atob(cleaned);
  return JSON.parse(json) as FirebaseOptions;
}

// DEV/PROD 키 분리해서 선택
const b64 = import.meta.env.DEV
  ? import.meta.env.VITE_FB_CFG_B64_DEV
  : import.meta.env.VITE_FB_CFG_B64_PROD;

// 선택된 b64로 config 생성
const firebaseConfig = parseCfgFromB64(b64);

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const firestore = db; // 기존 호환
export const auth = getAuth(app);
export { app };

// 실행 확인 로그(필요 없으면 삭제)
console.log(
  "[Firebase]",
  "MODE=", import.meta.env.MODE,
  "DEV=", import.meta.env.DEV,
  "projectId=", (app.options as any).projectId
);