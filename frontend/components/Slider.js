import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"



const Slider = () => {
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem><img  className='w-full h-[200px] md:h-[400px] rounded-xl' src='/images/bg.jpg'></img> </CarouselItem>
                <CarouselItem><img className='w-full h-[200px] md:h-[400px] rounded-xl' src='/images/bg.jpg'></img></CarouselItem>
                <CarouselItem><img className='w-full h-[200px] md:h-[400px] rounded-xl' src='/images/bg.jpg'></img></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    );
}

export default Slider;