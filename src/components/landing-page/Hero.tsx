import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CssMockup } from './CssMockup';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-6">
        <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs sm:text-sm font-bold border border-primary/20 animate-in fade-in slide-in-from-bottom-2 duration-500">
          Para mães que querem a atenção do filho de volta
        </span>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary leading-tight max-w-4xl tracking-tight">
          +250 Dinâmicas Interativas Para Tirar Seu Filho da Tela
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
          +250 atividades prontas para usar ainda hoje — em casa, no carro e na rua. Sem planejar. Sem comprar nada.
        </p>

        <div className="w-full max-w-xl py-8">
          <CssMockup />
        </div>

        <div className="flex flex-col items-center space-y-4 w-full">
          <Button asChild size="lg" className="w-full sm:w-auto h-16 sm:h-20 text-xl sm:text-2xl font-bold bg-primary hover:bg-primary/90 rounded-2xl px-12 shadow-[0_8px_0_0_#CC562A] active:translate-y-1 active:shadow-none transition-all">
            <a href="#precos">
              Quero o Kit Agora <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </Button>
          <p className="text-sm font-medium text-muted-foreground">
            Acesso imediato · Garantia de 7 dias
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-6 border-t border-gray-100 w-full">
          <div className="flex items-center text-sm font-semibold text-secondary">
            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
            PDF entregue na hora
          </div>
          <div className="flex items-center text-sm font-semibold text-secondary">
            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
            Sem assinatura
          </div>
          <div className="flex items-center text-sm font-semibold text-secondary">
            <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
            +4.200 mães
          </div>
        </div>
      </div>
    </section>
  );
}
