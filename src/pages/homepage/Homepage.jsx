import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import Landing from '../landing/Landing';
import PageLoader from '../../components/loader/PageLoader';
import Cookies from 'js-cookie'
import axios from 'axios';
export default function Homepage() {
    const user = JSON.parse(localStorage.getItem('user'))
    const [imgStock, setImgStock] = useState([]);
    const [loader, setloader] = useState(true)
    useEffect(
        () => {
            setloader(true)
            axios.get('http://localhost:8000/api/v1/photos/send-photo')
                .then(
                    (res) => {
                        setloader(false)
                        setImgStock(res.data.photo)
                    }
                )

        }, []
    )

    return (
        <>

            {
                !loader ? <div className='homepage-container w-full relative px-2 top-20'>
                    {
                        imgStock.map(function (item, index) {
                            return (
                                <Card props={item} />
                            )

                        })
                    }

                </div> : <PageLoader />
            }
        </>
    );
}
