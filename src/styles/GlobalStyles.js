import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${css`
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap');
  `}

  html {
    font-family: 'Poppins', sans-serif;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    background: transparent;
    border: 0;
    outline: 0;
  }
  
  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%;
  }
  
  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
`
