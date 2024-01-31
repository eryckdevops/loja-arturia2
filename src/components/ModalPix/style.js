import styled from 'styled-components'
import theme from "../../styles/theme"

export const BackgroundModal = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0rem;
    left: 0rem;
    background: rgb(0,0,0, 0.55);
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    
    `

export const ContainerModal = styled.div`
    width: 550px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0;
    position: relative;

    img {
        width: 70%;
        margin: 0 auto;
    }

    p {
        font-size: 1.2rem;
        font-weight: 800;
        margin: 10px auto;
    }

    button {
        width: 70%;
        height: 40px;
        background: #ffa724;
        margin-top: 1rem;
        font-weight: 700;
        margin: 0 auto;
    }

    span {
        margin-left: 5rem;
    }

    div { svg {
        position: absolute;
        top: 2rem;
        font-size: 2rem;
        right: 2rem;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
            color: #ffa724;
        }
    } }
    
    
    `