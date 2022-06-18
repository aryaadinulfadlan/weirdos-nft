import React, { useRef } from 'react'
import { Row, Section } from './ShowcaseStyle'
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
import NftItem from './NftItem'

const row1items = [
  {img: img1, number: 161, price: 1.1},
  {img: img2, number: 651, price: 3.4},
  {img: img3, number: 171, price: 1.6},
  {img: img4, number: 561, price: 2.1},
  {img: img5, number: 211, price: 4.3}
]
const row2items = [
  {img: img6, number: 112, price: 2.1},
  {img: img7, number: 251, price: 1.4},
  {img: img8, number: 351, price: 5.6},
  {img: img9, number: 461, price: 2.1},
  {img: img10, number: 211, price: 1.3}
]

export default function Showcase() {
  const rowOneRef = useRef(null)
  const rowTwoRef = useRef(null)
  return (
    <Section id='showcase'>
      <Row direction='none' ref={rowOneRef}>
        {
          row1items.map((item, idx) =>(
            <NftItem img={item.img} number={item.number} price={item.price} key={idx} passRef={rowOneRef}/>
          ))
        }
      </Row>
      <Row direction='reverse' ref={rowTwoRef}>
        {
          row2items.map((item, idx) =>(
            <NftItem img={item.img} number={item.number} price={item.price} key={idx} passRef={rowTwoRef}/>
          ))
        }
      </Row>
    </Section>
  )
}
