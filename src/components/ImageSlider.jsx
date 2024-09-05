import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function ImageSlider() {

    let imgrArray = [
       "asset/Group.png",
       "asset/Group2.png",
       "asset/Group3.png",
    ]
    return (
        <Carousel className="w-full my-5" opts={{
            align: "start",
            loop: true,
        }}>
            <CarouselContent>
                {imgrArray.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1 w-full max-h-[70vh">
                            <img src={image} alt="img" />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
