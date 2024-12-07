import React, { useState, useEffect } from 'react'
import { useAuthContext } from '../../contexts/Auth'
import axios from 'axios';
import Card from '../../components/card/Card';
import PageLoader from '../../components/loader/PageLoader';


export default function CreatedPin() {
    const {user} = useAuthContext();
    const [myPhotos , setMyPhotos] = useState([]);
    const [loader , setloader] = useState(false)
    useEffect(
        ()=>{
          setloader(true)
          const fetchPhotos = async () => {
            try {
              if (!user?._id) return; // Ensure user exists before making the request
              const res = await axios.post('http://localhost:8000/api/v1/photos/fetch-photo', { userId: user?._id });
              setloader(false)
              setMyPhotos(res.data);
            } catch (error) {
              setloader(false)
              console.error('Error fetching photos:', error);
            }
          };
      
          fetchPhotos()
        },[user]
    )
  return (
    <>
    {
      loader && <PageLoader />
    }
    <div className='homepage-container w-full relative px-2 top-20'>
      {
        myPhotos.map(function(item,index){
            return <Card props={item} />
        })
      }
    </div>
    </>
  )
}
