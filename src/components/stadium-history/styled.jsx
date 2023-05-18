import { styled } from "styled-components";

export const StadiumContainer = styled.div`
        display: flex;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background: url("src/assets/stadium.png");
        background-size: cover;
        justify-content: center;
        align-items: center;

        .stadium-box {
            display: flex;
            flex-direction: column;
            width: 1020px;
            height: 449px;
            background-color: white;
            padding: 40px;
            gap: 40px;

            .title-stadium {

                h1 {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 32px;
                color:#0B1421;
            }

            }

            .title-stadium::after {
                width: 3px;
                height: 24px;
                content: "";
                background: #DA2535;
            }

            p {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                color: #515151;
                line-height: 170%;
            }

            h2 {
                color: #DA2535;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                cursor: pointer;
            }
        }
`