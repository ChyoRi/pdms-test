import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import GlobalStyle from './style/GlobalStyle.tsx';
import { ThemeProvider } from 'styled-components';
import theme from './style/ThemeProvide.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </StrictMode>,
)
