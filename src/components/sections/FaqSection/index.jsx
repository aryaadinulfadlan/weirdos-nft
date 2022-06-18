import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, {useLayoutEffect, useRef, useState} from 'react'
import FaqAccordion from './FaqAccordion'
import { Container, Section, Title } from './FaqStyle'

const questionData = [
  {
    question: 'where can i view my NFTs?',
    answer: 'Once minted or bought simply connect to your OpenSea account to view your NFTs.'
  },
  {
    question: 'what is the metaverse?',
    answer: 'A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets.'
  },
  {
    question: 'why do we need royalties?',
    answer: 'The amount of royalties was fixed at 5% to finance the Weirdos Clubs projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests.'
  },
  {
    question: 'how can i use my NFTs?',
    answer: 'You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs.'
  },
  {
    question: 'what are the weirdos?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.'
  },
  {
    question: 'what is the fusion process?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem, maxime, similique neque minus aliquam dolore doloremque laboriosam, facilis quibusdam unde sint officia.'
  }
]

export default function Faq() {
  const [opened, setOpened] = useState(false)
  const showAnswer = idx => {
      if (opened === idx) {
          setOpened(false)
      } else {
          setOpened(idx)
      }
  }
  const faqRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    const element = faqRef.current
    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true
      // markers: true
    })
    return () => ScrollTrigger.kill()
  }, [])
  return (
    <Section id='faq' ref={faqRef}>
        <Title>Frequently Asked Questions</Title>
        <Container>
          {
            questionData.map((item, idx) => (
              <FaqAccordion showAnswer={showAnswer} index={idx} item={item} opened={opened} key={idx}/>
            ))
          }
        </Container>
    </Section>
  )
}
