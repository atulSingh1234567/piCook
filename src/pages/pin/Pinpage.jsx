import React, { useEffect, useState } from 'react'
import GetAppIcon from '@mui/icons-material/GetApp';
import { useAuthContext } from '../../contexts/Auth';
import CloseIcon from '@mui/icons-material/Close';
import { Toaster, toast } from 'react-hot-toast'
import axios from 'axios';
export default function Pinpage() {
    const [url, setUrl] = useState('');
    const { setPhotoBox, photoBox } = useAuthContext()
    const { user, saveThePhoto } = useAuthContext()
    const [photoOwner, setPhotoOwner] = useState({})
    useEffect(() => {
        const fetchPhotoOwner = async () => {
          try {
            const storedPin = JSON.parse(localStorage.getItem('pin'));
            if (!storedPin || !storedPin.owner) {
              console.warn('No pin or owner found in localStorage');
              return;
            }
    
            setUrl(storedPin); // Update state with the data from localStorage
    
            const res = await axios.post('http://localhost:8000/api/v1/users/photo-owner', {
              userId: storedPin.owner,
            });
    
            setPhotoOwner(res.data.owner);
          } catch (error) {
            console.error('Error fetching photo owner:', error);
          }
        };
    
        fetchPhotoOwner(); // Invoke the async function
      }, []);
    const showPrev = () => {
        setPhotoBox(true)
    }



    const handleSave = (id) => {
        const res = saveThePhoto(id)
        if (res.status == 201) {
            toast.success("Photo has been saved")
        } else if (res.result == 401) {
            toast.error(res.message)
        }
        else toast.error("Something went wrong")
    }

    return (
        <div className={`relative drop-shadow-xl w-full min-h-[450px] mx-4 py-4 flex 
        justify-center rounded-xl shadow-xl border top-20`}>
            <Toaster />
            {
                photoBox && <div className='absolute flex justify-between p-4 rounded border border-gray-400 bg-white shadow-2xl overflow-hidden top-0 left-12'><img src={url.photoURL} alt="" className='rounded-3xl' />
                    <span className='cursor-pointer' onClick={() => setPhotoBox(false)}><CloseIcon /></span> </div>
            }
            <div onClick={showPrev} className='cursor-pointer rounded-3xl overflow-hidden'>
                <img src={url.photoURL} alt="" className='object-cover' />
            </div>
            <div className='w-1/2 p-6 gap-12 flex flex-col items-center'>
                <div className='w-full flex justify-between'>
                    <GetAppIcon />
                    <button onClick={() => handleSave(url._id)} className='bg-[red] p-2 px-4 rounded-full text-white'>Save</button>
                </div>
                <div className='w-full text-2xl font-semibold'>
                    {url.title}
                </div>
                <div className='w-full'>
                    {url.description}
                </div>
                <div className='flex items-center w-full gap-4'>
                    <img src={photoOwner?.avatar} alt="" className='w-12 h-12 rounded-full' />
                    <span className='text-sm'>
                        <h1>{photoOwner?.username}</h1>
                        <h1>{photoOwner?.follower} followers</h1>
                    </span>
                </div>
            </div>
        </div>
    )
}
