import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
    {/* <h4 className='show'>Sign Up As a Recipient <a href='#'>here</a></h4> */}
    <div className='footer-text'>
           <ul>
          <li>Contact</li>
          <li>Social</li> 
          <li>About</li> 
          <li>Support</li>
           <li>Reviews</li>
         </ul>
         <ul>
          <li>Contact</li>
          <li>Blog</li> 
          <li>About</li> 
          <li>Careers</li>
           <li>Connect</li>
         </ul> 
         <ul>
          <li>Support</li>
          <li>Social</li> 
          <li>About</li> 
          <li>Careers</li>
           <li>Connect</li>
         </ul>
         <h4 className='hide'>Sign Up As a Recipient  <a href='#'>here</a></h4>
</div>
<hr></hr>
        <p>Copywright &copy;  Tech Cycle</p>
  </footer>
  )
}

export default Footer