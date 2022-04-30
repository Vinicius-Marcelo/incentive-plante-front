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
  min-height: 575px;
  background-color: #012030;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .title-numbers{
    display: flex;  
    justify-content: center;
    height: 30px;
    margin-top: 26px;
  }

  h3{
    margin-bottom: 30px;
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
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-adopt{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 33.02px 0 11.82px 0;  
  }
  
  h3{
    font-weight: 700;
    font-size: 30px:
    line-height: 100%;
    color: #006838;
  }

  span{
    font-weight: 400;
    font-size: 15px:
    line-height: 18px;
    margin-bottom: 47.04px;
  }

  .elements-map{
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100vw;
  }

  .map{
    width: 409px;
    height: 425px;
  }

  label{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
    position: absolute;
  }

  .card{
    width: 31px;
    height: 33px;
  }

  .area-north{
    top: 100px;
    left: 340px;
  }
  .north{
    background: #b2d768;
  }

  .area-north-east{
    top: 110px;
    right: 300px;
  }
  .north-east{
    background: #ff9900;
  }

  .area-midwest{
    top: 220px;
    left: 420px;
  }
  .midwest{
    background: #ffd52a;
  }

  .area-southeast{
    top: 280px;
    right: 370px;
  }
  .southeast{
    background: #cd0000;
  }

  .area-south{
    top: 380px;
    right: 500px;
  }
  .south{
    background: #3b6097;
  }
`;

// export const Map = styled.section`
//   background-color: var(--white);

//   height: 500px;
//   padding: 20px 60px;
// `;

// export const BoxInfo = styled.section`
//   display: flex;
//   justify-content: center;
//   padding: 0 60px;

//   background-color: var(--green);

//   .info {
//     width: 350px;
//     height: 300px;
//     background-color: var(--green);

//     padding: 20px;
//     text-align: center;
//     display: flex;
//     align-items: center;
//   }

//   .info--second {
//     border-left: 2px solid;
//     border-right: 2px solid;
//     border-color: var(--white);

//     width: 400px;
//     margin: 0 25px;
//   }
// `;
