import React from 'react';
import { Check } from 'lucide-react';

export function TargetAudience() {
  const points = [
    "Mães e pais que sofrem ao ver o filho todo dia no celular",
    "Você já tentou tirar a tela e virou briga ou choro",
    "Você não sabe o que oferecer no lugar quando tira o celular",
    "Você sente que está perdendo momentos reais com seu filho"
  ];

  return (
    <section className="bg-white py-24 px-6 font-body border-y border-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">
            Para Quem É Este Material?
          </h2>
        </div>

        <div className="max-w-[520px] mx-auto space-y-6">
          {points.map((text, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-white stroke-[3px]" />
              </div>
              <p className="text-lg text-secondary font-medium leading-tight">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[15px] text-muted-foreground">
            Se você se identificou, o <span className="font-bold text-primary">Kit Tela Zero</span> foi feito para você.
          </p>
        </div>
      </div>
    </section>
  );
}
