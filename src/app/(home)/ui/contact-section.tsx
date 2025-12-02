import Link from 'next/link';

import { SectionTitle } from '@/components/section-title';
import { NormalText } from '@/ui/normal-text';

export function ContactSection() {
    return (
        <section className="py-10">
            <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-100 p-6">
                <SectionTitle title="Contact" />

                <NormalText
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis dignissimos voluptatum aperiam distinctio officia earum harum aspernatur et sed? Est explicabo esse maiores voluptatibus. Vero, suscipit? Placeat voluptate corrupti praesentium?"
                    className="py-6 text-center"
                />

                <Link
                    href="mailto:contact@example.com"
                    className="block w-fit cursor-pointer rounded-xl bg-red-800 px-6 py-3 text-white transition-all hover:bg-red-700"
                >
                    Contact Us
                </Link>
            </div>
        </section>
    );
}
