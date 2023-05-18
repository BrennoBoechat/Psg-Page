import { styled } from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    background: #0B1421;
    width: 100%;
    height: 432px;
    justify-content: space-evenly;

    div {
        display: flex;
        flex-direction: column;
        margin-top: 50px;

        ul {
            flex-direction: column;
            display: flex;
            gap: 25px;
        }

        h1{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
            color: #F9F9F9;
            margin-bottom: 40px;
        }

        li {
            font-family: 'Inter';
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            color: #F9F9F9;
            cursor: pointer;
            list-style: none;
        }
    }
`