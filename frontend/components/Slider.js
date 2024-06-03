import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import axios from 'axios';

const Slider = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try{
            const response = await axios.get('https://dealscart.onrender.com/slidebar');
            const elements = response.data.map((item) => {
                return item;
            });
            setData(elements);
        }catch(e){
            console.log(e);
        }
        };
        getData();
    }, []);

    return (
        <Carousel>
            <CarouselContent>
                {data?.map((item) => {
                    return <CarouselItem key={item.id}><img className='w-full h-[200px] md:h-[500px] rounded-xl border-2' src={item.images[0]}></img>
                        <div className='flex justify-between text-xl md:text-3xl p-4'>
                            <div className=' text-green-700 text-center font-extrabold'>{item.title.toUpperCase()}</div>
                            <div className='md:flex hidden font-extrabold text-[#ffd700]'>
                                Rated : {item.rating}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </div>
                        </div>
                    </CarouselItem>
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

export default Slider;