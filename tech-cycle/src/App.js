import React, {useState, useEffect} from 'react'
import { createContext } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Reset from './pages/Reset';
import Landing from "./pages/Landing";
import DonationPage from "./pages/DonationPage";
import Receiver from "./pages/Receiver";
import Gadgetlist from "./Gadgetlist";
import About from "./pages/About"
import Loginpg from "./Loginpg"
import Signupp from "./Signup2";
import ContactUs from "./ContactUs";
import Protected from './pages/Protected';
import imga from './pages/images/laptop1.jpg'
import imgb from './pages/images/laptop2.jpg'
import imgc from './pages/images/laptop3.jpg'

// ---------------to make context accessible across all pages--------------------
export const UserContext = createContext()


function App() {  
  const [laptopValue, setlaptopValue]= useState('')
  const [specsValue, setspecsValue]= useState('')
  const [picsValue, setpicsValue]= useState('')
 

// -------------------To update details using typed response from donate page---------------------
  const handleLaptopName = (e) =>{
    const name = e.target.value
    setlaptopValue(name)
  }

  const handleLaptopSpecs = (e) =>{
    const specs = e.target.value
    
    setspecsValue(specs)
   }

  const handlePics = (e) =>{
    const imgurl = URL.createObjectURL(e.target.files[0])
    setpicsValue(imgurl); 
    }


  // ----------------To save form details and make it accessible to other components-------------------------------
  const laptops = [
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
    name: 'Macbook Pro ',
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


const laptopDetails = localStorage.getItem('donors')
? JSON.parse(localStorage.getItem('donors')) : laptops

  const [donations, setdonations]= useState(laptopDetails)
  
useEffect(() => {
  localStorage.setItem("donors", JSON.stringify(donations))
}, [donations])


const submit =  (e) => {
  e.preventDefault()
      const newDonation = 
    {
      id: Math.floor(Math.random() * 1000),
      name: laptopValue,
      image: picsValue,
      specs: specsValue      
      }
     const donation =  [...donations, newDonation]
     setdonations(donation)
     document.getElementsByClassName('donation-form')[0].reset()
     setlaptopValue('')
     setspecsValue('')
     document.getElementsByClassName('popup')[0].style.display = "block"
     document.getElementsByClassName('dim-pg')[0].style.display = "block"
  }



  // -------------------Search Functionality-----------------------------------
  // const [searchValue, setsearchValue] = useState('')
  
 
  //   const search = (e) => {  
  //     setsearchValue(e.target.value)
  //     if(searchValue.trim().length > 0){
  //     const filterSearch = donations.filter((item) => (item.name.toLowerCase().includes(searchValue.toLowerCase()) || 
  //     item.specs.toLowerCase().includes(searchValue.toLowerCase())  ))
  //     setdonations(filterSearch)
  //   }
  //     }
      // const handleSearchInput = (e) =>{
   
      //    }

   return (
    <UserContext.Provider value={donations}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/signup" element={<Signupp/>} />
      <Route path="/login" element={<Loginpg/>} />  
      <Route path="/reset" element={<Reset/>} /> 
      <Route path="/about" element={<About />} /> 

      
      <Route element={<Protected/>}>
      <Route path="/donate" element={<DonationPage handleLaptopName={handleLaptopName} handleLaptopSpecs={handleLaptopSpecs} handlePics={handlePics} devicename={laptopValue} devicespecs={specsValue} submitbtn={submit}/>} />
      <Route path="/gadgets" element={<Gadgetlist/>} />
      <Route path="/receiver" element={<Receiver />} />
      <Route path="/contact" element={<ContactUs />} />
      </Route> 
     </Routes>
    </BrowserRouter>
    </UserContext.Provider> 
  )
}

export default App;