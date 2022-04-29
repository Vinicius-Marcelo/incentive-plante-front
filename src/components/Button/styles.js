import styled from "styled-components";

export const Container = styled.button`
  min-width: 90px;
  height: 30px;
  border-radius: 3px;

  background-color: var(--dark-green);
  border: 2px solid var(--green);
  color: var(--green);

  font-weight: bold;
  letter-spacing: 1px;

  margin: 15px;

  :hover {
    background-color: var(--green);
    color: var(--dark-green);
  }
`;
