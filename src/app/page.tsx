import { Header } from './components/header';
import { HeroSection } from './components/hero-section';

export default function Home() {
    return (
        <>
            <Header />

            <main className="mx-auto max-w-7xl pt-10 max-lg:pt-6">
                <HeroSection />
            </main>
        </>
    );
}
