import React, { useState, useEffect } from 'react'
import { useAuthContext } from '../../contexts/Auth'
import axios from 'axios';

export default function CreatedPin() {
    const {user} = useAuthContext();
    const [myPhotos , setMyPhotos] = useState([]);
    useEffect(
        ()=>{
            axios.post('http://localhost:8000/api/v1/photos/fetch-photo' , {userId: user?._id})
            .then(
                (res)=>{
                    // console.log(res.data)
                    setMyPhotos(res.data)
                }
            )
        },[]
    )
  return (
    <div className='flex flex-wrap items-center justify-center gap-2 w-full'>
      {
        myPhotos.map(function(item,index){
            return <img key={index} src={item.photoURL} className='min-w-40 rounded-xl w-60'/>
        })
      }
    </div>
  )
}
