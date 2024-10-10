import Image from 'next/image';
import React from 'react';

const TestimonialsCard3 = ({image, name, title, speech}) => {
    return (
        <div>
            <Image className='rounded-full w-20 h-20 mx-auto relative top-10' src={image} width={300} height={300} alt='Reviewer photo' />
            <div className='h-1 divider'> </div>
            <div className='bg-[#012A2B] rounded-xl'>
                <p className='testimonials-text'>{speech}</p>
                <h3 className='team-name !pt-8 md:!pt-10 lg:!pt-12'>{name}</h3>
                <p className='team-title pb-8 md:pb-10 lg:pb-12'>{title}</p>
            </div>
            <div className='h-1 divider'> </div>
        </div>
    );
};

export default TestimonialsCard3;