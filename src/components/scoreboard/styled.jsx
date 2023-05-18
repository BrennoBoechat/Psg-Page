import { styled } from "styled-components";

export const ScoreBoardContainer = styled.div`
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    gap: 10px;

    .psg {
        width: 7.81vw;
        height: 15.83vh;
    }

    .montp {
        width: 6.77vw;
        height: 13.72vh;
    }

    h2 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 3.2rem;
    }

    .scoreboard {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 6.2rem
    }
`