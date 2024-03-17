import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import { MyContextProvider } from './contexts/Context.js'

export default function Layout() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <MyContextProvider value={{isLoggedIn , setIsLoggedIn}}>
    <div className='flex w-full'>
      <Navbar/>
      <Outlet/>
    </div>
    </MyContextProvider>
  )
}
