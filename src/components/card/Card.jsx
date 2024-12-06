import React,{useState} from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'

export default function Card({props}) {
    const [hover , setHover] = useState(false)
    
    const navigate = useNavigate()
    const gotoPin = async ()=>{
        localStorage.setItem('pin' , JSON.stringify(props))
        navigate(`/pin/${props._id}`)
        
    }
    
    const deleteYourPin = ()=>{
        try {
            console.log(props)
            const accessToken = Cookies.get('accessToken');
            const cloudinaryPublicId = props.cloudinaryPublicId;
            const owner = props.owner
            const _id = props._id
            console.log(_id , "PhotoId at deleteYourPin frontend")
            axios.post('http://localhost:8000/api/v1/photos/delete-your-pin', {cloudinaryPublicId,_id,owner,accessToken})
            .then (
                (res)=>{
                    console.log(res)
                    window.location.href = '/profile/created-pin'
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    return (
       
        <span onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} className={`card ${props.height<props.width?'small': props.height==props.width? 'medium' : 'large'} cursor-pointer z-0 bg-gray-300 relative`}>
           {
            hover ? <div onClick={gotoPin} className='h-full absolute z-0 opacity-70 bg-black w-full'></div> : ''
           }
           <img src={props.photoURL} alt={props.description} className="rounded-xl object-cover" />
           {
            hover ? <h1 className='absolute bg-white z-20 px-1 top-3 rounded-full left-4'><DownloadIcon/></h1> : ''
           }
           {
            hover && location.pathname == '/profile/created-pin' ? <h1 onClick={deleteYourPin} className='absolute bg-white z-20 px-1 top-3 rounded-full right-4'><DeleteIcon/></h1> : ''
           }
           
        </span>
        
    )
}
