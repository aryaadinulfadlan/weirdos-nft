import React from 'react'
import styled from 'styled-components'
import { FontSize1 } from '../GlobalStyles'

const Btn = styled.button`
    display: inline-block;
    text-transform: capitalize;
    width: fit-content;
    height: fit-content;
    background-color: ${props => props.bg_color};
    color: ${props => props.color};
    outline: none;
    border: none;
    font-size: ${FontSize1};
    padding: 0.5rem 1.2rem;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.2s ease;
    position: relative;
    @media (min-width: 900px){
        padding: 1rem 2rem;
    }
    &:hover {
        transform: scale(0.9);
    }
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: 2px solid ${props => props.border_color};
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: transform 0.2s ease;
        box-sizing: content-box;
    }
    &:hover::after {
        transform: translate(-50%, -50%) scale(1);
        padding: 0.2rem;
    }
`
export default function Button({text, link, bgColor, color, borderColor}) {
  return (
      <Btn bg_color={bgColor} color={color} border_color={borderColor}>
        <a href={link} target='_blank' aria-label={text} rel='noreferrer'>
            {text}
        </a>
      </Btn>
  )
}
