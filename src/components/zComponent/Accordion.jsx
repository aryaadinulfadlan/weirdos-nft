import React, { useState } from 'react'
import styled from 'styled-components'
import {Minus} from '../../Icons/Minus'
import {Plus} from '../../Icons/Plus'

const Container = styled.div`
    cursor: pointer;
    padding: 1rem .5rem;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${({theme}) => theme.carouselColor};
    margin: 3rem 0;
    @media (max-width: 768px){
        margin: 2rem 0;
    }
`
const Title = styled.div`
    font-size: ${({theme}) => theme.fontsm};
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Reveal = styled.div`
    display: ${({clicked}) => clicked ? 'block' : 'none'};
    margin-top: 1rem;
    color: rgba(${({theme}) => theme.bodyRgba}, 0.6);
    font-size: ${({theme}) => theme.fontsm};
    font-weight: 300;
    line-height: 1.1;
`
const Name = styled.div`
    display: flex;
    align-items: center;
`
const Indicator = styled.span`
    font-size: ${({theme}) => theme.fontxxl};
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        width: 1rem;
        height: auto;
        fill: ${({theme}) => theme.carouselColor};
    }
    @media (max-width: 768px){
        font-size: ${({theme}) => theme.fontxl};
    }
`
export default function Accordion({title, children}) {
  const [collapse, setCollapse] = useState(false)
  return (
    <Container>
        <Title onClick={() => setCollapse(prev => !prev)}>
            <Name>
                <span>{title}</span>
            </Name>
            {
                collapse ? <Indicator><Minus/></Indicator> : <Indicator><Plus/></Indicator>
            }
        </Title>
        <Reveal clicked={collapse}>{children}</Reveal>
    </Container>
  )
}
