import styled from "styled-components";

export const ConteinerProducts = styled.ul `
    display: flex;
    gap: 1rem;
    overflow: scroll;
    list-style: none;

    li {
        height: 346px;
        border: 2px solid #E0E0E0;
        border-radius: 5px;
    }

    div {
        width: 258px;
        height: 150px;
        background-color: #F5F5F5;
        display: flex;
        justify-content: center;
    }

    img {
        width: 150px;
        height: 150px;
    }

    h2 {
        font-family: 'Inter';
        font-weight: 700;
        font-size: 18px;
        margin-left: 1rem;
    }

    p {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 12px;
        color: #828282;
        margin-left: 1rem;
    }

    h3 {
        font-family: 'Inter';
        font-weight: 600;
        font-size: 14px;
        color: #27AE60;
        margin-left: 1rem;
    }

    button {
        width: 106px;
        height: 40px;
        background-color: #27AE60;
        border-radius: 8px;
        border: none;
        color: white;
        margin-left: 1rem;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
    }

    @media (min-width: 1024px) {
        flex-wrap: wrap;
        overflow: hidden;
        margin-left: 10%;
        padding-left: 0;
        width: 53%;
    }

`