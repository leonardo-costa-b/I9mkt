import { Image as ImageIcon } from 'lucide-react';

export function HeroSection() {
    return (
        <section className="flex items-center justify-between gap-10 max-lg:flex-col-reverse max-lg:gap-6 lg:gap-6">
            <div className="px-6 lg:w-1/2">
                <h2 className="leading-16 text-gray-700 capitalize max-lg:text-3xl max-lg:leading-10 lg:text-5xl">
                    <span className="font-bold text-gray-900">Business</span> <span>Coaching</span>{' '}
                    can change Everything
                </h2>

                <p className="py-8 text-lg leading-6 text-gray-600 max-lg:py-6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi laboriosam et
                    ipsa placeat rerum animi ab at temporibus debitis odit doloremque consequatur,
                    explicabo sequi. Fugiat, ipsum? Quis minus in magnam?
                </p>

                <button
                    type="button"
                    className="cursor-pointer rounded-xl bg-gray-900 px-6 py-3 text-white transition-all hover:bg-gray-700"
                >
                    Get Started
                </button>
            </div>

            <div className="mx-6 flex h-[400px] w-3/6 items-center justify-center bg-gray-200 max-lg:mx-0 max-lg:w-full">
                <ImageIcon size={80} />
            </div>
        </section>
    );
}
