import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import './App.css';
import './style/fonts.scss';
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage';
import SignUpPage from "./pages/SignUpPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseconfig";
import { initAuthMemoryPersistence, tryAutoLogin } from "./utils/authClient";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [booted, setBooted] = useState(false); // 초기화/자동로그인 완료 여부

  useEffect(() => {
    let unsubscribe = () => {};
    (async () => {
      // 1) Firebase 토큰을 디스크에 남기지 않도록 메모리 퍼시스턴스
      await initAuthMemoryPersistence(auth);
      // 2) 쿠키(암호화+base64)에서 자동로그인 시도
      await tryAutoLogin(auth);
      // 3) 인증 상태 구독
      unsubscribe = onAuthStateChanged(auth, (user) => {
        setIsAuthenticated(!!user);
        setBooted(true);
      });
    })();
    return () => unsubscribe();
  }, []);

  if (!booted) return null;

  return (
    <Router basename="/pdms-test">
      <Routes>
        {/* 이미 로그인되어 있으면 / → /main 으로 우회 */}
        <Route
          path="/"
          element={
            isAuthenticated
              ? <Navigate to="/main" replace />
              : <LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />
          }
        />
        {/* 보호 라우트 */}
        <Route
          path="/main"
          element={isAuthenticated ? <MainPage /> : <Navigate to="/" replace />}
        />
        <Route path="/signup" element={<SignUpPage />} />
        {/* 그 외 모든 경로 정리 */}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/main" : "/"} replace />}
        />
      </Routes>
    </Router>
  )
}