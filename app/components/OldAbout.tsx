import React from 'react';
import Image from 'next/image';
import { assets } from '@/public/assets/assets';
const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lf:px-32 w-full overflow-hidden"
      id="About">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        О нашей{' '}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          компании
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Доверьте нам самое ценное — путь ваших детей к знаниям.
      </p>
      <div className="flex flex-col md:flex-row item-center justify-center md:items-start md:gap-20">
        <Image
          src={assets.mercedesbus}
          className="w-full sm:w-1/2 max-w-lg rounded-2xl"
          alt=""
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600 ">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Лет безупречной работы</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">100+</p>
              <p>Довольных родителей ежедневно</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">30+</p>
              <p>Опытных и проверенных водителей</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">4</p>
              <p>Школ доверяют нам перевозку своих учеников</p>
            </div>
          </div>
          {/* <p className="my-10 max-w-lg">
            Мы — надежный партнер в безопасной перевозке детей в школу и
            обратно. Наша цель — обеспечить комфорт и безопасность каждого
            ребенка в пути.
          </p> */}
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Узнать больше
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
