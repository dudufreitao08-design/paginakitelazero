
import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Benefits() {
  const carouselImages = PlaceHolderImages.filter(img => img.id.startsWith('carousel-'));

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden text-center">
      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight">
          Veja o Que Está Dentro do Kit
        </h2>
      </div>

      <div className="relative px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {carouselImages.map((image) => (
              <CarouselItem key={image.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-muted">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/20 to-transparent">
                     <span className="text-white text-xs font-semibold opacity-80">{image.description}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-6" />
          <CarouselNext className="hidden md:flex -right-6" />
        </Carousel>
      </div>
    </section>
  );
}
