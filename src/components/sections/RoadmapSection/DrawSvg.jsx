import React, { useLayoutEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import Vector from '../../../Icons/Vector'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Wrap = styled.div``
const BounceAnimation = keyframes`
  from {
    transform: translateX(-50%) scale(0.5);
  }
  to {
    transform: translateX(-50%) scale(1.2); 
  }
`
const Ball = styled.div`
  position: absolute;
  top: 0;
  left: 1rem;
  transform: translateX(-50%);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${({theme}) => theme.text};
  animation: ${BounceAnimation} 1s linear infinite alternate; 
  @media (min-width: 768px){
    left: 50%;
  }
`
const VectorContaier = styled.div`
  position: absolute;
  top: 0;
  left: 1rem;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  @media (min-width: 768px){
    left: 50%;
  }
  svg {
      width: 100%;
      height: 100%;
  }
`
export default function DrawSvg() {
  const ref = useRef(null)
  const ballRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    const element = ref.current
    const svg = document.querySelector('.svg-path')
    const length = svg.getTotalLength()
    svg.style.strokeDasharray = length                  //start positioning of svg drawing
    svg.style.strokeDashoffset = length                 //hide svg before scrolling start
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom bottom',
        onUpdate: self => {
          const draw = length * self.progress
          svg.style.strokeDashoffset = length - draw    //reverse the drawing when scroll goes up
        },
        onToggle: self => {
          if (self.isActive) {
            ballRef.current.style.display = 'none'
          } else {
            ballRef.current.style.display = 'inline-block'
          }
        }
      }
    })
    return () => {
      if(t1) t1.kill()
    }
  }, [])
  return (
    <Wrap>
      <Ball ref={ballRef}/>
      <VectorContaier ref={ref}>
        <Vector/>
      </VectorContaier>
    </Wrap>
  )
}
