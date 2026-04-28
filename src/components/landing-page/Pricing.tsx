import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, X, ShieldCheck } from 'lucide-react';

export function Pricing() {
  return (
    <section id="precos" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary mb-4">
            Escolha Seu <span className="text-primary">Kit Ideal</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Kit Básico */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 opacity-80 scale-95 md:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-4 text-center">Kit Básico</h3>
            <div className="flex flex-col items-center mb-6">
              <div className="flex items-baseline justify-center">
                <span className="text-2xl font-bold text-secondary">R$</span>
                <span className="text-5xl font-extrabold text-secondary">10,00</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-lg font-medium text-secondary">
                <Check className="mr-2 h-6 w-6 text-blue-500 flex-shrink-0" />
                <span className="whitespace-nowrap">+250 Dinâmicas Interativas</span>
              </li>
              <li className="flex items-center text-lg font-medium text-secondary">
                <Check className="mr-2 h-6 w-6 text-blue-500 flex-shrink-0" />
                <span className="whitespace-nowrap">Acesso Imediato</span>
              </li>
              <li className="flex items-center text-lg font-medium text-secondary">
                <Check className="mr-2 h-6 w-6 text-blue-500 flex-shrink-0" />
                <span className="whitespace-nowrap">Garantia de 7 Dias</span>
              </li>
            </ul>
            
            <Button variant="outline" asChild className="w-full h-14 rounded-2xl font-bold border-2">
              <a href="#">Comprar Básico</a>
            </Button>
          </div>

          {/* Kit Completo */}
          <div className="relative bg-white p-6 sm:p-10 rounded-[2.5rem] border-4 border-primary shadow-2xl z-10 md:order-2">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-lg whitespace-nowrap">
              🌟O MAIS ESCOLHIDO
            </div>
            
            <div className="text-center">
              <h3 className="text-[26px] font-bold text-primary mt-[8px] mb-[12px]">Kit Completo</h3>
              <div className="flex flex-col items-center mb-[16px]">
                <div className="mt-[4px] mb-[6px] text-center flex items-center justify-center gap-1">
                  <span className="text-[13px] font-normal text-[#999999]">De </span>
                  <span className="text-[15px] font-semibold text-[#999999] line-through">R$ 197</span>
                  <span className="text-[11px] font-normal text-[#BBBBBB]"> por apenas</span>
                </div>
                <div className="flex items-baseline text-[#1A1A2E]">
                  <span className="text-[20px] font-bold">R$</span>
                  <span className="text-[42px] font-black">27,00</span>
                </div>
              </div>
            </div>
            
            <ul className="mb-10 pl-4 pr-6">
              <li className="flex items-center font-medium text-[#1A1A2E] text-[15px] mb-[12px]">
                <Check className="mr-2 h-[18px] w-[18px] text-[#2563EB] flex-shrink-0" />
                <span className="leading-tight">+250 Dinâmicas Interativas</span>
              </li>
              <li className="flex items-center font-medium text-[#1A1A2E] text-[15px] mb-[12px]">
                <Check className="mr-2 h-[18px] w-[18px] text-[#2563EB] flex-shrink-0" />
                <span className="leading-tight">Acesso vitalício</span>
              </li>
              <li className="flex items-center font-medium text-[#1A1A2E] text-[15px] mb-[12px]">
                <Check className="mr-2 h-[18px] w-[18px] text-[#2563EB] flex-shrink-0" />
                <span className="leading-tight">Suporte Personalizado</span>
              </li>
              <li className="flex items-center font-medium text-[#1A1A2E] text-[15px] mb-[12px]">
                <Check className="mr-2 h-[18px] w-[18px] text-[#2563EB] flex-shrink-0" />
                <span className="leading-tight">Atualizações Futuras</span>
              </li>
              <li className="flex items-center font-medium text-[#1A1A2E] text-[15px] mb-[12px]">
                <span className="mr-2 text-[18px] flex-shrink-0">🎁</span>
                <span className="leading-tight">100 Mini Jogos</span>
              </li>
              <li className="flex items-center font-medium text-[#1A1A2E] text-[15px] mb-[12px]">
                <span className="mr-2 text-[18px] flex-shrink-0">🎁</span>
                <span className="leading-tight">100 Atividades Lúdicas</span>
              </li>
              <li className="flex items-center font-medium text-[#1A1A2E] text-[15px] mb-[12px]">
                <span className="mr-2 text-[18px] flex-shrink-0">🎁</span>
                <span className="leading-tight">70 Quebra-Cabeças</span>
              </li>
              <li className="flex items-center font-medium text-[#1A1A2E] text-[15px] mb-[12px]">
                <span className="mr-2 text-[18px] flex-shrink-0">🎁</span>
                <span className="leading-tight">60 Historinhas</span>
              </li>
              <li className="flex items-center font-medium text-[#1A1A2E] text-[15px] mb-[12px]">
                <span className="mr-2 text-[18px] flex-shrink-0">🎁</span>
                <span className="leading-tight">50 Charadas</span>
              </li>
            </ul>
            
            <Button asChild className="w-full h-20 text-xl font-black bg-primary hover:bg-primary/90 rounded-2xl shadow-[0_6px_0_0_#1d4ed8] active:translate-y-1 active:shadow-none transition-all">
              <a href="#">QUERO O COMPLETO AGORA</a>
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
