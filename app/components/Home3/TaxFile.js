"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Modal } from 'antd';
// import 'antd/dist/antd.css'; // Import Ant Design styles

const TaxFile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className='bg-[#101928] pt-20'>
            <div className='max-w-[1320px] mx-auto px-8 lg:px-0 py-12 md:py-16 lg:py-20 relative'>
                <div className='absolute inset-0 rounded-[20px] bg-cover bg-center' style={{ backgroundImage: 'url(/tax/bg.svg)' }} />
                <div className='absolute inset-0 rounded-[20px] bg-black bg-opacity-80' />
                
                <div className='relative ml-6 md:ml-10 lg:ml-16 text-white'>
                    <Image 
                        src='/tax/videoIcon.svg' 
                        width={80} 
                        height={80} 
                        alt='video icon' 
                        className='cursor-pointer'
                        onClick={openModal} 
                    />
                    <h2 className='tax-header'>how to file tax?</h2>
                    <p className='tax-description mt-6 md:mt-8 lg:mt-10 w-full md:w-[50%] lg:w-[40%]'>
                        There are many variations of passages available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                        There are many variations of passages available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                </div>
            </div>

            {/* Ant Design Modal for the video */}
            <Modal
                title={null}
                visible={isModalOpen}
                onCancel={closeModal}
                footer={null}
                width="40%"
                centered
                bodyStyle={{ padding: 0 }}
            >
                <video
                    width="100%"
                    height="auto"
                    controls
                    poster="/tax/bg.svg" // Replace with your thumbnail image
                >
                    <source src="/tax/tax.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Modal>
        </section>
    );
};

export default TaxFile;
