import styled from "styled-components";

import BannerImage from "../../assets/banner-background.png";
import TreeForFuture from "../../assets/image-tree.png";

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
    color: var(--blue);
  }
`;

export const OurFuture = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  .Title-OurFuture {
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 30px;
    color: var(--green1);

    margin-top: 59px;
  }
`;

export const OurFutureSection = styled.section`
  width: 821.88px;
  height: 497.32px;

  background-image: url(${TreeForFuture});
  background-size: cover;
  background-position: center;

  position: relative;

  div {
    width: 335px;
    height: 255px;

    background-color: var(--yellow);
    border: 3px solid var(--white);
    border-radius: 10px;
    padding: 28px 20px;

    h4 {
      margin-bottom: 20px;
    }
  }

  .FirstSection {
    position: relative;
    top: 215px;
    right: 85px;
  }

  .SecondSection {
    position: relative;
    top: 215px;
    left: 552px;
  }
`;

export const Partners = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .Logo-Partners {
    display: flex;
    gap: 110px;
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
  min-height: 575px;
  background-color: #012030;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h3{
    color: white;
    font-weight: 700;
    font-size: 30px;
    line-height: 100%
  }

  .data{
    display: flex;
    align-items: center;
    gap: 65.57px;
  }

  .help{
    font: weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
  }

  button{
    all: unset;
    display: flex; 
    align-items: center;
    justify-content: center;
    font: weight: 700;
    font-size: 12px;
    line-height: 15px;
    width: 265px;
    height: 35px;
    border-radius: 10px;
    background: #ffdd65;
    margin-bottom: 48px;
  }
`;

export const Graphic = styled.section`
  background-color: #fff;
  width: 100vw;
`;

export const Communitie = styled.section`
  background-color: #012030;
  max-width: 100vw;
`;
