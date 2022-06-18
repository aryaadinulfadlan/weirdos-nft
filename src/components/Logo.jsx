import React from 'react'
import styled from 'styled-components'
import { FontSize12 } from "../GlobalStyles";
import { Link } from 'react-router-dom'

const LogoText = styled.h1`
    font-family: 'Akaya Telivigala', cursive;
    font-size: ${FontSize12};
    color: ${props => props.theme.text};
    transition: transform 500ms ease;
    &:hover {
      transform: scale(1.1);
    }
`
export default function Logo() {
  return (
    <LogoText>
      <Link to={'/'}>W.</Link>
    </LogoText>
  )
}
