import styled from "styled-components";

export const ContainerCard = styled.ul `
    list-style: none;
    padding-left: 0;
    width:90%;
    margin-left: 5%;

    @media (min-width: 1024px){
        margin-right: 10%;
        width: 26%;
        max-width: 312px;
        margin-left: 0.5rem;
    }
`

export const HearderLi = styled.li `
    height: 65px;
    background-color: #27AE60;
    border-radius: 5px 5px 0px 0px;
    display: flex;
    align-items: center;

    p {
        margin-left: 5%;
        font-family: 'Inter';
        font-weight: 700;
        font-size: 18px;
        color: #FFFFFF;
    }
    
`

export const LiAlert = styled.li `
    text-align: center;
    background-color: #F5F5F5;
    padding: 3rem;
    border-radius: 0px 0px 5px 5px;

    h2 {
        font-family: 'Inter';
        font-weight: 700;
        font-size: 18px;
    }

    p {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 14px;
    }
`

export const CardProductCard = styled.li `
    background-color: #F5F5F5;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;

    section {
        display: flex;
        gap: 10px;
        width: 73%;
    }

    img {
        width: 70px;
        height: 70px;
        background-color: #E0E0E0;
        border-radius: 4px;
        margin-left: 5%;
    }

    h2 {
        font-family: 'Inter';
        font-weight: 700;
        font-size: 16px;
    }

    p {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 12px;
        color: #828282
    }

    button {
        margin-right: 5%;
        border: none;
        background-color:  #F5F5F5;
        color: #BDBDBD;
        font-weight: 500;
        font-size: 12px;
        cursor: pointer;
    }
`

export const CounterTotal = styled.li `
    background-color: #F5F5F5;
    border-top: 2px solid #E0E0E0;
    border-radius: 0px 0px 5px 5px;

    div {
        display: flex;
        justify-content: space-between;
    }

    h4 {
        font-family: 'Inter';
        font-weight: 600;
        font-size: 14px;
        color: #333333;
        margin-left: 5%;
    }

    p {
        font-family: 'Inter';
        font-weight: 600;
        font-size: 14px;
        color: #828282;
        margin-right: 5%;
    }

    button {
        height: 60px;
        width: 90%;
        background-color: #E0E0E0;
        border-radius: 8px;
        border: none;
        margin-left: 5%;
        margin-bottom: 1rem;
        cursor: pointer;
    }
`