import React,{useState} from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/Auth';

export default function Card({ _id, photoURL,description, height, width }) {
    const [hover , setHover] = useState(false)
    const navigate = useNavigate()
    const gotoPin = ()=>{
        localStorage.setItem('pin' , url)
        navigate('/pin/123')
    }

    const {user} = useAuthContext();

    const saveToProfile = (id)=>{
        try {
            const formdata = new FormData();
            formdata.append('photoId' , id);
            formdata.append('userId' , user._id);
            axios.post('', formdata)
        } catch (error) {
            
        }
    }

    return (

        <span onClick={gotoPin} onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} className={`card ${height<width?'small': height==width? 'medium' : 'large'} cursor-pointer bg-gray-300 relative`}>
         
           {
            hover ? <h1 onClick={()=>saveToProfile(_id)} className='flex z-20 text-center absolute bg-[red] right-4 p-1 rounded-full max-[500px]:text-sm text-white text-lg font-semibold top-2'>Save</h1> : ''
           }
           {
            hover ? <div className='h-full absolute opacity-70 bg-black w-full'></div> : ''
           }
           <img src={photoURL} alt={description} className="rounded-xl object-cover" />
           {
            hover ? <h1 className='absolute bg-white z-20 px-1 top-3 rounded-full left-4'><DownloadIcon/></h1> : ''
           }
           
        </span>
        
    )
}
