
import Image from 'next/image';
import React from 'react';

const TaxPlan = () => {
    const taxPlanData = [
        { image: '/plan/plan.svg', heading: 'Tax Planning', title: 'There are many variations of the passage available; the majority have suffered alteration.' },
        { image: '/plan/personal.svg', heading: 'Tax Planning', title: 'There are many variations of the passage available; the majority have suffered alteration.' },
        { image: '/plan/ins.svg', heading: 'Tax Planning', title: 'There are many variations of the passage available; the majority have suffered alteration.' },

    ]
    return (
        <section className='bg-[#101928]'>
            <div className='max-w-[1320px] mx-auto px-8 lg:px-0 py-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-10 lg:mt-12'>
                    {taxPlanData.map((data, index) => (
                        <div key={index} className=''>
                            <div className='relative hidden xl:flex left-1 z-50 div-bg h-full w-[55px] rounded-l-xl'> </div>
                            <div className="z-10 tax-plan xl:relative bottom-56">
                                <div className="flex items-center gap-7">
                                    <Image src={data.image} width={48} height={48} alt="Planning Icon" />
                                    <h4 className="text-white plan-heading">{data.heading}</h4>
                                </div>
                                <p className="mt-4 md:mt-5 lg:mt-6 text-gray-300 tax-description">{data.title} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TaxPlan;