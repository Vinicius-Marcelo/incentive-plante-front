import styled from "styled-components";
import BannerBackground from "../../assets/banner-dashboard.svg";

export const Container = styled.main``;

export const Banner = styled.section`
  height: 500px;
  background-image: url(${BannerBackground});
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    color: var(--white);
  }
`;

export const TreeSamples = styled.section`
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 43px 0;
  }
`;

export const Trees = styled.ul`
  background-color: var(--blue);
  height: 593px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  li {
    background-color: var(--white);

    width: 340px;
    height: 455px;

    border-radius: 10px;

    img {
      width: 340px;
      height: 175px;
    }

    .info_tree {
      padding: 10px 45px;
      text-align: center;

      p {
        text-align: left;
        margin: 17px 0;
      }

      button {
        margin: 0;
        width: 100%;
        background-color: var(--yellow);
        color: var(--blue);
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }
`;

export const Communities = styled.section`
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 43px 0;
  }

  ul {
    height: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 20px;

    justify-items: center;
    align-items: center;

    padding: 0 100px;
    li {
      img {
      }
    }
  }
`;

export const MoreInfo = styled.section`
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 43px 0;
  }

  div {
    padding: 0 85px;

    .mainInfo {
      height: 100px;
      border: 1px solid var(--black);
      border-radius: 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0 50px;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;

      transition: all 500ms ease-in-out;

      span {
      }

      svg {
        width: 45px;
        height: 45px;
      }
    }

    .mainInfo_details {
      padding: 20px 50px;
      font-size: 20px;
      transition: all 500ms ease-in-out;
    }
  }
`;

export const Biomes = styled.section`
  margin-bottom: 100px;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 60px 0;
  }

  div {
    background-color: var(--blue);
    height: 500px;

    position: relative;

    .biome_brazil {
      height: 557px;

      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
