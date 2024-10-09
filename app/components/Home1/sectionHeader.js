import React from 'react';

const SectionHeader = ({heading, title}) => {
    return (
        <div className=''>
            <p className='section-heading'>{heading}</p>
            <h1 className='header !text-center mt-7 md:mt-8 lg:mt-10 !text-[#191919]'>{title}</h1>
        </div>
    );
};

export default SectionHeader;