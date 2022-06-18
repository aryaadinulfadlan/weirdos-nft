import React from 'react'
import styled from 'styled-components'
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
import ConfettiComponent from '../../ConfettiComponent'

const Section = styled.section`
  min-height: 100vh;
  background-color: ${({theme}) => theme.body};
  position: relative;
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
  @media (max-width: 768px){
    font-size: ${({theme}) => theme.fontxl};
  }
`
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1024px){
    width: 80%;
  }
  @media (max-width: 768px){
    width: 90%;
    justify-content: center;
  }
`
const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${({theme}) => theme.body};
  border: 2px solid ${({theme}) => theme.text};
  margin: 2rem 1rem;
  position: relative;
  border-radius: 20px;
  backdrop-filter: blur(4px);
  z-index: 2;
  &:hover img {
    transform: translateY(-2rem) scale(1.2);
  }
  @media (max-width: 640px){
    width: 70vw;
  }
`
const ImgContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${({theme}) => theme.carouselColor};
  border: 1px solid ${({theme}) => theme.text};
  padding: 1rem;
  border-radius: 20px;
  cursor: pointer;
  img {
    transition: transform 500ms ease;
    width: 100%;
    height: auto;
  }
`
const Name = styled.h2`
  font-size: ${({theme}) => theme.fontlg};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: ${({theme}) => theme.text};
  margin-top: 1rem;
`
const Position = styled.h2`
  font-size: ${({theme}) => theme.fontmd};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  color: rgba(${({theme}) => theme.textRgba}, 0.8);
  font-weight: 400;
`
const MemberComponent = ({img, name, position}) => {
  return (
    <Item>
      <ImgContainer>
        <img src={img} alt={name} />
      </ImgContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}

export default function Team() {
  return (
    <Section id='team'>
      <ConfettiComponent/>
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img1} name='skyblaze' position='founder' />
        <MemberComponent img={img2} name='megnum' position='co-founder' />
        <MemberComponent img={img3} name='monkey king' position='director' />
        <MemberComponent img={img4} name='black panther' position='manager' />
        <MemberComponent img={img5} name='deathstroke' position='artist' />
        <MemberComponent img={img6} name='lazy kong' position='social media manager' />
        <MemberComponent img={img7} name='cyber punk' position='blockchain specialist' />
        <MemberComponent img={img8} name='monk' position='web developer' />
        <MemberComponent img={img9} name='banana' position='graphic designer' />
        <MemberComponent img={img10} name='mukidi' position='hoetank' />
      </Container>
    </Section>
  )
}
