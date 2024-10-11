"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const ContactCard2 = ({bgColor, textColor, inputBg}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section
            className="bg-cover bg-center"
            style={{ backgroundImage: `url('/contact/bg.svg')` }}
        >
            <div className="max-w-[1320px] mx-auto text-white">
                <div className='flex flex-col md:flex-row gap-20 lg:gap-32 px-8 lg:px-0'>
                    <div className='mt-20 md:mt-[120px] lg:mt-[150px]'>
                        <h1 className='header leading-[55px] !text-white mt-6 md:mt-8 lg:mt-10'>Let’s discuss <br /> <span className='whitespace-pre'>on something <span className='text-[#10B981]'>cool</span> </span> together</h1>
                        <div className='mt-16 md:mt-20 lg:mt-24 space-y-3 md:space-y-4 lg:space-y-6'>
                            <div className='contact-card'>
                                <Image width={24} height={24} src='/contact/email.svg' alt='email' />
                                <p className='contact-text'>support@gmail.com</p>
                            </div>
                            <div className='contact-card'>
                                <Image width={24} height={24} src='/contact/phone.svg' alt='phone' />
                                <p className='contact-text'>+123 456 789</p>
                            </div>
                            <div className='contact-card'>
                                <Image width={24} height={24} src='/contact/location.svg' alt='location' />
                                <p className='contact-text'>123 Street 456 House</p>
                            </div>
                        </div>
                        <div className='py-16 md:py-20 lg:py-24 flex items-center gap-2'>
                            <div className='contact-icon'>
                                <Image className='py-5 mx-auto' width={24} height={24} src='/contact/facebook.svg' alt='facebook' />
                            </div>
                            <div className='contact-icon'>
                                <Image className='py-6 mx-auto' width={30} height={30} src='/contact/instagram.svg' alt='instagram' />
                            </div>
                            <div className='contact-icon'>
                                <Image className='py-7 mx-auto' width={30} height={30} src='/contact/twitter.svg' alt='twitter' />
                            </div>
                        </div>
                    </div>
                    <form className={`form-styles ${bgColor}`} onSubmit={handleSubmit}>
                        <div>
                            <label className={`${textColor} text-[18px]`}>Your Name:</label>
                            <input
                                type='text'
                                placeholder='Your Name'
                                className={`border border-[#C9C6C6] p-4 ${inputBg} mt-3 rounded-lg w-full`}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className={`${textColor} text-[18px]`}>Your Email:</label>
                            <input
                                type='email'
                                placeholder='Your Email'
                                className={`border border-[#C9C6C6] p-4 ${inputBg} mt-3 rounded-lg w-full`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className={`${textColor} text-[18px]`}>Your Message:</label>
                            <textarea
                                placeholder="Write Your Message here"
                                className={`w-full mt-3 h-24 md:g-28 lg:h-32 p-4 ${inputBg} border border-[#C9C6C6] rounded-lg`}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <button type='submit' className='submit-button lg:!mt-28'>
                            <Image src='/contact/send.svg' width={24} height={24} alt='Sent icon' />
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactCard2;
