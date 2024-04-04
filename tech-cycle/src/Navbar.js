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
        <div className='iconStyle' >
        <Link to='/'><img src={img} width={72}/></Link>
        </div>
        <ul className={`nav-list ${showNavbar && 'active'}`}>
        <li><Link to='/'>Home</Link></li>        
        <li><Link to='/about'>About</Link></li> 
        <li><Link to='/donate'>Donate</Link></li>
        <li><Link to='/receiver'>Reciever</Link></li>
        <li><Link to='/contact'>Contact</Link></li>        
        <li><Link to='/signup'>Signup</Link></li>
        <li><Link to='/login'>Login</Link></li>

        <input placeholder='Search' className='navSearch'></input>


         </ul>
         <IoMenuSharp className='icon' size={32} onClick={toggleMenu}/>
         </div>
      )
   } 
   export default Navbar;