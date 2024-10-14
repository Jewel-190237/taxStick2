import Image from 'next/image';
import React from 'react';

const Hero3 = () => {
    return (
        <section
            className="bg-cover bg-center h-full"
            style={{ backgroundImage: `url('/hero3/bg.svg')` }}
        >
            {/* content */}
            <div className="max-w-[1320px] mx-auto px-8 lg:px-0 pt-12 md:pt-14 lg:pt-16 xl:pt-20">
                <div className='flex flex-col items-center md:flex-row md:gap-14 lg:gap-20 xl:gap-24'>
                    <div className='w-full md:w-1/2'>
                        <h1 className='hero3-heading'>Exceptional guidance your <br className='hidden xl:flex' /> tax <span className='gradient'>success.</span> </h1>
                        <p className='tax-description !text-[#C6CED1] mt-5 md:mt-6 lg:mt-8 xl:mt-10'>There are many variations of passages available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <button className='about3-button !bg-[#10B981]'>free your tax online</button>
                        <div className='w-full lg:w-[1000px] flex flex-col lg:flex-row md:gap-5 lg:gap-10 xl:gap-12 mt-12 md:mt-16 lg:mt-20 xl:mt-[90px]'>
                            <div className='flex items-center md:gap-3 lg:gap-5 xl:gap-6 '>
                                <Image className='w-[20px] xl:w-[40px]' src='/hero3/support.svg' width={40} height={40} alt='supportIcon' />
                                <h4 className='text-white font-bold text-[14px] xl:text-[18px]'>24/7 Support</h4>
                            </div>
                            <div className='flex items-center md:gap-3 lg:gap-5 xl:gap-6 mt-5 md:mt-0'>
                                <Image className='w-[20px] xl:w-[40px]' src='/hero3/customer.svg' width={40} height={40} alt='supportIcon' />
                                <h4 className='text-white font-bold text-[14px] xl:text-[18px]'>100% customer satisfaction</h4>
                            </div>
                            <div className='flex items-center md:gap-3 lg:gap-5 xl:gap-6 mt-5 md:mt-0'>
                                <Image className='w-[20px] xl:w-[40px]' src='/hero3/advice.svg' width={40} height={40} alt='supportIcon' />
                                <h4 className='text-white font-bold text-[14px] xl:text-[18px] capitalize'>unlimited tax advice</h4>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-end relative xl:left-24 mt-10 md:mt-0'>
                        <Image className='relative w-full h-full' src='/hero3/hero.svg' width={554} height={766} alt='Hero Image' />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero3;