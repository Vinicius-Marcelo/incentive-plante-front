import styled from "styled-components";

export const InputInformation = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 65px 0 22px 0;

        gap: 5px;

        h3{
            font-weight: 700;
            font-size: 30px;
            line-height: 30px;
            color: #006838;
        }
    }

    span{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 46px;
    }

    .inputs{
        display: flex;
        flex-direction: column;

        input{
            width: 450px;
            height: 40px;
            border-radius: 5px;
            border: 1px solid var(--black);
            padding: 0 16px;
            margin-top: 5px;
        }
    }

    .email{
        margin: 26px 0 46px 0;

    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 265px;
        height: 35px;

        margin-bottom: 62px;
        background: #ffdd65;
        border-radius: 10px;

        font-weght: 700;
        font-size: 12px;
        line-height: 15px;
    }
`;