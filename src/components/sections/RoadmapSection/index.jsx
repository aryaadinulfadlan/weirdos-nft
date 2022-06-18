import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Container, Item, ListItem, Section, Title } from './RoadmapStyle'
import DrawSvg from './DrawSvg'
import RoadmapItem from './RoadmapItem'

export default function Roadmap() {
  const revealRefs = useRef([])
  revealRefs.current = []
  gsap.registerPlugin(ScrollTrigger)
  const addToRef = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }
  useLayoutEffect(() => {
    const t1 = gsap.timeline()
    revealRefs.current.forEach((el, idx) => {
      t1.fromTo(
        el.childNodes[0],
        { y: '0' },
        { 
          y: '-30%',
          scrollTrigger: {
            id: `section-${idx + 1}`,
            trigger: el,
            start: 'top center+=200px',
            end: 'bottom center',
            scrub: true,
            // markers: true
          }
        }
      )
    })
    return () => {
      if(t1) t1.kill()
    }
  }, [])
  return (
    <Section id='roadmap'>
        <Title>roadmap</Title>
        <Container>
          <DrawSvg/>
          <ListItem>
            <Item/>
            <RoadmapItem addToRef={addToRef} title='Grand Opening' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
            <RoadmapItem addToRef={addToRef} title='Great Benefits' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
            <RoadmapItem addToRef={addToRef} title='Early Access' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
            <RoadmapItem addToRef={addToRef} title='New Merch' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
            <RoadmapItem addToRef={addToRef} title='Holders Ranking' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
          </ListItem>
        </Container>
    </Section>
  )
}
// {/* <ListItem>
//   <Item/>
//   <RoadMapItem addToRef={addToRef} title='Grand Opening' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
//   <RoadMapItem addToRef={addToRef} title='Great Benefits' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
//   <RoadMapItem addToRef={addToRef} title='Early Access' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
//   <RoadMapItem addToRef={addToRef} title='New Merch' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
//   <RoadMapItem addToRef={addToRef} title='Holders Ranking' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
// </ListItem> */}
