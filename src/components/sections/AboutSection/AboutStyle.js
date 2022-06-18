import styled from 'styled-components'
import { FontSize2 } from '../../../GlobalStyles'

export const Section = styled.section`
    height: 100vh;
    
    background-color: #202020;
    display: grid;
    align-items: center;
    overflow: hidden;
`
export const Container = styled.div`
    height: 90%;
    padding: 1rem;
    display: grid;
    grid-template-rows: 0.7fr 1fr;
    gap: 1rem;
    max-width: 85rem;
    margin: 0 auto;
    @media (min-width: 600px){
        grid-template-rows: 0.8fr 1fr;
    }
    @media (min-width: 900px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }
    @media (min-width: 1100px){
        grid-template-columns: 0.7fr 1fr;
    }
`
export const AboutDesc = styled.div`
    color: white;
    font-size: ${FontSize2};
    text-align: center;
    width: 80%;
    height: 90%;
    align-self: end;
    margin: 0 auto;
    display: grid;
    justify-items: center;
    align-content: space-evenly;
    @media (min-width: 600px){
        width: 90%;
    }
    @media (min-width: 900px){
        width: 100%;
        align-self: center;
        text-align: left;
        height: 80%;
    }
    @media (min-width: 1100px){
        width: 90%;
        height: 70%;
    }
    h1 {
        text-transform: capitalize;
        width: 90%;
        @media (min-width: 900px){
            width: 100%;
        }
    }
`