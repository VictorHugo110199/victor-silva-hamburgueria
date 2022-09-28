import styled from "styled-components";
import  GlobalStyle  from "../../Style/global";

export const ContainerHeader = styled.div`
    background-color: #F5F5F5;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0.5rem;
    margin-bottom: 2rem;

    img{
        width: 158.94px;
        height: 36.83px;
    }

    div {
        width: 80%;
        max-width: 310px;
        position: relative;
    }

    input {
        border: 2px solid #E0E0E0;
        border-radius: 8px;
        height: 60px;
        width: 100%;
    }

    button {
        position: absolute;
        right: 0%;
        bottom: 18%;
        border-radius: 8px;
        background-color: #27AE60;
        border: none;
        width: 107px;
        height: 40px;
        color: white;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        height: 80px;

        img {
        margin-left: 10%;
        }

        div {
            margin-right: 10%;
        }
    }


`