import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Category({item}) {
    const navigate = useNavigate()
    const goto = ()=>{
        window.localStorage.setItem('category' , JSON.stringify(item))
       navigate(`/explore/${item.description}`)
    }
  return (
    <div onClick={goto} className='relative cursor-pointer category-card hover:opacity-90'>
      <img src={item.url} alt={item.description} className='w-full h-full object-cover'/>
      <h1 className='text-white text-2xl text-center z-10 bottom-12 absolute'>{item.description}</h1>
    </div>
  )
}
