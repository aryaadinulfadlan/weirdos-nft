import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Logo from '../Logo'

const Section = styled.section`
  /* width: 100vw; */
  background-color: ${props => props.theme.body};
`
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${props => props.theme.navHeight};
  margin: 0 auto;
  .mobile {
    display: none;
  }
  @media (max-width: 1024px){
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }
`
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px){
    position: fixed;
    top: ${({theme}) => theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(100vh - ${({theme}) => theme.navHeight});
    z-index: 10;
    background-color: rgba(${({theme}) => theme.bodyRgba}, 0.8);
    backdrop-filter: blur(2px);
    flex-direction: column;
    justify-content: center;
    transform: ${({clicked}) => clicked ? 'translateY(0)' : 'translateY(100%)'};;
    transition: transform 500ms ease;
    touch-action: none;
  }
`
const Item = styled.li`
  color: ${props => props.theme.text};
  cursor: pointer;
  margin: 0 1rem;
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
  @media (max-width: 1024px){
    margin: 1rem 0;
  }
`
const HamburgerMenu = styled.span`
  width: ${({clicked}) => clicked ? '2rem' : '1.5rem'};
  height: 3px;
  background-color: ${({theme}) => theme.text};
  position: absolute;
  top: 2rem;
  left: 50%;
  cursor: pointer;
  transform: ${({clicked}) => clicked ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'};
  transition: transform 500ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before, &::after {
    content: '';
    width: ${({clicked}) => clicked ? '1rem' : '1.5rem'};
    height: 3px;
    background-color: ${({theme}) => theme.text};
    position: absolute;
    right: ${({clicked}) => clicked ? '-2px' : '0'};
    transition: transform 500ms ease, bottom 500ms ease, top 500ms ease;
  }
  &::before {
    bottom: ${({clicked}) => clicked ? '0.3rem' : '0.5rem'};
    transform: ${({clicked}) => clicked ? 'rotate(40deg)' : 'rotate(0)'};
  }
  &::after {
    top: ${({clicked}) => clicked ? '0.3rem' : '0.5rem'};
    transform: ${({clicked}) => clicked ? 'rotate(-40deg)' : 'rotate(0)'};
  }
  @media (min-width: 1024px){
    display: none;
  }
`
export default function Navigation() {
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
        <HamburgerMenu clicked={clicked} onClick={() => setClicked(prev => !prev)}>&nbsp;</HamburgerMenu>
        <Menu clicked={clicked}>
          <Item onClick={() => scrollTo('home')}>Home</Item>
          <Item onClick={() => scrollTo('about')}>About</Item>
          <Item onClick={() => scrollTo('roadmap')}>Roadmap</Item>
          <Item onClick={() => scrollTo('showcase')}>Showcase</Item>
          <Item onClick={() => scrollTo('team')}>Team</Item>
          <Item onClick={() => scrollTo('faq')}>FAQ</Item>
          <Item>
            <div className="mobile">
              <Button text='Connect Wallet' link='https://google.com'/>
            </div>
          </Item>
        </Menu>
        <div className="desktop">
          <Button text='Connect Wallet' link='https://google.com'/>
        </div>
      </Navbar>
    </Section>
  )
}
