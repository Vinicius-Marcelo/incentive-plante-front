import styled from "styled-components";
import TopArrow from '../../assets/top-arrow.svg';
import BottomArrow from '../../assets/bottom-arrow.svg';

export const Map = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  
  .title-adopt h3{
    font-weight: 700;
    font-size: 30px:
    line-height: 100%;
    color: #006838;
  }

  .caption{
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
      margin-bottom: 65px;
  }

  .map{
    width: 650px;
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
    left: 0px;
  }
  .north{
    background: #b2d768;
  }

  .area-north-east{
    top: 110px;
    right: 0;
  }
  .north-east{
    background: #ff9900;
  }

  .area-midwest{
    top: 220px;
    left: 100px;
  }
  .midwest{
    background: #ffd52a;
  }

  .area-southeast{
    top: 280px;
    right: 50px;
  }
  .southeast{
    background: #cd0000;
  }

  .area-south{
    top: 380px;
    right: 180px;
  }
  .south{
    background: #3b6097;
    :hover{
        .region-south span{
            background-image: url(${TopArrow});
        }
    }
  }

  .regions{
      width: 800px;
      display: flex;
        align-items: center;
        flex-direction: column;
        h4, p{
            font-weight: 700;
            font-size: 20px;
            line-height: 24.2px;
        }

        h4{
          margin-bottom: 38px;
          text-align: left;
        }

        div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 783.14px;
            margin-bottom: 81.68px;
            border-bottom: 1.5px solid #529e63;
        }
        .region-south span{
            width: 30px;
            height: 30px;
            background-image: url(${BottomArrow});
        }
  }
`;