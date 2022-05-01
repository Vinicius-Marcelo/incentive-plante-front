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
        margin: 43px 0 19px 0;

        h3{
            font-height: 700;
            font-size: 30px;
            line-height: 30px;
        }
    }

    .cards{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 120px 0 113px;
        margin-top: 20px;
        background: #012030;
        height: 440px;
        min-width: 100vw;
        color: #fff;

        .card-informaction{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #fff;
        }

        .left{
            gap: 10px;
        }

        .share{
            margin-top: 50px;
        }

        .card-two{
            img{
                height: 522px;
                width: 521px;
            }
        }
    }
`;