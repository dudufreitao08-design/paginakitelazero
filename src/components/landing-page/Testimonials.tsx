import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export function Testimonials() {
  const reviews = [
    {
      name: "Camila Rodrigues",
      location: "Belo Horizonte, MG",
      child: "Mãe de menina de 5 anos",
      text: "Minha filha ficou 1 hora sem pedir o celular. 1 hora!! Eu fiquei olhando sem acreditar kkkkk. Vale muito!",
      initials: "CR",
      image: "https://i.imgur.com/tOA8HoU.jpeg"
    },
    {
      name: "Rafael Oliveira",
      location: "Curitiba, PR",
      child: "Pai de duas meninas",
      text: "Fui eu quem comprou e hoje toda a família usa. O Kit Tela Zero realmente mudou nossa rotina com nossas filhas. Recomendo demais.",
      initials: "RO",
      image: "https://i.imgur.com/gYGEUVo.jpeg"
    },
    {
      name: "Juliana Mendes",
      location: "São Paulo, SP",
      child: "Mãe de menino de 8 anos",
      text: "Já tentei de tudo e nada funcionava. No mesmo dia que recebi, eu e meu filho usamos e tivemos um momento único.",
      initials: "JM",
      image: "https://i.imgur.com/os855un.jpeg"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight">
          Quem Confiou, <span className="text-primary">Aprovou!</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="text-secondary italic mb-8 flex-grow leading-relaxed">"{review.text}"</p>
            <div className="flex items-center space-x-4">
              <Avatar className="w-12 h-12 shrink-0 border border-gray-100">
                <AvatarImage src={review.image} alt={review.name} className="object-cover" />
                <AvatarFallback className="bg-[#2563EB] text-white font-bold text-sm">
                  {review.initials}
                </AvatarFallback>
              </Avatar>
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
