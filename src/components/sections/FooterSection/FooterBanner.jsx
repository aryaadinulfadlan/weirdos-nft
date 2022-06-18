import React from 'react'
import styled from 'styled-components'
import img1 from '../../../assets/Nfts/bighead.svg'
import img2 from '../../../assets/Nfts/bighead-1.svg'
import img3 from '../../../assets/Nfts/bighead-2.svg'
import img4 from '../../../assets/Nfts/bighead-3.svg'
import img5 from '../../../assets/Nfts/bighead-4.svg'
import img6 from '../../../assets/Nfts/bighead-5.svg'
import { FontSize3 } from '../../../GlobalStyles'
import Button from '../../Button'

const Banner = styled.div`
    background-color: rgba(${({theme}) => theme.textRgba}, 0.9);
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @media (min-width: 768px){
        height: 18rem;
    }
    @media (min-width: 1000px){
        height: 20rem;
    }
`
const ImageWrap = styled.div`
    height: 80%;
    display: grid;
    grid-template-columns: repeat(6, 8rem);
    align-content: center;
    overflow: hidden;
    opacity: 0.2;
    @media (min-width: 768px){
        grid-template-columns: repeat(6, 10rem);
    }
    @media (min-width: 1000px){
        grid-template-columns: repeat(6, 13rem);
    }
    img {
        width: 100%;
        height: auto;
    }
`
const JoinWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({theme}) => theme.body};
    text-transform: capitalize;
    font-size: ${FontSize3};
    width: 50%;
    max-width: 60rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    & > h2 {
        margin-bottom: min(2vw, 1rem);
    }
    @media (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        width: 70%;
        & > h2 {
            margin-bottom: 0;
        }
    }
`
export default function FooterBanner() {
  return (
    <Banner>
        <ImageWrap>
            <img src={img1} alt="The Weirdos" />
            <img src={img2} alt="The Weirdos" />
            <img src={img3} alt="The Weirdos" />
            <img src={img4} alt="The Weirdos" />
            <img src={img5} alt="The Weirdos" />
            <img src={img6} alt="The Weirdos" />
        </ImageWrap>
        <JoinWrap>
            <h2>join the weirdos club</h2>
            <Button text='join now' bgColor={'#fff'} color={'#202020'} borderColor={'#fff'} link='https://google.com'/>
        </JoinWrap>
    </Banner>
  )
}
