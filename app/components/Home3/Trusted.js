'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-marquee-slider';

const Trusted = () => {
    const TrustedData = [
        { image: '/trusted/framer.svg' },
        { image: '/trusted/spofty.svg' },
        { image: '/trusted/slack.svg' },
        { image: '/trusted/dropBox.svg' },
        { image: '/trusted/webflow.svg' },
        { image: '/trusted/arbnb.svg' },
    ];

    const autofillData = [...TrustedData, ...TrustedData]; // Duplicate the array

    return (
        <section className='bg-[#101928]'>
            <div className='flex items-center justify-between'>
                <div className='hidden xl:flex items-center justify-end -mt-24'>
                    <Image src='/trusted/leftImage.svg' width={160} height={415} alt='Left side style' />
                </div>
                <div className='mx-auto px-8 lg:px-0 py-20'>
                    <div className="flex justify-center">
                        <h4 className="trusted-heading">Trusted by 100k+ Investors Company</h4>
                    </div>
                    <div className='trusted-brand relative overflow-hidden'>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#101928] via-transparent to-[#101928] z-10 pointer-events-none" style={{ height: '100%', width: '100%' }} />
                        <Marquee pauseOnHover={true} className="relative z-20">
                            {autofillData.map((data, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '60px' }}>
                                    <Link href=''>
                                        <Image src={data.image} width={135} height={48} alt='Brand Image' />
                                    </Link>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
                <div className='hidden xl:flex items-center justify-end'>
                    <Image src='/trusted/rightImage.svg' width={160} height={415} alt='Right side style' />
                </div>
            </div>
        </section>
    );
};

export default Trusted;
