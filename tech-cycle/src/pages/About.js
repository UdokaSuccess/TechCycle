import React from 'react'
import AboutSec from './AboutSec'
import Footer from './Footer'
import Mechanism from'./Mechanism'
import Navbar from '../Navbar'

function About() {
  return (
    <section>
      <Navbar/>
    <div className='about-hero'>
      <p style={{opacity: '0'}}>about us page</p>
      <div className='about-text'>
        <h1>About Us</h1>
        <p>We are Tech Cycle, a non-profit organisation<br></br>
        dedicated to empowering people in need with access to technology
        </p>
        </div>
    </div>
        <AboutSec/>
        <Mechanism/>
        <Footer/>
    </section>
  )
}

export default About