import React,{useEffect} from 'react'
import { useAuthContext } from '../../contexts/Auth'
import { Outlet, useNavigate } from 'react-router-dom';
import Card from '../../components/card/Card';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Cookies from 'js-cookie';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
export default function Profile() {
    const {user,logOut,setSavedPhotoByUser} = useAuthContext();
    const navigate = useNavigate()
    const handleLogOut =()=>{
      logOut()
    }

    useEffect(
      ()=>{
        const accessToken = Cookies.get('accessToken');
        const user = JSON.parse(localStorage.getItem('user'))
        const userId = user?._id
        if(accessToken){
          axios.post('http://localhost:8000/api/v1/photos/send-saved-photo' , {userId})
          .then(
            (res)=>{
              setSavedPhotoByUser(res.data.photos)
              console.log(res)
            }
          )
        }
      }, []
    )

  return (
    
    <div className='flex w-full flex-col items-center relative top-20'>
      <div className='flex flex-col relative items-center'>
        
        {
            user?.avatar ? <img src={user?.avatar} alt="" className='rounded-full w-40 h-40 p-4' /> : <AccountCircleIcon className='min-w-28 min-h-28'/>
        }
        <p className='text-[30px]'>{user?.firstname}  {user?.lastname}</p>
        <p>{user?.username}</p>
        <p></p>
        <div className='flex gap-2'>
        <button onClick={()=> navigate('/settings/edit profile')} className='mt-4 bg-gray-300 p-2 rounded-xl'>Edit Profile</button>
        <button onClick={handleLogOut} className='mt-4 bg-gray-300 p-2 rounded-xl'>Log out</button>
        </div>
        <button onClick={()=>navigate('/create-your-pin')} className='rounded-full flex fixed z-10 right-4 items-center justify-center w-12 h-12 p-2 font-bold text-2xl bg-gray-300'>+</button>
      </div>
      <ul className='text-xl mt-4 text-red-500 flex gap-4'>
        <NavLink to='/profile/saved' className={({isActive})=>(`${isActive? 'underline rounded-full font-bold':'text-red-500'}`)}>Saved</NavLink>
        <NavLink to='/profile/created-pin' className={({isActive})=>(`${isActive? 'underline rounded-full font-bold':'text-red-500'}`)}>Created Pin</NavLink>
      </ul>
      <div className='w-full px-2 mt-8'>
           <Outlet />
        </div>
    </div>
    
  )
}
