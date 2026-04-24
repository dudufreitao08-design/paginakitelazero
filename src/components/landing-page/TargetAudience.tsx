import React from 'react';

export function TargetAudience() {
  const situations = [
    { emoji: "😔", text: "Chamo meu filho pelo nome e ele nem levanta os olhos da tela." },
    { emoji: "😤", text: "Toda vez que tiro o celular vira choro, birra e negociação." },
    { emoji: "😰", text: "Já tentei limitar o tempo de tela mas dois dias depois voltou tudo ao normal." },
    { emoji: "😩", text: "Não sei o que oferecer no lugar e acabo devolvendo o celular com culpa." },
    { emoji: "😟", text: "Sinto que estou perdendo momentos reais com meu filho por causa de uma tela." },
  ];

  return (
    <section className="bg-[#1A1A2E] py-16 md:py-20 px-6 font-body">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Para Quem é Este Material?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {situations.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white/[0.06] border border-white/[0.08] rounded-[12px] p-8 text-left transition-all hover:bg-white/[0.1] ${
                index === 4 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''
              }`}
            >
              <div className="text-[32px] mb-4 leading-none">{item.emoji}</div>
              <p className="text-[15px] font-medium text-white italic leading-relaxed">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-[15px] text-white/75">
            Se você se identificou com pelo menos uma dessas situações, o <span className="font-bold text-[#2563EB]">Kit Tela Zero</span> tem exatamente o que você precisa.
          </p>
        </div>
      </div>
    </section>
  );
}
