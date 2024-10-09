'use client'
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Keyboard, Pagination, } from 'swiper/modules';
import TeamCard3 from '@/app/card/Home3/TeamCard3';

const Team3 = () => {
    const swipperRef = useRef(null);
    useEffect(() => {
        if (swipperRef.current && swipperRef.current.swiper) {
            swipperRef.current.swiper.update();
        }
    }, []);
    const teamData = [
        { image: '/team3/team1.svg', name: 'Mr. Dorothy', title: 'Chief Executive' },
        { image: '/team3/team2.svg', name: 'Mr. Dorothy', title: 'Chief Executive' },
        { image: '/team3/team3.svg', name: 'Mr. Dorothy', title: 'Chief Executive' },
        { image: '/team3/team4.svg', name: 'Mr. Dorothy', title: 'Chief Executive' },
        { image: '/team3/team1.svg', name: 'Mr. Dorothy', title: 'Chief Executive' },
        { image: '/team3/team2.svg', name: 'Mr. Dorothy', title: 'Chief Executive' },
        { image: '/team3/team3.svg', name: 'Mr. Dorothy', title: 'Chief Executive' },
        { image: '/team3/team4.svg', name: 'Mr. Dorothy', title: 'Chief Executive' },
    ]
    return (
        <section className='bg-[#101928]'>
            <div className='max-w-[1320px] mx-auto px-8 lg:px-0 py-20 md:py-28 lg:py-36'>
                <p className='section-heading2 !text-white !border-none text-center'>Expert Team</p>
                <h1 className='header !text-center !mt-6 md:!mt-8 lg:!mt-10'>Meet Our Expert Member</h1>

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
                        modules={[Keyboard, Pagination]}
                        ref={swipperRef}
                        className="mt-12"
                    >
                        {teamData.map((data) => (
                            <SwiperSlide >
                                <TeamCard3 name={data.name} title={data.title} image={data.image} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </section>
    );
};

export default Team3;