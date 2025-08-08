import { createGlobalStyle } from "styled-components";
import PretendardBold from "../assets/fonts/Pretendard-Bold.woff2";
import PretendardMedium from "../assets/fonts/Pretendard-Medium.woff2";
import PretendardRegular from "../assets/fonts/Pretendard-Regular.woff2";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
  }

  li {
    list-style: none;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  input {
    border: none;

    &:focus {
      outline: none;
    }
  }

  table {
    border-collapse: collapse;

    th, td {
      border: 1px solid #ccc;
    }
  }

  textarea {
    resize: none;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardBold}) format('woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardMedium}) format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardRegular}) format('woff2');
    font-weight: 400;
  }

`;

export default GlobalStyle;