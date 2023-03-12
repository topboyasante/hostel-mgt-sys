import React from 'react'
import { signOut } from '@firebase/auth'
//Firebase
import {auth} from '../../config/FirebaseConfig'
import { useNavigate } from 'react-router'




function Navbar() {

const navigate = useNavigate()
async function logOut(){
  await signOut(auth)
  setTimeout(() => {
    navigate("/login");
  }, 1000);
}

  return (
    <nav className='bg-[#654330] w-[15%] text-white fixed p-5 h-screen'>
      <p>{auth?.currentUser?.email}</p>
      <hr className='my-5'/>
      <button className='border px-4 py-2' onClick={logOut}>Sign Out</button>
    </nav>
  )
}

export default Navbar