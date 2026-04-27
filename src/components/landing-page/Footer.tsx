import React from 'react';

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-primary mb-2">Kit Tela Zero</h3>
          <p className="text-sm text-muted-foreground">© {year} Todos os direitos reservados.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-relaxed">
            AVISO: ESTE PRODUTO É UM MATERIAL DIGITAL ENTREGUE EM FORMATO PDF. NENHUM ITEM FÍSICO SERÁ ENVIADO PARA SUA RESIDÊNCIA. ESTE SITE NÃO É AFILIADO AO GOOGLE, FACEBOOK OU QUALQUER REDE SOCIAL.
          </p>
        </div>
      </div>
    </footer>
  );
}
