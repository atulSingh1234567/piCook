import React from 'react'
import { useAuthContext } from '../../contexts/Auth'
import PhotoComp from '../../components/photo/PhotoComp'

export default function EditProfile({ pageFor }) {
  const { user, photoBox, setPhotoBox, image } = useAuthContext()
  console.log(photoBox)

  const postProfileDetails = (e)=>{
    e.preventDefault()
  }

  return (
    <form onSubmit={postProfileDetails} action="">
    <div className='relative px-12 top-2 w-full'>
      {
        photoBox && <div className='absolute z-10 left-[30%] max-[700px]:left-[10%]'><PhotoComp /></div>
      }
      <div className='flex my-12 items-center flex-col gap-2 tracking-wide'>
        <h1 className='text-3xl'>{pageFor.for}</h1>
        <p className='max-w-[600px]'>SO, what should we know about you, tell us...</p>
      </div>
      <div className='flex items-center flex-col gap-4'>
        {pageFor.isFor ? <div className='flex items-center gap-8'>
          <img src={user.photoURL} alt="profile" className='rounded-full w-24 h-24 bg-gray-300' />
          <button onClick={() => setPhotoBox(true)} className='bg-gray-400 rounded-xl text-white px-4 h-[40px]'>Change</button>
        </div> : ''
        }
        {pageFor.isFor ? <div className={`flex gap-2 ${photoBox ? 'text-gray-300' : ''}`}>
          <span className='flex flex-col gap-1'>
            <label htmlFor="firstname">First name</label>
            <input type="text" name='firstname' className={`${photoBox ? 'pointer-events-none opacity-50 bg-gray-200' : ''} border px-4 h-[50px] border-gray-400 focus:outline outline-blue-500 outline-1 rounded-xl max-[400px]:w-[150px] w-[200px]`} />
          </span>
          <span className='flex flex-col gap-1'>
            <label htmlFor="lastname">Last name</label>
            <input type="text" name='lastname' className={`${photoBox ? 'pointer-events-none opacity-50 bg-gray-200' : ''} w-[200px] px-4 focus:outline outline-blue-500 outline-1 h-[50px] border-gray-400 rounded-xl max-[400px]:w-[150px] border`} />
          </span>
        </div> : <div>
          <span className='flex flex-col gap-1'>
            <label htmlFor="email">Email <i className='text-[red]'>*</i></label>
            <input required type="email" pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
' name='email' className={` border px-4 h-[50px] border-gray-400 focus:outline outline-blue-500 outline-1 min-w-[200px] max-[400px]:w-[300px] w-[400px] rounded-xl`} />
          </span>
        </div>
        }
        <div className='flex max-[400px]:flex-col max-[400px]:ml-[100px] w-[408px]'>
        <div className={`flex w-full flex-col ${photoBox ? 'text-gray-300' : ''}`}>
          <label htmlFor={pageFor.input}>{pageFor.input}</label>
          <input pattern={`${pageFor.input==='username'?'.*':'(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{6,}'}`} type="text" name={pageFor.input} className={`${photoBox ? 'pointer-events-none opacity-50 bg-gray-200' : ''}  px-4 max-[400px]:w-[300px] focus:outline outline-blue-500 outline-1 h-[50px] border-gray-400 rounded-xl border`} />
        </div>
        { !pageFor.isFor && <button className='bg-gray-400 mt-7 ml-2 max-[400px]:ml-0 max-[400px]:w-[300px] rounded-xl text-white px-4 h-[40px]'>Change</button>}
        </div>
        { pageFor.isFor ? '' : <div className='flex mt-12 w-full gap-4 items-center justify-center'>
           <div className='flex max-[400px]:w-11/12 w-3/12 flex-col gap-4'>
            <h1 className='font-semibold'>Delete your data and account</h1>
            <p className='w-full'>Permanently delete your data and everything associated with your account</p>
           </div>
           <button className='bg-gray-400 rounded-xl text-white px-4 h-[40px]'>Delete</button>
        </div>
}
      </div>
    </div>
    </form>
  )
}
