import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/Nfts/bighead.svg'
import img2 from '../assets/Nfts/bighead-1.svg'
import img3 from '../assets/Nfts/bighead-2.svg'
import img4 from '../assets/Nfts/bighead-3.svg'
import img5 from '../assets/Nfts/bighead-4.svg'
import img6 from '../assets/Nfts/bighead-5.svg'

const Section = styled.section`
    height: 25rem;
    width: 100%;
    position: relative;
    border-top: 2px solid ${({theme}) => theme.text};
    background-color: rgba(${({theme}) => theme.textRgba}, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    @media (max-width: 768px){
        height: 15rem;
        flex-direction: column;
    }
`
const ImgContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    /* opacity: 0.2; */
    /* background-color: red; */
    img {
        width: 15rem;
        height: auto;
        @media (max-width: 768px){
            width: 10rem;
            height: auto;
        }
    }
`
const Title = styled.h1`
    font-size: ${({theme}) => theme.fontxxxl};
    color: ${({theme}) => theme.body};
    padding: 1rem 2rem;
    z-index: 1;
    width: 35%;
    text-transform: capitalize;
    text-shadow: 1px 1px 2px ${({theme}) => theme.text};
    @media (max-width: 1024px){
        font-size: ${({theme}) => theme.fontxxl};
        text-align: center;
        width: 40%;
    }
    @media (max-width: 768px){
        font-size: ${({theme}) => theme.fontxl};
        width: 100%;
        padding: 2rem 0;
    }
`
const BtnContainer = styled.div`
    width: 35%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 768px){
        width: 100%;
        justify-content: center;
    }
`
const JoinNow = styled.button`
    display: inline-block;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    outline: none;
    border: none;
    font-weight: 600;
    font-size: ${props => props.theme.fontlg};
    padding: 1.5rem 3rem;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.2s ease;
    position: relative;
    @media (max-width: 768px){
        padding: 1rem 2rem;
    }
    @media (max-width: 640px){
        padding: 0.5rem 2rem;
        font-size: ${props => props.theme.fontsm};
    }
    &:hover {
        transform: scale(0.9);
    }
    &::after {
        content: ' ';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: 2px solid ${props => props.theme.body};
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: transform 0.2s ease;
        box-sizing: content-box;
    }
    &:hover::after {
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }
`
export default function Banner() {
  return (
    <Section>
        <ImgContainer>
            <img src={img1} alt="The Weirdos" />
            <img src={img2} alt="The Weirdos" />
            <img src={img3} alt="The Weirdos" />
            <img src={img4} alt="The Weirdos" />
            <img src={img5} alt="The Weirdos" />
            <img src={img6} alt="The Weirdos" />
        </ImgContainer>
        <Title>Join the <br /> Weirdos Club</Title>
        <BtnContainer>
            <JoinNow>
                Join Now
            </JoinNow>
        </BtnContainer>
    </Section>
  )
}
