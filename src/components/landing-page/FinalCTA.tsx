import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="bg-secondary py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Sua tarde hoje pode ser completamente diferente.
        </h2>
        <h3 className="text-xl text-gray-300">
          Chega de birras e de ver seu filho hipnotizado por uma tela. Recupere o controle e a diversão da sua família agora.
        </h3>
        <div className="pt-8">
          <Button asChild size="lg" className="w-full sm:w-auto h-20 text-2xl font-black bg-primary hover:bg-primary/90 rounded-2xl px-16 shadow-[0_8px_0_0_#e65a2b] active:translate-y-1 active:shadow-none transition-all">
            <a href="#precos">
              QUERO MEU KIT AGORA <ArrowRight className="ml-2 h-7 w-7" />
            </a>
          </Button>
          <p className="mt-6 text-white/60 font-medium">
            Por apenas R$ 19,90 no plano completo.
          </p>
        </div>
      </div>
    </section>
  );
}