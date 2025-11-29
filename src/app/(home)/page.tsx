import { Header } from '@/components/header';

import { BusinessSection } from './ui/business-section';
import { HeroSection } from './ui/hero-section';
import { SoluctionsSection } from './ui/solutions-section';

export default function Home() {
    return (
        <>
            <Header />

            <main className="mx-auto max-w-7xl pt-10 max-lg:pt-0">
                <HeroSection />
                <SoluctionsSection />
                <BusinessSection />
            </main>
        </>
    );
}
