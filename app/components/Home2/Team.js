'use client'
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Keyboard, Navigation, Pagination, } from 'swiper/modules';
import TeamCard2 from '@/app/card/Home2/TeamCard2';

const Team = () => {
    const swipperRef = useRef(null);
    useEffect(() => {
        if (swipperRef.current && swipperRef.current.swiper) {
            swipperRef.current.swiper.update();
        }
    }, []);

    const teamData = [
        {name: 'Mr. Dorothy', title: 'Chief Executive', image: '/team/2889.jpg'},
        {name: 'Mr. Dorothy', title: 'Chief Executive', image: '/team/2889.jpg'},
        {name: 'Mr. Dorothy', title: 'Chief Executive', image: '/team/2889.jpg'},
        {name: 'Mr. Dorothy', title: 'Chief Executive', image: '/team/2889.jpg'},
        {name: 'Mr. Dorothy', title: 'Chief Executive', image: '/team/2889.jpg'},
        {name: 'Mr. Dorothy', title: 'Chief Executive', image: '/team/2889.jpg'},
        {name: 'Mr. Dorothy', title: 'Chief Executive', image: '/team/2889.jpg'},
        {name: 'Mr. Dorothy', title: 'Chief Executive', image: '/team/2889.jpg'},
        {name: 'Mr. Dorothy', title: 'Chief Executive', image: '/team/2889.jpg'},
    ]

    return (
        <section className='max-w-[1320px] mx-auto'>
            <p className='header section-heading2 text-center'>Expert Team</p>
            <h1 className='header !text-center !text-[#191919] !mt-6 md:!mt-8 lg:!mt-10'>Meet Our Expert Member</h1>
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
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                    }}

                    pagination={{
                        clickable: true,
                    }}
                    modules={[Keyboard, Pagination, Navigation]}
                    ref={swipperRef}
                    className="mt-12"
                >
                    {teamData.map((data) => (
                        <SwiperSlide >
                            <TeamCard2 name={data.name} title={data.title} image={data.image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Team;