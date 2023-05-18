import { styled } from "styled-components";

export const LatestNewsContainer = styled.div`
    display: flex;
    background-color: white;
    width: 100%;
    height: 800px;
    gap: 50px;

    .news {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .more {
            margin-top: 70px;

                button {
                    width: 193px;
                    height: 46px;
                    background: #DA2535;
                    border-radius: 4px;
                    border: none;

                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 22px;
                    color: #F9F9F9;
                }
            }

        .title {
            display: flex;
            justify-content: flex-end;
            width: 65%;
            flex-direction: row-reverse;
            margin-bottom: 40px;
            gap: 10px;
            align-items: center;
        }
        
            h1 {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 32px;
                line-height: 39px;
            }

            .title::after {
                width: 3px;
                height: 24px;
                content: "";
                background: #DA2535;
            }

        .images {
            display: flex;
            height: 41%;
            width: 65%;
            justify-content: center;
            align-items: center;
            gap: 25px;

            .info-news {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    color: #0B1421;
                    width: 395px;
                    margin-top: 10px;
                }


            .news-title {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 396px;

                .button-news {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 20px;
                    color: #DA2535;
                    margin-top: 10px;
                }

                .date {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 20px;
                    color: rgba(11, 20, 33, 0.45);
                }
            }


        img {
            width: 396px;
        }

        }
    }
`