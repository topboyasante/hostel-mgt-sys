import React from 'react'
import { Route, Routes } from 'react-router-dom'

//Page Components
import SignIn from './assets/pages/auth/SignIn'
import SignUp from './assets/pages/auth/SignUp'
import LandingPage from './assets/pages/LandingPage'
import ProtectedRoutes from './routing/ProtectedRoutes'


//Firebase
import {auth} from './assets/config/FirebaseConfig'
import Dashboard from './assets/pages/app/Dashboard'

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='register' element={<SignUp/>}/>
        <Route path='login' element={<SignIn/>}/>

        <Route path='app' element={<ProtectedRoutes></ProtectedRoutes>}>
          <Route index element={<Dashboard/>}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App