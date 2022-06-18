import React, { useState } from 'react'
import styled from 'styled-components'
import { FontSize4 } from '../GlobalStyles'
import Button from './Button'
import Logo from './Logo'

const Section = styled.section`
  background-color: ${props => props.theme.body};
`
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: ${({theme}) => theme.navHeightMobile};
  margin: 0 auto;
  max-width: 85rem;
  @media (min-width: 768px) {
    height: ${({theme}) => theme.navHeightTablet};
  }
  @media (min-width: 1024px) {
    height: ${({theme}) => theme.navHeightDesktop};
  }
  /* border: 1px solid green; */
`
const BarWrap = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({clicked}) => clicked ? '2rem' : '1.5rem'};
  height: ${({clicked}) => clicked ? '2rem' : '1.5rem'};
  transition: width 1s ease, height 1s ease;
`
const HamburgerMenu = styled.div`
  width: ${({clicked}) => clicked ? '2rem' : '1.5rem'};
  height: 3px;
  background-color: ${({theme}) => theme.text};
  transform: ${({clicked}) => clicked ? 'rotate(90deg)' : 'rotate(0)'};
  transition: transform 1s ease;
  position: relative;
  &::before, &::after {
      content: '';
      width: ${({clicked}) => clicked ? '1rem' : '1.5rem'};
      height: 100%;
      background-color: ${({theme}) => theme.text};
      position: absolute;
      right: ${({clicked}) => clicked ? '-2px' : '0'};
      transition: transform 1s ease, bottom 1s ease, top 1s ease;
  }
  &::before {
    bottom: ${({clicked}) => clicked ? '0.3rem' : '0.5rem'};
    transform: ${({clicked}) => clicked ? 'rotate(45deg)' : 'rotate(0)'};
  }
  &::after {
    top: ${({clicked}) => clicked ? '0.3rem' : '0.5rem'};
    transform: ${({clicked}) => clicked ? 'rotate(-45deg)' : 'rotate(0)'};
  }
`
const MenuBar = styled.ul`
  position: fixed;
  top: ${({theme, clicked}) => clicked ? theme.navHeightMobile : '100%'};
  left: 0;
  right: 0;
  width: 100%;
  height: calc(100% - ${({theme}) => theme.navHeightMobile});
  transition: top 500ms ease;
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 2rem;
  z-index: 1;
  background-color: #EEEDDE;
  /* background-color: rgba(0,0,0,0.2); */
`
const Item = styled.li`
    color: ${props => props.theme.text};
    cursor: pointer;
    font-size: ${FontSize4};
    font-weight: 700;
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

export default function NavigationBar() {
  const [clicked, setClicked] = useState(false)
  const scrollTo = id => {
    const element = document.getElementById(id)
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
    setClicked(prev => !prev) 
  }
  return (
    <Section>
      <Navbar>
        <Logo/>

        <MenuBar clicked={clicked}>
            <Item onClick={() => scrollTo('home')}>Home</Item>
            <Item onClick={() => scrollTo('about')}>About</Item>
            <Item onClick={() => scrollTo('roadmap')}>Roadmap</Item>
            <Item onClick={() => scrollTo('showcase')}>Showcase</Item>
            <Item onClick={() => scrollTo('team')}>Team</Item>
            <Item onClick={() => scrollTo('faq')}>FAQ</Item>
        </MenuBar>

        <BarWrap clicked={clicked} onClick={() => setClicked(prev => !prev)}>
          <HamburgerMenu clicked={clicked}>&nbsp;</HamburgerMenu>
        </BarWrap>
        <Button text='Connect Wallet' link='https://google.com'/>
      </Navbar>
    </Section>
  )
}
