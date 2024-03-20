import React from 'react'
import Card from '../../components/card/Card.jsx'
export default function ExploreAfter() {
    const p = JSON.parse(localStorage.getItem('category'))
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
        <div className='relative justify-center items-center flex gap-8 flex-col w-full top-20'>
            <div className='min-w-[350px] w-[45%] bg-rose-400 rounded-xl max-h-[50vh] relative border flex justify-center rounded-xl overflow-hidden'>
                <img src={p.url} alt={p.description} className='obejct-cover'/>
                <h1 className='absolute text-white text-2xl w-full  text-center bottom-4'>{p.description}</h1>
            </div>
            <div className='homepage-container w-full px-2'>
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
