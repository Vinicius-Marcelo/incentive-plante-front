import styled from "styled-components";

export const Container = styled.header`
  height: 105px;

  background-color: var(--yellow);
  padding: 0 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 500;
  font-size: 16px;

  .Logo {
    width: 165px;
    height: 88px;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 45px;
  }

  a {
    color: var(--blue);
  }
`;
