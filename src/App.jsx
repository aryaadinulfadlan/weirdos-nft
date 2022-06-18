import React from 'react'
import { ThemeProvider } from 'styled-components'
import ScrollToTop from './components/ScrollToTop'
import { GlobalStyles } from './GlobalStyles'
import { light } from './Themes'
import NavigationBar from './components/sections/NavigationBar'
import Home from './components/sections/HomeSection'
import About from './components/sections/AboutSection'
import Roadmap from './components/sections/RoadmapSection'
import Showcase from './components/sections/ShowcaseSection'
import Team from './components/sections/TeamSection'
import Faq from './components/sections/FaqSection'
import Footer from './components/sections/FooterSection'

export default function App() {
  return (
    <ThemeProvider theme={light}>
        <GlobalStyles/>
        <NavigationBar/>
        <Home/>
        <About/>
        <Roadmap/>
        <Showcase/>
        <Team/>
        <Faq/>
        <Footer/>
        <ScrollToTop/>
    </ThemeProvider>
  )
}
