'use client'
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Keyboard, Pagination, } from 'swiper/modules';
import TestimonialsCard3 from '@/app/card/Home3/TestimonialsCard3';

const Testimonials3 = () => {
    const swipperRef = useRef(null);
    useEffect(() => {
        if (swipperRef.current && swipperRef.current.swiper) {
            swipperRef.current.swiper.update();
        }
    }, []);
    const testimonialsData = [
        { image: '/testimonials3/person1.svg', name: 'Mr. Dorothy', title: 'Chief Executive', speech: 'There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour,There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour,' },
        { image: '/testimonials3/person3.svg', name: 'olivia jany', title: 'CEO at Moco Company', speech: 'There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour,There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour,' },
        { image: '/testimonials3/person1.svg', name: 'Mr. Smeeth', title: 'Marketing Officer', speech: 'There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour,There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour,' },
        { image: '/testimonials3/person3.svg', name: 'Mr. Dorothy', title: 'Chief Executive', speech: 'There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour,There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour,' },
        { image: '/testimonials3/person1.svg', name: 'olivia jany', title: 'CEO at Moco Company', speech: 'There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour,There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour,' },
        { image: '/testimonials3/person3.svg', name: 'Mr. Smeeth', title: 'Marketing Officer', speech: 'There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour,There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour,' },
    ]
    return (
        <section className='bg-[#101928]'>
            <div className='max-w-[1320px] mx-auto px-8 lg:px-0 py-20 md:py-28 lg:py-36'>
                <p className='section-heading2 !text-white !border-none text-center'>Testimonials</p>
                <h1 className='header !text-center !mt-6 md:!mt-8 lg:!mt-10'>What Our Client Say's about us</h1>
                <div className='team3'>
                    <Swiper
                        // slidesPerView={1}
                        // spaceBetween={24}
                        keyboard={{
                            enabled: true,
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
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                        }}

                        pagination={{
                            clickable: true,
                        }}
                        modules={[Keyboard, Pagination]}
                        ref={swipperRef}
                        className="mt-12"
                    >
                        {testimonialsData.map((data) => (
                            <SwiperSlide >
                                <TestimonialsCard3 name={data.name} title={data.title} image={data.image} speech={data.speech} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


            </div>

        </section>
    );
};

export default Testimonials3;