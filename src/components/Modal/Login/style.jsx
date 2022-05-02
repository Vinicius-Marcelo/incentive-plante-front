import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--modal-background);
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  inset: 0;
  z-index: 3;

  svg {
    cursor: pointer;

    position: absolute;
    top: 40px;
    right: 450px;

    font-size: 1.5rem;
    color: var(--white);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;

  width: 382px;
  height: 480px;

  background-color: var(--modal);
  border: 1px solid var(--border);
  border-radius: 14.0345px;
  padding: 25px 15px;

  div {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  label {
    color: var(--blue);
  }

  input {
    width: 300px;
    height: 27.5px;

    background-color: var(--white);
    border-radius: 5px;
    padding: 12.5px 16px;
  }

  input::placeholder {
    color: var(--placeholder);
  }

  button {
    width: 330px;
    height: 40px;

    border-radius: 5px;

    font-weight: 700;
    font-size: 16px;
    color: var(--blue);

    margin: 15px 0;
  }

  .Button-Entry {
    background-color: var(--yellow);
  }

  .Gmail {
    color: var(--blue);
  }

  .Button-Gmail {
    display: flex;
    align-items: center;
    gap: 15px;

    background-color: var(--white);
  }

  .Without-Signup {
    color: var(--white);
  }

  .Underline {
    cursor: pointer;
    color: var(--yellow);
    font-size: 16px;
    text-decoration: underline;
  }
`;
