import { assets } from '@/public/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <Image src={assets.logo} alt="logo" />
          <p className="text-gray-400 mt-4">
            Безопасные и надежные перевозки школьников. Мы заботимся о каждом
            пассажире и гарантируем комфортные поездки.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Компания</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <Link href="#Header" className="hover:text-white">
              Главная
            </Link>
            <Link href="#About" className="hover:text-white">
              О нас
            </Link>
            <Link href="#Contact" className="hover:text-white">
              Контакты
            </Link>
            <Link href="#" className="hover:text-white">
              Политика конфиденциальности
            </Link>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Контакты</h3>
          <p className="text-gray-400 mb-2">Телефон: +7 (701) 566-64-12</p>
          {/* <p className="text-gray-400 mb-2">Email: info@shuttlebus.kz</p> */}
          {/* <p className="text-gray-400">Адрес: г. Астана, ул. Достык, 15</p> */}
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2025 © Shuttle Bus Astana. Все права защищены.
      </div>
    </div>
  );
};

export default Footer;
