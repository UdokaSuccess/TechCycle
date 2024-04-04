import Login from "./pages/Login"
import Footer from './pages/Footer'
import Navbar from './Navbar'

function Loginpg() {
  return (
    <div className="loginpg">
      <Navbar/>
      <Login/> 
      <Footer/>
    </div>
  )
}

export default Loginpg