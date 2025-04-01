'use client';
import { assets } from '@/public/assets/assets';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <Image src={assets.logo} alt="logo" className="w-32 md:w-36 lg:w-48" />
        <ul className="hidden md:flex gap-7 text-white">
          <Link href="#Header" className="cursor-pointer hover:text-gray-400">
            Главная
          </Link>
          <Link href="#About" className="cursor-pointer hover:text-gray-400">
            О нас
          </Link>
          <Link href="#Projects" className="cursor-pointer hover:text-gray-400">
            Маршруты
          </Link>
          <Link
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400">
            Отзывы
          </Link>
        </ul>
        
        <Image
          src={assets.menu_icon}
          className="md:hidden w-7"
          alt="menu"
          onClick={() => setShowMenu(true)}
        />
        {/* mobile menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full ${
            showMenu ? 'translate-x-0' : 'translate-x-full'
          } bg-white w-64 transition-transform duration-300`}>
          <div
            className="flex justify-end p-6 cursor-pointer"
            onClick={() => setShowMenu(false)}>
            <Image src={assets.cross_icon} className="w-6" alt="cross" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-bold">
            <Link
              onClick={() => setShowMenu(false)}
              href="#Header"
              className="px-4 py-2 rounded-full inline-block">
              Главная
            </Link>
            <Link
              onClick={() => setShowMenu(false)}
              href="#About"
              className="px-4 py-2 rounded-full inline-block">
              О нас
            </Link>
            <Link
              onClick={() => setShowMenu(false)}
              href="#Projects"
              className="px-4 py-2 rounded-full inline-block">
              Маршруты
            </Link>
            <Link
              onClick={() => setShowMenu(false)}
              href="#Testimonials"
              className="px-4 py-2 rounded-full inline-block">
              Отзывы
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
