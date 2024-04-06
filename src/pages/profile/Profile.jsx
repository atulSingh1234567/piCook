import React from 'react'
import { useAuthContext } from '../../contexts/Auth'
import { useNavigate } from 'react-router-dom';
import Card from '../../components/card/Card';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Cookies from 'js-cookie';
export default function Profile() {
    const {user,setUser,logOut} = useAuthContext();
    const navigate = useNavigate()
    const imgStock = [{ url: 'https://www.looper.com/img/gallery/every-power-rangers-series-explained/intro-1681980970.jpg', height: 300, width: 400, description: '' },
    { url: 'https://m.media-amazon.com/images/M/MV5BMTA5MzU1NDI4NzBeQTJeQWpwZ15BbWU4MDUxMDQ0NDEy._V1_SL1024_.jpg', height: 400, width: 300, description: '' }
        , { url: 'https://www.looper.com/img/gallery/every-power-rangers-series-explained/intro-1681980970.jpg', height: 300, width: 400, description: '' },
    { url: 'https://m.media-amazon.com/images/M/MV5BMTA5MzU1NDI4NzBeQTJeQWpwZ15BbWU4MDUxMDQ0NDEy._V1_SL1024_.jpg', height: 400, width: 300, description: '' }
        , { url: 'https://www.looper.com/img/gallery/every-power-rangers-series-explained/intro-1681980970.jpg', height: 300, width: 400, description: '' },
    { url: 'https://m.media-amazon.com/images/M/MV5BMTA5MzU1NDI4NzBeQTJeQWpwZ15BbWU4MDUxMDQ0NDEy._V1_SL1024_.jpg', height: 400, width: 300, description: '' }
        , { url: 'https://www.looper.com/img/gallery/every-power-rangers-series-explained/intro-1681980970.jpg', height: 300, width: 400, description: '' },
    { url: 'https://m.media-amazon.com/images/M/MV5BMTA5MzU1NDI4NzBeQTJeQWpwZ15BbWU4MDUxMDQ0NDEy._V1_SL1024_.jpg', height: 400, width: 300, description: '' },
    { url: 'https://www.looper.com/img/gallery/every-power-rangers-series-explained/intro-1681980970.jpg', height: 300, width: 400, description: '' },
    { url: 'https://m.media-amazon.com/images/M/MV5BMTA5MzU1NDI4NzBeQTJeQWpwZ15BbWU4MDUxMDQ0NDEy._V1_SL1024_.jpg', height: 400, width: 300, description: '' },
    { url: 'https://www.looper.com/img/gallery/every-power-rangers-series-explained/intro-1681980970.jpg', height: 300, width: 400, description: '' },
    { url: 'https://m.media-amazon.com/images/M/MV5BMTA5MzU1NDI4NzBeQTJeQWpwZ15BbWU4MDUxMDQ0NDEy._V1_SL1024_.jpg', height: 400, width: 300, description: '' },
]

    const handleLogOut = async ()=>{
        
        try {
            await logOut();
            Cookies.remove('accessToken');
            window.location.href = '/'
        } catch (error) {
            console.log('could not log out! ', error)
        }
    }


  return (
    
    <div className='flex w-full flex-col items-center relative top-20'>
      <div className='flex flex-col items-center'>
        
        {
            user?.avatar ? <img src={user?.avatar} alt="" className='rounded-full w-40 h-40 p-4' /> : <AccountCircleIcon className='min-w-28 min-h-28'/>
        }
        <p className='text-[30px]'>{user?.firstname}  {user?.lastname}</p>
        <p>{user?.username}</p>
        <p></p>
        <div className='flex gap-2'>
        <button onClick={()=> navigate('/settings/edit profile')} className='mt-4 bg-gray-300 p-2 rounded-xl'>Edit Profile</button>
        <button onClick={handleLogOut} className='mt-4 bg-gray-300 p-2 rounded-xl'>Log out</button>
        </div>
      </div>
      <div className='homepage-container w-full relative px-2 top-20'>
            {
                imgStock.map(function (item, index) {
                    return (
                        <Card key={index} url={item.url} height={item.height} width={item.width} />
                    )

                })
            }
            
        </div>
    </div>
    
  )
}
