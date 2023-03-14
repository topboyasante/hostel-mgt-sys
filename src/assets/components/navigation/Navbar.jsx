import React, { useContext } from 'react'
import { signOut } from '@firebase/auth'
//Firebase
import {auth} from '../../config/FirebaseConfig'
import { useNavigate } from 'react-router'
import { AppContext } from '../../context/AppContext'




function Navbar() {
const user = JSON.parse(localStorage.getItem("user"))
const navigate = useNavigate()
async function logOut(){
  await signOut(auth)
  localStorage.removeItem("user")
  setTimeout(() => {
    navigate("/login");
  }, 1000);
}

  return (
    <nav className='bg-[#654330] w-[15%] text-white fixed p-5 h-screen'>
      <p>{user.email}</p>
      <hr className='my-5'/>
      <button className='border px-4 py-2' onClick={logOut}>Sign Out</button>
    </nav>
  )
}

export default Navbar