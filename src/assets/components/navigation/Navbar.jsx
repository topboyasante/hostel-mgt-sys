import React, { useContext } from 'react'
import { signOut } from '@firebase/auth'
import { NavLink } from 'react-router-dom'

//Firebase
import {auth} from '../../config/FirebaseConfig'
import { useNavigate } from 'react-router'
import { AppContext } from '../../context/AppContext'

//Icons
import {RxDashboard} from 'react-icons/rx'
import {BsHouse,BsPeople} from 'react-icons/bs'


function Navbar() {
const user = JSON.parse(localStorage.getItem("user"))

const navigate = useNavigate()

let activeStyle = {
  borderLeft:'5px solid #654330',
  backgroundColor:'#f2f2f2',
  padding:'0.75rem'
};

async function logOut(){
  await signOut(auth)
  localStorage.removeItem("user")
  setTimeout(() => {
    navigate("/login");
  }, 1000);
}

  return (
    <nav className='bg-[#ffffff] w-[15%] text-[#654330] fixed p-5 h-screen border-r'>
      <p>{user.email}</p>
      <hr className='my-5'/>
      {/* Buttons */}
      
      <section className='flex flex-col h-full justify-around'>
        <section className='flex flex-col justify-around h-[50%]'>
            <NavLink to={`/app/dashboard`} exact='true' className='flex items-center gap-5 uppercase tracking-widest' style={({ isActive }) =>isActive ? activeStyle : undefined}>
                <RxDashboard size={30}/>
                <p>Dashboard</p>
            </NavLink>
            <NavLink to={`/app/rooms`} exact='true' className='flex items-center gap-5 uppercase tracking-widest' style={({ isActive }) =>isActive ? activeStyle : undefined}>
                <BsHouse size={30}/>
                <p>Rooms</p>
            </NavLink>
            <NavLink to={`/app/tenants`} exact='true' className='flex items-center gap-5 uppercase tracking-widest' style={({ isActive }) =>isActive ? activeStyle : undefined}>
                <BsPeople size={30}/>
                <p>Tenants</p>
            </NavLink>
        </section>
        <button className='border px-4 py-2' onClick={logOut}>Sign Out</button>
      </section>
    </nav>
  )
}

export default Navbar