import React, { useEffect, useState } from 'react'
import GetAppIcon from '@mui/icons-material/GetApp';
import { useAuthContext } from '../../contexts/Auth';
import CloseIcon from '@mui/icons-material/Close';
export default function Pinpage() {
    const [url, setUrl] = useState('');
    const {setPhotoBox,photoBox} = useAuthContext()
    const {user,saveThePhoto} = useAuthContext()
    useEffect(
        () => {
            setUrl(JSON.parse(localStorage.getItem('pin')))
        }, []
    )

    const showPrev = ()=>{
        setPhotoBox(true)
    }

    return (
        <div className={`relative drop-shadow-xl min-h-[90vh] py-4 flex 
        justify-center rounded-xl shadow-xl border top-20`}>
            {
                photoBox && <div className='absolute flex justify-between p-4 rounded border border-gray-400 bg-white shadow-2xl overflow-hidden top-0 left-12 w-[80%]'><img src={url.photoURL} alt=""  className='rounded-3xl'/> 
                           <span className='cursor-pointer' onClick={()=>setPhotoBox(false)}><CloseIcon /></span> </div>
            }
            <div onClick={showPrev} className='cursor-pointer w-[40%] rounded-3xl overflow-hidden'>
                <img src={url.photoURL} alt="" className='object-cover w-full h-full' />
            </div>
            <div className='w-1/2 p-6 gap-12 flex flex-col items-center'>
                <div className='w-full flex justify-between'>
                   <GetAppIcon />
                   <button onClick={()=>saveThePhoto(url._id)} className='bg-[red] p-2 px-4 rounded-full text-white'>Save</button>
                </div>
                <div className='w-full text-2xl font-semibold'>
                    {url.title}
                </div>
                <div className='w-full'>
                    {url.description}
                </div>
                <div className='flex items-center w-full gap-4'>
                    <img src={user?.avatar} alt="" className='w-12 h-12 rounded-full'/>
                    <span className='text-sm'>
                        <h1>{user?.username}</h1>
                        <h1>{user?.follower} followers</h1>
                    </span>
                </div>
            </div>
        </div>
    )
}
