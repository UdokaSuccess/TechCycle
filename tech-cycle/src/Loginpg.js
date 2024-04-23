import Login from "./pages/Login"
import Footer from './pages/Footer'
import Navbar from './Navbar'

function Loginpg({handleLogin}) {
  return (
    <div className="loginpg">
      <Navbar/>
      <Login handleLogin={handleLogin}/> 
      <Footer/>
    </div>
  )
}

export default Loginpg