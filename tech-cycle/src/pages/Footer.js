import React from 'react'




function Footer() {
  return (
    <footer className='footer'>
    {/* <h4 className='show'>Sign Up As a Recipient <a href='#'>here</a></h4> */}
    <div className='footer-text'>
           <ul>
           <li><h4>Tech Cycle</h4></li>
           <li>Empowering Individuals in Need:<br></br> Unlocking the <br></br> Benefits of Donating <br></br>Unused Gadgets.
          </li>
         </ul>
         <ul>
          <li><h4>Sitemap</h4></li>

          <li>Home</li> 
          <li>About</li> 
          <li>Donate</li>
           <li>Recipient</li>
           <li>Contact</li>
         </ul> 
         <ul>
          <li><h4>Support</h4></li>
          <li>Social</li> 
          <li>About</li> 
          <li>Careers</li>
           <li>Connect</li>
           <li>Contact</li>
         </ul>
         <ul>
         <li><h4 className='hide'>Sign Up As a Recipient  <a href='/receiver'>here</a></h4></li>
         </ul>
</div>
<hr></hr>
<div className='copywright'>
        <small>Copywright &copy;  Tech Cycle 2024</small>
        <div>
        <small style={{margin: '24px'}}>Terms of use</small>
        <small>Privacy policy</small>
        </div>
</div>
  </footer>
  )
}
export default Footer