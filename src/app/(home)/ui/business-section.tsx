import { Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

import { SectionTitle } from '@/components/section-title';

export function BusinessSection() {
    return (
        <section className="flex items-center max-lg:flex-col">
            <div className="mx-6 flex h-[400px] w-3/6 items-center justify-center bg-gray-200 max-lg:w-full">
                <ImageIcon size={80} />
            </div>

            <div className="px-6 max-lg:w-full max-lg:px-4 max-lg:pt-4">
                <SectionTitle title="Business" />
                <p className="py-6 text-lg text-gray-600 max-lg:py-4 max-lg:text-center">
                    This is the Business section of the application.
                </p>
                <Link
                    href="/business"
                    className="block w-fit cursor-pointer rounded-xl bg-gray-900 px-6 py-3 text-white transition-all hover:bg-gray-700"
                >
                    Fale conosco
                </Link>
            </div>
        </section>
    );
}
