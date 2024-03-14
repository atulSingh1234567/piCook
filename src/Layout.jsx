import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'

export default function Layout() {
  return (
    <div className='flex w-full'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
