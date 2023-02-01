import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    text-decoration: none;
    outline : none;
    font-family: "Apple SD Gothic Neo",'Noto Sans KR', sans-serif;
  }
  
  body {
  }
  html {
    font-size: 12px;
  }
`;

export default GlobalStyle;
