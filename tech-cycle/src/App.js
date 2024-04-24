import React, {useState, useEffect} from 'react'
import { createContext } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {addDoc, getDocs} from 'firebase/firestore'
import { donorCollections } from './pages/firebase'
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
    // const imgurl = e.target
    setpicsValue(imgurl); 
    }

//  --------------------get collection data from database-------------------------------
   const donors = []
getDocs(donorCollections)
.then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    donors.push({...doc.data(), id: doc.id})
  })
  console.log(donors)
})
.catch(err => console.error(err))

// ----------------manage state of donations--------------------------------------------
const [donations, setdonations] = useState(donors)

 // ------------------------add data to database when a user fills a form----------------------------
useEffect(() => {
   addDoc(donorCollections, {
    laptop: laptopValue,
    image: picsValue,
    specs: specsValue 
  })
}, [donations])

// -------------------------submit form function----------------------------------------

const submit =  (e) => {
  e.preventDefault()
      const newDonation = 
    {
      // id: Math.floor(Math.random() * 1000),
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
     console.log(donorCollections)
  }

  // -------------------Search Functionality-----------------------------------
  const [searchValue, setsearchValue] = useState('')
    const search = (e) => {  
      setsearchValue(e.target.value)
      if(searchValue.trim().length > 0){
      const filterSearch = donations.filter((item) => (item.name.toLowerCase().includes(searchValue.toLowerCase()) || 
      item.specs.toLowerCase().includes(searchValue.toLowerCase())  ))
      setdonations(filterSearch)
    }
      }
 
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
      <Route path="/gadgets" element={<Gadgetlist handleSearch={search}/>} />
      <Route path="/receiver" element={<Receiver />} />
      <Route path="/contact" element={<ContactUs />} />
      </Route> 
     </Routes>
    </BrowserRouter>
    </UserContext.Provider> 
  )
}

export default App;