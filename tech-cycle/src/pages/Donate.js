import React from 'react'
import img from './images/img5.png'

function Donate() {
  return (
    <div className='donors'>
        <div className='row'>
            <div>
                <h1>DONATE TO TECH<br></br> CYCLE</h1>
            <p>And become part of our wonderful community</p>
         <a href='#donate-form'><button className='button'>Donate</button></a>


            </div>
         <div className='donor'>
        <img src={img} width={460}/>
        </div>
        </div>
    </div>
  )
}

export default Donate