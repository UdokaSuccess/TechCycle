import {Link} from 'react-router-dom'
import { IoMenuSharp } from "react-icons/io5";
import { useState, useEffect} from 'react';
import img from './pages/images/t-cycle2.png'
import { logOut } from './pages/Login';
import { auth } from './pages/firebase';
import { onAuthStateChanged } from 'firebase/auth';



function Navbar() { 
  const [showNavbar, setShowNavbar] = useState(false)  
   
    const toggleMenu = () => {
    console.log('clicked')
    setShowNavbar(!showNavbar)
  }

  
  // To manage logged in state and corresponding UI elements

  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setisLoggedIn(!!user);
    });
  }, []);

     return (
      <div className="navbar">
        <Link to='/'><img src={img} width={80}/></Link>

        <ul className={`nav-list ${showNavbar && 'active'}`}>
        <li><Link to='/'>Home</Link></li>        
        <li><Link to='/about'>About</Link></li> 
        <li><Link to='/donate'>Donate</Link></li>
        <li><Link to='/gadgets'>Receive</Link></li>
        <li><Link to='/contact'>Contact</Link></li> 
               
        { isLoggedIn  ?
       (<li id='logout' onClick={logOut} ><Link>Logout</Link></li>)
       :
        (<>
          <li id='signup'><Link to='/signup' >Signup</Link></li>
          <li id='login'><Link to='/login' >Login</Link></li>
        </>)}
           
      </ul>
         <IoMenuSharp className='icon' size={48} onClick={toggleMenu}/>
         </div>
      )
      
    } 
   export default Navbar;