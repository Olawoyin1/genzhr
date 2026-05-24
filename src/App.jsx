import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import AudBar from './components/AudBar'
import About from './components/About'
import Services from './components/Services'
import Career from './components/Career'
import Packages from './components/Packages'
import Recruitment from './components/Recruitment'
import Media from './components/Media'
import ExistingHR from './components/ExistingHR'
import Proof from './components/Proof'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { DynamicIslandTOC } from './components/DynamicIslandTOC'

export default function App() {
  return (
    <DynamicIslandTOC>
      <Nav />
      <Hero />
      <Marquee />
      <AudBar />
      <About />
      <Services />
      <Career />
      <Packages />
      <Recruitment />
      <Media />
      <ExistingHR />
      <Proof />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </DynamicIslandTOC>
  )
}
