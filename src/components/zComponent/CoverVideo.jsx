import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/Home_Video.mp4'

const VideoContainer = styled.div`
    width: 100%;
    video {
        width: 100%;
        height: auto;
    }
    @media (max-width: 1024px){
      min-width: 40vh;
    }
`
export default function CoverVideo() {
  return (
    <VideoContainer>
        <video src={GIF} type='video/mp4' autoPlay muted loop/>
    </VideoContainer>
  )
}
