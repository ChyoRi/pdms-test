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
 * - DEV(import.meta.env.DEV)는 "개발 서버"에서만 true
 * - 빌드 산출물에서는 DEV=false가 정상
 * - 따라서 build:dev까지 포함해 dev/prod를 나누려면 MODE로 분기해야 함
 */
const isDevMode = import.meta.env.MODE === "development";

const b64 = isDevMode
  ? import.meta.env.VITE_FB_CFG_B64_DEV
  : import.meta.env.VITE_FB_CFG_B64_PROD;

const firebaseConfig = parseCfgFromB64(b64);

// ★ 안전장치(권장): development 모드인데 운영 projectId면 차단
if (isDevMode && (firebaseConfig as any).projectId === "pdms-eda37") {
  throw new Error("[SAFEGUARD] development 모드에서 운영 Firebase 연결 차단");
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const firestore = db; // 기존 호환
export const auth = getAuth(app);
export { app };

// 실행 확인 로그(원하면 유지)
console.log(
  "[Firebase]",
  "MODE=", import.meta.env.MODE,
  "DEV=", import.meta.env.DEV,
  "projectId=", (app.options as any).projectId
);