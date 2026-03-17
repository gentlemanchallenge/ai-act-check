import { Hero } from '@/components/marketing/Hero';
import { ProblemSection } from '@/components/marketing/ProblemSection';
import { HowItWorks } from '@/components/marketing/HowItWorks';
import { ExampleCards } from '@/components/marketing/ExampleCards';
import { DeadlineTimeline } from '@/components/marketing/DeadlineTimeline';
import { FAQ } from '@/components/marketing/FAQ';
import { CTABanner } from '@/components/layout/CTABanner';

export const metadata = {
  title: 'AI Act Check — Nutzt Ihr Unternehmen KI? Pflichten prüfen (kostenlos)',
  description:
    'Kostenloser AI Act Pflichten-Check: Auch wer KI nur einsetzt, hat Pflichten als Betreiber. Risikoklassifizierung in 5 Minuten.',
  openGraph: {
    title: 'AI Act Check — Kostenloser EU AI Act Pflichten-Check',
    description: 'Prüfen Sie in 5 Minuten, welche AI Act Pflichten für Ihr Unternehmen gelten.',
    url: 'https://ai-act-check.info/de',
    siteName: 'AI Act Check',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Act Check — Kostenloser EU AI Act Pflichten-Check',
    description: 'Prüfen Sie in 5 Minuten, welche AI Act Pflichten für Ihr Unternehmen gelten.',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <ExampleCards />
      <DeadlineTimeline />
      <FAQ />
      <CTABanner />
    </>
  );
}
