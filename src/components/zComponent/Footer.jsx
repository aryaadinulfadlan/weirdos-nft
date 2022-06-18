import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Logo from '../Logo'
import Facebook from '../../Icons/Facebook'
import Instagram from '../../Icons/Instagram'
import Twitter from '../../Icons/Twitter'
import LinkedIn from '../../Icons/LinkedIn'

const Section = styled.section`
  min-height: 100vh;
  background-color: ${({theme}) => theme.body};
  color: ${({theme}) => theme.text};
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({theme}) => theme.text};
  @media (max-width: 768px){
    width: 90%;
    h1 {
      font-size: ${props => props.theme.fontxxxl};
    }
  }
`
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px){
    width: 100%;
  }
`
const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;
  & > *{
    padding-right: 0.5rem;
    transition: transform 500ms ease;
    &:hover {
      transform: scale(1.2);
    }
  }
`
const MenuItems = styled.ul`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: 768px){
    display: none;
  }
`
const Item = styled.li`
  width: fit-content;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.text};
    transition: width 500ms ease;
  }
  &:hover::after {
    width: 100%;
  }
`
const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: underline;
  }
  @media (max-width: 768px){
    flex-direction: column;
    width: 100%;
    span {
      margin-bottom: 1rem;
    }
  }
`
function scrollTo(id){
  const element = document.getElementById(id)
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  })
}
export default function Footer() {
  return (
    <Section>
      <Banner/>
      <Container>
        <Left>
          <Logo/>
          <IconList>
            <a href="https://google.com" target={'_blank'} rel="noreferrer">
              <Facebook/>
            </a>
            <a href="https://google.com" target={'_blank'} rel="noreferrer">
              <Instagram/>
            </a>
            <a href="https://google.com" target={'_blank'} rel="noreferrer">
              <Twitter/>
            </a>
            <a href="https://google.com" target={'_blank'} rel="noreferrer">
              <LinkedIn/>
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item onClick={() => scrollTo('home')}>Home</Item>
          <Item onClick={() => scrollTo('about')}>About</Item>
          <Item onClick={() => scrollTo('roadmap')}>Roadmap</Item>
          <Item onClick={() => scrollTo('showcase')}>Showcase</Item>
          <Item onClick={() => scrollTo('team')}>Team</Item>
          <Item onClick={() => scrollTo('faq')}>FAQ</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Weirdos Club. All Rights Reserved.
        </span>
        <span>
          Made with &#10084; by <a href="https://google.com" target={'_blank'} rel="noreferrer">Arya Adinul Fadlan</a>
        </span>
      </Bottom>
    </Section>
  )
}
