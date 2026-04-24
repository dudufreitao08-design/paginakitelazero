import React from 'react';
import { Check } from 'lucide-react';

export function TargetAudience() {
  const points = [
    "Mães e pais que sofrem ao ver o filho todo dia no celular",
    "Você já tentou tirar a tela e virou briga ou choro",
    "Você não sabe o que oferecer no lugar quando tira o celular",
    "Você sente que está perdendo momentos reais com seu filho",
    "Você quer uma solução prática para usar ainda hoje"
  ];

  return (
    <section className="bg-[#1A1A2E] py-16 px-6 font-body">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
            Para Quem é Este Material?
          </h2>
        </div>

        <div className="max-w-[520px] mx-auto space-y-6">
          {points.map((text, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 bg-[#2563EB] rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-white stroke-[3px]" />
              </div>
              <p className="text-lg text-white font-medium leading-tight">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[15px] text-white/70">
            Se você se identificou, o <span className="font-bold text-[#2563EB]">Kit Tela Zero</span> foi feito para você.
          </p>
        </div>
      </div>
    </section>
  );
}
