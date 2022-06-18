import React, { useRef } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import img1 from '../../assets/Nfts/bighead.svg'
import img2 from '../../assets/Nfts/bighead-1.svg'
import img3 from '../../assets/Nfts/bighead-2.svg'
import img4 from '../../assets/Nfts/bighead-3.svg'
import img5 from '../../assets/Nfts/bighead-4.svg'
import img6 from '../../assets/Nfts/bighead-5.svg'
import img7 from '../../assets/Nfts/bighead-6.svg'
import img8 from '../../assets/Nfts/bighead-7.svg'
import img9 from '../../assets/Nfts/bighead-8.svg'
import img10 from '../../assets/Nfts/bighead-9.svg'
import ETH from '../../assets/icons8-ethereum-48.png'

const Section = styled.section`
  min-height: 100vh;
  background-color: ${({theme}) => theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  & > *:first-child {
    animation-duration: 20s;
    @media (max-width: 640px){
      animation-duration: 15s;
    }
  }
  & > *:last-child {
    animation-duration: 15s;
    @media (max-width: 640px){
      animation-duration: 10s;
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
const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  animation: ${moveAnimation} linear infinite ${({direction}) => direction};
`
const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${({theme}) => theme.body};
  border-radius: 20px;
  cursor: pointer;
  @media (max-width: 768px){
    width: 12rem;
  }
  @media (max-width: 640px){
    width: 10rem;
  }
  img {
    width: 100%;
    height: auto;
  }
`
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .8rem 1rem;
  background-color: ${({theme}) => theme.text};
  border: 2px solid rgba(${({theme}) => theme.bodyRgba}, 0.5);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  span {
    font-size: ${({theme}) => theme.fontsm};
    color: rgba(${({theme}) => theme.bodyRgba}, 0.5);
    font-weight: 600;
    line-height: 1.5rem;
  }
  h1 {
    font-size: ${({theme}) => theme.fontmd};
    color: ${({theme}) => theme.body};
    font-weight: 600;
    @media (max-width: 640px){
      font-size: ${({theme}) => theme.fontsm};
    }
  }
`
const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 1rem;
    height: auto;
  }
`
const NftItem = ({img, number=0, price=0, passRef}) => {
  const play = () => passRef.current.style.animationPlayState = 'running'
  const pause = () => passRef.current.style.animationPlayState = 'paused'
  return (
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
      <img src={img} alt="The Weirdos" />
      <Details>
        <div>
          <span>Weirdos</span> <br />
          <h1>#{number}</h1>
        </div>
        <div>
          <span>Price</span>
          <Price>
            <img src={ETH} alt="ETH" />
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  )
}

export default function Showcase() {
  const rowOneRef = useRef(null)
  const rowTwoRef = useRef(null)
  return (
    <Section id='showcase'>
      <Row direction='none' ref={rowOneRef}>
        <NftItem img={img1} number={321} price={1.1} passRef={rowOneRef} />
        <NftItem img={img2} number={321} price={1.2} passRef={rowOneRef} />
        <NftItem img={img3} number={321} price={1.3} passRef={rowOneRef} />
        <NftItem img={img4} number={321} price={1.1} passRef={rowOneRef} />
        <NftItem img={img5} number={321} price={1.4} passRef={rowOneRef} />
      </Row>
      <Row direction='reverse' ref={rowTwoRef}>
        <NftItem img={img6} number={321} price={1.4} passRef={rowTwoRef} />
        <NftItem img={img7} number={321} price={1.2} passRef={rowTwoRef} />
        <NftItem img={img8} number={321} price={1.4} passRef={rowTwoRef} />
        <NftItem img={img9} number={321} price={1.9} passRef={rowTwoRef} />
        <NftItem img={img10} number={321} price={1.8} passRef={rowTwoRef} />
      </Row>
    </Section>
  )
}
