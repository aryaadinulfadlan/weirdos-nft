import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'
import DrawSvg from '../DrawSvg'
import styled from 'styled-components'

const Section = styled.section`
  min-height: 100vh;
  /* background-color: ${({theme}) => theme.body}; */
  position: relative;
  background-color: red;
`
const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${({theme}) => theme.body};
  background-color: green;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 1024px){
    width: 80%;
  }
  @media (max-width: 768px){
    width: 90%;
  }
`
const SvgContainer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
 
`
const Title = styled.h1`
  font-size: ${({theme}) => theme.fontxxl};
  text-transform: capitalize;
  color: ${({theme}) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${({theme}) => theme.text};
  width: fit-content;
  @media (max-width: 640px){
    font-size: ${({theme}) => theme.fontxl};
  }
`
const ListItem = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px){
    width: 90%;
  }
  & > *:nth-of-type(2n + 1){
    justify-content: start;
    @media (max-width: 768px){
      justify-content: center;
    }
    div {
      border-radius: 50px 0 50px 0;
      text-align: right;
      @media (max-width: 768px){
        border-radius: 0 50px 0 50px;
        text-align: left;
        p {
          border-radius: 0 40px 0 40px;
        }
      }
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }
  & > *:nth-of-type(2n){
    justify-content: end;
    @media (max-width: 768px){
      justify-content: center;
    }
    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`
const Item = styled.li`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: blue;
  @media (max-width: 768px){
    && {
      justify-content: flex-end;
    }
  }
`
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${({theme}) => theme.text};
  @media (max-width: 768px){
    width: 70%;
  }
`
const Box = styled.p`
  height: fit-content;
  background-color: ${({theme}) => theme.carouselColor};
  color: ${({theme}) => theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${({theme}) => theme.text};
`
const Subtitle = styled.span`
  display: block;
  font-size: ${({theme}) => theme.fontxl};
  text-transform: capitalize;
  color: ${({theme}) => theme.text};
  @media (max-width: 640px){
    font-size: ${({theme}) => theme.fontlg};
    font-weight: 600;
  }
`
const Text = styled.span`
  display: block;
  font-size: ${({theme}) => theme.fontsm};
  text-transform: capitalize;
  color: ${({theme}) => theme.text};
  font-weight: 400;
  margin: .5rem 0;
  @media (max-width: 640px){
    font-size: ${({theme}) => theme.fontxs};
  }
`
const RoadMapItem = ({title, subtext, addToRef}) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <Subtitle>{title}</Subtitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  )
}
export default function Roadmap() {
  const revealRefs = useRef([])
  revealRefs.current = []
  gsap.registerPlugin(ScrollTrigger)
  const addToRef = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }
  useLayoutEffect(() => {
    const t1 = gsap.timeline()
    revealRefs.current.forEach((el, idx) => {
      t1.fromTo(
        el.childNodes[0],
        { y: '0' },
        { 
          y: '-30%',
          scrollTrigger: {
            id: `section-${idx + 1}`,
            trigger: el,
            start: 'top center+=200px',
            end: 'bottom center',
            scrub: true,
            // markers: true
          }
        }
      )
    })
    return () => {
      if(t1) t1.kill()
    }
  }, [])
  return (
    <Section id='roadmap'>
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>  
          <DrawSvg/>
        </SvgContainer>
        <ListItem>
          <Item/>
          <RoadMapItem addToRef={addToRef} title='Grand Opening' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
          <RoadMapItem addToRef={addToRef} title='Great Benefits' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
          <RoadMapItem addToRef={addToRef} title='Early Access' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
          <RoadMapItem addToRef={addToRef} title='New Merch' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
          <RoadMapItem addToRef={addToRef} title='Holders Ranking' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
        </ListItem>
      </Container>
    </Section>
  )
}
