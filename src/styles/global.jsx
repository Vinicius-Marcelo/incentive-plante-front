import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --yellow: #FFDD65;
    --blue: #012030;
    --white: #FFFFFF;
    --green: #006838;
    --black: #000000;
    --gray: #012030;
    --modal: #6E9D3E;
    --modal-background: rgba(1, 32, 48, 0.8);
    --placeholder: #BEBEBE;
    --border: #DAFDBA;
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
