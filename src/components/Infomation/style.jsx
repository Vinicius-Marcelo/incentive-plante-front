import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin: 120px 0 53px 0;

        h3{
            font-height: 700;
            font-size: 30px;
            line-height: 30px;
        }
    }

    .information{   
        background: #f9f9f9;  

        div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 73px 0 67px;

            height: 100px;
            width: 1060px;
            background: #f9f9f9;

            border: 1px solid #000;
            border-radius: 0 0 20px 20px;
            bor-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
        }
        
        .card-on{
            border-radius: 20px;
            position: absolute;
            z-index: 3;
            top: 190px;
        }

        .card-two{
            position: absolute;
            z-index: 2;
            top: 272px;
        }
        
        .card-theer{
            margin-top: 150px;
        }
    }
`;