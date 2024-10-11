import Image from 'next/image';
import React from 'react';

const Trusted = () => {
    const TrustedData =[
        {image: '/trusted/framer.svg'},
        {image: '/trusted/spofty.svg'},
        {image: '/trusted/slack.svg'},
        {image: '/trusted/dropBox.svg'},
        {image: '/trusted/webflow.svg'},
        {image: '/trusted/arbnb.svg'},
    ]
    
    return (
        <section className='bg-[#101928]'>
        <div className='max-w-[1320px] mx-auto px-8 lg:px-0 py-20'>
            <div className='flex overflow-x-auto gap-10 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 mt-8 md:mt-10 lg:mt-12'>
                {TrustedData.map((data, index) => (
                    <Image className='' key={index} src={data.image} width={135} height={48} alt='Brand Image' />
                ))}
            </div>
        </div>
    </section>
    );
};

export default Trusted;