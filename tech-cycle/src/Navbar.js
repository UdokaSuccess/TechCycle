import {Link} from 'react-router-dom'
import { IoMenuSharp } from "react-icons/io5";
import { useState } from 'react';
import img from './pages/images/t-cycle.png'



function Navbar(props) { 
  const [showNavbar, setShowNavbar] = useState(false)

  const toggleMenu = () => {
    console.log('clicked')
    setShowNavbar(!showNavbar)
  }
    return(
      <div className="navbar">
        <Link to='/'><img src={img} width={48}/></Link>
        <ul className={`nav-list ${showNavbar && 'active'}`}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/donate'>Donate</Link></li>
        <li><Link to='/about'>Recieve</Link></li>

        <li><Link to='/blog'>About</Link></li> 
        <li><Link to='/blog'>Reviews</Link></li>  


         </ul>
         <IoMenuSharp className='icon' size={32} onClick={toggleMenu}/>
         </div>
      )
   } 
   export default Navbar;