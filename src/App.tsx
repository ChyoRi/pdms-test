import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import "./style/fonts.scss";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import FindPasswordPage from "./pages/FindPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseconfig";
import { isUserApproved, logoutAll } from "./utils/authClient";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // 화면 렌더링은 승인 검사를 기다리지 않는다.
      // (검사가 지연되면 booted가 false로 남아 빈 화면이 된다)
      setIsAuthenticated(!!user);
      setBooted(true);

      if (!user) return;
      // 가입 직후에는 일시적으로 로그인 상태가 되므로 제외
      if (window.location.hash.startsWith("#/signup")) return;

      // ★ 추가: 로그인 버튼 경로뿐 아니라 세션 복구 경로에도 승인 검사를 적용.
      //    (기존에는 LoginPage에서만 검사해서, 복구된 세션은 승인이 취소돼도 들어올 수 있었다)
      void (async () => {
        let approved = false;
        try {
          approved = await isUserApproved(user.uid);
        } catch {
          // 일시적 네트워크 오류로 로그아웃시키지 않는다.
          // 데이터 접근은 Firestore 규칙이 막으므로 UI만 잠시 열려 있는 상태가 된다.
          return;
        }
        if (!approved && auth.currentUser?.uid === user.uid) {
          await logoutAll(auth);
        }
      })();
    });
    return () => unsubscribe();
  }, []);

  // 해시 브리지: 해시 앞(search)에 온 쿼리를 해시 뒤로 복사
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const mode = sp.get("mode");
    const oob = sp.get("oobCode");
    if (mode === "resetPassword" && oob) {
      if (!window.location.hash.startsWith("#/reset-password")) {
        window.location.hash = `/reset-password${window.location.search}`;
      }
    }
  }, []);

  if (!booted) return null;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/main" replace />
            ) : (
              <LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />
            )
          }
        />
        <Route
          path="/main"
          element={isAuthenticated ? <MainPage /> : <Navigate to="/" replace />}
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/find-password" element={<FindPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/main" : "/"} replace />}
        />
      </Routes>
    </Router>
  );
}