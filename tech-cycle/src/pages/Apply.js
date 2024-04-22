import React from 'react'
import {Link} from 'react-router-dom'


function Apply() {
  return (
    <div className='apply'>
      <div className='apply-text'>
      <h3>Do You Need a Laptop?</h3>
      <p>Apply as a Recipient <Link to='/receiver'>here</Link></p>
      </div>
    </div>
  )
}

export default Apply;