import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceCard2 = ({iconImage, title, description}) => {
    return (
        <div className='rounded-2xl shadow-xl bg-white border border-white hover:border hover:border-[#10B981] group'>
        <div className='py-6 md:pt-7'>
          <div className='mx-auto rounded-full shadow-xl p-3 bg-white group-hover:bg-[#10B981] max-w-20 max-h-20'>
            {iconImage}
          </div>
        </div>
        <Image className='w-full' src='/service2/border.svg' width={424} height={23} alt='border Image' />
        <h4 className="capitalize text-center text-[16px] md:text-xl lg:text-2xl font-semibold mt-5">{title}</h4>
        <p className="mt-4 md:mt-5 lg:mt-6 description !font-normal !text-[#5D666F] w-[70%]">{description}</p>
        <div className='py-10 md:py-12 lg:py-14 w-[35%] md:w-[40%] lg:w-[30%] mx-auto'>
          <Link href='' className="read group-hover:text-[#10B981] flex justify-center items-center">
            <span className='text-[16px] md:text-[18px] lg:text-xl font-semibold'>Read More</span>
            <svg
              className="mx-auto fill-current text-black group-hover:text-[#10B981] transition-colors duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
            >
              <path d="M0 16L5 8L-1.4687e-06 9.53674e-07L3 8.91229e-07L8 8L3 16L0 16Z" />
              <path d="M8 16L13 8L8 9.53674e-07L11 8.66252e-07L16 8L11 16L8 16Z" />
            </svg>
          </Link>
        </div>
      </div>
    );
};

export default ServiceCard2;