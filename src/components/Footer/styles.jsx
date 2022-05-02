import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 110px 0 110px;
  background: #ffdd65;
  height: 232px;

  .menu{
    width: 256px;
    height: 86px;

    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    div{
      display: flex;
      justify-content: flex-start;
      gap: 81px;
      margin-bottom: 48px;
    }
  }

  .redes{
    width: 140px;

    img{
      margin-left: 9px;
    }
  }
`;
