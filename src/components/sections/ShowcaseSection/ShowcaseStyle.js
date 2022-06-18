import styled, { keyframes } from 'styled-components'

export const Section = styled.section`
    height: 100vh;
    background-color: #202020;
    display: grid;
    gap: min(10vw, 5rem);
    align-content: center;
    padding: 1rem;
    overflow-x: hidden;
    & > *:first-child {
        animation-duration: 10s;
        @media (min-width: 768px){
            animation-duration: 20s;
        }
    }
    & > *:last-child {
        animation-duration: 15s;
        @media (min-width: 768px){
            animation-duration: 15s;
        }
    }
`
const moveAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`
export const Row = styled.div`
    animation: ${moveAnimation} linear infinite ${({direction}) => direction};
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(6, 13rem);
    gap: 2rem;
    @media (min-width: 768px){
        grid-template-columns: repeat(6, 15rem);
        gap: 3rem;
    }
`