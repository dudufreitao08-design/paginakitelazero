
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

declare global {
  interface Window {
    fbq: any;
  }
}

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-product');

  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        value: 10.00,
        currency: 'BRL'
      });
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-16 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.1] max-w-[24ch] sm:max-w-4xl tracking-tight">
          +250 Dinâmicas Interativas Para <span className="text-primary">Tirar Seu Filho da Tela</span>
        </h1>
        
        <div className="w-full max-w-6xl py-2 flex flex-col items-center">
          <div className="flex justify-center mb-8 w-full max-w-[800px]">
            {heroImage && (
              <Image 
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={800}
                height={600}
                className="w-full h-auto mix-blend-multiply"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed px-4">
            Atividades e brincadeiras prontas para usar em casa junto com a família. <br className="hidden sm:block" />
            Imprima e comece hoje.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 w-full px-4">
          <Button asChild size="lg" className="w-full sm:w-auto h-16 sm:h-20 text-xl sm:text-2xl font-black bg-primary hover:bg-primary/90 rounded-2xl px-12 shadow-[0_8px_0_0_#1d4ed8] active:translate-y-1 active:shadow-none transition-all animate-pulse-cta">
            <a href="https://pay.wiapy.com/yWsnRMZpL8?payment_method=pix" onClick={handleCTAClick}>
              QUERO O KIT AGORA
            </a>
          </Button>
          <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
             <CheckCircle2 className="h-4 w-4 text-green-500" />
             Acesso imediato · Garantia de 7 dias
          </div>
        </div>
      </div>
    </section>
  );
}
