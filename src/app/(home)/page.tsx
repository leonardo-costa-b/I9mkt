import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import { BusinessSection } from './ui/business-section';
import { ContactSection } from './ui/contact-section';
import { HeroSection } from './ui/hero-section';
import { OurPartners } from './ui/our-partners';
import { SoluctionsSection } from './ui/solutions-section';

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
