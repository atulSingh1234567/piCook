import React,{useState} from 'react'
import { NavLink,Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useAuthContext } from '../../contexts/Auth';
import FeatureCard from '../featureCard/FeatureCard';

export default function Navbar() {
  const {user} = useAuthContext();
  const [isShow , setIsShow] = useState(false)
  const showFeatureCard = ()=>{
        setIsShow(prev => !prev)
  }
  return (
    <>
      <div className='flex fixed max-[450px]:gap-4 max-[450px]:px-12 text-gray-600 z-30 bg-white w-full justify-between px-14 items-center h-20'>
        <Link to='/'>
        <span className='text-2xl max-[829px]:text-lg text-black font-bold'>
          piCOOk
        </span>
        </Link>
       { user ? <span className='w-[10%] max-[829px]:hidden min-[830px]:gap-2 flex font-semibold justify-between'>
             <NavLink className={({ isActive }) => `${isActive ? 'bg-black w-fit px-2 py-1 rounded-xl text-white' : ''}`} to='/'>Home</NavLink>
             <NavLink className={({ isActive }) => `${isActive ? 'bg-black w-fit px-2 py-1 rounded-xl text-white' : ''}`} to='/explore'>Explore</NavLink>
          </span> : <span className='w-[10%] flex font-semibold justify-between'>
          <NavLink className={({ isActive }) => `${isActive ? 'bg-black w-fit px-2 py-1 rounded-xl text-white' : ''}`} to='/today'>Today</NavLink>
             <NavLink className={({ isActive }) => `${isActive ? 'bg-black w-fit px-2 py-1 rounded-xl text-white' : ''}`} to='/ideas'>Explore</NavLink>
          </span>
}
     { user ?  <span className='relative flex items-center h-[80%] w-[60%]'>
          <input type="text" placeholder='Search' className='w-full bg-gray-100 px-11 rounded-full h-[70%] border focus:outline focus:outline-blue-600 focus:outline-offset-2 focus:outline-2' />
          <SearchIcon className='absolute left-4 text-gray-500' />
        </span> : ''
}

      { user ?  <span className='w-[10%] relative flex justify-between'>
          <i className='max-[500px]:hidden'> <NotificationsIcon /> </i>
          <Link to='/profile' className='w-8 f-8 rounded-full overflow-hidden'><img src={user.photoURL} alt="" className='max-[600px]:hidden'/></Link>
          <i onClick={showFeatureCard} className='cursor-pointer'><KeyboardArrowDownIcon className='bg-gray-100 rounded-full' /></i>
          {
            isShow ? <div className='absolute right-[-60px] top-12'> <FeatureCard /> </div>: ''
          }
        </span> : <span className='w-[10%] flex gap-2 font-semibold justify-between'>
          <NavLink className={({ isActive }) => `${isActive ? 'bg-black w-fit px-2 py-1 rounded-xl text-white' : ''} bg-[red] text-white py-2 text-lg px-3 rounded-xl`} to='/login'>Login</NavLink>
             <NavLink className={({ isActive }) => `${isActive ? 'bg-black w-fit px-2 py-1 rounded-xl text-white' : ''} bg-gray-300 py-2 text-lg px-3 rounded-xl`}  to='/signup'>Signup</NavLink>
          </span>
}
      </div>
    </>
  )
}
