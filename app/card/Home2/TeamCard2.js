import React from 'react';

const TeamCard2 = ({ name, title, image }) => {
    return (
        <div className='relative group'>
            <div className='team-shape max-w-[500px] md:max-w-[450px] lg:max-w-[400px] xl:max-w-[312px] h-[383px]'>
                <img className='opacity-100 group-hover:opacity-50 z-10' src={image} alt='team' />
            </div>
            <div className='bg-white shadow-xl relative bottom-24 z-50 flex flex-col items-center w-[232px] py-6 px-12 rounded-lg mx-auto'>
                <p className="text-xl font-bold">{name}</p>
                <p className="speech mt-2">{title}</p>
            </div>
            <div className='absolute opacity-0 group-hover:!opacity-100 bottom-[70px] right-10 top-10 transform transition-opacity duration-300 flex flex-col gap-6'>
                <div className='w-9 h-9 p-2 rounded-full bg-white text-[#10B981] hover:text-white hover:bg-[#10B981] transition-colors duration-300'>
                    <img className='w-8' src='/team/instagram.svg' />
                </div>
                <div className='w-9 h-9 p-2 rounded-full bg-white text-[#10B981] hover:text-white hover:bg-[#10B981] transition-colors duration-300'>
                    <img className='w-8' src='/team/twitter.svg' />
                </div>
                <div className='w-9 h-9 p-2 rounded-full bg-white text-[#10B981] hover:text-white hover:bg-[#10B981] transition-colors duration-300'>
                    <img className='w-8' src='/team/whatsapp.svg' />
                </div>
                <div className='w-9 h-9 p-2 rounded-full bg-white text-[#10B981] hover:text-white hover:bg-[#10B981] transition-colors duration-300'>
                    <img className='w-8' src='/team/instagram.svg' />
                </div>
            </div>
        </div>
    );
};

export default TeamCard2;