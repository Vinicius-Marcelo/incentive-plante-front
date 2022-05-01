import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--transparent-green);
  height: 150px;
  padding: 0 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SocialMidias = styled.section`
  width: 200px;
  display: flex;
  justify-content: space-around;

  .social_icon {
    color: var(--green);

    :hover {
      color: var(--transparent-green);
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Copyright = styled.section`
  display: flex;
  align-items: center;

  color: var(--green);

  p {
    margin-right: 5px;
  }
`;
