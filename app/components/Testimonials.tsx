import React from 'react';
import { assets, testimonialsData } from '@/public/assets/assets';
import Image from 'next/image';
const Testimonials = () => {
  return (
    <div
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials">
      <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Отзывы{' '}
        <span className="undeline undeline-offset-4 decoration-1 under font-light ">
          клиентов и водителей
        </span>{' '}
      </h2>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Узнайте, что говорят о нас наши клиенты и водители.
      </p>


      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[340px] border border-gray-100 shadow-lg rounded px-8 py-12 text-center ">
            <Image
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {' '}
              {testimonial.name}{' '}
            </h2>
            <p className="text-gray-500 mb-4 text-sm "> {testimonial.title} </p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {' '}
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <Image key={index} src={assets.star_icon} alt="star" />
              ))}{' '}
            </div>
            <p className="text-gray-699"> {testimonial.text} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
