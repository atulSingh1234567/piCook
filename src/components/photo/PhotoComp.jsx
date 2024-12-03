import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import AvatarEditor from 'react-avatar-editor';
import CloseIcon from '@mui/icons-material/Close';
import { useAuthContext } from '../../contexts/Auth';
import axios from 'axios';
export default function PhotoComp() {
  const navigate = useNavigate();
  const { setPhotoBox, setImage, image, user, setUser } = useAuthContext()
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    console.log(selectedImage)
    setImage(selectedImage);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', image);
    formData.append('userId', user._id);
    axios.post('http://localhost:8000/api/v1/users/change-profile-photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(
        (res) => {
            setUser(res.data.user);
            localStorage.setItem('user' , JSON.stringify(res.data.user))
            setTimeout(
              ()=>{
                navigate('/')
              }, 2000
            )
        }
      )
  };

  console.log(image)

  let editorRef;
  return (
    <div className='border relative bg-white shadow-lg shadow-gray w-[500px] max-[700px]:w-[350px] py-12 flex flex-col gap-12 items-center rounded-xl'>
      <div onClick={() => setPhotoBox(false)} className='absolute right-4 cursor-pointer top-4'><CloseIcon /></div>
      <input type="file" accept="image/*" onChange={handleImageChange} className='bg-rose-500 p-4 rounded-xl flex' />
      {image && (
        <div style={{ marginTop: '20px' }}>
          <AvatarEditor
            ref={(ref) => (editorRef = ref)}
            image={image}
            width={250}
            height={250}
            border={50}
            color={[255, 255, 255, 0.6]} // RGBA
            borderRadius={125}
          />
        </div>
      )}
      <button className='bg-rose-500 p-2 rounded-xl text-white' onClick={handleSave}>Save</button>
    </div>
  )
}
