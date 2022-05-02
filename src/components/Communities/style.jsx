import styled from "styled-components";

export const Communities = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .cards{
        display: flex;
        justify-content: center;
        align-items: center; 
    }

    .title h3{
        color: white;
        font-weight: 700;
        font-size: 30px;
        line-height: 100%

        margin-bottom: 25px;
    }

    .cards{
        gap: 20px;
    }

    .cards div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 340px;
        height: 410px;

        margin-bottom: 45px;
        background: #fff;
        border-radius: 10px;

        font-weight: 400;
        font-size: 15px;
        line-height: 18.15px;
        text-align: center;
    }

    .cards .card-on {
        padding: 0 21px 0 40px;
        img {
            margin-bottom: 110px;
        }
    }

    .cards .card-two {
        padding: 0 24px 0 37px;
        img {
            margin-bottom: 65px;
        }
    }

    .cards .card-theer {
        padding: 0 24px 0 37px;
        img {
            margin-bottom: 94px;
        }
    }

    span{
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #fff;
        margin-bottom: 12px;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 265px;
        height: 35px;

        margin-bottom: 49px;
        background: #ffdd65;
        border-radius: 10px;

        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
    }
`;
