import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden bg-gradient-to-t from-black to-transparent "
      style={{
        backgroundImage: "url('/assets/ms3-last.png')",
      }}
      id="Header">
      <Navbar />

      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 ">
          Дорога в школу
          <br />
          начинается с нами
        </h2>
        <div className="flex space-x-10 justify-center items-center mt-4 ">
        <Link href={'/parent'} className="bg-blue-400 rounded-xl px-6 py-2 text-xs md:text-sm lg:text-lg">
          Добавить ребенка в маршрут
        </Link>
        <Link href={'/driver'} className="bg-blue-400 rounded-xl px-6 py-2 text-xs md:text-sm lg:text-lg">
          Стать водителем
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
