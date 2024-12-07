import React,{useState,useEffect} from 'react'
import Category from '../../components/categoryCard/Category.jsx';
import Card from '../../components/card/Card.jsx';
import axios from 'axios';
export default function Explore() {
  const currentDate = new Date();
  const [imgStock,setImgStock] = useState([]);
  const presentDay = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  useEffect(
    () => {

      const fetchPhotos = async ()=>{
        axios.get('http://localhost:8000/api/v1/photos/send-photo')
        .then(
          (res) => {
            setImgStock(res.data.photo)
          }
        )
      }
      fetchPhotos();
    }, []
  )
  return (
    <div className='w-full relative top-20 flex gap-2 flex-col'>
      <h1 className='text-2xl h-20 flex items-center justify-center text-center'>{presentDay}</h1>
      <div className='homepage-container w-full relative px-2'>
        {
          imgStock.map(function (item, index) {
            return <Card props={item} />
          })
        }
      </div>
    </div>
  )
}
