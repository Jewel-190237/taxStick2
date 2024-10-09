import { Rate } from 'antd';
import React from 'react';

const TestimonialsCard2 = ({ rate, name, title, speech, image }) => {
    return (
        <div className="w-full shadow-lg mt-6 md:mt-0 p-5 md:p-6 lg:p-8 z-50">
            <Rate disabled defaultValue={rate} />
            <p className="speech mt-3 md:mt-4 lg:mt-5 text-justify">{speech}</p>
            <div className="mt-6 md:mt-8 lg:mt-10 flex justify-between items-center">
                <div className='flex items-center gap-4'>
                    <div className='rounded-full testimonials-person w-16 h-16'>
                        <img className="rounded-full" src={image} alt="person" />
                    </div>
                    <div className=''>
                        <p className="text-xl font-bold">{name}</p>
                        <p className="speech mt-2">{title}</p>
                    </div>
                </div>
                <img src='/testimonials/coma.svg' alt="coma" />
            </div>
        </div>
    );
};

export default TestimonialsCard2;