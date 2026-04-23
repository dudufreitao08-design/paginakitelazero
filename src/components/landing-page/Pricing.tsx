import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, X, ShieldCheck } from 'lucide-react';

export function Pricing() {
  return (
    <section id="precos" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary mb-4">Escolha o seu plano</h2>
          <p className="text-lg text-muted-foreground">Acesso imediato ao material assim que o pagamento for confirmado.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 order-2 md:order-1 opacity-80 scale-95">
            <h3 className="text-xl font-bold text-secondary mb-2">Plano Básico</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-2xl font-bold text-secondary">R$</span>
              <span className="text-5xl font-extrabold text-secondary">10</span>
              <span className="text-muted-foreground ml-2">Pagamento único</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-sm">
                <Check className="mr-3 h-5 w-5 text-violet-500 flex-shrink-0" />
                <span>+250 Dinâmicas Interativas (PDF)</span>
              </li>
              <li className="flex items-center text-sm">
                <Check className="mr-3 h-5 w-5 text-violet-500 flex-shrink-0" />
                <span>Categorias Casa, Carro e Rua</span>
              </li>
              <li className="flex items-center text-sm text-gray-400 line-through">
                <X className="mr-3 h-5 w-5 text-gray-300 flex-shrink-0" />
                <span>Todos os 5 Bônus Exclusivos</span>
              </li>
              <li className="flex items-center text-sm text-gray-400 line-through">
                <X className="mr-3 h-5 w-5 text-gray-300 flex-shrink-0" />
                <span>Acesso Vitalício</span>
              </li>
            </ul>
            
            <Button variant="outline" asChild className="w-full h-14 rounded-2xl font-bold border-2">
              <a href="#">Comprar Básico</a>
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="relative bg-white p-10 rounded-[2.5rem] border-4 border-primary shadow-2xl order-1 md:order-2 z-10">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
              MAIS ESCOLHIDO
            </div>
            
            <h3 className="text-2xl font-bold text-secondary mb-2">Plano Premium</h3>
            <div className="flex flex-col mb-6">
              <span className="text-xs font-bold text-primary mb-1 line-through opacity-70">De R$ 197 por apenas:</span>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-secondary">R$</span>
                <span className="text-6xl font-black text-secondary">19,90</span>
                <span className="text-muted-foreground ml-2">Pagamento único</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center font-semibold text-secondary">
                <Check className="mr-3 h-6 w-6 text-violet-500 flex-shrink-0" />
                <span>+250 Dinâmicas Interativas (PDF)</span>
              </li>
              <li className="flex items-center font-semibold text-secondary">
                <Check className="mr-3 h-6 w-6 text-violet-500 flex-shrink-0" />
                <span>Categorias Casa, Carro e Rua</span>
              </li>
              <li className="flex items-center font-semibold text-secondary">
                <Check className="mr-3 h-6 w-6 text-violet-500 flex-shrink-0" />
                <span className="text-primary">Todos os 5 Bônus Inclusos</span>
              </li>
              <li className="flex items-center font-semibold text-secondary">
                <Check className="mr-3 h-6 w-6 text-violet-500 flex-shrink-0" />
                <span>Acesso Vitalício e Atualizações</span>
              </li>
              <li className="flex items-center font-semibold text-secondary">
                <Check className="mr-3 h-6 w-6 text-violet-500 flex-shrink-0" />
                <span>Suporte via WhatsApp</span>
              </li>
            </ul>
            
            <Button asChild className="w-full h-20 text-xl font-black bg-primary hover:bg-primary/90 rounded-2xl shadow-[0_6px_0_0_#5b21b6] active:translate-y-1 active:shadow-none transition-all">
              <a href="#">QUERO O PREMIUM AGORA</a>
            </Button>
            
            <div className="mt-6 flex items-center justify-center text-xs font-bold text-muted-foreground">
              <ShieldCheck className="mr-1 h-4 w-4" />
              Compra Segura · Acesso Instantâneo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}