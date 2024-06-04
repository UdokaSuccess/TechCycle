import { Outlet, useLocation, Navigate } from "react-router-dom"
import { auth } from "./firebase"




function Protected() {
  const location = useLocation()
 return auth.currentUser ?(<Outlet/>) : (<Navigate to= '/login' state={{from: location}} replace/>)
}

export default Protected