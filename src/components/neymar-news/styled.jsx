import { styled } from "styled-components";

export const NeymarNewsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

    .neymar-news {
        display: flex;
        max-width: 500px;
        height: fit-content;
        flex-direction: column;
        justify-items: center;
        color:#F9F9F9;
        gap: 30px;

        h1 {
            font-family: 'Inter';
            font-style: italic;
            font-weight: 700;
            font-size: 78px;
            line-height: 94px;
            color: #F9F9F9;
        }

        p {
            font-family: 'Inter';
            font-style: italic;
            font-weight: 500;
            font-size: 24px;
            line-height: 160%;
            color: #F9F9F9;
        }

        .button-news {
            background: #DA2535;
            border-radius: 4px;
            width: 162px;
            height: 46px;
            border: none;
            font-size: 1.5rem;
            color: #F9F9F9;
            font-weight: 600;
        }
    }

    span {
        width: 100%;
        max-width: 450px;
        height: fit-content;
    }
`