import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import { HeroSection } from './components/hero-section';
import { OurPartners } from './components/our-partners';

export default function Home() {
    return (
        <>
            <Header />

            <main className="mx-auto max-w-7xl pt-10 max-lg:pt-0">
                <HeroSection />
                <OurPartners />
            </main>

            <Footer />
        </>
    );
}
