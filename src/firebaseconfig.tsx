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

  const json = atob(cleaned);
  return JSON.parse(json) as FirebaseOptions;
}

/**
 * ★ 변경: URL path 기준으로 DEV/PROD 분기
 * - /pdms-dev 로 시작하면 무조건 DEV Firebase 설정 사용
 * - 그 외는 PROD Firebase 설정 사용
 */
const isPdmsDev = typeof window !== "undefined" && window.location.pathname.startsWith("/pdms-dev"); // ★ 변경

const b64 = isPdmsDev
  ? import.meta.env.VITE_FB_CFG_B64_DEV
  : import.meta.env.VITE_FB_CFG_B64_PROD; // ★ 변경

const firebaseConfig = parseCfgFromB64(b64);

// ★ 안전장치(권장): /pdms-dev 인데 운영 projectId면 차단
if (isPdmsDev && (firebaseConfig as any).projectId === "pdms-eda37") {
  throw new Error("[SAFEGUARD] /pdms-dev에서 운영 Firebase 연결 차단");
}

// ★ 안전장치(권장): /pdms-dev가 아닌데 개발 projectId면 차단
if (!isPdmsDev && (firebaseConfig as any).projectId === "pdms-dev-b4686") {
  throw new Error("[SAFEGUARD] /pdms에서 개발 Firebase 연결 차단");
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const firestore = db; // 기존 호환
export const auth = getAuth(app);
export { app };