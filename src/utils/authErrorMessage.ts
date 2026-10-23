// src/utils/authErrorMessage.ts

import { FirebaseError } from "firebase/app";

/**
 * ★ 추가: Firebase 오류 → 사용자 안내 문구(한글)
 *
 * (기존) 회원가입·로그아웃은 error.message(영어 원문)를 그대로 alert에 붙였고,
 *        로그인은 네트워크 오류·반복 시도 차단까지 전부 "비밀번호 틀림"으로 안내했다.
 * (변경) 오류 코드별로 한글 문구를 돌려준다. 모르는 코드는 화면별 기본 문구 + 오류 코드.
 */

export type AuthAction = "login" | "signup" | "resetPassword" | "logout";

/** 화면 공통 문구 */
const COMMON: Record<string, string> = {
  "auth/network-request-failed":
    "네트워크 연결이 원활하지 않습니다.\n\n인터넷 연결을 확인한 뒤 다시 시도해주세요.",
  "auth/too-many-requests":
    "요청이 너무 많아 잠시 제한되었습니다.\n\n잠시 후 다시 시도해주세요.",
  "auth/invalid-email": "이메일 형식이 올바르지 않습니다. 예) name@example.com",
  "auth/user-disabled": "사용이 중지된 계정입니다.\n\n관리자에게 문의해주세요.",
};

/** 화면별 문구 (공통 문구보다 우선) */
const BY_ACTION: Record<AuthAction, Record<string, string>> = {
  login: {
    // 계정 존재 여부를 드러내지 않도록 하나의 문구로 묶는다
    "auth/invalid-credential": "이메일 또는 비밀번호가 올바르지 않습니다.",
    "auth/user-not-found": "이메일 또는 비밀번호가 올바르지 않습니다.",
    "auth/wrong-password": "이메일 또는 비밀번호가 올바르지 않습니다.",
    "auth/missing-password": "비밀번호를 입력해주세요.",
  },
  signup: {
    "auth/email-already-in-use":
      "이미 가입된 이메일입니다.\n\n로그인하거나 비밀번호 찾기를 이용해주세요.\n(승인 대기 중인 계정은 관리자 승인 후 로그인할 수 있습니다.)",
    "auth/missing-password": "비밀번호를 입력해주세요.",
    "auth/weak-password": "비밀번호는 6자 이상 입력해주세요.",
    // users 문서 저장(setDoc)이 규칙에 막힌 경우
    "permission-denied":
      "회원 정보를 저장하지 못했습니다.\n\n관리자에게 문의해주세요.",
  },
  resetPassword: {
    "auth/user-not-found": "등록되지 않은 이메일입니다.",
  },
  logout: {},
};

const FALLBACK: Record<AuthAction, string> = {
  login: "로그인 중 오류가 발생했습니다.\n\n잠시 후 다시 시도해주세요.",
  signup: "회원가입 중 오류가 발생했습니다.\n\n잠시 후 다시 시도해주세요.",
  resetPassword: "메일 발송 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
  logout: "로그아웃 중 오류가 발생했습니다.\n\n잠시 후 다시 시도해주세요.",
};

export function authErrorMessage(err: unknown, action: AuthAction): string {
  const code = err instanceof FirebaseError ? err.code : undefined;
  if (!code) return FALLBACK[action];

  const message = BY_ACTION[action][code] ?? COMMON[code];
  if (message) return message;

  // 모르는 코드는 문의 시 원인을 찾을 수 있도록 코드만 덧붙인다
  return `${FALLBACK[action]}\n(오류 코드: ${code})`;
}
