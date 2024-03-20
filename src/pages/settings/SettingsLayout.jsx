import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function SettingsLayout() {
  
  return (
    <div className='relative w-full flex flex-col gap-4 px-4 top-20'>
        
      <div className='flex gap-4 font-semibold text-gray-500'>
         <NavLink className={({isActive})=>`${isActive ? 'underline underline-offset-4 decoration-2' : ''}`} to='/settings'>Edit Profile</NavLink>
         <NavLink className={({isActive})=>`${isActive ? 'underline underline-offset-4 decoration-2' : ''}`} to='/settings/manage your account'>Manage your Account</NavLink>
      </div>
      <div>
      <Outlet />
      </div>
    </div>
  )
}
