import { useEffect, useState } from "react"
import Button from "../../Button"
import Logo from "../../Logo"
import { BarWrap, HamburgerMenu, Item, MenuBar, Navbar, Section } from "./NavigationStyle"

export default function NavigationBar() {
    const [clicked, setClicked] = useState(false)
    const scrollTo = id => {
      const element = document.getElementById(id)
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
      setClicked(false) 
    }
    useEffect(() => {
      if (clicked) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }, [clicked])
    return (
      <Section>
        <Navbar>
          <Logo/>
          <MenuBar clicked={clicked}>
              <Item onClick={() => scrollTo('home')}>Home</Item>
              <Item onClick={() => scrollTo('about')}>About</Item>
              <Item onClick={() => scrollTo('roadmap')}>Roadmap</Item>
              <Item onClick={() => scrollTo('showcase')}>Showcase</Item>
              <Item onClick={() => scrollTo('team')}>Team</Item>
              <Item onClick={() => scrollTo('faq')}>FAQ</Item>
          </MenuBar>
          <BarWrap clicked={clicked} onClick={() => setClicked(prev => !prev)}>
            <HamburgerMenu clicked={clicked}>&nbsp;</HamburgerMenu>
          </BarWrap>
          <Button text='Connect' bgColor={'#202020'} color={'#fff'} borderColor={'#202020'} link='https://google.com'/>
        </Navbar>
      </Section>
    )
}