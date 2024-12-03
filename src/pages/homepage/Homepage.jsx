import React,{useEffect, useState} from 'react';
import Card from '../../components/card/Card';
import Landing from '../landing/Landing';
import { useAuthContext } from '../../contexts/Auth';
import Cookies from 'js-cookie'
import axios from 'axios';
export default function Homepage() {
    const { user } = useAuthContext()
    const [imgStock,setImgStock] = useState([]);
    useEffect(
        ()=>{
           const accessToken = Cookies.get('accessToken')
           if(accessToken){
            axios.get('http://localhost:8000/api/v1/photos/send-photo')
            .then(
                (res)=>{
                    setImgStock(res.data.photo)
                }
            )
           }
        },[]
    )

    return (
        <>
    {
       user ? <div className='homepage-container w-full relative px-2 top-20'>
            {
                imgStock.map(function (item, index) {
                    return (
                        <Card props = {item} />
                    )

                })
            }
            
        </div> : <Landing />
}
        </>
    );
}
