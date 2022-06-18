import styled from 'styled-components'
import { FontSize2, FontSize4 } from '../../../GlobalStyles'

export const Section = styled.section`
  background-color: ${props => props.theme.body};
`
export const Navbar = styled.nav`
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
export const BarWrap = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({clicked}) => clicked ? '2rem' : '1.5rem'};
  height: ${({clicked}) => clicked ? '2rem' : '1.5rem'};
  transition: width 0.5s ease, height 0.5s ease;
  @media (min-width: 768px){
    display: none;
  }
`
export const HamburgerMenu = styled.div`
  width: ${({clicked}) => clicked ? '2rem' : '1.5rem'};
  height: 3px;
  background-color: ${({theme}) => theme.text};
  transform: ${({clicked}) => clicked ? 'rotate(90deg)' : 'rotate(0)'};
  transition: transform 0.5s ease;
  position: relative;
  &::before, &::after {
      content: '';
      width: ${({clicked}) => clicked ? '1rem' : '1.5rem'};
      height: 100%;
      background-color: ${({theme}) => theme.text};
      position: absolute;
      right: ${({clicked}) => clicked ? '-2px' : '0'};
      transition: transform 0.5s ease, bottom 0.5s ease, top 0.5s ease;
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
export const MenuBar = styled.ul`
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
  z-index: 5;
  background-color: #EEEDDE;
  @media (min-width: 768px){
    position: static;
    background-color: transparent;
    height: auto;
    grid-auto-flow: column;
    gap: 1rem;
    width: fit-content;
  }
  /* background-color: rgba(0,0,0,0.2); */
`
export const Item = styled.li`
    color: ${props => props.theme.text};
    cursor: pointer;
    font-size: ${FontSize4};
    font-weight: 700;
    @media (min-width: 768px){
        font-size: ${FontSize2};
    }
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