import React, { Suspense, lazy } from 'react';

const HeroSection = lazy(() => import('./sections/HeroSection'));
const ServicesSection = lazy(() => import('./sections/ServicesSection'));
const TrainingSection = lazy(() => import('./sections/TrainingSection'));
const ProgrammesSection = lazy(() => import('./sections/ProgrammesSection'));
const WhyUsSection = lazy(() => import('./sections/WhyUsSection'));
const ImpactSection = lazy(() => import('./sections/ImpactSection'));
const CtaSection = lazy(() => import('./sections/CtaSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

const Home = () => (
  <>
    <Suspense fallback={<div className="mx-auto w-[92vw] max-w-6xl py-8 text-white/70">Loading section...</div>}>
      <HeroSection />
      <ServicesSection />
      <TrainingSection />
      <ProgrammesSection />
      <WhyUsSection />
      <ImpactSection />
      <CtaSection />
      <ContactSection />
    </Suspense>

    <a
      href="https://wa.me/27760000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 rounded-full border border-black bg-white px-4 py-3 text-sm font-semibold text-black shadow-xl transition hover:-translate-y-0.5"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  </>
);

export default Home;
