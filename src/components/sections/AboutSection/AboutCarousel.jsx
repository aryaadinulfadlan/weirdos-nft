import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";
import img1 from '../../../assets/Nfts/bighead.svg'
import img2 from '../../../assets/Nfts/bighead-1.svg'
import img3 from '../../../assets/Nfts/bighead-2.svg'
import img4 from '../../../assets/Nfts/bighead-3.svg'
import img5 from '../../../assets/Nfts/bighead-4.svg'
import img6 from '../../../assets/Nfts/bighead-5.svg'
import img7 from '../../../assets/Nfts/bighead-6.svg'
import img8 from '../../../assets/Nfts/bighead-7.svg'
import img9 from '../../../assets/Nfts/bighead-8.svg'
import img10 from '../../../assets/Nfts/bighead-9.svg'
import Arrow from '../../../assets/Arrow.svg'
import { FontSize13 } from '../../../GlobalStyles';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
const Carousel = styled.div`
    width: 55vw;
    max-width: 290px;
    height: 100%;
    margin: 0 auto;
    @media (min-width: 900px){
        width: 50vw;
        height: 40vh;
        align-self: center;
        max-width: 330px;
    }
    @media (min-width: 1100px){
        height: 45vh;
        max-width: 350px;
    }
    .swiper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        background-color: ${({theme}) => theme.carouselColor};
        border-radius: 1.5rem;
        img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
    .swiper-button-next {
        color: ${({theme}) => theme.text};
        right: 0.5rem;
        top: 60%;
        width: ${FontSize13};
        background-image: url(${Arrow});
        background-position: center;
        background-size: cover;
        &::after {
            display: none;
        }
    }
    .swiper-button-prev {
        color: ${({theme}) => theme.text};
        left: 0.5rem;
        top: 60%;
        transform: rotate(180deg);
        width: ${FontSize13};
        background-image: url(${Arrow});
        background-position: center;
        background-size: cover;
        &::after {
            display: none;
        }
    }
`
export default function AboutCarousel() {
  return (
    <Carousel>
        <Swiper
            autoplay={{
                delay: 1000,
                disableOnInteraction: false
            }}
            pagination={{
                type: 'fraction'
            }}
            scrollbar={{
                draggable: true
            }}
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Pagination, Navigation, Autoplay]}
            className='mySwiper'
            navigation={true}
        >
            {
                images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <img src={img} alt="The Weirdos" />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </Carousel>
  )
}