import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin: 113px 0 81px 0;

        h3{
            font-height: 700;
            font-size: 30px;
            line-height: 30px;
        }
    }

    .cards{
        display: flex;
        justify-content: center;
        gap: 76px;
    }
`;