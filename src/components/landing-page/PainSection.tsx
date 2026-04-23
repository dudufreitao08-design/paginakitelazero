import React from 'react';

export function PainSection() {
  const points = [
    { emoji: "📱", text: "Seu filho chora e faz birra quando você tenta tirar o celular dele?" },
    { emoji: "😩", text: "Você se sente culpada por deixá-lo na tela só para ter um minuto de paz?" },
    { emoji: "🤯", text: "Não sabe mais o que inventar para distrair a criança em restaurantes ou no trânsito?" },
    { emoji: "😔", text: "Parece que vocês não conversam mais e ele só quer saber dos vídeos?" },
  ];

  return (
    <section className="bg-secondary text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {points.map((point, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-3xl">{point.emoji}</span>
              <p className="text-lg font-medium text-gray-200">{point.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-xl sm:text-2xl font-bold text-primary leading-relaxed">
            O problema não é você nem seu filho. É que tirar a tela sem ter uma alternativa concreta na mão nunca vai funcionar. O Kit Tela Zero resolve isso agora.
          </p>
        </div>
      </div>
    </section>
  );
}
