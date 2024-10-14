"use client";
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // usePathname for app directory routing

const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
        name: 'Tax Beneficiary',
        path: '/tax-beneficiary',
        submenu: [
            { name: 'Tax Benefit 1', path: '/tax-beneficiary/benefit1' },
            { name: 'Tax Benefit 2', path: '/tax-beneficiary/benefit2' },
        ]
    },
    { name: 'Contact', path: '/contact' },
    {
        name: 'Page',
        path: '/page',
        submenu: [
            { name: 'Page 1', path: '/page/page1' },
            { name: 'Page 2', path: '/page/page2' },
        ]
    },
];

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState('');
    const [dropdownTimeout, setDropdownTimeout] = useState(null);
    const pathname = usePathname(); // Get the current pathname

    useEffect(() => {
        const activeItem = links.find(link =>
            link.path === pathname ||
            link?.submenu?.find(subLink => subLink.path === pathname)
        );
        if (activeItem) {
            setActiveLink(activeItem.name);
        }
    }, [pathname]);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
        setIsOpen(false);
    };

    const toggleDropdown = (linkName) => {
        setOpenDropdown(prev => (prev === linkName ? '' : linkName));
    };

    const handleMouseEnter = (linkName) => {
        clearTimeout(dropdownTimeout);
        const timeout = setTimeout(() => {
            setOpenDropdown(linkName);
        }, 300);
        setDropdownTimeout(timeout);
    };

    const handleMouseLeave = () => {
        clearTimeout(dropdownTimeout);
        setOpenDropdown('');
    };

    const renderLinks = () =>
        links.map((link, index) => (
            <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex items-center">
                    <p
                        className={`font-noto cursor-pointer text-[18px] font-medium ${activeLink === link.name ? 'text-[#10B981]' : 'text-[#fff]'}`}
                        onClick={() => !link.submenu && handleLinkClick(link.name)}
                    >
                        {link.name}
                    </p>
                    {link.submenu && (
                        <button onClick={() => toggleDropdown(link.name)}>
                            <span className="text-[#fff] text-2xl ml-2 relative sm:bottom-2 md:bottom-2 lg:bottom-2">
                                {openDropdown === link.name ? '-' : '+'}
                            </span>
                        </button>
                    )}
                </div>
                {/* Hover-based dropdown for large screens */}
                {link.submenu && openDropdown === link.name && (
                    <div
                        className="absolute hidden lg:block left-0 whitespace-pre pt-3 bg-white text-black rounded-lg"
                        onMouseEnter={() => setOpenDropdown(link.name)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {link.submenu.map((subLink, subIndex) => (
                            <Link href={subLink.path} key={subIndex}>
                                <p
                                    className={`px-4 hover:bg-gray-200 cursor-pointer ${pathname === subLink.path ? 'bg-gray-300' : ''}`}
                                    onClick={() => handleLinkClick(subLink.name)}
                                >
                                    {subLink.name}
                                </p>
                            </Link>
                        ))}
                    </div>
                )}
                {/* Click-based dropdown for mobile screens */}
                {link.submenu && openDropdown === link.name && isOpen && (
                    <div className="lg:hidden absolute left-4 bg-white text-black rounded-lg z-10">
                        {link.submenu.map((subLink, subIndex) => (
                            <Link href={subLink.path} key={subIndex}>
                                <p
                                    className={`px-4 py-2 hover:bg-gray-200 ${pathname === subLink.path ? 'bg-gray-300' : ''}`}
                                    onClick={() => handleLinkClick(subLink.name)}
                                >
                                    {subLink.name}
                                </p>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        ));

    return (
        <nav className="w-full bg-[#101928] p-7 h-fit relative z-10 mt-16 lg:mt-0">
            <div className="max-w-[1320px] px-2 md:px-0 mx-auto flex items-center justify-between">
                <Link href="/">
                    <div className='md:w-[160px] md:h-[35px] w-[100px] h-[28px]'>
                        <Image
                            src="/logo.svg"
                            alt="logoImage"
                            width={160}
                            height={35}
                        />
                    </div>
                </Link>

                <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 ml-8">
                    <button className="button px-4 py-3 sm:ml-6 md:ml-0 sm:px-7 sm:py-4 md:px-10 md:py-[22px]">
                        free your tax online
                    </button>
                </div>

                <div className="lg:hidden flex flex-col justify-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#fff] focus:outline-none absolute right-4"
                    >
                        {isOpen ? (
                            <IoMdCloseCircle className="text-3xl" />
                        ) : (
                            <GiHamburgerMenu className="text-3xl" />
                        )}
                    </button>
                </div>

                <div className="hidden lg:flex items-center text-[18px] font-medium text-[#fff] space-x-10">
                    {renderLinks()}
                </div>

                <div className="hidden lg:flex relative justify-center lg:justify-end">
                    <button style={{ borderRadius: '8px' }} className={`button px-10 py-[22px]`}>
                        free your tax online
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden agency rounded absolute top-16 right-0 w-1/3 z-50 flex flex-col text-[18px] font-medium px-4">
                    {renderLinks()}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
