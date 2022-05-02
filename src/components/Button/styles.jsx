import styled from "styled-components";

export const Container = styled.button`
  width: 107.82px;
  height: 45px;
  border-radius: 10px;

  background-color: ${({ isYellow }) => (isYellow ? "#FFDD65" : "#6E9D3E")};
  color: ${({ isYellow }) => (isYellow ? "#012030" : "#FFFFFF")};

  font-weight: 500;
  font-size: 16px;

  margin: 15px;
`;
