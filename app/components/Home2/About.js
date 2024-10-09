import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <section className='max-w-[1320px] mx-auto mt-40'>
            <div className='flex flex-col md:flex-row px-8 lg:px-0 gap-0 md:gap-10 lg:gap-[115px]'>
                <div className=''>
                    <div className='hidden lg:flex rounded-2xl border border-[#10B981] w-[397px] h-[531px] ml-[112px]'></div>
                    <Image className='hidden lg:flex z-50 relative bottom-[580px] left-[450px]' src='/about/ellipse.svg' width={100} height={100} alt='About Image' />
                    <Image className='lg:z-40 lg:relative bottom-60 md:bottom-[610px] w-[288px] md:w-[1020px] lg:w-[488px] max-h-[595px]' src='/about/about.svg' width={488} height={595} alt='About Image' />
                    <Image className='hidden lg:flex z-10 relative bottom-[800px] left-[400px]' src='/about/star.svg' width={165} height={153} alt='Star' />
                </div>

                <div className='mt-10 md:mt-0'>
                    <span className='section-heading2 !uppercase'>About company</span>
                    <h1 className='header !text-[#191919] mt-8 md:mt-10 lg:mt-12'>Your Partner in Corporate Strategy Achievement</h1>
                    <p className='description !text-[#5D666F] mt-6 md:mt-8 lg:!mt-10 !text-justify'>We specialize in empowering businesses to achieve their long-term goals through tailored corporate strategies with decades of experience, our team of seasoned consultants is dedicated to help companies navigate complex business</p>
                    <div className='flex items-center gap-3 md:gap-7 lg:gap-10 mt-7 md:mt-9 lg:mt-11'>
                        <div className=''>
                            <div className='flex gap-2'>
                                <Image className='' src='/about/done.svg' width={24} height={24} alt='About Image' />
                                <p className='feature-text'>Experienced Consultants</p>
                            </div>
                            <p className='!mt-4 md:!mt-5 lg:!mt-6 description !text-justify !text-[#5D666F]'>We bring a wealth of knowledge and a fresh perspective to each project </p>
                        </div>
                        <div className=''>
                            <div className='flex gap-2'>
                                <Image className='' src='/about/done.svg' width={24} height={24} alt='About Image' />
                                <p className='feature-text'>Commitment Success</p>
                            </div>
                            <p className='!mt-4 md:!mt-5 lg:!mt-6 description !text-justify !text-[#5D666F]'>We are committed to fostering long-term relationships with our clients</p>
                        </div>
                        
                    </div>
                    <button className='about-button'>About More</button>
                </div>
            </div>
        </section>
    );
};

export default About;