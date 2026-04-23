import React from 'react';

export function Bonuses() {
  const bonuses = [
    {
      id: 1,
      name: "50 Desafios em Família",
      desc: "Para fortalecer os laços e criar memórias inesquecíveis.",
      value: "R$ 27"
    },
    {
      id: 2,
      name: "30 Experiências Sensoriais",
      desc: "Estimulação tátil e cognitiva para crianças de 2 a 8 anos.",
      value: "R$ 37"
    },
    {
      id: 3,
      name: "30 Moldes Para Recortar",
      desc: "Atividades manuais para desenvolver a coordenação motora.",
      value: "R$ 29"
    },
    {
      id: 4,
      name: "Guia: Como Tirar Sem Choro",
      desc: "O método psicológico para o desmame digital sem traumas.",
      value: "R$ 47"
    },
    {
      id: 5,
      name: "Atividades Por Faixa Etária",
      desc: "Vá direto ao que funciona para a idade do seu filho.",
      value: "R$ 57"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bonuses.map((bonus) => (
            <div key={bonus.id} className="bg-white p-6 rounded-3xl border border-gray-100 flex items-center space-x-6 shadow-sm">
              <div className="flex-shrink-0 w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-xl">
                #{bonus.id}
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-secondary text-lg">{bonus.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{bonus.desc}</p>
                <span className="text-xs font-bold text-green-600 uppercase">Valor original: {bonus.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
