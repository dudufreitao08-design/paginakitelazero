
"use client";

import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Benefits() {
  // Filtrando apenas as imagens destinadas ao carrossel (ID começa com carousel-)
  const carouselImages = PlaceHolderImages.filter(img => img.id.startsWith('carousel-'));
  
  // Duplicando as 8 imagens para totalizar 16 e permitir o loop infinito suave
  const duplicatedImages = [...carouselImages, ...carouselImages];

  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight">
          Veja o Que Está Dentro do Kit
        </h2>
        <p className="mt-4 text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
          Essas são apenas algumas das +250 dinâmicas que vêm dentro do Kit Tela Zero.
        </p>
      </div>

      <div className="w-full relative">
        <style dangerouslySetInnerHTML={{ __html: `
          .carousel-container {
            width: 100%;
            overflow: hidden;
            position: relative;
            /* Garante que eventos de mouse/toque não interfiram na animação se houver algum listener global */
            pointer-events: none; 
          }
          
          .carousel-track {
            display: flex;
            width: max-content;
            animation: scroll-left 35s linear infinite;
            will-change: transform;
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .kit-image-slot {
            flex-shrink: 0;
            margin-right: 16px;
            background-color: #F0F4FF;
            border: 1px solid #E0E7FF;
            border-radius: 12px;
            position: relative;
            overflow: hidden;
          }

          /* Desktop Dimensions */
          @media (min-width: 768px) {
            .kit-image-slot {
              width: 260px;
              height: 340px;
            }
          }

          /* Mobile Dimensions */
          @media (max-width: 767px) {
            .kit-image-slot {
              width: 200px;
              height: 260px;
            }
          }

          .kit-image-slot img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            pointer-events: none;
          }
        `}} />
        
        <div className="carousel-container">
          <div className="carousel-track">
            {duplicatedImages.map((img, index) => (
              <div key={`${img.id}-${index}`} className="kit-image-slot">
                <img 
                  src={img.imageUrl} 
                  alt={img.description} 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
