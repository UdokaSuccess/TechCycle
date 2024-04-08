import {Link} from 'react-router-dom'
import { IoMenuSharp } from "react-icons/io5";
import { useState } from 'react';
import img from './pages/images/t-cycle2.png'



function Navbar(props) { 
  const [showNavbar, setShowNavbar] = useState(false)

  const toggleMenu = () => {
    console.log('clicked')
    setShowNavbar(!showNavbar)
  }
    return(
      <div className="navbar">
        <Link to='/'><img src={img} width={80}/></Link>

        <ul className={`nav-list ${showNavbar && 'active'}`}>
        <li><Link to='/'>Home</Link></li>        
        <li><Link to='/about'>About</Link></li> 
        <li><Link to='/donate'>Donate</Link></li>
        <li><Link to='/gadgets'>Receiver</Link></li>
        <li><Link to='/contact'>Contact</Link></li>        
        <li><Link to='/signup'>Signup</Link></li>
        <li><Link to='/login'>Login</Link></li>

        {/* <input placeholder='Search' className='navSearch'/> */}


         </ul>
         <IoMenuSharp className='icon' size={48} onClick={toggleMenu}/>
         </div>
      )
   } 
   export default Navbar;