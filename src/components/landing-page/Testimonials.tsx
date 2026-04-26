import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: "Mariana S.",
      location: "Curitiba, PR",
      child: "Mãe do Theo (4 anos)",
      text: "Eu não acreditava que ele ia largar o tablet por um papel, mas as dinâmicas são tão simples e envolventes que ele mesmo pede para brincar agora. O Guia do Carro salvou minhas idas ao mercado!",
      avatarUrl: "https://i.imgur.com/tOA8HoU.jpeg"
    },
    {
      name: "Camila R.",
      location: "São Paulo, SP",
      child: "Mãe da Alice (6 anos)",
      text: "O investimento mais barato que já fiz pela paz da minha casa. As birras diminuíram 90% porque ela agora tem o que fazer. Recomendo para todas as minhas amigas que sofrem com o vício em tela.",
      avatarUrl: "https://i.imgur.com/gYGEUVo.jpeg"
    },
    {
      name: "Fernanda L.",
      location: "Belo Horizonte, MG",
      child: "Mãe do João (3 anos)",
      text: "As experiências sensoriais são incríveis! Meu filho passa horas focado. O material é muito caprichado e prático. Imprimi em casa mesmo e já comecei a usar no mesmo dia.",
      avatarUrl: "https://i.imgur.com/os855un.jpeg"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary">O que outros pais estão dizendo</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="text-secondary italic mb-8 flex-grow leading-relaxed">"{review.text}"</p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center overflow-hidden border border-gray-100">
                <img 
                  src={review.avatarUrl} 
                  alt={review.name} 
                  className="w-full h-full object-cover"
                />
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
