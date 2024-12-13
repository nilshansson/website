import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo({ images }) {
  return (
    <div className="flex justify-center items-center">
      <Carousel className="w-full max-w-4xl">
        {/* Carousel Items */}
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center"
            >
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden">
                  <img
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
      </Carousel>
    </div>
  );
}
