import styled from "styled-components";
import BannerUser from '../../assets/banner-user.svg';

export const Container = styled.section`
    min-height: 100vh;
    width: 100vw;

    .name-user{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: 500px;
        width: 100vw;

        background-image: url(${BannerUser});
        background-repeat: no-repeat;
        background-size: cover;
        color: #fff;
        font-height: 500;

        div{
            width: 700px;
            text-align: center;
        }

        h2{
            font-size: 50px;
            line-height: 50px;
            margin-bottom: 100px;
        }

        p{
            font-size: 20px;
            line-height: 30px;
        }
    }
`;