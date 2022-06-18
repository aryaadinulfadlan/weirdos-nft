import React from 'react'
import styled from 'styled-components'
import { FontSize1 } from '../../../GlobalStyles'

const Item = styled.div`
    border: 2px solid ${({theme}) => theme.text};
    border-radius: 20px;
    padding: 1rem 0.5rem;
    color: ${({theme}) => theme.text};
    font-size: ${FontSize1};
    text-transform: capitalize;
    cursor: pointer;
    h3, p {
        text-align: center;
    }
`
const ImgContainer = styled.div`
    background-color: ${({theme}) => theme.carouselColor};
    border: 1px solid ${({theme}) => theme.text};
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    position: relative;
    img {
        width: 100%;
        height: auto;
        transition: transform 500ms ease;
        ${Item}:hover & {
            transform: translateY(-10%) scale(1.15);
        }
    }
`
export default function TeamCard({img, name, position}) {
  return (
    <Item>
        <ImgContainer>
            <img src={img} alt={name} />
        </ImgContainer>
        <h3>{name}</h3>
        <p>{position}</p>
    </Item>
  )
}
