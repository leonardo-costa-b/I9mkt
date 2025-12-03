'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

interface SwiperCustomSlide extends SwiperOptions {
    slides: Array<{ id: string; children: ReactNode }>;
}

export function SwiperCustomSlide(props: SwiperCustomSlide) {
    const { slides } = props;

    return (
        <Swiper {...props}>
            {slides.map((slide) => (
                <SwiperSlide key={slide.id} className={'!flex !h-auto'}>
                    {slide.children}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
