import React, { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios'
import { Alert, AlertTitle,Stack } from '@mui/material';
import { useAuthContext } from '../../contexts/Auth';

export default function ManageAccount() {
    const [changePassword, setChangePassword] = useState({})
    const [alert , setAlert] = useState(false)
    const {error , setError} = useAuthContext()
    const handleChangePassword = (e) => {
        const { name, value } = e.target
        setChangePassword({
            ...changePassword,
            [name]: value
        })
    }
    const postPassword = (e)=>{
        e.preventDefault()
        console.log("inside postPassword method")
        const accessToken = Cookies.get('accessToken');
        axios.post('http://localhost:8000/api/v1/users/change-password', {changePassword , accessToken})
        .then(
            (res)=>{
                console.log(res)
                setAlert(true);
                setError(res)
            }
        )
        .catch(
            (err)=>{
                console.log(err);
                setAlert(true);
                setError(res);
            }
        )
         
    }

    const deleteUser = ()=>{
        try {
            const accessToken = Cookies.get('accessToken');
            if(accessToken){
                axios.post('http://localhost:8000/api/v1/users/delete-account' , {accessToken})
                .then(
                    (res)=>{
                        localStorage.removeItem('user')
                        Cookies.remove('accessToken')
                        Cookies.remove('refreshToken')
                        window.location.href = '/login'
                    }
                )
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={postPassword} action="">
            { alert ? <Stack sx={{ width: '100%', position: 'fixed',zIndex: '1', top: '80px' }} spacing={2}>
      <Alert severity={`${error?.status>=200 && error.status<=298? 'success' : 'error'}`} onClose={()=>{setAlert(false)}}>
        <AlertTitle>{error?.status}</AlertTitle>
        {error?.data.message}
      </Alert>
    </Stack> : ''
}
            <div className='relative flex flex-col items-center px-12 top-2 w-full'>
            <div className='flex my-12 items-center flex-col gap-2 tracking-wide'>
          <h1 className='text-3xl'>Account management</h1>
          <p className='max-w-[600px]'>manage your account from here...</p>
        </div>
                <div>
                    <span className='flex flex-col gap-1'>
                        <label htmlFor="email">Email <i className='text-[red]'>*</i></label>
                        <input
                            onChange={handleChangePassword}
                            value={changePassword.email}
                            required type="email" pattern='[^a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
' name='email' className={` border px-4 h-[50px] border-gray-400 focus:outline outline-blue-500 outline-1 min-w-[200px] max-[400px]:w-[300px] w-[400px] rounded-xl`} />
                    </span>
                </div>
                <div className='flex max-[400px]:flex-col max-[400px]:ml-[100px] w-[408px]'>
                <div className={`flex w-full flex-col`}>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={handleChangePassword}
                        value={changePassword.password}
                        pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{6,}' type="text" name='password' className='px-4 max-[400px]:w-[300px] focus:outline outline-blue-500 outline-1 h-[50px] border-gray-400 rounded-xl border' />

                </div>
                    <button type='submit' className='bg-gray-400 mt-7 ml-2 max-[400px]:ml-0 max-[400px]:w-[300px] rounded-xl text-white px-4 h-[40px]'>Change</button>
                </div>
                <div className='flex mt-12 w-full gap-4 items-center justify-center'>
                    <div className='flex max-[400px]:w-11/12 w-3/12 flex-col gap-4'>
                        <h1 className='font-semibold'>Delete your data and account</h1>
                        <p className='w-full'>Permanently delete your data and everything associated with your account</p>
                    </div>
                    <button onClick={deleteUser}  className='bg-gray-400 rounded-xl text-white px-4 h-[40px]'>Delete</button>
                </div>
            </div>
        </form>
    )
}
