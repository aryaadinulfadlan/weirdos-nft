import styled from 'styled-components'
import { FontSize11 } from '../../../GlobalStyles'

export const Section = styled.section`
    min-height: 100vh;
    background-color: ${({theme}) => theme.body};
    padding: 1rem;
    position: relative;
    background-color: red;
    overflow: hidden;
`
export const Title = styled.h1`
    text-transform: capitalize;
    color: ${({theme}) => theme.text};
    border-bottom: 2px solid ${({theme}) => theme.text};
    font-size: ${FontSize11};
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 0.5rem;
`
export const Container = styled.div`
    max-width: 80rem;
    margin: 0 auto;
    margin-top: min(4vw, 3rem);
    display: grid;
    gap: 1rem;
    padding: 0 2.5rem;
    @media (min-width: 450px){
        padding: 0 4rem;
    }
    @media (min-width: 500px){
        padding: 0 5rem;
    }
    @media (min-width: 550px){
        grid-template-columns: 1fr 1fr;
        padding: 0;
        gap: 1.5rem;
    }
    @media (min-width: 700px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`