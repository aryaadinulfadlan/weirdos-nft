import styled, { keyframes } from 'styled-components'

export const Section = styled.section`
  background-color: ${props => props.theme.body};
  min-height: calc(100vh - ${props => props.theme.navHeightMobile});
  display: grid;
  grid-template-rows: 0.6fr;
  align-content: center;
  position: relative;
  @media (min-width: 768px) {
    min-height: calc(100vh - ${props => props.theme.navHeightTablet});
  }
  @media (min-width: 1024px) {
    min-height: calc(100vh - ${props => props.theme.navHeightDesktop});
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.6fr;
  gap: 4rem;
  padding: 1rem 0.5rem;
  margin-top: -4rem;
  @media (min-width: 900px){
    margin: 0 auto;
    margin-top: -10rem;
    align-content: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.7fr;
    gap: 1rem;
    padding: 1rem 2rem;
    grid-auto-flow: dense;
  }
  /* background-color: blue; */
`
export const BoxVideo = styled.div`
  /* background-color: green; */
  display: flex;
  justify-content: center;
  align-items: center;
  video {
    width: 70%;
    margin: 0 auto;
    max-width: 350px;
    @media (min-width: 900px){
      width: 100%;
      max-width: 500px;
    }
  }
`
export const BoxText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`
export const Round = styled.div`
  width: 5rem;
  height: 5rem;
  border: 1px solid ${({theme}) => theme.text};
  border-radius: 50%;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  @media (min-width: 900px){
    bottom: 2rem;
    left: 2rem;
    width: 6rem;
    height: 6rem;
  }
  @media (min-width: 1300px){
    bottom: 3rem;
    left: 3rem;
    width: 7rem;
    height: 7rem;
  }
  img {
    animation: ${rotate} 6s linear infinite reverse;;
  }
`
export const Circle = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-color: ${({theme}) => theme.text};
  color: ${({theme}) => theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`