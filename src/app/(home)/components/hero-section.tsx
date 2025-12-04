import { Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-between gap-10 py-10 max-lg:flex-col-reverse max-lg:gap-6 lg:gap-6">
            <h2 className="max-w-xl text-center leading-16 text-gray-300 capitalize max-lg:text-3xl max-lg:leading-10 lg:text-5xl">
                <span className="font-bold text-gray-100">Business</span>{' '}
                <span className="relative inline-flex flex-col">
                    Coaching{' '}
                    <Image
                        src="/line.svg"
                        alt="line"
                        width={200}
                        height={2}
                        className="absolute -bottom-2 left-0"
                    />
                </span>{' '}
                can change Everything
            </h2>

            <p className="max-w-xl py-8 text-center text-lg leading-6 max-lg:py-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi laboriosam et ipsa
                placeat rerum animi ab at temporibus debitis odit doloremque consequatur, explicabo
                sequi. Fugiat, ipsum? Quis minus in magnam?
            </p>

            <button
                type="button"
                className="cursor-pointer rounded-xl bg-slate-100 px-6 py-3 text-slate-900 transition-all hover:bg-gray-700 hover:text-white"
            >
                Get Started
            </button>
        </section>
    );
}
