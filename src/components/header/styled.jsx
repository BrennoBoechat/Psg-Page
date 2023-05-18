import {styled} from "styled-components"

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 30px;
    position: absolute;

    .psg-logo {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 64px;
            height: 64px;
        }
    }

    nav {
        display: flex;
        align-items: center;
    }

    ul {
        display: flex;
        width: 100%;
        justify-content: center;
        list-style: none;
        gap: 40px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #F9F9F9;
        cursor: pointer;
    }

    .login-register {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;

        .login {
            background-color: transparent;
            border: none;
            width: 73px;
            height: 22px;
            font-size: 18px;
            color: white;
            font-weight: 600;
        }

        .register {
            background: #DA2535;
            width: 163px;
            height: 46px;
            color: white;
            font-size: 18px;
            border: none;
            border-radius: 4px;
            font-weight: 600;
        }
    }
`