import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: "Camila Rodrigues",
      location: "Belo Horizonte, MG",
      child: "Mãe de menina de 5 anos",
      text: "Minha filha ficou mais de 1 hora fazendo as atividades sem pedir o celular uma vez. Não acreditei quando vi. Comprei sem esperar muito e me surpreendi demais.",
      initials: "CR"
    },
    {
      name: "Rafael Oliveira",
      location: "Curitiba, PR",
      child: "Pai de menino de 7 anos",
      text: "Fui eu quem comprou para minha esposa e hoje os dois usamos com nosso filho. O guia de como tirar o celular sem briga foi o que mais nos ajudou. Mudou nossa rotina de verdade.",
      initials: "RO"
    },
    {
      name: "Juliana Mendes",
      location: "São Paulo, SP",
      child: "Mãe de menino de 8 anos",
      text: "Já tentei de tudo para tirar o celular do meu filho. O Kit Tela Zero foi a primeira coisa que realmente funcionou. No mesmo dia que recebi já usei três atividades.",
      initials: "JM"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight">O Que os Pais Estão Dizendo</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="text-secondary italic mb-8 flex-grow leading-relaxed">"{review.text}"</p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                {review.initials}
              </div>
              <div>
                <h4 className="font-bold text-secondary text-sm">{review.name}</h4>
                <p className="text-xs text-muted-foreground">{review.child} · {review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
