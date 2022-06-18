import styled from 'styled-components'
import { FontSize5 } from "../../../GlobalStyles";

export const Section = styled.section`
    height: 100vh;
    background-color: ${({theme}) => theme.text};
    color: ${({theme}) => theme.body};
    padding: 1rem;
    display: grid;
    align-content: center;
    justify-items: center;
    gap: 1rem;
`
export const Title = styled.h1`
    text-transform: capitalize;
    border-bottom: 2px solid ${({theme}) => theme.body};
    font-size: ${FontSize5};
    width: fit-content;
    height: fit-content;
    margin: 0 auto;
    margin-bottom: 1rem;
`
export const Container = styled.div`
    width: 90%;
    display: grid;
    gap: 1rem;
    @media (min-width: 600px){
        width: 70%;
    }
    @media (min-width: 768px){
        width: 50%;
    }
    @media (min-width: 1000px){
        width: 40%;
        max-width: 35rem;
    }
`