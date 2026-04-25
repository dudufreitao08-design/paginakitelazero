import React from 'react';

export function Bonuses() {
  const bonuses = [
    {
      id: 1,
      name: "Detetive em Família",
      originalPrice: "R$ 37,00",
    },
    {
      id: 2,
      name: "Guia: Como Tirar o Celular Sem Choro e Sem Briga",
      originalPrice: "R$ 47,00",
    },
    {
      id: 3,
      name: "30 Moldes Para Recortar e Montar",
      originalPrice: "R$ 29,00",
    },
    {
      id: 4,
      name: "Rotina Sem Tela — Planner Semanal",
      originalPrice: "R$ 27,00",
    },
    {
      id: 5,
      name: "Do Caos à Calma — 20 Técnicas Rápidas",
      originalPrice: "R$ 37,00",
    }
  ];

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary mb-4">
            Bônus Exclusivos do <span className="text-primary">Plano Premium</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Leve esses 5 materiais extras gratuitamente ao escolher a oferta completa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bonuses.map((bonus, index) => (
            <div 
              key={bonus.id} 
              className={`bg-white p-4 rounded-[12px] border-2 border-dashed border-amber-400 flex flex-col shadow-sm transition-transform hover:scale-[1.02] ${
                index === 4 ? 'md:col-span-2 md:max-w-[calc(50%-8px)] md:mx-auto w-full' : ''
              }`}
            >
              {/* Image Placeholder */}
              <div className="w-full h-[200px] bg-gray-100 rounded-[8px] overflow-hidden mb-4">
                <img 
                  src="" 
                  alt={bonus.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bonus Name */}
              <h3 className="text-[15px] font-semibold text-[#1A1A2E] text-center mb-3 font-body min-h-[40px] flex items-center justify-center">
                {bonus.name}
              </h3>

              {/* Pricing Row */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-[14px] text-[#999] line-through font-medium">
                  {bonus.originalPrice}
                </span>
                <div className="bg-[#22C55E] text-white text-[13px] font-bold px-[14px] py-[4px] rounded-full">
                  GRÁTIS!
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
