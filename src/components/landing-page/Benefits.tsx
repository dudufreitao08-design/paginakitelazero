
"use client";

import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Benefits() {
  // Primeiro carrossel (8 imagens)
  const carousel1Images = PlaceHolderImages.filter(img => img.id.startsWith('carousel-'));
  const duplicatedCarousel1 = [...carousel1Images, ...carousel1Images];

  // Segundo carrossel (7 imagens)
  const carousel2Images = PlaceHolderImages.filter(img => img.id.startsWith('extra-'));
  const duplicatedCarousel2 = [...carousel2Images, ...carousel2Images];

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
            pointer-events: none; 
          }
          
          .carousel-track {
            display: flex;
            width: max-content;
            animation: scroll-left 35s linear infinite;
            will-change: transform;
          }

          .carousel-track-reverse {
            display: flex;
            width: max-content;
            animation: scroll-right 35s linear infinite;
            will-change: transform;
          }

          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .kit-image-slot {
            flex-shrink: 0;
            margin-right: 16px;
            background-color: #ffffff;
            border: 1px solid #E0E7FF;
            border-radius: 12px;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /* Desktop Dimensions */
          @media (min-width: 768px) {
            .kit-image-slot {
              width: 220px;
              height: auto;
            }
          }

          /* Mobile Dimensions */
          @media (max-width: 767px) {
            .kit-image-slot {
              width: 160px;
              height: auto;
            }
          }

          .kit-image-slot img {
            width: 100%;
            height: auto;
            object-fit: contain;
            display: block;
            background-color: #ffffff;
          }

          .category-label {
            font-family: 'Poppins', sans-serif;
            font-size: 24px;
            font-weight: 800;
            color: #2563EB;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-bottom: 16px;
            text-align: center;
          }
        `}} />
        
        <div className="category-label">
          Atividades
        </div>
        
        {/* Primeiro Carrossel (Esquerda) */}
        <div className="carousel-container mb-8">
          <div className="carousel-track">
            {duplicatedCarousel1.map((img, index) => (
              <div key={`c1-${img.id}-${index}`} className="kit-image-slot">
                <img 
                  src={img.imageUrl} 
                  alt={img.description} 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="category-label">
          Brincadeiras
        </div>

        {/* Segundo Carrossel (Direita) */}
        <div className="carousel-container mt-4">
          <div className="carousel-track-reverse">
            {duplicatedCarousel2.map((img, index) => (
              <div key={`c2-${img.id}-${index}`} className="kit-image-slot">
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
