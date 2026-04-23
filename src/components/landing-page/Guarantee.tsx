import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function Guarantee() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto bg-green-50 border-2 border-green-100 p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
        <div className="flex-shrink-0 bg-white p-6 rounded-3xl shadow-sm">
          <ShieldCheck className="h-16 w-16 text-green-500" />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary mb-4">Garantia Incondicional de 7 Dias</h2>
          <p className="text-lg text-secondary/80 leading-relaxed">
            Se por qualquer motivo você achar que o Kit Tela Zero não é para você, basta nos enviar um e-mail. Devolvemos 100% do seu dinheiro, sem perguntas e sem burocracia. O risco é todo nosso.
          </p>
        </div>
      </div>
    </section>
  );
}
