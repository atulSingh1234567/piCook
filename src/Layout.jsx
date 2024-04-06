import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import { AuthContextProvider, useAuthContext } from './contexts/Auth.jsx'

export default function Layout() {
  
  return (
    <AuthContextProvider>
    
    <div className='flex justify-center w-full'>
      <Navbar/>
      <Outlet/>
    </div>
    
    </AuthContextProvider>
    
  )
}
