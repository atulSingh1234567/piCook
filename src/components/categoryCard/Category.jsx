import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Category({item}) {
    const navigate = useNavigate()
    const goto = ()=>{
        window.localStorage.setItem('category' , JSON.stringify(item))
       navigate(`/explore/${item.description}`)
    }
  return (
    <div onClick={goto} className='relative w-[32%] h-[300px] max-w-[600px] min-w-[300px] rounded-xl cursor-pointer bg-red-600 overflow-hidden category-card'>
      <img src={item.url} alt={item.description} className='w-full max-[500px]:text-lg h-full object-cover hover:brightness-50'/>
      <h1 className='text-white text-2xl text-center z-10 bottom-12 absolute'>{item.description}</h1>
    </div>
  )
}
