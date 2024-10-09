import Image from 'next/image';
import React from 'react';

const name = 'Mr Azhar'
const image = '/team/2889.jpg'
const title = 'Executive Officer'

const TeamCard = () => {
    return (
        <div className='relative group '>
            <div className='relative w-[316px] h-[369px]'>
                <Image width={315} height={368} className='image-shape' src={image} alt='Team' />
                <div className=" ">
                    <div className='absolute right-1 bottom-1 w-12 h-12 p-2 rounded-full bg-[#10B981] z-50'>
                        <Image width={22} height={22} className='mx-auto w-full p-1' src='/Team/share.svg' alt='Team' />
                    </div>
                    <div className='absolute opacity-0 group-hover:opacity-100 bottom-[70px] right-3 transform transition-opacity duration-300 flex flex-col gap-6'>
                        <div className='w-9 h-9 p-2 rounded-full bg-white text-[#10B981] hover:text-white hover:bg-[#10B981] transition-colors duration-300'>
                            <Image width={16} height={16} className='w-8' src='/Team/instagram.svg' alt='social icon' />
                        </div>
                        <div className='w-9 h-9 p-2 rounded-full bg-white text-[#10B981] hover:text-white hover:bg-[#10B981] transition-colors duration-300'>
                            <Image width={16} height={16} className='w-8' src='/Team/twitter.svg' alt='social icon'/>
                        </div>
                        <div className='w-9 h-9 p-2 rounded-full bg-white text-[#10B981] hover:text-white hover:bg-[#10B981] transition-colors duration-300'>
                            <Image width={16} height={16} className='w-8' src='/Team/whatsapp.svg' alt='social icon'/>
                        </div>
                        <div className='w-9 h-9 p-2 rounded-full bg-white text-[#10B981] hover:text-white hover:bg-[#10B981] transition-colors duration-300'>
                            <Image width={16} height={16} className='w-8' src='/Team/instagram.svg' alt='social icon'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' absolute opacity-0 group-hover:opacity-100 transform transition-transform duration-300 bottom-5 left-5 team w-60 rounded-lg p-4 !pl-2'>
                <p className='team-name capitalize'>{name}</p>
                <p className='team-title capitalize'>{title}</p>
            </div>
        </div>
    );
};

export default TeamCard;