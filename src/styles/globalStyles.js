import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to right, #ff6f61, #de4463);
    color: #ffffff;
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;