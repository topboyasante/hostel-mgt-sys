import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

//Firebase Authentication
import {auth} from '../../config/FirebaseConfig'
import {signInWithEmailAndPassword } from 'firebase/auth'

//React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
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

       async function signIn(e){
        e.preventDefault()
         try{
            resetFields()
             await signInWithEmailAndPassword(auth,email,password)
             localStorage.setItem("user",JSON.stringify(auth.currentUser))
             toast.success('Successfully Signed In! You will be Redirected to the Dashboard.', {
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
                    navigate("/app/dashboard");
                  }, 3000);
         }catch(err){
            toast.error(`${err}`, {
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
            <h1 className='uppercase tracking-widest'>Sign In | Hostel Management System</h1>
            <hr className='my-5'/>
            <form>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none appearance-none" placeholder="name@hostelmgt.com" required
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none appearance-none" required
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            </form>
            <section className='flex gap-5'>
            <button type="submit" onClick={signIn} className="text-[#654330] bg-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center uppercase tracking-widest">Submit</button>
            <Link to={`/register`}>
            <button className="text-[#654330] bg-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center uppercase tracking-widest">I'm new here</button>
            </Link>
            </section>
        </section>

        {/* Image */}
        <img src="https://images.unsplash.com/photo-1596276020587-8044fe049813?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2139&q=80" alt="auth" 
        className='w-[70%] h-screen'/>
        <ToastContainer/>
    </main>
  )
}

export default SignIn