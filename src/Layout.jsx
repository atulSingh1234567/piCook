import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import { MyContextProvider } from './contexts/Context.js'
import { AuthContextProvider } from './contexts/Auth.jsx'

export default function Layout() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <AuthContextProvider>
    <MyContextProvider value={{isLoggedIn , setIsLoggedIn}}>
    <div className='flex justify-center w-full'>
      <Navbar/>
      <Outlet/>
    </div>
    </MyContextProvider>
    </AuthContextProvider>
    
  )
}
