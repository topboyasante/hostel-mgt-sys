import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

//Firebase Authentication
import {auth} from '../../config/FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'

//React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
     //State Values
     const [email,setEmail] = useState("")
     const [password,setPassword] = useState("")
     //Navigation
     const navigate = useNavigate()

     //Reset Fields
     function resetFields(){
        setEmail("")
        setPassword("")
     }
     async function createUser(e){
        e.preventDefault()
         try{
            resetFields()
             await createUserWithEmailAndPassword(auth,email,password)
             toast.success('Account Successfully Created! You will be redirected to the Login Page.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                setTimeout(() => {
                    navigate("/login");
                  }, 3000);
         }catch(err){
            toast.error(err, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
         }
     }

  return (
    <main className='hidden lg:flex justify-between items-center bg-[#654330] text-white'>
        {/* This Page has two sections, a form and an image. */}

        {/* Form */}
        <section className='w-[30%] p-5'>
            <h1 className='uppercase tracking-widest'>Sign Up | Hostel Management System</h1>
            <hr className='my-5'/>
            <form>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none appearance-none" 
                onChange={(e)=>setEmail(e.target.value)} placeholder="name@hostelmgt.com" required/>
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none appearance-none" 
                onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            </form>
            <section className='flex gap-5'>
            <button type="submit" onClick={createUser} className="text-[#654330] bg-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center uppercase tracking-widest">Submit</button>
            <Link to={`/login`}>
            <button className="text-[#654330] bg-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center uppercase tracking-widest">I have an account</button>
            </Link>
            </section>
        </section>

        {/* Image */}
        <img src="https://images.unsplash.com/photo-1596276020587-8044fe049813?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2139&q=80" alt="auth" 
        className='w-[70%] h-screen'/>
        <ToastContainer />
    </main>
  )
}

export default SignUp