import React, {useState} from 'react'
import { createContext } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from "./pages/Landing";
import DonationPage from "./pages/DonationPage";
import Receiver from "./pages/Receiver";
import Gadgetlist from "./Gadgetlist";
import About from "./pages/About"
import Loginpg from "./Loginpg"
import Signupp from "./Signup2";
import ContactUs from "./pages/ContactUs";
import imga from './pages/images/laptop1.jpg'
import imgb from './pages/images/laptop2.jpg'
import imgc from './pages/images/laptop3.jpg'


export const UserContext = createContext()

function App() {  
  const [laptopValue, setlaptopValue]= useState('')
  const [specsValue, setspecsValue]= useState('')
  const [picsValue, setpicsValue]= useState('')
    
// -------------------To update details using typed response from donate page---------------------
  const handleLaptopName = (e) =>{
    setlaptopValue(e.target.value)
    console.log('done')
  }
  const handleLaptopSpecs = (e) =>{
    setspecsValue(e.target.value)
  }
  const handlePics = (e) =>{
    setpicsValue(URL.createObjectURL(e.target.files[0]))   
  }


  // ----------------To save form details and make it accessible to other components-------------------------------
  const laptopDetails = [
    {
    id: Math.floor(Math.random() * 1000),
    name: 'Hp Pro book',
    image: imga,
    specs: "5000mah, corei5, 8gb Ram processor, 2ms SSD"
  },
  
     {
    id: Math.floor(Math.random() * 1000),
    name: 'Lenovo Thinkpad',
    image: imgb,
    specs: "8000mah, corei7, 4gb Ram processor, 65cu graphics card",
    },
    {
    id: Math.floor(Math.random() * 1000),
    name: 'Hp Elite Book',
    image: imgc,
    specs: "5000mah, corei5, 256gb rom HDD, light and flexible",
    },
    {
    id: Math.floor(Math.random() * 1000),
    name: 'Hp Pro book',
    image: imga,
    specs: "5000mah, corei5, 8gb Ram processor, 2ms SSD"},
    {
    id: Math.floor(Math.random() * 1000),
    name: 'Lenovo Thinkpad',
    image: imgb,
    specs: "8000mah, corei7, 4gb Ram processor, 65cu graphics card",
    
    },
    {
    id: Math.floor(Math.random() * 1000),
    name: 'Hp Elite Book',
    image: imgc,
    specs: "5000mah, corei5, 256gb rom HDD, light and flexible",
    }
  ]
  
    
  const [donations, setdonations]= useState(laptopDetails)

  const submit =  () => {
    const newDonation = 
    {
      id: Math.floor(Math.random() * 1000),
      name: laptopValue,
      image: picsValue,
      specs: specsValue      
      }
     const donation =  [...donations, newDonation]
     setdonations(donation)   
     setspecsValue('')
     setlaptopValue('')
  }

  return (
    <UserContext.Provider value={donations}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/donate" element={<DonationPage handleLaptopName={handleLaptopName} handleLaptopSpecs={handleLaptopSpecs} handlePics={handlePics} devicename={laptopValue} devicespecs={specsValue} submitbtn={submit}/>} />
      <Route path="/gadgets" element={<Gadgetlist/>} />
      <Route path="/receiver" element={<Receiver />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/signup" element={<Signupp/>} />
      <Route path="/login" element={<Loginpg/>} />   
    </Routes>
    </BrowserRouter>
    </UserContext.Provider> 
  )
}

export default App;