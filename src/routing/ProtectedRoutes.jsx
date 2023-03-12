import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Navbar from '../assets/components/navigation/Navbar'
import { auth } from '../assets/config/FirebaseConfig'

function ProtectedRoutes() {
  useEffect(()=>{
    
  })
  return (
    auth?
    <main>
        <Navbar/>
        <Outlet/>
    </main>
    :<Navigate to={`/login`}/>
  )
}

export default ProtectedRoutes