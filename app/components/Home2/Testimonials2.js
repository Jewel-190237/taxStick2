'use client'
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Keyboard, Navigation } from 'swiper/modules';
import TestimonialsCard2 from '@/app/card/Home2/TestimonialsCard2';

const Testimonials2 = () => {
  const swipperRef = useRef(null);
  useEffect(() => {
    if (swipperRef.current && swipperRef.current.swiper) {
      swipperRef.current.swiper.update();
    }
  }, []);
  const Next = () => {
    if (swipperRef.current && swipperRef.current.swiper) {
      swipperRef.current.swiper.slideNext();
    }
  };
  const Previous = () => {
    if (swipperRef.current && swipperRef.current.swiper) {
      swipperRef.current.swiper.slidePrev();
    }
  };
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
      <div className="service mt-8 md:mt-10 lg:mt-[50px] max-w-[1320px] mx-auto px-4 lg:px-0">
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div>
            <p className='section-heading2'> TESTIMONIAL</p>
            <h1 className='header !text-[#191919] mt-8 md:mt-10 lg:mt-12'>What Our Client Say's about us</h1>
          </div>
          <div className='mt-5 md:mt-0 flex items-center justify-end gap-6 '>
            <button onClick={Previous} className='swipper-button group'>
              <svg
                className="mx-auto fill-current text-[#7D7D7D] group-hover:text-white transition-colors duration-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
              >
                <path d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" />
              </svg>
            </button>
            <button onClick={Next} className='swipper-button group'>
              <svg
                className="rotate-180 mx-auto fill-current text-[#7D7D7D] group-hover:text-white transition-colors duration-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
              >
                <path d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" />
              </svg>
            </button>
          </div>
        </div>
        <Swiper
          // slidesPerView={1}
          // spaceBetween={24}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            668: {
              slidesPerView: 2,
              spaceBetween: 24,
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

          modules={[Keyboard, Navigation]}
          ref={swipperRef}
          className='mt-8 md:mt-10 lg:mt-12'
        >
          {testimonialsDate.map((data) => (
            <SwiperSlide >
              <TestimonialsCard2 rate={data.rate} image={data.image} name={data.name} title={data.title} speech={data.speech} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials2;