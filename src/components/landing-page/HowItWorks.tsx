import React from 'react';
import { Mail, Printer, Pencil } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: <Mail className="w-8 h-8 sm:w-10 h-10 text-primary" />,
      title: "Comprou? Acesso imediato.",
      description: "Você recebe o link por e-mail na hora. Abre no celular, computador ou tablet — onde preferir."
    },
    {
      number: 2,
      icon: <Printer className="w-8 h-8 sm:w-10 h-10 text-primary" />,
      title: "Escolha uma atividade e imprima.",
      description: "Papel sulfite comum já serve. Não precisa de nada especial."
    },
    {
      number: 3,
      icon: <Pencil className="w-8 h-8 sm:w-10 h-10 text-primary" />,
      title: "Chame seu filho e comece.",
      description: "Sem preparação, sem enrolação. A atividade já vem pronta — é só brincar."
    }
  ];

  return (
    <section className="py-12 sm:py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1a1a2e] tracking-tight">
            Como <span className="text-primary">funciona?</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-6 sm:space-y-10">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="relative bg-white border-2 border-dashed border-[#93C5FD] rounded-2xl p-5 sm:p-8 shadow-sm flex items-start gap-4 sm:gap-6 transition-all hover:shadow-md"
            >
              {/* Círculo numerado sólido no canto */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg shadow-md z-10">
                {step.number}
              </div>

              <div className="flex-shrink-0 mt-1">
                {step.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1a1a2e] mb-1 sm:mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6B7280] font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
