import React, { useContext } from 'react'
import { signOut } from '@firebase/auth'
//Firebase
import {auth} from '../../config/FirebaseConfig'
import { useNavigate } from 'react-router'
import { AppContext } from '../../context/AppContext'

//Icons
import {RxDashboard} from 'react-icons/rx'


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
      {/* Buttons */}
      <section className='flex flex-col justify-around h-[50%]'>
          <div className='flex items-center gap-5'>
              <RxDashboard/>
              <p>Dashboard</p>
          </div>
          <div className='flex items-center gap-5'>
              <RxDashboard/>
              <p>Rooms</p>
          </div>
          <div className='flex items-center gap-5'>
              <RxDashboard/>
              <p>Tenants</p>
          </div>
          <div className='flex items-center gap-5'>
              <RxDashboard/>
              <p>Tenants</p>
          </div>
          <div className='flex items-center gap-5'>
              <RxDashboard/>
              <p>Tenants</p>
          </div>
      </section>
      <br />
      <button className='border px-4 py-2' onClick={logOut}>Sign Out</button>
    </nav>
  )
}

export default Navbar