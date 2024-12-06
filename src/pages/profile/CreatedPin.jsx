import React, { useState, useEffect } from 'react'
import { useAuthContext } from '../../contexts/Auth'
import axios from 'axios';
import Card from '../../components/card/Card';


export default function CreatedPin() {
    const {user} = useAuthContext();
    const [myPhotos , setMyPhotos] = useState([]);
    useEffect(
        ()=>{
          const fetchPhotos = async () => {
            try {
              if (!user?._id) return; // Ensure user exists before making the request
              const res = await axios.post('http://localhost:8000/api/v1/photos/fetch-photo', { userId: user?._id });
              setMyPhotos(res.data);
            } catch (error) {
              console.error('Error fetching photos:', error);
            }
          };
      
          fetchPhotos()
        },[user]
    )
  return (
    <div className='homepage-container w-full relative px-2 top-20'>
      {
        myPhotos.map(function(item,index){
            return <Card props={item} />
        })
      }
    </div>
  )
}
