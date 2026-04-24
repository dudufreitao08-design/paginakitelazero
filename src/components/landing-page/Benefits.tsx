import React from 'react';
import { Home, Car, MapPin, Zap, Users, Brain } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Dinâmicas Em Casa",
      desc: "Transforme sua sala em um campo de aventuras sem bagunça."
    },
    {
      icon: <Car className="h-8 w-8 text-primary" />,
      title: "Salvação No Carro",
      desc: "Viagens silenciosas e divertidas sem precisar ligar o tablet."
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Diversão Na Rua",
      desc: "Ocupe a mente dele em filas, restaurantes e salas de espera."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Resultado Imediato",
      desc: "Atividades simples que funcionam no primeiro minuto de uso."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Conexão Real",
      desc: "Recupere o brilho no olho do seu filho ao brincar com você."
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Desenvolvimento",
      desc: "Estimule a criatividade e o foco que as telas estão roubando."
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary mb-4 tracking-tight">Veja o Que Está Dentro do Kit</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 p-4 bg-accent rounded-2xl">
              {benefit.icon}
            </div>
            <h3 className="text-lg font-bold text-secondary mb-3">{benefit.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
