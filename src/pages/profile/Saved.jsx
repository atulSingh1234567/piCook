import React, { useState } from 'react'
import { useAuthContext } from '../../contexts/Auth'

export default function Saved() {
    const {user} = useAuthContext()
    const [savedPhoto , setSavedPhoto] = useState([])
  return (
    <div>
      {
        savedPhoto
      }
    </div>
  )
}
