import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import { BusinessSection } from './components/business-section';
import { ContactSection } from './components/contact-section';
import { HeroSection } from './components/hero-section';
import { OurPartners } from './components/our-partners';
import { SoluctionsSection } from './components/solutions-section';

export default function Home() {
    return (
        <>
            <Header />

            <main className="mx-auto max-w-7xl pt-10 max-lg:pt-0">
                <HeroSection />
                <SoluctionsSection />
                <BusinessSection />
                <OurPartners />
                <ContactSection />
            </main>

            <Footer />
        </>
    );
}
