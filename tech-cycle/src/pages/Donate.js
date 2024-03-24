import React from 'react'
import img from './images/img5.jpg'


function Donate() {
  return (
    <div className='donors'>
        <div className='row'>
            <div>
                <h1>DONATE TO TECH CYCLE</h1>
            <p>And become part of our wonderful community</p>
            <button className='button'>Donate</button>
            </div>
         <div className='donor'>
        <img src={img} width={540}/>
        </div>
        </div>
    </div>
  )
}

export default Donate