import React from 'react'
import Confetti from 'react-confetti';
import useWindowSize from "react-use/lib/useWindowSize";

export default function ConfettiComponent({heightRef}) {
  const { width } = useWindowSize()
  return (
    <Confetti numberOfPieces={180} gravity={0.1} width={width} height={heightRef.offsetHeight} />
  )
}
