import React, { useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'

const bounceAnimation = keyframes`
    0%{
        transform: translateY(0px);
    }
    25%{
        transform: translateY(20px);
    }
    50%{
        transform: translateY(0px);
    }
    75%{
        transform: translateY(-20px);
    }
    100%{
        transform: translateY(0px);
    }
`
const UpButton = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    border-radius: 50%;
    font-size: ${({theme}) => theme.fontxxl};
    display: none;
    justify-content: center;
    align-items: center;
    animation: ${bounceAnimation} 3s linear infinite;
    cursor: pointer;
`
export default function ScrollToTop() {
  const ref = useRef(null)
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            ref.current.style.display = 'flex'
        } else {
            ref.current.style.display = 'none'
        }
    })
  }, [])
  return (
    <UpButton ref={ref} onClick={() => window.scrollTo(0,0)}>&#x2191;</UpButton>
  )
}

// import { useWindowScroll } from 'react-use'
//   const {y} = useWindowScroll()
//   useLayoutEffect(() => {
//     if (window.pageYOffset > 300) {
//         ref.current.style.display = 'flex'
//     } else {
//         ref.current.style.display = 'none'
//     }
//   }, [y])
