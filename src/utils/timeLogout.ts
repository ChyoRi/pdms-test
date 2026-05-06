import { auth } from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import type { NavigateFunction } from "react-router-dom";
import { logoutAll } from "./authClient";

const IDLE_TIMEOUT_MS = 30 * 60 * 1000; // ★ 테스트용 1분
const LOGIN_PAGE_PATH = "/";

let idleTimer: ReturnType<typeof setTimeout> | null = null;
let isIdleLogoutRunning = false;
let isIdleRedirecting = false;

const ACTIVITY_EVENTS: string[] = [
  "mousemove",
  "mousedown",
  "click",
  "keydown",
  "scroll",
  "touchstart",
];

function clearIdleTimer() {
  if (idleTimer) {
    clearTimeout(idleTimer);
    idleTimer = null;
  }
}

async function logoutByIdle(navigate: NavigateFunction) {
  if (isIdleLogoutRunning) return;

  const user = auth.currentUser;
  if (!user) {
    if (!isIdleRedirecting) {
      isIdleRedirecting = true;
      navigate(LOGIN_PAGE_PATH, { replace: true });
    }
    return;
  }

  isIdleLogoutRunning = true;

  try {
    await logoutAll(auth);

    if (!isIdleRedirecting) {
      isIdleRedirecting = true;
      alert("1분 동안 활동이 없어 자동 로그아웃되었습니다.");
      navigate(LOGIN_PAGE_PATH, { replace: true });
    }
  } catch (err) {
    console.error("자동 로그아웃 중 에러:", err);
  } finally {
    isIdleLogoutRunning = false;
  }
}

function resetIdleTimer(navigate: NavigateFunction) {
  clearIdleTimer();

  if (!auth.currentUser) return;

  idleTimer = setTimeout(() => {
    logoutByIdle(navigate);
  }, IDLE_TIMEOUT_MS);
}

export function startTimeLogoutGuard(navigate: NavigateFunction) {
  const activityHandler = () => {
    resetIdleTimer(navigate);
  };

  ACTIVITY_EVENTS.forEach((eventName) => {
    window.addEventListener(eventName, activityHandler, { passive: true });
  });

  const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
    clearIdleTimer();

    if (!user) return;

    isIdleRedirecting = false;
    resetIdleTimer(navigate);
  });

  return () => {
    clearIdleTimer();

    ACTIVITY_EVENTS.forEach((eventName) => {
      window.removeEventListener(eventName, activityHandler);
    });

    unsubscribeAuth();
  };
}