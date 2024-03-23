import React,{useState} from 'react'
import { useAuthContext } from '../../contexts/Auth'
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function Login({isSignup , operate, google}) {
  const [show , setShow] = useState(false)
    const {googleSignIn,user} = useAuthContext()
    const navigate = useNavigate()
    const handleGoogleSignIn = async ()=>{
        try{
           await googleSignIn()
           if(user) navigate('/')
        }catch(error){

        }
    }

  return (
    <form action="" className='w-full flex justify-center'>
    <div className='flex flex-col relative top-20 shadow-lg shadow-black w-[35%] h-screen gap-6 justify-center py-8 rounded-xl items-center bg-white'>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-semibold'>Welcome to piCooK</h1>
        <p>Find new ideas to try</p>
      </div>
      <div className='flex flex-col gap-4'>
         <span className='flex gap-2 flex-col'>
            <label className='px-4' htmlFor="email">Email<i className='text-[red]'>*</i></label>
            <input required type="email" pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
' name='email' placeholder='Email' className='min-w-[100px] px-4 rounded-full h-[50px] w-[300px] border focus:outline outline-offset-2 outline-2 outline-blue-500'/>
         </span>
         <span className='flex relative gap-2 flex-col'>
            <label className='px-4' htmlFor="password">Password<i className='text-[red]'>*</i></label>
            <input type={`${show? 'text' : 'password'}`} minLength={6} maxLength={16} title='Password must be greater than 5 characters and must involve atleast a small, a capital letter, a symbol and a number' pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{6,}' required name='password' placeholder='Your password' className='min-w-[100px] px-4 rounded-full h-[50px] w-[300px] border focus:outline outline-offset-1 outline-2 outline-blue-500'/>
            <span className={`${show?'text-gray-300': 'text-black'} absolute right-2 bottom-[12px]`} onClick={()=>setShow(prev => !prev)}><RemoveRedEyeIcon/></span>
         </span>
        { isSignup && <span className='flex gap-2 flex-col'>
            <label className='px-4' htmlFor="birth">Birthday</label>
            <input type="date" name='birth' placeholder='birth' className='min-w-[100px] px-4 rounded-full h-[50px] w-[300px] border focus:outline outline-offset-1 outline-blue-500 outline-2'/>
         </span>
}
         <button className='w-full bg-[red] text-lg text-white h-12 rounded-full'>{operate}</button>
      </div>
      <span className='text-[20px]'>OR</span>
      <div onClick={handleGoogleSignIn}  className='border border-gray-400 cursor-pointer h-12 flex gap-2 px-16 rounded-full items-center'>
        <button className='bg-white text-[green]'><GoogleIcon/></button>
        <p>{google} with google</p>
      </div>
    </div>
    </form>
  )
}
