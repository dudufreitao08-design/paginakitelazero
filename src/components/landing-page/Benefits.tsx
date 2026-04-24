
"use client";

import React from 'react';
import { ImageIcon } from 'lucide-react';

export function Benefits() {
  const slots = [1, 2, 3, 4, 5, 6, 7, 8];
  
  // Duplicando os slots para o efeito de loop infinito sem saltos
  const duplicatedSlots = [...slots, ...slots];

  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight">
          Veja o Que Está Dentro do Kit
        </h2>
      </div>

      <div className="w-full relative">
        <style dangerouslySetInnerHTML={{ __html: `
          .carousel-container {
            width: 100%;
            overflow: hidden;
            position: relative;
          }
          
          .carousel-track {
            display: flex;
            width: max-content;
            animation: scroll-left 35s linear infinite;
          }
          
          .carousel-track:hover {
            animation-play-state: paused;
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .kit-slot {
            flex-shrink: 0;
            margin-right: 16px;
            background-color: #F0F4FF;
            border: 1px solid #E0E7FF;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }

          /* Desktop Dimensions */
          @media (min-width: 768px) {
            .kit-slot {
              width: 260px;
              height: 340px;
            }
          }

          /* Mobile Dimensions */
          @media (max-width: 767px) {
            .kit-slot {
              width: 200px;
              height: 260px;
            }
          }
        `}} />
        
        <div className="carousel-container">
          <div className="carousel-track">
            {duplicatedSlots.map((num, index) => (
              <div key={index} className="kit-slot">
                <img 
                  src="" 
                  alt={`Imagem do kit ${num}`} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10">
                  <ImageIcon size={48} className="text-[#CBD5E1]" strokeWidth={1.5} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
