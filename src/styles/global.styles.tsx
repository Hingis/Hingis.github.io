import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    font-family: 'Montserrat', sans-serif;
    font-feature-settings: 'liga' 1, 'calt' 1;
    }
  }
  a {
    text-decoration: none;
  }
  button {
    font-family: 'Montserrat', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  #__next {
    height: 100%;
    overflow: auto;
  }
`;
