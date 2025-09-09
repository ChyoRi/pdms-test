import { initializeApp, getApp, getApps } from "firebase/app";
import type { FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

/** base64 → JSON 파서 */
function parseCfgFromB64(b64: string | undefined): FirebaseOptions {
  if (!b64) throw new Error("[ENV] Missing VITE_FB_CFG_B64");
  // atob는 브라우저 내장
  const json = atob(b64.replace(/\s+/g, "")); // 혹시 줄바꿈이 들어가도 대비
  return JSON.parse(json) as FirebaseOptions;
}

const firebaseConfig = parseCfgFromB64(import.meta.env.VITE_FB_CFG_B64);

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const firestore = db; // 기존 호환
export const auth = getAuth(app);
export { app };