import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 125px;

    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin: 88px 0 75px 0;

        h3{
            font-height: 700;
            font-size: 30px;
            line-height: 30px;
        }
    }

    .bioa{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 522px;
        width: 100vw;
        background: #012030;

        img{
            height: 557px;
            width: 527px;
        }
    }
`;