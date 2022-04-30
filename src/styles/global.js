import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --gray: #C4C4C4;
    --green: #529E63;
    --transparent-green: #529E6380;
    --light-green: #97CAA2;
    --dark-green: #A5B4A8;
    --white: #F0EAEA;
    --black: #121212;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter'
  }

  body, #root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh;
  }

  button {
    cursor: pointer;
  }


  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
