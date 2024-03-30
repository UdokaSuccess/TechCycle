import React from 'react'
import img from './images/img6.png'
import imgb from './images/img7.png'
import imgc from './images/img8.png'
import imgd from './images/img9.png'





function AboutSec() {
  return (
    <div className='about-section'>
                <h2>Bridging the Digital Divide for All</h2>

        <div className='abt-row'> 
            <div>
                <h3>The Problem </h3>
                <hr></hr>
                <p>The digital divide remains significant concern, as millions of individuals,
                    <br></br> especially women lack access to essential technologies.</p>
                <button className='button'>View More</button>
            </div>
            <div>
                <img src={img} width={380}/>
            </div>
        </div>
        <div className='about-row'> 
        <div>
            <img src={imgb} width={380}/>
            </div>
            <div>
                <h3>Our Solution</h3>
                <hr></hr>
                <p>Tech Cycle aims to address thid digital divide by donating refurbished laptops
                    <br></br> to individuals, regardless of gender but based on need</p>
                <button className='button'>View More</button>
            </div>
        </div>
        <div className='abt-row'> 
            <div>
                <h3>Our Impact </h3>
                <hr></hr>
                <p>By providing individuals with laptops, we empower them<br></br> to enhance their education and work 
                    <br></br>opportunities through online courses, certfications, or job-related tasks.</p>
                <button className='button'>View More</button>
            </div>
            <div>
                <img src={imgc} width={380}/>
            </div>
            </div>
            <div className='about-row'> 
            <div className='about-col'>
                <img src={imgd} width={380}/>
            </div>
            <div>
                <h3>Join Us</h3>
                <hr></hr>
                <p>The digital divide remains significant concern, as millions of individuals,
                    <br></br> especially women lack access to essential technologies.</p>
                <button className='button'>View More</button>
            </div>
        </div>
    </div>
  )
}

export default AboutSec