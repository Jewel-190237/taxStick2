import Image from 'next/image';
import React from 'react';

const About3 = () => {
    return (
        <section className='bg-[#101928]'>
            <div className='max-w-[1320px] mx-auto px-8 lg:px-0 py-20 md:py-28 lg:py-36'>
                <div className='flex flex-col md:flex-row md:gap-8 lg:gap-10'>
                    <div className='flex-1'>
                        <div className='sm:flex sm:gap-4 md:gap-5 lg:gap-8 flex-col sm:flex-row'>
                            <div>
                                <Image className='about1 w-full lg:w-[280px]' src='/about3/about1.svg' width={280} height={431} alt='about image 1' />
                                <div className='div1 hidden lg:flex -mt-60'> </div>
                                <p className='plan-heading hidden lg:flex justify-center -mt-14'>Best tax planning</p>
                            </div>
                            <div>
                                <Image className='hidden lg:flex ml-11 mt-[30px] relative' src='/about3/frame.svg' width={240} height={81} alt='background frame' />
                                <div className='mt-0 lg:-mt-[115px]'>
                                    <Image className='about2 hidden sm:flex mt-0 lg:mt-[90px] w-full lg:w-[280px]' src='/about3/about2.svg' width={280} height={431} alt='about image 2' />
                                    <div className='div2 hidden lg:flex -mt-[555px]'> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 md:mt-0 flex-1'>
                        <p className='section-heading2 !text-white !border-none'>about company</p>
                        <h1 className='header !mt-6 md:!mt-8 lg:!mt-10'>Your Partner in Corporate Strategy Achievement</h1>
                        <p className='description !text-white mt-6 md:mt-8 lg:!mt-10 !text-justify'>We specialize in empowering businesses to achieve their long-term goals through tailored corporate strategies with decades of experience, our team of seasoned consultants is dedicated to help companies navigate complex business</p>
                        <div className='flex items-center gap-3 md:gap-7 lg:gap-10 mt-7 md:mt-9 lg:mt-11'>
                            <div className=''>
                                <div className='flex gap-2'>
                                    <Image className='' src='/about/done.svg' width={24} height={24} alt='About Image' />
                                    <p className='feature-text !text-white'>Experienced Consultants</p>
                                </div>
                                <p className='!mt-4 md:!mt-5 lg:!mt-6 description !text-justify !text-white'>We bring a wealth of knowledge and a fresh perspective to each project </p>
                            </div>
                            <div className=''>
                                <div className='flex gap-2'>
                                    <Image className='' src='/about/done.svg' width={24} height={24} alt='About Image' />
                                    <p className='feature-text !text-white'>Commitment Success</p>
                                </div>
                                <p className='!mt-4 md:!mt-5 lg:!mt-6 description !text-justify !text-white'>We are committed to fostering long-term relationships with our clients</p>
                            </div>

                        </div>
                        <button className='about3-button'>About More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About3;