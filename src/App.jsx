import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

//Page Components
import SignIn from './assets/pages/auth/SignIn'
import SignUp from './assets/pages/auth/SignUp'
import LandingPage from './assets/pages/LandingPage'
import ProtectedRoutes from './routing/ProtectedRoutes'


//Firebase
import {auth} from './assets/config/FirebaseConfig'

//AppContext
import {AppContext} from './assets/context/AppContext'

//Page Sections
import Dashboard from './assets/pages/app/Dashboard'
import Rooms from './assets/pages/app/Rooms'
import TenantList from './assets/pages/app/TenantList'

function App() {
  const [currentUser,setCurrentUser] = useState(null)
  return (
    <AppContext.Provider value={{currentUser,setCurrentUser}}>
        <main>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='register' element={<SignUp/>}/>
          <Route path='login' element={<SignIn/>}/>

          <Route path='app' element={<ProtectedRoutes></ProtectedRoutes>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='rooms' element={<Rooms/>}/>
            <Route path='tenants' element={<TenantList/>}/>
          </Route>
        </Routes>
      </main>
    </AppContext.Provider>
  )
}

export default App