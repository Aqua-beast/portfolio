import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Image from '../components/3Dimage/Image'
import About from '../components/About/About'
import Experience from '../components/Experience/Experience'
import Resume from '../components/Resume/Resume'
import Projects from '../components/Projects/Projects'
import ContactMe from '../components/ContactMe/ContactMe'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <Image />
      <About />
      <Experience />
      <Resume />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default Home
