import React from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel'
import Button from '../../Button'
import { ThemeProvider } from 'styled-components'
import { dark } from "../../../Themes";

const Section = styled.section`
  min-height: 100vh;
  background-color: ${({theme}) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const Container = styled.div`
  width: 75%;
  /* min-height: 80vh; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  @media (max-width: 1150px){
    width: 85%;
  }
  @media (max-width: 1024px){
    width: 100%;
    grid-template-columns: 1fr;
    /* & > *:last-child {
      width: 80%;
    } */
  }
  @media (max-width: 768px){
    /* & > *:last-child {
      width: 90%;
    } */
  }
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  min-height: 60vh;
  @media (max-width: 640px){
      min-height: 50vh;
  }
`
const Title = styled.h2`
  font-size: ${({theme}) => theme.fontxxl};
  color: ${({theme}) => theme.body};
  text-transform: capitalize;
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1024px){
      width: 100%;
      text-align: center;
  }
  @media (max-width: 768px){
      font-size: ${({theme}) => theme.fontxl};
  }
  @media (max-width: 640px){
      font-size: ${({theme}) => theme.fontlg};
  }
`
const Subtext = styled.p`
  font-size: ${({theme}) => theme.fontlg};
  color: ${({theme}) => theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 1024px){
      width: 100%;
      text-align: center;
      font-size: ${({theme}) => theme.fontmd};
  }
  @media (max-width: 640px){
      font-size: ${({theme}) => theme.fontsm};
  }
`
const SubtextLight = styled.p`
  font-size: ${({theme}) => theme.fontmd};
  color: rgba(${({theme}) => theme.bodyRgba}, 0.6);
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 1024px){
      width: 100%;
      text-align: center;
      font-size: ${({theme}) => theme.fontsm};
  }
  @media (max-width: 640px){
      font-size: ${({theme}) => theme.fontxs};
  }
`
const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  align-self: flex-start;
  display: flex;
  @media (max-width: 1024px){
    width: 100%;
    button {
      margin: 0 auto;
    }
  }
`
export default function About() {
  return (
    <Section id='about'>
      <Container>
        <Box>
          <Carousel/>
        </Box>
        <Box>
          <Title>
            Welcome To The <br /> Weirdos Club.
          </Title>
          <Subtext>
            The WEIRDOS CLUB is a private collection of NFTs—unique digital collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
          </Subtext>
          <SubtextLight>
            With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
          </SubtextLight>
          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Button text='Join Our Discord' link='#' />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  )
}
