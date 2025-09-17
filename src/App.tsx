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
import { initAuthMemoryPersistence, tryAutoLogin } from "./utils/authClient";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    let unsubscribe = () => {};
    (async () => {
      await initAuthMemoryPersistence(auth);
      await tryAutoLogin(auth);
      unsubscribe = onAuthStateChanged(auth, (user) => {
        setIsAuthenticated(!!user);
        setBooted(true);
      });
    })();
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