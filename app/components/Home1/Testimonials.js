'use client'
import SectionHeader from './sectionHeader';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Keyboard, Autoplay } from 'swiper/modules';
import TestimonialCard from '@/app/card/Home1/testimonialCard';


const Testimonials = () => {
    const swipperRef = useRef(null);
    useEffect(() => {
        if (swipperRef.current && swipperRef.current.swiper) {
            swipperRef.current.swiper.update();
        }
    }, []);
    const testimonialsDate = [
        { name: 'Mr. Dorothy', title: 'Chief Executive', rate: 4, image: '/testimonials/person.svg', speech: 'There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. There are' },
        { name: 'Mr. Dorothy', title: 'Chief Executive', rate: 4, image: '/testimonials/person.svg', speech: 'There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. There are' },
        { name: 'Mr. Dorothy', title: 'Chief Executive', rate: 4, image: '/testimonials/person.svg', speech: 'There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. There are' },
        { name: 'Mr. Dorothy', title: 'Chief Executive', rate: 4, image: '/testimonials/person.svg', speech: 'There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. There are' },
        { name: 'Mr. Dorothy', title: 'Chief Executive', rate: 4, image: '/testimonials/person.svg', speech: 'There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. There are' },
        { name: 'Mr. Dorothy', title: 'Chief Executive', rate: 4, image: '/testimonials/person.svg', speech: 'There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. There are' },
    ]
    return (
        <section className='mt-40'>
            <SectionHeader heading='TESTIMONIAL' title='What Our Client Says about us' />
            <div className='hidden md:flex justify-end'>
                <Image className=' md:w-[140px] md:h-[140px] lg:w-[277px] lg:h-[277px] relative right-9 md:top-2 lg:-top-14' src='/testimonials/circle.png' height={277} width={277} alt="circle" />
            </div>
            <div className="max-w-[1320px] mx-auto px-4 lg:px-0 md:-mt-16 lg:-mt-48">
                <div className=''>
                    <Swiper
                        // slidesPerView={1}
                        // spaceBetween={24}
                        keyboard={{
                            enabled: true,
                        }}
                        autoplay={{
                            delay: 2000, 
                            disableOnInteraction: false, 
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            668: {
                                slidesPerView: 2,
                                spaceBetween: 12,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1280: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                        }}

                        modules={[Keyboard, Autoplay]}
                        ref={swipperRef}
                    >
                        {testimonialsDate.map((data) => (
                            <SwiperSlide >
                                <TestimonialCard name={data.name} image={data.image} title={data.title} rate={data.rate} speech={data.speech} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;