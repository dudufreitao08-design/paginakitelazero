import React from 'react';
import { TopBar } from '@/components/landing-page/TopBar';
import { Hero } from '@/components/landing-page/Hero';
import { TargetAudience } from '@/components/landing-page/TargetAudience';
import { Benefits } from '@/components/landing-page/Benefits';
import { HowItWorks } from '@/components/landing-page/HowItWorks';
import { Bonuses } from '@/components/landing-page/Bonuses';
import { Testimonials } from '@/components/landing-page/Testimonials';
import { Pricing } from '@/components/landing-page/Pricing';
import { Guarantee } from '@/components/landing-page/Guarantee';
import { FAQ } from '@/components/landing-page/FAQ';
import { Footer } from '@/components/landing-page/Footer';
import { PurchaseNotification } from '@/components/landing-page/PurchaseNotification';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Top bar */}
      <TopBar />
      
      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Como funciona */}
      <HowItWorks />
      
      {/* 4. Para Quem é Este Material */}
      <TargetAudience />
      
      {/* 5. O que você recebe */}
      <Benefits />
      
      {/* 6. Seção de bônus */}
      <Bonuses />
      
      {/* 7. Seção de depoimentos */}
      <Testimonials />
      
      {/* 8. Seção de preços */}
      <Pricing />
      
      {/* 9. Seção de garantia */}
      <Guarantee />
      
      {/* 10. Seção de FAQ */}
      <FAQ />
      
      {/* 11. Rodapé */}
      <Footer />

      {/* Widgets flutuantes */}
      <PurchaseNotification />
    </main>
  );
}
