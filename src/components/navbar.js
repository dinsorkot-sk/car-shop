"use client";
import Image from "next/image";
import Link from 'next/link'
import React, { useState } from 'react';

export default function Navbar() {
    const [menuSrc, setMenuSrc] = useState("/images/SOne_index_menu01.png");

    const menuEntry = () => {
        setMenuSrc("/images/SOne_index_menu02.png");
    }

    const menuLeave = () => {
        setMenuSrc("/images/SOne_index_menu01.png");
    }

    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between p-4">
                {/* main logo */}
                <div className="flex justify-center pb-3">
                    <Image 
                        src={'/images/SOne_index_logo.png'} 
                        width={150} 
                        height={75} 
                        alt="Logo" 
                    />
                </div>
                {/* group search */}
                <div className="flex flex-col lg:justify-end">
                    <div className="flex justify-center lg:justify-end">
                        <input
                            placeholder="search"
                            className="border border-amber-700 p-0.5" 
                        />
                    </div>
                    <div className="hidden lg:flex text-sm gap-2">
                        <Link href="/about-s-one" className="hover:text-[#f05a28]">
                            About S-ONE
                        </Link>
                        <div>|</div>
                        <Link href="/job-opportunity" className="hover:text-[#f05a28]">
                            Job Opportunity
                        </Link>
                        <div>|</div>
                        <Link href="/contact-us" className="hover:text-[#f05a28]">
                            Contact Us
                        </Link>
                        <div>|</div>
                        <Link href="/site-map" className="hover:text-[#f05a28]">
                            Site Map
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-row bg-black text-white text-sm gap-2 p-2">
                {/* Product & Services menu with hover state */}
                <div 
                    className="flex items-center gap-2 group"
                    onMouseEnter={menuEntry}
                    onMouseLeave={menuLeave}
                >
                    <Image 
                        src={menuSrc}
                        width={20}
                        height={20}
                        alt="menu"
                        className="w-auto h-5"
                    />
                    <Link href="#" className="hover:text-[#f05a28]">
                        Product & Services
                    </Link>
                </div>

                {/* Other menu items */}
                {['Promotions', 'News & Events', 'Safety Tips', 'FAQS', 'Location'].map((item) => (
                    <div key={item} className="flex items-center gap-2 group">
                        <Image
                            src="/images/SOne_index_menu01.png"
                            width={20}
                            height={20}
                            alt="menu"
                            className="w-auto h-5 group-hover:hidden"
                        />
                        <Image
                            src="/images/SOne_index_menu02.png"
                            width={20}
                            height={20}
                            alt="menu"
                            className="w-auto h-5 hidden group-hover:block"
                        />
                        <Link href="#" className="hover:text-[#f05a28]">
                            {item}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}