import React,{useState} from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/Auth';

export default function Card({props}) {
    const [hover , setHover] = useState(false)
    const gotoPin = ()=>{
        localStorage.setItem('pin' , JSON.stringify(props))
        window.location.href = `/pin/${props._id}`
    }

    const {user,saveThePhoto} = useAuthContext();

    return (

        <span onClick={gotoPin} onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} className={`card ${props.height<props.width?'small': props.height==props.width? 'medium' : 'large'} cursor-pointer z-0 bg-gray-300 relative`}>
           {
            hover ? <div className='h-full absolute opacity-70 bg-black w-full'></div> : ''
           }
           <img src={props.photoURL} alt={props.description} className="rounded-xl object-cover" />
           {
            hover ? <h1 className='absolute bg-white z-20 px-1 top-3 rounded-full left-4'><DownloadIcon/></h1> : ''
           }
           
        </span>
        
    )
}
