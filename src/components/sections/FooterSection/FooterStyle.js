import styled from 'styled-components'
import { FontSize15, FontSize2, FontSize3, FontSize8 } from '../../../GlobalStyles'

export const Section = styled.footer`
    min-height: 100vh;
    background-color: #fff;
    position: relative;
`
export const Bottom = styled.div`
    /* background-color: red; */
    padding: 2rem 0.5rem 1rem;
    width: 90%;
    max-width: 65rem;
    margin: 0 auto;
    border-bottom: 2px solid black;
    display: grid;
    gap: 2rem;
    margin-bottom: 2rem;
    justify-items: center;
    @media (min-width: 768px){
        grid-template-columns: auto auto;
        & > :first-child {
            justify-self: start;
        }
        & > :last-child {
            justify-self: end;
        }
        align-items: end;
    }
`
export const LogoWrap = styled.div`
    /* background-color: blue; */
    display: grid;
    gap: 1rem;
    justify-items: center;
`
export const LogoText = styled.h1`
    font-family: 'Akaya Telivigala', cursive;
    font-size: ${FontSize15};
    color: ${props => props.theme.text};
    transition: transform 500ms ease;
    line-height: 0.7;
    &:hover {
      transform: scale(1.1);
    }
`
export const LogoList = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    svg {
        font-size: ${FontSize8};
    }
`
export const Menu = styled.ul`
    /* background-color: green; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 0.5rem 7rem;
`
export const Item = styled.li`
    color: ${props => props.theme.text};
    cursor: pointer;
    font-size: ${FontSize3};
    font-weight: 500;
    width: fit-content;
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
export const Copyright = styled.div`
    width: 90%;
    max-width: 65rem;
    margin: 0 auto;
    padding: 0.5rem;
    display: grid;
    justify-items: center;
    gap: 10px;
    font-size: ${FontSize2};
    & > p {
        text-transform: capitalize;
    }
    & > div {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        gap: 8px;
        a {
            text-decoration: underline;
        }
    }
    @media (min-width: 900px){
        /* justify-content: space-between; */
        grid-auto-flow: column;
    }
`