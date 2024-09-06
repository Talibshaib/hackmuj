import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ImageSlider() {
  const imgArray = ["asset/Group.png", "asset/Group2.png", "asset/Group3.png"];

  return (
    <Carousel className="w-full my-5" opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {imgArray.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1 w-full max-h-[50vh] md:max-h-[40vh] lg:max-h-[30vh]">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
