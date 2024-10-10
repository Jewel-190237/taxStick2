import Image from 'next/image';
import React from 'react';



const Expert3 = () => {
    const expertData = [
        { image: '/expert3/home.svg', icon: '/expert3/moneyIcon.svg', heading: 'File In Office', description: 'There are many variations of passages available but the majority have suffered alteration in some form, by injected humour, or randomised words which believable.There are many variations of passages available but the majority have ' },
        { image: '/expert3/drop.svg', icon: '/expert3/dropIcon.svg', heading: 'Drop off', description: 'There are many variations of passages available but the majority have suffered alteration in some form, by injected humour, or randomised words which believable.There are many variations of passages available but the majority have ' },
        { image: '/expert3/office.svg', icon: '/expert3/homeIcon.svg', heading: 'File In Home', description: 'There are many variations of passages available but the majority have suffered alteration in some form, by injected humour, or randomised words which believable.There are many variations of passages available but the majority have ' },
    ]
    return (
        <section className='bg-[#101928]'>
            <div className='max-w-[1320px] mx-auto px-8 lg:px-0 py-20 md:py-28 lg:py-36'>
                <p className='section-heading2 !text-white !border-none text-center'>file with an expart</p>
                <h1 className='header !text-center !mt-6 md:!mt-8 lg:!mt-10'>Choose Your Way To File Taxes</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-10 lg:mt-12'>
                    {expertData.map((data, index) => (
                        <div key={index} className='overflow-hidden'>
                            <Image className='rounded-t-xl w-full lg:w-[424px] h-[190px]' src={data.image} width={796} height={455} alt='Expert Image ' />
                            <div className='relative bottom-10 md:bottom-7 lg:bottom-6 xl:bottom-4 rounded-b-xl'>
                                <div className='flex gap-6 bg-[#012A2B]'>
                                    <div className='relative right-3 bottom-5 w-20 h-20 rounded-full bg-[#10B981] '>
                                        <Image className='mx-auto py-5' src={data.icon} width={40} height={40} alt='Office Icon' />
                                    </div>
                                    <h3 className='text-white text-xl md:text-2xl lg:text-[28px] font-bold pt-3 capitalize'>{data.heading}</h3>
                                </div>
                                <div className='bg-[#012A2B] relative bottom-8'>
                                    <p className='testimonials-text !pt-6 !pb-10'>{data.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expert3;