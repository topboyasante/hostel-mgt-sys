import React, { useContext, useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Navbar from '../assets/components/navigation/Navbar'
import { auth } from '../assets/config/FirebaseConfig'
import { AppContext } from '../assets/context/AppContext'

function ProtectedRoutes() {
  const {currentUser}= useContext(AppContext)
  
  return (
    JSON.parse(localStorage.getItem("user"))?
    <main>
        <Navbar/>
        <Outlet/>
    </main>
    :<Navigate to={`/login`}/>
  )
}

export default ProtectedRoutes