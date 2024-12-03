import React, {  useState } from 'react'
import { useAuthContext } from '../../contexts/Auth'
import { useNavigate } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import axios from 'axios'
import Cookies from 'js-cookie';
import {Toaster,toast} from 'react-hot-toast'
import Loader from '../loader/Loader';

export default function Login({ isSignup, operate, google }) {
  const [show, setShow] = useState(false)
  const [alert , setAlert] = useState(false)
  const [details, setDetails] = useState({
    email: '',
    password: '',
    username: '',
    birth: ''
  })
  const {showLoader, setShowLoader, setUser, setError } = useAuthContext()
  const navigate = useNavigate()

  const handleInput = (e) => {
    const { name, value } = e.target
    setDetails({
      ...details,
      gmailSignedUp : false,
      [name]: value
    })
  }

  const postToDB = (e) => {
    setShowLoader(true)
    e.preventDefault()
    console.log('inside continue function')
    try {
      axios.post('http://localhost:8000/api/v1/users/register-user', details)
        .then(
          (res) => {
            setShowLoader(false)
            toast.success(res.data.message)
            setTimeout(
              ()=>{
                window.location.href = '/login'
              },1000
            )
          }
        )
        .catch(
          (err) => {
            setError(err.response)
            setAlert(true)
            console.log(err.response)
          }
        )
    } catch (error) {
      console.log('error while running Continue() method', error)
    }
  }

  const Login = function (e) {
    e.preventDefault()
    setShowLoader(true)
    try {
      axios.post('http://localhost:8000/api/v1/users/login', details )
        .then(
          (res) => {
            setShowLoader(false)
            setUser(res.data.data)
            setError(res)
            Cookies.set('accessToken',res.data.accessToken)
            Cookies.set('refreshToken', res.data.refreshToken)
            localStorage.setItem('user' , JSON.stringify(res.data.data));
            setAlert(true)
            setTimeout(
              ()=>{
                navigate('/')
              },2000
            )
          }
        )
        .catch(
          (err) => {setError(err.response)
            console.log(err.response)
                  setAlert(true)}
        )
    } catch (error) {
      console.log("could not log in! sorry", error)
    }
  }

  return (
    <form onSubmit={isSignup ? postToDB : Login} className='w-full flex justify-center'>
      <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
      <div className='flex flex-col relative top-20 shadow-lg shadow-gray w-[35%] h-screen gap-6 justify-center py-8 rounded-xl items-center bg-white'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl font-semibold'>Welcome to piCooK</h1>
          <p>Find new ideas to try</p>
        </div>
        <div className='flex flex-col gap-4'>
          <span className='flex gap-2 flex-col'>
            <label className='px-4' htmlFor="email">Email<i className='text-[red]'>*</i></label>
            <input
              value={details.email}
              onChange={handleInput}
              required type="email" pattern='[^a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
' name='email' placeholder='Email' className='min-w-[100px] px-4 rounded-full h-[50px] w-[300px] border focus:outline outline-offset-2 outline-2 outline-blue-500' />
          </span>
          <span className='flex relative gap-2 flex-col'>
            <label className='px-4' htmlFor="password">Password<i className='text-[red]'>*</i></label>
            <input
              value={details.password}
              onChange={handleInput}
              type={`${show ? 'text' : 'password'}`} minLength={6} maxLength={16} title='Password must be greater than 5 characters and must involve atleast a small, a capital letter, a symbol and a number' pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{6,}' required name='password' placeholder='Your password' className='min-w-[100px] px-4 rounded-full h-[50px] w-[300px] border focus:outline outline-offset-1 outline-2 outline-blue-500' />
            <span className={`${show ? 'text-gray-300' : 'text-black'} absolute right-2 bottom-[12px]`} onClick={() => setShow(prev => !prev)}><RemoveRedEyeIcon /></span>
          </span>
          {isSignup && <span className='flex gap-2 flex-col'>
            <label className='px-4' htmlFor="birth">Birthday</label>
            <input
              value={details.birth}
              onChange={handleInput}
              type="date" name='birth' placeholder='birth' className='min-w-[100px] px-4 rounded-full h-[50px] w-[300px] border focus:outline outline-offset-1 outline-blue-500 outline-2' />
          </span>
          }
          <button type='submit' className='w-full bg-[red] text-lg text-white h-12 rounded-full'>{showLoader?<Loader />:operate}</button>
        </div>
      </div>
    </form>
  )
}
