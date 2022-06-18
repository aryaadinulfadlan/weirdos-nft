import React from 'react'
import styled from 'styled-components'
import CoverVideo from '../../CoverVideo'
import TypeWriterText from '../../TypeWriterText'
import RoundTextBlack from '../../assets/Rounded-Text-Black.png'
import { keyframes } from 'styled-components'

const Section = styled.section`
  background-color: ${props => props.theme.body};
  min-height: calc(100vh - ${props => props.theme.navHeight});
  position: relative;
`
const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px){
    width: 85%;
  }
  @media (max-width: 768px){
    flex-direction: column-reverse;
    width: 100%;
    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`
export const Round = styled.div`
  position: absolute;
  right: 90%;
  bottom: 2rem;
  width: 6rem;
  height: 6rem;
  border: 1px solid ${({theme}) => theme.text};
  border-radius: 50%;
  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }
  @media (max-width: 768px){
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
  }
  @media (max-width: 768px){
    right: 1rem;
  }
`
export const Circle = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({theme}) => theme.text};
  color: ${({theme}) => theme.body};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${({theme}) => theme.fontxl};
  @media (max-width: 768px){
    width: 2rem;
    height: 2rem;
    font-size: ${({theme}) => theme.fontlg};
  }
`
export default function Home() {
  return (
    <Section id='home'>
      <Container>
        <Box>
          <TypeWriterText/>
        </Box>
        <Box>
          <CoverVideo/>
        </Box>
        <Round>
          <Circle>&#x2193;</Circle> 
          <img src={RoundTextBlack} alt="Rounded" />
        </Round>
      </Container>
    </Section>
  )
}
