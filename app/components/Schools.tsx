'use client';

import React from 'react';
import Image from 'next/image';
import { projectsData } from '@/public/assets/assets';

const Schools = () => {
  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full"
      id="Projects"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mt-10">
        Школы, с которыми мы работали
      </h2>
      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
        Мы гордимся сотрудничеством с различными образовательными учреждениями, 
        включая государственные и частные школы. 
        
      </p>

      <div className="flex flex-wrap justify-center items-stretch gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-lg overflow-hidden shadow-lg  flex flex-col py-4"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300} // Указывай точную ширину
              height={200} // и высоту для оптимизации
              className="w-full h-auto object-cover "
            />
            <div className=" bg-white bg-opacity-90 px-4 text-center flex-grow flex flex-col justify-end">
              <h2 className="text-md font-semibold text-gray-800">{project.title}</h2>
              <p className="text-gray-600 text-sm">{project.price} | {project.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schools;
