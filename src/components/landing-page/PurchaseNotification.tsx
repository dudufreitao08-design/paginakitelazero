"use client";

import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

const purchases = [
  { name: "Ana Paula S.", city: "São Paulo, SP", time: "agora mesmo" },
  { name: "Marcos G.", city: "Curitiba, PR", time: "há 2 minutos" },
  { name: "Juliana R.", city: "Belo Horizonte, MG", time: "há 1 minuto" },
  { name: "Ricardo S.", city: "Porto Alegre, RS", time: "há 3 minutos" },
  { name: "Fernanda L.", city: "Rio de Janeiro, RJ", time: "há 1 minuto" },
  { name: "Gustavo M.", city: "Brasília, DF", time: "agora mesmo" },
  { name: "Beatriz F.", city: "Salvador, BA", time: "há 2 minutos" },
  { name: "Lucas W.", city: "Florianópolis, SC", time: "há 3 minutos" },
  { name: "Camila O.", city: "Recife, PE", time: "há 1 minuto" },
  { name: "Rafael T.", city: "Goiânia, GO", time: "há 2 minutos" }
];

export function PurchaseNotification() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setCurrent(prev => {
        let next = Math.floor(Math.random() * purchases.length);
        while (next === prev) {
          next = Math.floor(Math.random() * purchases.length);
        }
        return next;
      });
      
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 7000);
    };

    const initialDelay = setTimeout(showNotification, 5000);
    const interval = setInterval(showNotification, 25000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  const purchase = purchases[current];

  return (
    <div 
      className={cn(
        "fixed bottom-6 left-6 z-[100] transition-all duration-700 ease-in-out transform",
        isVisible 
          ? "translate-y-0 opacity-100 pointer-events-auto" 
          : "translate-y-12 opacity-0 pointer-events-none"
      )}
    >
      <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 p-4 flex items-center space-x-4 max-w-[280px] sm:max-w-xs ring-1 ring-black/5">
        <div className="bg-green-100 p-2.5 rounded-full flex-shrink-0 animate-pulse">
          <ShoppingBag className="h-5 w-5 text-green-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-bold text-secondary leading-tight truncate">
            {purchase.name}
          </p>
          <p className="text-[12px] text-muted-foreground leading-snug mt-0.5">
            Acabou de garantir o <span className="text-primary font-bold">Kit Completo</span>
          </p>
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
              {purchase.city} · {purchase.time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
