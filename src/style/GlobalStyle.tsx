import { createGlobalStyle } from "styled-components";
import PretendardRegular from "../assets/fonts/Pretendard-Regular.ttf";
import PretendardBold from "../assets/fonts/Pretendard-Bold.ttf";

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

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardRegular}) format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardBold}) format('truetype');
    font-weight: 700;
  }

`;

export default GlobalStyle;