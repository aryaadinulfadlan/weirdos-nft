import React from 'react'
import FooterBanner from './FooterBanner'
import { Bottom, Copyright, Item, LogoList, LogoText, LogoWrap, Menu, Section } from './FooterStyle'
import { FaFacebook, FaHeart, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function Footer() {
    const scrollTo = id => {
        const element = document.getElementById(id)
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })
    }
  return (
    <Section>
        <FooterBanner/>
        <Bottom>
            <LogoWrap>
                <LogoText>
                    <Link to={'/'}>w</Link>
                </LogoText>
                <LogoList>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaYoutube/>
                </LogoList>
            </LogoWrap>
            <Menu>
                <Item onClick={() => scrollTo('home')}>Home</Item>
                <Item onClick={() => scrollTo('about')}>About</Item>
                <Item onClick={() => scrollTo('roadmap')}>Roadmap</Item>
                <Item onClick={() => scrollTo('showcase')}>Showcase</Item>
                <Item onClick={() => scrollTo('team')}>Team</Item>
                <Item onClick={() => scrollTo('faq')}>FAQ</Item>
            </Menu>
        </Bottom>
        <Copyright>
            <p>&copy; {new Date().getFullYear()} weirdos club. all rights reserved</p>
            <div>
                Made with <FaHeart/> by
                <a href="https://google.com">Arya Adinul Fadlan</a>
            </div>
        </Copyright>
    </Section>
  )
}
