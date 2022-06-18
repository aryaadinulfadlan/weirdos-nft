import React from 'react'
import styled from 'styled-components'
import ETH from '../../../assets/icons8-ethereum-48.png'
import { FontSize2 } from "../../../GlobalStyles";

const ImgContainer = styled.div`
  background-color: ${({theme}) => theme.body};
  border: 2px solid ${({theme}) => theme.body};
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
`
const Desc = styled.div`
    background-color: ${({theme}) => theme.text};
    padding: 1rem;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    font-size: ${FontSize2};
    color: ${({theme}) => theme.body};
`
const LeftDesc = styled.div``
const RightDesc = styled.div``
const PriceWrap = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 1rem;
        height: auto;   
        margin-right: 5px;
    }
`
export default function NftItem({img, number, price, passRef}) {
  const play = () => passRef.current.style.animationPlayState = 'running'
  const pause = () => passRef.current.style.animationPlayState = 'paused'
  return (
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
        <img src={img} alt="The Weirdos" />
        <Desc>
            <LeftDesc>
                <p>Weirdos</p>
                <p>#{number}</p>
            </LeftDesc>
            <RightDesc>
                <p>Price</p>
                <PriceWrap>
                    <img src={ETH} alt="ETH" />
                    <p>{Number(price).toFixed(1)}</p>
                </PriceWrap>
            </RightDesc>
        </Desc>
    </ImgContainer>  
  )
}
