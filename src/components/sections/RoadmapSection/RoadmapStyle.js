import styled from 'styled-components'
import { FontSize11 } from "../../../GlobalStyles";

export const Section = styled.section`
    background-color: ${({theme}) => theme.body};
    padding: 1rem;
`
export const Container = styled.div`
    width: 95%;
    height: 200vh;
    background-color: ${({theme}) => theme.body};
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (min-width: 1100px){
        width: 80%;
    }
    @media (min-width: 1400px){
        width: 70%;
    }
    @media (min-width: 1600px){
        width: 60%;
    }
    @media (min-width: 1800px){
        width: 50%;
    }
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
export const Item = styled.li`
    display: grid;
    justify-items: end;
`
export const ListItem = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;
  @media (min-width: 768px){
      & > ${Item}:nth-child(odd) {
          justify-items: start;
          & > div {
              border-radius: 50px 0 50px 0;
              & > div {
                  border-radius: 40px 0 40px 0;
              }
          }
      }
  }
`