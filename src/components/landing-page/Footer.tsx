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
      </div>
    </footer>
  );
}
