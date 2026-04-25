import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Guarantee() {
  const guaranteeImage = PlaceHolderImages.find(img => img.id === 'guarantee-seal');

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto bg-blue-50 border-2 border-blue-100 p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
        <div className="flex-shrink-0 bg-white p-4 rounded-3xl shadow-sm w-32 h-32 flex items-center justify-center overflow-hidden">
          {guaranteeImage && (
            <Image 
              src={guaranteeImage.imageUrl}
              alt={guaranteeImage.description}
              width={120}
              height={120}
              className="object-contain"
              data-ai-hint={guaranteeImage.imageHint}
            />
          )}
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary mb-4">Garantia de 7 Dias</h2>
          <p className="text-lg text-secondary/80 leading-relaxed">
            7 dias de garantia total. Se não gostar, devolvemos 100% do seu dinheiro. O risco é nosso.
          </p>
        </div>
      </div>
    </section>
  );
}
