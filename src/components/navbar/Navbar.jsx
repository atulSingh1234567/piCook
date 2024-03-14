import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  return (
    <>
    <div className='flex fixed text-gray-600 z-30 bg-white w-full justify-evenly items-center h-20'>
        <span className='text-2xl max-[829px]:text-lg text-black font-bold'>
            piCOOk
        </span>
        <span className='w-[10%] max-[829px]:hidden min-[830px]:gap-2 flex font-semibold justify-between'>
            <NavLink className={({isActive})=>`${isActive? 'bg-black w-fit px-2 py-1 rounded-xl text-white' : ''}`} to='/'>Home</NavLink>
            <NavLink className={({isActive})=>`${isActive? 'bg-black w-fit px-2 py-1 rounded-xl text-white' : ''}`}  to='/explore'>Explore</NavLink>
        </span>
        <span className='relative flex items-center h-[80%] w-[60%]'>
           <input type="text" placeholder='Search' className='w-full bg-gray-100 px-11 rounded-full h-[70%] border focus:outline focus:outline-blue-600 focus:outline-offset-2 focus:outline-2'/>
           <SearchIcon className='absolute left-4 text-gray-500'/>
        </span>
        
        <span className='w-[10%] flex justify-between'>
        <i className='max-[500px]:hidden'> <NotificationsIcon /> </i>
        <AccountCircleIcon/>
        <KeyboardArrowDownIcon className='bg-gray-100 rounded-full'/>
        </span>
      
    </div>
    </>
  )
}
