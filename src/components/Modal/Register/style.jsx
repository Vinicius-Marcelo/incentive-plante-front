import styled from "styled-components";

export const Container = styled.div`
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
  height: 585px;

  background-color: var(--modal);
  border: 1px solid var(--border);
  border-radius: 14.0345px;
  padding: 25px 15px;

  h1 {
    font-weight: 700;
    font-size: 20px;
    color: var(--white);

    padding-bottom: 10px;
    border-bottom: 1px solid var(--white);
    margin-bottom: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  label {
    color: var(--blue);
  }

  input {
    height: 27.5px;

    background-color: var(--white);
    border-radius: 5px;
    padding: 12.5px 16px;
  }

  section {
    display: flex;
    gap: 15px;
  }

  .EachInput {
    width: 300px;
  }

  .Cep-Input {
    width: 160px
  }

  .Idade-Input {
    width: 90px
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

  .Underline {
    cursor: pointer;
    color: var(--yellow);
    font-size: 18px;
    text-decoration: underline;
  }
`;
