import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "Como vou receber o material?",
      a: "Imediatamente após a confirmação do pagamento, você receberá um link de acesso por e-mail. O material está organizado em pastas dentro do Google Drive para facilitar a navegação."
    },
    {
      q: "Para qual idade o kit é indicado?",
      a: "Temos atividades focadas para crianças de 2 a 10 anos. No Plano Premium, você recebe inclusive um bônus especial que separa as atividades exatamente por faixa etária."
    },
    {
      q: "Preciso de materiais caros ou especiais?",
      a: "Não! 95% das dinâmicas utilizam apenas coisas que você já tem em casa (papel, caneta, fita, objetos do cotidiano) ou apenas a imaginação e a interação direta."
    },
    {
      q: "É uma assinatura mensal?",
      a: "Não. O pagamento é único e você terá acesso ao material para sempre (acesso vitalício garantido no Plano Premium)."
    },
    {
      q: "E se meu filho não se interessar pelas atividades?",
      a: "O kit foi testado com mais de 4.000 crianças. Como são +250 opções diferentes de diversos estilos, é impossível não encontrar várias que ele vai amar. Mas se ainda assim não servir, você tem 7 dias de garantia total."
    },
    {
      q: "Qual a diferença real entre os planos?",
      a: "O Plano Básico entrega o kit principal com as 250 dinâmicas. O Plano Premium adiciona os 5 bônus (que valem mais de R$ 190 se comprados separadamente), além de garantir acesso vitalício e suporte prioritário."
    }
  ];

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary">Dúvidas Frequentes</h2>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl px-6 hover:bg-gray-50 transition-colors">
            <AccordionTrigger className="text-left font-bold text-secondary py-6 hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
