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
        <div className='iconStyle' >
        <Link to='/'><img src={img} width={48}/></Link>
        <p className='iconStyleText'>TECH CYCLE</p>
        </div>
        <ul className={`nav-list ${showNavbar && 'active'}`}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/donate'>Donate</Link></li>
        <li><Link to='/receiver'>Reciever</Link></li>

        <li><Link to='/blog'>About</Link></li> 
        <li><Link to='/blog'>Reviews</Link></li>  
        <input placeholder='Search' className='navSearch'></input>


         </ul>
         <IoMenuSharp className='icon' size={32} onClick={toggleMenu}/>
         </div>
      )
   } 
   export default Navbar;