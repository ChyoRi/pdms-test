import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from 'react'
import './App.css';
import './style/fonts.scss';
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage';
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />} />
        <Route path='/main' element={isAuthenticated ? <MainPage /> : <Navigate to='/' />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </Router>
  )
}