import React from 'react'
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
import { Container, Section, Title } from './TeamStyle'
import TeamCard from './TeamCard'
import ConfettiComponent from '../../ConfettiComponent'

const teamData = [
    {
        img: img1,
        name: 'mukidi',
        position: 'hoetank'
    },
    {
        img: img2,
        name: 'megnum',
        position: 'co-founder'
    },
    {
        img: img3,
        name: 'monkey king',
        position: 'director'
    },
    {
        img: img4,
        name: 'black panther',
        position: 'manager'
    },
    {
        img: img5,
        name: 'deathstroke',
        position: 'artist'
    },
    {
        img: img6,
        name: 'lazy kong',
        position: 'social media manager'
    },
    {
        img: img7,
        name: 'cyber punk',
        position: 'blockchain specialist'
    },
    {
        img: img8,
        name: 'monk',
        position: 'web developer'
    },
    {
        img: img9,
        name: 'banana',
        position: 'graphic designer'
    },
    {
        img: img10,
        name: 'skyblaze',
        position: 'founder'
    }
]

export default function Team() {
  return (
    <Section id='team'>
        <ConfettiComponent/>
        <Title>Team</Title>
        <Container>
            {
                teamData.map((item, idx) => (
                    <TeamCard img={item.img} name={item.name} position={item.position} key={idx} />
                ))
            }
        </Container>
    </Section>
  )
}
