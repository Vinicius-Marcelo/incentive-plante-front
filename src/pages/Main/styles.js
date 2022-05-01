import styled from "styled-components";
import BannerImage from '../../assets/banner-background.png'

export const Container = styled.main`
  min-height: calc(100vh - 100px);
`;

export const Banner = styled.section`
  height: 530px;
  max-width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  background-image: url(${BannerImage});
  background-size: cover;
  background-position: center;

  color: var(--white);

  padding: 0 0 65px 60px;

  div {
    width: 290px;

    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  h1 {
    font-weight: 500;
    font-size: 37.4156px;
  }

  h2 {
    font-weight: 700;
    font-size: 30px;
  }

  button {
    width: 265px;
    height: 35px;

    background: var(--yellow);
    border-radius: 10px;

    font-weight: 700;
    font-size: 12px;
    color: var(--gray);
  }
`;

export const OurFuture = styled.article`
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

export const OurFutureSection = styled.section`
`;

export const Partners = styled.section`
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
