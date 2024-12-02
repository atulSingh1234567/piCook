import React, { useState } from 'react'
import { useAuthContext } from '../../contexts/Auth'
import PhotoComp from '../../components/photo/PhotoComp'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Alert, AlertTitle,Stack } from '@mui/material';

export default function EditProfile() {
  const [userDetails, setUserDetails] = useState({})
  const [alert , setAlert] = useState(false)
  const { user, photoBox,error,setError, setPhotoBox,setUser, image } = useAuthContext()


  const handleInput = (e) => {
    const { name, value } = e.target
    setUserDetails({
      ...userDetails,
      [name]: value
    })
  }

  console.log(userDetails)

  const postProfileDetails = (e) => {
    e.preventDefault()
    console.log(Cookies.get('accessToken'));
    axios.post('http://localhost:8000/api/v1/users/edit-profile' , {userDetails , accessToken: Cookies.get('accessToken')})
    .then(
      (res)=>{
        console.log(res)
        setUser(res.data.user)
        setAlert(true)
        setError(res)
      }
    )
    .catch(
      (err)=>console.log(err)
    )
  }

  return (
    <form onSubmit={postProfileDetails} action="">
      { alert ? <Stack sx={{ width: '100%', position: 'fixed',zIndex: '1', top: '80px' }} spacing={2}>
      <Alert severity={`${error?.status>=200 && error.status<=298? 'success' : 'error'}`} onClose={()=>{setAlert(false)}}>
        <AlertTitle>{error?.status}</AlertTitle>
        {error?.data?.message}
      </Alert>
    </Stack> : ''
}
      <div className='relative px-12 top-2 w-full'>
        {
          photoBox && <div className='absolute z-10 left-[30%] max-[700px]:left-[10%]'><PhotoComp /></div>
        }
        <div className='flex my-6 items-center flex-col gap-2 tracking-wide'>
          <h1 className='text-3xl'>Edit Profile</h1>
          <p className='max-w-[600px]'>SO, what should we know about you, tell us...</p>
        </div>
        <div className='flex items-center flex-col gap-4'>
          <div className='flex items-center gap-8'>
            <img src={user.avatar} alt="profile" className='rounded-full w-24 h-24 bg-gray-300' />
            <button onClick={() => setPhotoBox(true)} className='bg-gray-400 rounded-xl text-white px-4 h-[40px]'>Change</button>
          </div>
          <div className={`flex gap-2 ${photoBox ? 'text-gray-300' : ''}`}>
            <span className='flex flex-col gap-1'>
              <label htmlFor="firstname">First name</label>
              <input
                onChange={handleInput}
                value={userDetails.firstname}
                type="text" name='firstname' className={`${photoBox ? 'pointer-events-none opacity-50 bg-gray-200' : ''} border px-4 h-[50px] border-gray-400 focus:outline outline-blue-500 outline-1 rounded-xl max-[400px]:w-[150px] w-[200px]`} />
            </span>
            <span className='flex flex-col gap-1'>
              <label htmlFor="lastname">Last name</label>
              <input
                onChange={handleInput}
                value={userDetails.lastname}
                type="text" name='lastname' className={`${photoBox ? 'pointer-events-none opacity-50 bg-gray-200' : ''} w-[200px] px-4 focus:outline outline-blue-500 outline-1 h-[50px] border-gray-400 rounded-xl max-[400px]:w-[150px] border`} />
            </span>
          </div>
          <div className='flex max-[400px]:flex-col max-[400px]:ml-[100px] w-[408px]'>
            <div className={`flex w-full flex-col ${photoBox ? 'text-gray-300' : ''}`}>
              <label htmlFor='username'>Username</label>
              <input
                onChange={handleInput}
                value={userDetails.username}
                type="text" name='username' className={`${photoBox ? 'pointer-events-none opacity-50 bg-gray-200' : ''}  px-4 max-[400px]:w-[300px] focus:outline outline-blue-500 outline-1 h-[50px] border-gray-400 rounded-xl border`} />
            </div>
          </div>
          <button type='submit' className='bg-gray-400 p-2 rounded-xl text-white min-w-[320px] w-[33%]'>Add your details</button>
        </div>
      </div>
    </form>
  )
}
