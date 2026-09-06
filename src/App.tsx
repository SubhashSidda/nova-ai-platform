/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { HowItWorks } from './components/HowItWorks';
import { Statistics } from './components/Statistics';
import { Solutions } from './components/Solutions';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { TrialModal } from './components/TrialModal';
import { BackToTop } from './components/BackToTop';
import { FadeInSection } from './components/FadeInSection';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedPlanForTrial, setSelectedPlanForTrial] = useState('pro');
  const { isLight, isMidnight } = useTheme();

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  const handleOpenTrial = (planId: string = 'pro') => {
    setSelectedPlanForTrial(planId);
    setIsTrialModalOpen(true);
  };

  const handleCloseTrial = () => {
    setIsTrialModalOpen(false);
  };

  const handleSelectPlan = (planId: string) => {
    handleOpenTrial(planId);
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-200 ${
        isLight
          ? 'bg-slate-50 text-slate-900 selection:bg-cyan-500/25 selection:text-cyan-950'
          : isMidnight
          ? 'bg-[#060913] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200'
          : 'bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200'
      }`}
    >
      {/* 1. Navigation Bar */}
      <Navbar
        onOpenDemo={handleOpenDemo}
        onOpenTrial={() => handleOpenTrial('pro')}
      />

      {/* Main Landing Content */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* 2. Hero Section */}
        <FadeInSection initialVisible={true} durationMs={600}>
          <Hero
            onOpenDemo={handleOpenDemo}
            onOpenTrial={() => handleOpenTrial('pro')}
          />
        </FadeInSection>

        {/* 3. Trusted By Enterprise Section */}
        <FadeInSection delayMs={50}>
          <TrustedBy />
        </FadeInSection>

        {/* 4. Features Section */}
        <FadeInSection>
          <Features />
        </FadeInSection>

        {/* 5. Product / About Section */}
        <FadeInSection>
          <ProductShowcase />
        </FadeInSection>

        {/* 6. How It Works Section */}
        <FadeInSection>
          <HowItWorks
            onOpenTrial={() => handleOpenTrial('pro')}
          />
        </FadeInSection>

        {/* 7. Statistics Section */}
        <FadeInSection>
          <Statistics />
        </FadeInSection>

        {/* 8. Solutions / Use Cases Section */}
        <FadeInSection>
          <Solutions
            onOpenTrial={() => handleOpenTrial('pro')}
          />
        </FadeInSection>

        {/* 9. Testimonials Section */}
        <FadeInSection>
          <Testimonials />
        </FadeInSection>

        {/* 10. Pricing Section */}
        <FadeInSection>
          <Pricing
            onSelectPlan={handleSelectPlan}
          />
        </FadeInSection>

        {/* 11. FAQ Section */}
        <FadeInSection>
          <FAQ />
        </FadeInSection>

        {/* 12. Final CTA Section */}
        <FadeInSection>
          <FinalCTA
            onOpenTrial={() => handleOpenTrial('pro')}
          />
        </FadeInSection>
      </main>

      {/* 13. Footer Section */}
      <Footer />

      {/* Interactive Modals and Utilities */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemo}
        onOpenTrial={() => handleOpenTrial('pro')}
      />

      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={handleCloseTrial}
        initialPlan={selectedPlanForTrial}
      />

      <BackToTop />
    </div>
  );
}
