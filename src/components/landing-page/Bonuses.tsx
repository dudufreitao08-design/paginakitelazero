import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export function Bonuses() {
  const bonuses = [
    {
      id: 1,
      name: "100 Mini Jogos",
      originalPrice: "R$ 37,00",
      imageId: "extra-1"
    },
    {
      id: 2,
      name: "100 Atividades Lúdicas",
      originalPrice: "R$ 47,00",
      imageId: "extra-2"
    },
    {
      id: 3,
      name: "70 Quebra-Cabeças",
      originalPrice: "R$ 37,00",
      imageId: "extra-3"
    },
    {
      id: 4,
      name: "60 Historinhas Para Ler Antes De Dormir",
      originalPrice: "R$ 29,00",
      imageId: "extra-4"
    },
    {
      id: 5,
      name: "50 Charadas Para Resolver em Família",
      originalPrice: "R$ 37,00",
      imageId: "extra-5"
    }
  ];

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary mb-4">
            <span className="text-primary">Bônus Exclusivos</span> do Kit
          </h2>
          <p className="text-lg text-muted-foreground">
            Ao levar o Kit Tela Zero hoje você recebe tudo isso de brinde
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bonuses.map((bonus, index) => {
            const placeholder = PlaceHolderImages.find(img => img.id === bonus.imageId);
            
            return (
              <div 
                key={bonus.id} 
                className={`bg-white p-4 rounded-[12px] border-2 border-dashed border-amber-400 flex flex-col shadow-sm transition-transform hover:scale-[1.02] ${
                  index === 4 ? 'md:col-span-2 md:max-w-[calc(50%-8px)] md:mx-auto w-full' : ''
                }`}
              >
                <div className="w-full h-auto rounded-[8px] overflow-hidden mb-4 flex items-center justify-center">
                  {placeholder ? (
                    <img 
                      src={placeholder.imageUrl} 
                      alt={bonus.name} 
                      className="w-full h-auto object-contain"
                      data-ai-hint={placeholder.imageHint}
                    />
                  ) : (
                    <div className="text-muted-foreground text-sm font-medium p-8 bg-gray-100 w-full text-center rounded-lg">Visual do Bônus</div>
                  )}
                </div>

                <h3 className="text-[15px] font-semibold text-[#1A1A2E] text-center mb-3 font-body min-h-[40px] flex items-center justify-center">
                  {bonus.name}
                </h3>

                <div className="flex items-center justify-center gap-3">
                  <span className="text-[14px] text-red-600 line-through font-medium">
                    {bonus.originalPrice}
                  </span>
                  <div className="bg-[#22C55E] text-white text-[13px] font-bold px-[14px] py-[4px] rounded-full">
                    GRÁTIS!
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resumo de Valor */}
        <div className="mx-auto max-w-[400px] mt-8 bg-white border-2 border-dashed border-[#2563EB] rounded-[12px] p-6 font-body">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[15px] font-bold text-black">Total em Bônus:</span>
            <span className="text-[15px] text-red-600 line-through font-medium">R$ 197,00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[18px] font-bold text-[#1A1A2E]">Hoje:</span>
            <span className="text-[22px] font-extrabold text-[#22C55E]">GRÁTIS!</span>
          </div>
        </div>

        {/* Botão CTA da seção de bônus */}
        <div className="mt-10 flex justify-center">
          <Button asChild className="w-full sm:w-auto h-20 text-xl font-black bg-primary hover:bg-primary/90 rounded-2xl px-12 shadow-[0_8px_0_0_#1d4ed8] active:translate-y-1 active:shadow-none transition-all">
            <a href="#precos">
              QUERO O KIT + BÔNUS
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
