'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';

import { PARTNERS } from '@/constants/partners';
import { SwiperCustomSlide } from '@/ui/swiper';

export function OurPartners() {
    return (
        <>
            <section className="mx-auto max-w-7xl px-6 py-10">
                <div className="">
                    <h3 className="font-semibold text-red-600">Our Partners</h3>
                    <h2 className="py-6 text-4xl text-gray-700">
                        Learn with our{' '}
                        <span className="relative inline-flex flex-col">
                            partners{' '}
                            <Image
                                src="/line.svg"
                                alt="line"
                                width={150}
                                height={5}
                                className="absolute -bottom-2 left-0"
                            />
                        </span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore
                        iste explicabo, veniam reiciendis, non cum ex maxime provident ratione
                        distinctio deleniti ducimus iure voluptate error eaque. Recusandae, alias
                        beatae!
                    </p>
                </div>
                <div className="mx-auto pt-10 max-lg:pt-6">
                    <SwiperCustomSlide
                        // slideClass="linear-swiper"
                        wrapperClass="linear-swiper py-2"
                        modules={[Autoplay]}
                        freeMode={true}
                        // effect="coverflow"
                        // coverflowEffect={{
                        //     rotate: 0,
                        //     stretch: 1,
                        //     depth: 150,
                        //     modifier: 0.8,
                        //     slideShadows: false,
                        // }}
                        spaceBetween={10}
                        breakpoints={{
                            300: {
                                slidesPerView: 1,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                            800: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                                speed: 3500,
                                autoplay: {
                                    delay: 0,
                                },
                            },
                        }}
                        autoplay={{
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false,
                        }}
                        // speed={3500}
                        loop={true}
                        slides={PARTNERS.map((partner) => ({
                            id: `partner-slide-${partner.company_name}`,
                            children: (
                                <div className="group flex h-full w-full flex-col rounded-2xl bg-white p-4 shadow transition-shadow">
                                    <h3 className="text-xl font-semibold text-red-600">
                                        {partner.company_name}
                                    </h3>
                                    <span className="inline-block pt-1 pb-2 text-sm text-gray-400">
                                        {partner.service_type}
                                    </span>

                                    <p className="pb-2 text-gray-600">{partner.description}</p>

                                    <Link
                                        href="#"
                                        className="mt-auto flex items-center justify-between rounded-lg bg-gray-300 p-2 text-white transition-colors group-hover:bg-red-700 max-lg:bg-red-700"
                                    >
                                        Saber Mais <ArrowRight />
                                    </Link>
                                </div>
                            ),
                        }))}
                    />
                </div>
            </section>
        </>
    );
}
