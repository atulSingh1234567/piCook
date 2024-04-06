import React from 'react'
import { useAuthContext } from '../../contexts/Auth'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
export default function FeatureCard() {
    const {user,logOut} = useAuthContext()
    const navigate = useNavigate()
    const handleLogOut = async ()=>{
        
      try {
          await logOut();
          Cookies.remove('accessToken');
          window.location.href = '/'
      } catch (error) {
          console.log('could not log out! ', error)
      }
  }

    const gotosettings = ()=>{
        navigate('/settings/edit profile')
    }
  return (
    <div className='max-w-[300px] p-2 border rounded-xl w-[300px] bg-white'>
      <div onClick={()=>navigate('/profile')} className='flex gap-2 cursor-pointer items-center'>
         <img src={user.avatar} alt="" className='h-16 w-16 rounded-full'/>
         <span>
            <p>{user.firstname} {user.lastname}</p>
            <p>{user.email}</p>
         </span>
      </div>
      <div className='flex flex-col p-4 gap-2 font-semibold'>
        <span onClick={gotosettings} className='cursor-pointer'>Settings</span>
        <span onClick={()=>navigate('/')} className='min-[829px]:hidden min-[830px]:gap-2'>Home</span>
        <span onClick={()=>navigate('/explore')} className='min-[829px]:hidden min-[830px]:gap-2'>Explore</span>
        <span onClick={handleLogOut} className='cursor-pointer'>Log out</span>
      </div>
    </div>
  )
}
