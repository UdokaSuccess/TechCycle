import React from 'react'
import heroimg from './images/heroimg2.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
    <div className='hero-sec'>
    <div className='row'>
      <div className='col1'>
      <h1>JOIN THE TECH CYCLE <br></br>COMMUNITY:</h1>
      <p>Donate your old  laptops, <br></br>Recieve needed tech <br></br>solutions</p>
      <Link to='/donate'><button className='button'>Donate</button></Link>

      </div>
      <div className='col2'>
        <img src={heroimg} width={480} className='heroimg'/>
      </div>
      </div>
      </div>
    <div className='cta-text'>
        <h2>Empower Others by donating your gadgets <br></br> for <span id='text'></span></h2>
        {/* <Link to='/donate'><button className='button'>Donate</button></Link> */}
      </div> 
  </>
  )
}

export default Hero