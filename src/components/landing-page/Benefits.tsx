"use client";

import React from 'react';

export function Benefits() {
  // Imagens do Primeiro Carrossel (Atividades)
  const carousel1Images = [
    "https://i.imgur.com/UEQGYll.png",
    "https://i.imgur.com/JrX521y.png",
    "https://i.imgur.com/JwIOLtz.png",
    "https://i.imgur.com/svndWXX.png",
    "https://i.imgur.com/td2kbK6.png",
    "https://i.imgur.com/rQp4z0M.png",
    "https://i.imgur.com/tuiJyPz.png",
    "https://i.imgur.com/dz6c4b7.png"
  ];
  const duplicatedCarousel1 = [...carousel1Images, ...carousel1Images];

  // Imagens do Segundo Carrossel (Brincadeiras)
  const carousel2Images = [
    "https://i.imgur.com/llVfldx.png",
    "https://i.imgur.com/KplOKMA.png",
    "https://i.imgur.com/LqFyufy.png",
    "https://i.imgur.com/hgBUoyz.png",
    "https://i.imgur.com/YowOvUt.png",
    "https://i.imgur.com/PkI2DAP.png",
    "https://i.imgur.com/qW1KWQU.png"
  ];
  const duplicatedCarousel2 = [...carousel2Images, ...carousel2Images];

  // Imagens do Terceiro Carrossel (Moldes para Recortar)
  const carousel3Images = [
    "https://i.imgur.com/6OxX40T.png",
    "https://i.imgur.com/52JYbAe.png",
    "https://i.imgur.com/AW0MxZ1.png",
    "https://i.imgur.com/dpXWogx.png",
    "https://i.imgur.com/1qeeZCA.png",
    "https://i.imgur.com/eEH1WFV.png",
    "https://i.imgur.com/bYOF4dU.png",
    "https://i.imgur.com/CQ96d3m.png",
    "https://i.imgur.com/Xk1s9FK.png",
    "https://i.imgur.com/H4GEmTI.png"
  ];
  const duplicatedCarousel3 = [...carousel3Images, ...carousel3Images];

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
            animation: scroll-left 25s linear infinite;
            will-change: transform;
          }

          .carousel-track-reverse {
            display: flex;
            width: max-content;
            animation: scroll-right 25s linear infinite;
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
            }
          }

          /* Mobile Dimensions */
          @media (max-width: 767px) {
            .kit-image-slot {
              width: 160px;
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
            font-size: 20px;
            font-weight: 800;
            color: #2563EB;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-bottom: 12px;
            text-align: center;
          }
        `}} />
        
        {/* Primeiro Carrossel (Atividades) */}
        <div className="category-label">
          Atividades
        </div>
        <div className="carousel-container mb-8">
          <div className="carousel-track">
            {duplicatedCarousel1.map((url, index) => (
              <div key={`c1-${index}`} className="kit-image-slot">
                <img 
                  src={url} 
                  alt={`Imagem do kit ${index + 1}`} 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Segundo Carrossel (Brincadeiras) */}
        <div className="category-label mt-12">
          Brincadeiras
        </div>
        <div className="carousel-container mb-8">
          <div className="carousel-track-reverse">
            {duplicatedCarousel2.map((url, index) => (
              <div key={`c2-${index}`} className="kit-image-slot">
                <img 
                  src={url} 
                  alt={`Imagem do kit ${index + 1}`} 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Terceiro Carrossel (Moldes para Recortar) */}
        <div className="category-label mt-12">
          MOLDES PARA RECORTAR
        </div>
        <div className="carousel-container mb-12">
          <div className="carousel-track">
            {duplicatedCarousel3.map((url, index) => (
              <div key={`c3-${index}`} className="kit-image-slot">
                <img 
                  src={url} 
                  alt={`Imagem do kit ${index + 1}`} 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Subheadline posicionada abaixo do último carrossel */}
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            Essas são apenas algumas das +250 dinâmicas que vêm dentro do <span className="text-primary font-bold">Kit Tela Zero</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
