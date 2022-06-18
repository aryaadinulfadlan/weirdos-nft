import React from 'react'
import styled from 'styled-components'
import { FontSize2 } from '../../../GlobalStyles'
import { Item } from './RoadmapStyle'

const ItemContainer = styled.div`
  border: 3px solid ${({theme}) => theme.text};
  border-radius: 0 50px 0 50px;
  width: 85%;
  height: fit-content;
  padding: 0.5rem;
  @media (min-width: 768px){
    width: 43%;
  }
`
const Box = styled.div`
  background-color: ${({theme}) => theme.carouselColor};
  padding: 0.5rem;
  color: ${({theme}) => theme.text};
  border: 1px solid ${({theme}) => theme.text}; 
  border-radius: 0 40px 0 40px;
  font-size: ${FontSize2};
`
const Subtext = styled.p`
  margin: .5rem 0;
`
export default function RoadmapItem({title, subtext, addToRef}) {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <h3>{title}</h3>
          <Subtext>{subtext}</Subtext>
        </Box>
      </ItemContainer>
    </Item>
  )
}
