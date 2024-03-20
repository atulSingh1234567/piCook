import React,{useState} from 'react'
import AvatarEditor from 'react-avatar-editor';
import CloseIcon from '@mui/icons-material/Close';
import { useAuthContext } from '../../contexts/Auth';
export default function PhotoComp() {
    const {setPhotoBox,setImage,image} = useAuthContext()
    const handleImageChange = (e) => {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);
    };

    const handleSave = () => {
        if (editorRef) {
          const canvas = editorRef.getImage();
          console.log(canvas.toDataURL()); 
        }
      };

    // console.log(image)

      let editorRef;
  return (
    <div className='border relative bg-white shadow-lg shadow-gray w-[500px] max-[700px]:w-[350px] py-12 flex flex-col gap-12 items-center rounded-xl'>
        <div onClick={()=>setPhotoBox(false)} className='absolute right-4 cursor-pointer top-4'><CloseIcon/></div>
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
