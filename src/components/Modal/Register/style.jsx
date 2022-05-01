import styled from "styled-components";

export const Container = styled.div`
  background-color: #12121295;
  min-height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  inset: 0;

  svg {
    position: absolute;
    top: 15px;
    right: 15px;

    color: #f9f9f9;

    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #f9f9f9;

  width: 300px;
  height: 380px;

  h1 {
    font-weight: 700;
    font-size: 20px;
    color: var(--white);

    border-bottom: 1px solid var(--white);
    margin-bottom: 15px;
  }

  input {
    height: 25px;
    width: 200px;

    border-radius: 3px;

    margin: 10px 0;
    padding-left: 15px;

    border: 1px solid #121212;
  }

  button {
    width: 200px;
    height: 30px;

    border-radius: 3px;

    margin: 15px 0;
  }

  p {
    span {
      color: #999999;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;