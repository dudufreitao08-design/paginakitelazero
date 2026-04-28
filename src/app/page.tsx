import React from 'react';
import { TopBar } from '@/components/landing-page/TopBar';
import { Hero } from '@/components/landing-page/Hero';
import { TargetAudience } from '@/components/landing-page/TargetAudience';
import { Benefits } from '@/components/landing-page/Benefits';
import { Bonuses } from '@/components/landing-page/Bonuses';
import { Testimonials } from '@/components/landing-page/Testimonials';
import { Pricing } from '@/components/landing-page/Pricing';
import { Guarantee } from '@/components/landing-page/Guarantee';
import { FAQ } from '@/components/landing-page/FAQ';
import { Footer } from '@/components/landing-page/Footer';
import { PurchaseNotification } from '@/components/landing-page/PurchaseNotification';
import { StickyCTA } from '@/components/landing-page/StickyCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Top bar */}
      <TopBar />
      
      {/* 2. Hero Section */}
      <Hero />
      
      {/* 3. Para Quem é Este Material */}
      <TargetAudience />
      
      {/* 4. O que você recebe */}
      <Benefits />
      
      {/* 5. Seção de bônus */}
      <Bonuses />
      
      {/* 6. Seção de depoimentos */}
      <Testimonials />
      
      {/* 7. Seção de preços */}
      <Pricing />
      
      {/* 8. Seção de garantia */}
      <Guarantee />
      
      {/* 9. Seção de FAQ */}
      <FAQ />
      
      {/* 10. Rodapé */}
      <Footer />

      {/* Widgets flutuantes */}
      <PurchaseNotification />
      <StickyCTA />
    </main>
  );
}
