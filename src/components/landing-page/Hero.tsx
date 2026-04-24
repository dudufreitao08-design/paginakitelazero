import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-product');

  return (
    <section className="relative overflow-hidden pt-12 pb-16 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary leading-tight max-w-4xl tracking-tight">
          +250 Dinâmicas Interativas Para <span className="text-primary">Tirar Seu Filho da Tela</span>
        </h1>
        
        <div className="w-full max-w-3xl py-4 sm:py-8 flex flex-col items-center">
          <div className="flex justify-center mb-6">
            {heroImage && (
              <Image 
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={400}
                className="object-contain"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
            Atividades e brincadeiras prontas para usar em casa junto com a família. <br className="hidden sm:block" />
            Imprima e comece hoje.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 w-full">
          <Button asChild size="lg" className="w-full sm:w-auto h-16 sm:h-20 text-xl sm:text-2xl font-black bg-primary hover:bg-primary/90 rounded-2xl px-12 shadow-[0_8px_0_0_#1d4ed8] active:translate-y-1 active:shadow-none transition-all">
            <a href="#precos">
              QUERO O KIT AGORA
            </a>
          </Button>
          <p className="text-sm font-semibold text-muted-foreground">
            Acesso imediato · Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
}
