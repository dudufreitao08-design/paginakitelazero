"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const heroHeight = 600; // Approximate height where we show the button
      const pricingSection = document.getElementById('precos');
      
      if (!pricingSection) return;
      
      const pricingPos = pricingSection.offsetTop;
      const windowHeight = window.innerHeight;
      
      // Show after hero, hide when near pricing
      const isVisible = scrollPos > heroHeight && scrollPos < (pricingPos - windowHeight + 200);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 w-full p-4 z-50 transition-all duration-300 md:hidden ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
      <Button asChild className="w-full h-16 bg-primary text-white font-bold text-lg rounded-2xl shadow-2xl">
        <a href="#precos">
          QUERO O KIT AGORA <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </Button>
    </div>
  );
}
