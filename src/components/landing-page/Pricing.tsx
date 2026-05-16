
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check, ShieldCheck, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

declare global {
  interface Window {
    fbq: any;
  }
}

export function Pricing() {
  const [showUpsell, setShowUpsell] = useState(false);

  const basicMockup = PlaceHolderImages.find(img => img.id === 'pricing-basico');
  const completoMockup = PlaceHolderImages.find(img => img.id === 'pricing-completo');

  const getCheckoutUrl = (baseUrl: string) => {
    const checkoutUrl = new URL(baseUrl);
    checkoutUrl.searchParams.set('payment_method', 'pix');

    if (typeof window !== 'undefined') {
      const currentParams = new URLSearchParams(window.location.search);
      const paramsToForward = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_content',
        'utm_term',
        'fbclid'
      ];

      paramsToForward.forEach((param) => {
        const value = currentParams.get(param);
        if (value) {
          checkoutUrl.searchParams.set(param, value);
        }
      });
    }
    return checkoutUrl.toString();
  };

  const trackInitiateCheckout = (value: number) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        value: value,
        currency: 'BRL'
      });
    }
  };

  const handleBasicClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackInitiateCheckout(10.00);
    setShowUpsell(true);
  };

  const handlePremiumClick = () => {
    trackInitiateCheckout(27.90);
  };

  return (
    <section id="precos" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary mb-4">
            Escolha Seu <span className="text-primary">Kit Ideal</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Kit Básico */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 opacity-80 scale-95 md:order-1 flex flex-col items-center">
            {basicMockup && (
              <div className="mb-4 flex flex-col items-center">
                <Image 
                  src={basicMockup.imageUrl}
                  alt={basicMockup.description}
                  width={240}
                  height={180}
                  className="max-h-[180px] w-auto object-contain"
                  data-ai-hint={basicMockup.imageHint}
                />
              </div>
            )}
            
            <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-4 text-center">Kit Básico</h3>
            
            <div className="flex flex-col items-center mb-6">
              <span className="text-[15px] font-normal text-[#999999] line-through mb-1">De R$ 29,90</span>
              <div className="flex items-baseline justify-center">
                <span className="text-2xl font-bold text-secondary">R$</span>
                <span className="text-5xl font-extrabold text-secondary">10,00</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 w-full">
              <li className="flex items-center text-base font-medium text-secondary">
                <Check className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="whitespace-nowrap">+250 Dinâmicas Interativas</span>
              </li>
              <li className="flex items-center text-base font-medium text-secondary">
                <Check className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="whitespace-nowrap">Acesso Imediato</span>
              </li>
              <li className="flex items-center text-base font-medium text-secondary">
                <Check className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="whitespace-nowrap">Garantia de 7 Dias</span>
              </li>
            </ul>

            <Button
              onClick={handleBasicClick}
              className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-bold rounded-[50px] py-[14px] h-auto shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Quero o Kit Básico
            </Button>
          </div>

          {/* Kit Completo */}
          <div className="relative bg-white p-6 sm:p-10 rounded-[2.5rem] border-4 border-primary shadow-2xl z-10 md:order-2 flex flex-col items-center">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-lg whitespace-nowrap">
              🌟O MAIS ESCOLHIDO
            </div>

            {completoMockup && (
              <div className="mb-6 mt-6 flex justify-center w-full">
                <Image 
                  src={completoMockup.imageUrl}
                  alt={completoMockup.description}
                  width={320}
                  height={220}
                  className="max-h-[220px] w-auto object-contain"
                  data-ai-hint={completoMockup.imageHint}
                />
              </div>
            )}

            <div className="text-center w-full">
              <h3 className="text-[26px] font-bold text-primary mb-[12px]">Kit Completo</h3>
              <div className="flex flex-col items-center mb-[16px]">
                <div className="mt-[4px] mb-[6px] text-center flex items-center justify-center gap-1">
                  <span className="text-[#4B5563] font-bold">De </span>
                  <span className="text-[15px] font-bold text-[#4B5563] line-through">R$ 197</span>
                </div>
                <div className="flex items-baseline text-[#2563EB]">
                  <span className="text-[28px] font-bold">R$</span>
                  <span className="text-[68px] font-black leading-none">27,90</span>
                </div>
              </div>
            </div>

            <ul className="mb-10 pl-4 pr-6 w-full">
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

            <Button asChild className="w-full h-20 text-xl font-black bg-primary hover:bg-primary/90 rounded-2xl shadow-[0_6px_0_0_#1d4ed8] active:translate-y-1 active:shadow-none transition-all animate-pulse-cta">
              <a href={getCheckoutUrl("https://pay.wiapy.com/fkWpYjVyyS")} onClick={handlePremiumClick}>
                QUERO O KIT COMPLETO
              </a>
            </Button>

            <div className="mt-6 flex items-center justify-center text-xs font-bold text-muted-foreground">
              <ShieldCheck className="mr-1 h-4 w-4" />
              Compra Segura · Acesso Instantâneo
            </div>
          </div>
        </div>
      </div>

      {/* Popup de Upsell */}
      {showUpsell && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <div className="relative bg-white w-full max-w-[380px] rounded-[16px] p-[28px_24px] shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-300">
            {/* Botão de Fechar */}
            <button 
              onClick={() => setShowUpsell(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Badge */}
              <div className="bg-[#2563EB] text-white text-[11px] font-bold py-[6px] px-[14px] rounded-[50px] uppercase tracking-wider">
                🎁 OFERTA EXCLUSIVA PARA VOCÊ
              </div>

              {/* Título */}
              <h4 className="text-[20px] font-[800] text-[#1A1A2E] mt-[16px] leading-tight">
                <span className="text-[#2563EB]">ESPERA!</span> Temos um presente especial para você
              </h4>

              {/* Subtítulo */}
              <p className="text-[14px] text-[#666666] mt-[8px] leading-[1.6]">
                Antes de finalizar, que tal levar o Kit Completo com todos os bônus por apenas R$19,90 no total?
              </p>

              {/* Linha de preço */}
              <div className="mt-[12px] flex flex-col items-center">
                <div className="flex items-center gap-1 text-[15px]">
                  <span className="text-[#999999]">De </span>
                  <span className="text-red-600 font-bold line-through">R$197,00</span>
                  <span className="text-[#999999]"> por apenas</span>
                </div>
                <div className="text-[48px] font-[900] text-black leading-none mt-1">
                  R$19,90
                </div>
              </div>

              {/* Lista de itens */}
              <div className="w-full max-w-[280px] mt-6 text-left">
                {[
                  { text: "+250 Dinâmicas Interativas", highlighted: false },
                  { text: "Acesso Vitalício", highlighted: false },
                  { text: "Suporte Personalizado", highlighted: false },
                  { text: "Atualizações Futuras", highlighted: false },
                  { text: "Todos os 5 Bônus Inclusos", highlighted: true }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 mb-2">
                    <Check className="h-4 w-4 text-[#2563EB] shrink-0 mt-0.5" strokeWidth={3} />
                    <span
                      className={cn(
                        "text-[13px] leading-tight",
                        item.highlighted
                          ? "font-[700] text-[#2563EB]"
                          : "font-[500] text-[#1A1A2E]"
                      )}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Botão Principal */}
              <Button asChild className="w-full h-auto py-[16px] bg-[#2563EB] hover:bg-[#2563EB]/90 text-white text-[15px] font-[700] rounded-[50px] mt-[20px] shadow-lg transition-all active:scale-95 animate-pulse-cta">
                <a href={getCheckoutUrl("https://pay.wiapy.com/gCt1O572G5")} onClick={() => trackInitiateCheckout(19.90)}>
                  QUERO O KIT COMPLETO POR 19,90
                </a>
              </Button>

              {/* Botão Secundário */}
              <button
                onClick={() => {
                  trackInitiateCheckout(10.00);
                  window.location.href = getCheckoutUrl("https://pay.wiapy.com/yWsnRMZpL8");
                }}
                className="w-full bg-transparent border-none text-[12px] text-[#999999] mt-[10px] cursor-pointer hover:text-[#666666] transition-colors font-medium"
              >
                Não, prefiro continuar só com o básico
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
