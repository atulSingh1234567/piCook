import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function ExploreForNot() {
    const navigate = useNavigate()
    const exploreArr = ['https://static.bandainamcoent.eu/high/one-piece/one-piece-odyssey/00-page-setup/OPOD_header_mobile_new.jpg',
        'https://variety.com/wp-content/uploads/2023/01/Netflix-One-Piece.png?w=676&h=381&crop=1',
        'https://variety.com/wp-content/uploads/2023/01/Netflix-One-Piece.png?w=676&h=381&crop=1'];

    const category = ['Art', 'Animals', 'Beauty', 'Food And Drink',
        'DIY And Crafts', 'Home Decor', 'Quotes', 'Design']

    const goto = (item) => {
        window.localStorage.setItem('category', JSON.stringify(item))
        navigate(`/explore/${item}`)
    }
    return (
        <div className='w-full flex gap-8 flex-col items-center relative top-20'>
            <h1 className='max-w-fit font-semibold text-[40px]'>Explore the best</h1>
            <div className='flex gap-2 justify-center max-w-fit'>
                {
                    exploreArr.map(function (item, index) {
                        return (
                            <div key={index} className='max-w-[30%] drop-shadow-lg relative h-50px overflow-hidden rounded-xl border'>
                                <img src={item} alt="" className='object-cover brightness-50' />
                                <h1 className='absolute text-white bottom-4 font-semibold tracking-wide text-xl text-center'>Lorem ipsum, dol possimus enim repudiandae!</h1>

                            </div>
                        )
                    })
                }
            </div>
            <h1>Discover your interest</h1>
            <div className='flex flex-wrap px-12 gap-2 w-full'>
                {
                    category.map(function (item, index) {
                        return (
                            <div onClick={()=>goto(item)} className='max-w-[200px] cursor-pointer relative overflow-hidden rounded-xl'>
                                <img src={exploreArr[index % (exploreArr.length - 1)]} alt="" className='object-cover brightness-50' />
                                <h1 className='absolute bottom-8 font-semibold text-xl w-full text-white text-center'>{item}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
