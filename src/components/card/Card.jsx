import React,{useState} from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from 'react-router-dom';

export default function Card({ url,description, height, width }) {
    const [hover , setHover] = useState(false)
    const navigate = useNavigate()
    const gotoPin = ()=>{
        localStorage.setItem('pin' , url)
        navigate('/pin/123')
    }

    return (

        <span onClick={gotoPin} onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} className={`card ${height<width?'small': height==width? 'medium' : 'large'} cursor-pointer relative`}>
         
           {
            hover ? <h1 className='flex z-20 text-center absolute bg-[red] right-4 p-1 rounded-full max-[500px]:text-sm text-white text-lg font-semibold top-2'>Save</h1> : ''
           }
           {
            hover ? <div className='h-full absolute opacity-70 bg-black w-full'></div> : ''
           }
           <img src={url} alt={description} className="rounded-xl object-cover" />
           {
            hover ? <h1 className='absolute bg-white z-20 px-1 top-3 rounded-full left-4'><DownloadIcon/></h1> : ''
           }
           
        </span>
        
    )
}
