import Image from 'next/image';
import React from 'react';

const Hero3 = () => {
    return (
        <section
            className="bg-cover bg-center"
            style={{ backgroundImage: `url('/office/bg.svg')` }}
        >
            {/* content */}
            <div className="max-w-[1320px] mx-auto pt-[100px] md:pt-[150px] lg:pt-[170px] xl:pt-[204px]">
                <div >
                    <div className='w-full md:w-1/2'>
                        <h1 className='hero3-heading'>Exceptional guidance your <br className='hidden xl:flex' /> tax <span className='gradient'>success.</span> </h1>
                        <p className='tax-description !text-[#C6CED1] mt-5 md:mt-6 lg:mt-8 xl:mt-10'>There are many variations of passages available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                </div>
            </div>
            <div className='div-gradient w-full flex '>
                <button className='about3-button !bg-[#10B981]'>Free Your Tax Online</button>
                {/* <Image className='relative w-full h-full' src='/hero3/hero.svg' width={554} height={766} alt='Hero Image' /> */}
            </div>
        </section>
    );
};

export default Hero3;