import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --yellow: #FFDD65;
    --blue: #012030;
    --white: #FFFFFF;
    --green1: #006838;
    --black: #000000;
    --modal: #6E9D3E;
    --modal-background: rgba(1, 32, 48, 0.8);
    --placeholder: #BEBEBE;
    --border: #DAFDBA;
    --gray: #C4C4C4;
    --green2: #529E63;
    --transparent-green: #529E6380;
    --light-green: #97CAA2;
    --dark-green: #A5B4A8;
    --dark-white: #F0EAEA;
    --light-black: #121212;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, #root {
    font-family: 'Inter', sans-serif;

    height: 100vh;
  }

  button {
    all: unset;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    all: unset;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
