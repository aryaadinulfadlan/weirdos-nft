import React from 'react'
import { BoxText, BoxVideo, Container, Section, Round, Circle } from './HomeStyle'
import HomeVideo from '../../../assets/Home_Video.mp4'
import TypeWriterText from '../../TypeWriterText'
import RoundedText from '../../../assets/Rounded-Text-Black.png'

export default function Home() {
  return (
    <Section id='home'>
      <Container>
        <BoxVideo>
          <video src={HomeVideo} type='video/mp4' autoPlay muted loop/>
        </BoxVideo>
        <BoxText>
          <TypeWriterText/>
        </BoxText>
      </Container>
      <Round>
        <Circle>&#x2193;</Circle> 
        <img src={RoundedText} alt="Rounded" />
      </Round>
    </Section>
  )
}
      // <Round>
      //   {/* <Circle></Circle> */}
      //   {/* &#x2193; */}
      //   <img src={RoundedText} alt="Rounded" />
      // </Round>
