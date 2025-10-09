import Link from 'next/link';

import { Navigation } from './components/navigation';

export function Header() {
    return (
        <header className="sticky top-0 left-0 z-30 w-full border-b border-gray-300">
            <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
                <div className="flex items-center gap-6 max-lg:w-1/2 max-lg:flex-row-reverse max-lg:justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-center text-white">
                        i9
                    </div>

                    <Navigation />
                </div>

                <Link
                    href="/#contact"
                    className="rounded-xl bg-gray-800 p-3 text-white transition-all hover:bg-black"
                >
                    Começar agora
                </Link>
            </div>
        </header>
    );
}
