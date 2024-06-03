import React, {useState} from 'react'
import { createContext } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {addDoc, getDocs} from 'firebase/firestore'
import { donorCollections } from './pages/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { imgstorage } from './pages/firebase'
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
import { v4 } from 'uuid'

// ---------------to make context accessible across all pages---------------------------------------
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
    // const imgurl = URL.createObjectURL(e.target.files[0])
    const imgfile = e.target.files[0]
    const images= ref(imgstorage, `images/${v4()}`)
     uploadBytes(images, imgfile).then(data => {
      getDownloadURL(data.ref, images).then(url =>{
        setpicsValue(url)
      })
          }) 
    }


//  --------------------get collection data from database-------------------------------
useEffect(() => {
   const donors = []
   const getData = async () =>{
    let error = null
     try{
      const snapshot = await getDocs(donorCollections)
       snapshot.docs.forEach((doc) => {  
       donors.push({...doc.data(), id: doc.id})
     })  
         }
       catch (err) {
         console.error(error)
       }
   }
     window.onload = getData()
  }, [])



// ----------------manage state of donations--------------------------------------------
const [donations, setdonations] = useState(donors)


// -------------------------submit form function----------------------------------------
  const submit = async (e) => {
  e.preventDefault()
  try{
      const newDonation = 
    {
      // id: Math.floor(Math.random() * 1000),
      laptop: laptopValue,
      image: picsValue,
      specs: specsValue      
      }
     const donation =  [...donations, newDonation]
     setdonations(donation)
 // ------------------------add data to database when a user submits the form----------------------------
     await addDoc(donorCollections, {
      laptop: laptopValue,
      image: picsValue,
      specs: specsValue})

     document.getElementsByClassName('donation-form')[0].reset()
     setlaptopValue('')
     setspecsValue('')
     document.getElementsByClassName('popup')[0].style.display = "block"
     document.getElementsByClassName('dim-pg')[0].style.display = "block"
  }
     catch (err) {
      console.error(err)
    }
  }

  // --------------------------------Search Functionality----------------------------------------
  const [searchValue, setsearchValue] = useState('')
    const search = (e) => {  
      e.preventDefault()
    //   const searchInput = e.target.value.toLowerCase();
    //   setsearchValue(e.target.value)

    //   if(searchValue.trim().length > 0){
    //   const filterSearch = donations.filter((item) => (item.name.toLowerCase().includes(searchInput) || 
    //   item.specs.toLowerCase().includes(searchValue.toLowerCase())  ))
    //   setdonations(filterSearch)
    // }
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