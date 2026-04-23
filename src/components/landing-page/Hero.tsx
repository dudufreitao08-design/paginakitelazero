import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
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
        
        <div className="w-full max-w-4xl py-4 sm:py-8">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center overflow-hidden">
            {heroImage ? (
              <Image 
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-contain hover:scale-105 transition-transform duration-500"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            ) : (
              <div className="flex flex-col items-center space-y-4 text-muted-foreground">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl animate-pulse" />
                <span className="font-medium">Carregando Mockup...</span>
              </div>
            )}
          </div>
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl font-medium leading-relaxed">
          O Kit Tela Zero resolve o maior problema depois de tirar o celular: o que oferecer no lugar. +250 atividades prontas para usar ainda hoje, em casa, no carro e na rua.
        </p>

        <div className="flex flex-col items-center space-y-4 w-full">
          <Button asChild size="lg" className="w-full sm:w-auto h-16 sm:h-20 text-xl sm:text-2xl font-black bg-primary hover:bg-primary/90 rounded-2xl px-12 shadow-[0_8px_0_0_#1d4ed8] active:translate-y-1 active:shadow-none transition-all">
            <a href="#precos">
              Quero o Kit Agora <ArrowRight className="ml-2 h-7 w-7" />
            </a>
          </Button>
          <p className="text-sm font-semibold text-muted-foreground">
            Acesso imediato · Garantia de 7 dias
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-8 border-t border-gray-100 w-full">
          <div className="flex items-center text-sm font-bold text-secondary">
            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
            PDF entregue na hora
          </div>
          <div className="flex items-center text-sm font-bold text-secondary">
            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
            Sem assinatura
          </div>
          <div className="flex items-center text-sm font-bold text-secondary">
            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
            +4.200 mães satisfeitas
          </div>
        </div>
      </div>
    </section>
  );
}
