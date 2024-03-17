import React from 'react';
import Card from '../../components/card/Card';
import { useMyContext } from '../../contexts/Context';
import Landing from '../landing/Landing';

export default function Homepage() {
    const {isLoggedIn} = useMyContext()
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
    return (
        <>
    {
       isLoggedIn ? <div className='homepage-container w-full relative px-2 top-20'>
            {
                imgStock.map(function (item, index) {
                    return (
                        <Card key={index} url={item.url} height={item.height} width={item.width} />
                    )

                })
            }
            
        </div> : <Landing />
}
        </>
    );
}
