import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Trusted = () => {
    const TrustedData = [
        { image: '/trusted/framer.svg' },
        { image: '/trusted/spofty.svg' },
        { image: '/trusted/slack.svg' },
        { image: '/trusted/dropBox.svg' },
        { image: '/trusted/webflow.svg' },
        { image: '/trusted/arbnb.svg' },
    ]

    return (
        <section className='bg-[#101928]'>
            <div className='flex items-center justify-between'>
                <div className='hidden xl:flex items-center justify-end -mt-24'>
                    <Image src='/trusted/leftImage.svg' width={160} height={415} alt='Right site style' />
                </div>
                <div className='max-w-[1320px] mx-auto px-8 lg:px-0 py-20'>
                    <div className="flex justify-center">
                        <h4 className="trusted-heading">Trusted by 100k+ Investors Company </h4>
                    </div>
                    <div className='trusted-brand'>
                        {TrustedData.map((data, index) => (
                            <Link key={index} href=''> <Image src={data.image} width={135} height={48} alt='Brand Image' /></Link>
                        ))}
                    </div>
                </div>
                <div className='hidden xl:flex items-center justify-end'>
                    <Image src='/trusted/rightImage.svg' width={160} height={415} alt='Right site style' />
                </div>
            </div>
        </section>
    );
};

export default Trusted;