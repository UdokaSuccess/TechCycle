import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, collection } from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyD1zGoMltIihpnsCNR5op4j88Y-wEPi2ng",
    authDomain: "tech-cycle.firebaseapp.com",
    projectId: "tech-cycle",
    storageBucket: "tech-cycle.appspot.com",
    messagingSenderId: "799244518119",
    appId: "1:799244518119:web:acd41df994bd36c50ed842"
  }
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();


// Initialize firestore database
const database = getFirestore()

// Initialize storage
export const imgstorage = getStorage()

// our collection refernce to firestore
export const donorCollections = collection(database, 'donate')
// const receiveCollections = collection(database, 'receivers')



// getCollection data
// getDocs(donorCollections)
// .then((snapshot) => {
//   let donors = []
//   snapshot.docs.forEach((doc) => {
//     donors.push({...doc.data(), id: doc.id})
//   })
//   console.log(donors)
// })
// .catch(err => console.error(err))