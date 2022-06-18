import React from 'react'
import Button from '../../Button'
import AboutCarousel from './AboutCarousel'
import { AboutDesc, Container, Section } from './AboutStyle'

export default function About() {
  return (
    <Section id='about'>
        <Container>
          <AboutCarousel/>
          <AboutDesc>
            <h1>welcome to the weirdos club.</h1>            
            <h4>The WEIRDOS CLUB is a private collection of NFTs—unique digital collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.</h4>
            <p>With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.</p>
            <Button text='join our discord' bgColor={'#fff'} color={'#202020'} borderColor={'#fff'} link='https://google.com'/>
          </AboutDesc>
        </Container>
    </Section>
  )
}
