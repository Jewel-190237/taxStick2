import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TeamCard3 = ({image, name, title}) => {
    return (
        <div className='group'>
            <div className='bg-black rounded-t-xl px-4 pt-4'>
                <div className='rounded-t-xl border group-hover:border-[#10B981] border-b-0  border-black'>
                    <Image className='w-[185px] h-[255px] mx-auto pt-4' src={image} width={185} height={255} alt='Team Image ' />
                </div>
            </div>
            <div className='bg-[#012A2B] rounded-b-xl'>
                <h3 className='team-name'>{name}</h3>
                <p className='team-title'>{title}</p>
                <div className='py-6 md:py-8 lg:py-10 flex items-center justify-center gap-6'>
                    <Link href=''> <Image className='' src='/team3/facebook.svg' width={10} height={10} alt='Team Image ' /> </Link>
                    <Link href=''><Image className='' src='/team3/instagram.svg' width={16} height={16} alt='Team Image ' /></Link>
                    <Link href=''> <Image className='' src='/team3/twitter.svg' width={16} height={16} alt='Team Image ' /> </Link>
                </div>
            </div>
        </div>
    );
};

export default TeamCard3;