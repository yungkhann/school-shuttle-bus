'use client';

import { useState } from 'react';
import axios from 'axios';
import React from 'react';

const BusRegistrationForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childName: '',
    childGrade: '',
    schoolName: '',
    address: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/parent', formData);
      if (response.status === 200) {
        setFormData({
          parentName: '',
          phone: '',
          childName: '',
          childGrade: '',
          schoolName: '',
          address: '',
          message: '',
        });
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
  };
  

  return (
    <div className="w-full py-20 flex flex-col justify-center items-center">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">Регистрация ребенка на школьный автобус</h1>
      {submitted ? (
        <p className="text-green-600 text-lg mt-4">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
          <div className="flex flex-wrap">
            <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" placeholder="Имя родителя" name="parentName" value={formData.parentName} onChange={handleChange} required />
            <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="tel" placeholder="Телефон" name="phone" value={formData.phone} onChange={handleChange} required />
            <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" placeholder="Имя ребенка" name="childName" value={formData.childName} onChange={handleChange} required />
            <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" placeholder="Класс ребенка" name="childGrade" value={formData.childGrade} onChange={handleChange} required />
            <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" placeholder="Название школы" name="schoolName" value={formData.schoolName} onChange={handleChange} required />
            <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" placeholder="Адрес посадки" name="address" value={formData.address} onChange={handleChange} required />
            <textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none" name="message" placeholder="Дополнительные комментарии" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button className="bg-blue-600 text-white py-2 px-12 mt-4 rounded">Зарегистрировать ребенка</button>
        </form>
      )}
    </div>
  );
};

export default BusRegistrationForm;
