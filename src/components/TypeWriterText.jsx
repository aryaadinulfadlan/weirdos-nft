import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import { FontSize4, FontSize8, FontSize9 } from '../GlobalStyles'
import Button from './Button'

const Title = styled.h2`
    font-size: ${FontSize9};
    text-transform: capitalize;
    color: ${props => props.theme.text};
    text-align: center;
    span {
      font-size: ${FontSize8};
      text-transform: uppercase;
      font-family: 'Akaya Telivigala', cursive;
    } 
    .text-1 {
        color: blue;
    }
    .text-2 {
        color: orange;
    }
    .text-3 {
        color: red;
    } 
`
const Subtitle = styled.h3`
    font-size: ${FontSize4};
    text-transform: capitalize;
    color: rgba(${props => props.theme.textRgba}, 0.6);
    font-weight: 600;
`
const Wrapper = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    align-content: center;
    gap: 1rem;
    @media (min-width: 900px){
        margin-top: 6rem;
    }
    /* background-color: red; */
`
export default function TypeWriterText() {
  return (
    <Wrapper>
        <Title>
            discover a new era of cool
            <Typewriter 
                options={{ autoStart:true, loop:true }}
                onInit={typewriter => {
                    typewriter
                        .typeString('<span class="text-1">NFTs.</span>')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('<span class="text-2">Collectible Items.</span>')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('<span class="text-3">Ape Killers.</span>')
                        .pauseFor(2000)
                        .deleteAll()
                        .start()
                }} 
            />
        </Title>
        <Subtitle>bored of apes? try something new!</Subtitle>
        <Button text={'explore'} link='#about' bgColor={'#202020'} color={'#fff'} borderColor={'#202020'}/>
    </Wrapper>
  )
}
