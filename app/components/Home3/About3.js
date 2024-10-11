import Image from 'next/image';
import React from 'react';

const About3 = () => {
    return (
        <section className='bg-[#101928]'>
            <div className='max-w-[1320px] mx-auto px-8 lg:px-0 py-20 md:py-28 lg:py-36'>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex-1'>
                        <div className='lg:flex lg:gap-10 flex-row md:flex-row'>
                            <div >
                                <Image className='about1' src='/about3/about1.svg' width={280} height={431} alt='about image 1' />
                                <div className='div1 hidden lg:flex -mt-60'> </div>
                            </div>
                            <div>
                                <Image className='about2' src='/about3/about2.svg' width={280} height={431} alt='about image 2' />
                                <div className='div2 hidden lg:flex -mt-[555px]'> </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <p className='section-heading2 !text-white !border-none'>about company</p>
                        <h1 className='header !mt-6 md:!mt-8 lg:!mt-10'>Your Partner in Corporate Strategy Achievement</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About3;