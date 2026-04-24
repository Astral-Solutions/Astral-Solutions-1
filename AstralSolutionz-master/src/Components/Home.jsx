import React, { Suspense, lazy } from 'react';

const HeroSection = lazy(() => import('./sections/HeroSection'));
const ServicesSection = lazy(() => import('./sections/ServicesSection'));
const TrainingSection = lazy(() => import('./sections/TrainingSection'));
const ProgrammesSection = lazy(() => import('./sections/ProgrammesSection'));
const WhyUsSection = lazy(() => import('./sections/WhyUsSection'));
const ImpactSection = lazy(() => import('./sections/ImpactSection'));
const CtaSection = lazy(() => import('./sections/CtaSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

const SectionLoader = () => <div className="shell section-loader">Loading section...</div>;

const Home = () => (
  <>
    <Suspense fallback={<SectionLoader />}>
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
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  </>
);

export default Home;
