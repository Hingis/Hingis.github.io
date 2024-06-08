import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    font-family: Montserrat, sans-serif;
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
