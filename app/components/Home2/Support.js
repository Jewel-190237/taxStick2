import Image from 'next/image';
import React from 'react';

const Support = () => {
    return (
        <section className='max-w-[1302px] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-10 lg:gap-16 px-8 lg:px-0'>
                <div className='flex gap-3 lg:gap-5'>
                    <div>
                        <div className='bg-black w-8 h-8 rounded-full relative top-6 left-0'> <p className='text-white px-1 py-[2px] text-xl'>01</p> </div>
                        <div className='bg-[#F1F7F8] border-2 w-[114px] h-[102px] rounded-tl-[40px] rounded-br-[40px]'>
                            <Image className='mx-auto py-5' src='/support/time.svg' width={50} height={50} alt='support image' />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <h3 className='support-text'>24/7 Support</h3>
                        <p className='description !text-[#5D666F] !text-justify'>Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.  </p>
                    </div>
                </div>
                <div className='flex gap-3 lg:gap-5'>
                    <div>
                        <div className='bg-black w-8 h-8 rounded-full relative top-6 left-0'> <p className='text-white px-1 py-[2px] text-xl'>02</p> </div>
                        <div className='bg-[#F1F7F8] border-2 w-[114px] h-[102px] rounded-tl-[40px] rounded-br-[40px]'>
                            <Image className='mx-auto py-5' src='/support/people.svg' width={50} height={50} alt='support image' />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <h3 className='support-text'>100% customer satisfaction</h3>
                        <p className='description !text-[#5D666F] !text-justify'>Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. </p>
                    </div>
                </div>
                <div className='flex gap-3 lg:gap-5'>
                    <div>
                        <div className='bg-black w-8 h-8 rounded-full relative top-6 left-0'> <p className='text-white px-1 py-[2px] text-xl'>03</p> </div>
                        <div className='bg-[#F1F7F8] border-2 w-[114px] h-[102px] rounded-tl-[40px] rounded-br-[40px]'>
                            <Image className='mx-auto py-5' src='/support/advice.svg' width={50} height={50} alt='support image' />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <h3 className='support-text'>unlimited tax advice</h3>
                        <p className='description !text-[#5D666F] !text-justify'>Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.  </p>
                    </div>
                </div>
                
            </div>

        </section>
    );
};

export default Support;