import styled from "styled-components";

export const Container = styled.main`
  min-height: calc(100vh - 100px);
`;

export const Banner = styled.section`
  height: 200px;
  background-color: var(--green);
  padding: 20px 60px;
`;

export const ProjectText = styled.section`
  height: 200px;
  background-color: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px 60px;

  h2 {
    margin-bottom: 30px;
  }
  p {
  }
`;

export const BoxCarousel = styled.section`
  background-color: var(--green);
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 20px 60px;

  height: 250px;

  div {
    width: 200px;
    height: 200px;
    background-color: var(--green);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  }
`;

export const DifferentialText = styled.section`
  height: 200px;
  background-color: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px 60px;

  h2 {
    margin-bottom: 30px;
  }
  p {
  }
`;

export const Graphic = styled.section`
  background-color: var(--transparent-green);

  height: 200px;
  padding: 20px 60px;
`;

export const Map = styled.section`
  background-color: var(--white);

  height: 500px;
  padding: 20px 60px;
`;

export const BoxInfo = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 60px;

  background-color: var(--green);

  .info {
    width: 350px;
    height: 300px;
    background-color: var(--green);

    padding: 20px;
    text-align: center;
    display: flex;
    align-items: center;
  }

  .info--second {
    border-left: 2px solid;
    border-right: 2px solid;
    border-color: var(--white);

    width: 400px;
    margin: 0 25px;
  }
`;
