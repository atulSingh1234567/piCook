import React, { useState } from 'react'
import { useAuthContext } from '../../contexts/Auth'
import Card from '../../components/card/Card'

export default function Saved() {
    const {savedPhotoByUser} = useAuthContext()
    
  return (
    <div className='homepage-container'>
      {
        savedPhotoByUser?.map(function(item){
          return <Card props={item}/>
        })
      }
    </div>
  )
}
