import { Outlet, useLocation, Navigate } from "react-router-dom"
import { auth } from "./firebase"

function Protected() {
  const location = useLocation()
  return auth.currentUser ?(<Outlet/>): (<Navigate to= '/signup' state={{from: location}} replace/>)
} 

export default Protected