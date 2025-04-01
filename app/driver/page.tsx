'use client';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';

const Driver = () => {
  const [userInput, setUserInput] = useState({
    fullName: '',
    phone: '',
    licenseCategory: '',
    experience: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('/api/driver', userInput);
      if (response.status === 200) {
        setUserInput({ fullName: '', phone: '', licenseCategory: '', experience: '' });
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
  };

  return (
    <div className="w-full py-20 flex flex-col justify-center items-center">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">Анкета водителя</h1>
      {submitted ? (
        <p className="text-green-600 text-lg mt-4">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
          <div className="mb-4 text-left">
            <label>Имя и фамилия</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="fullName"
              placeholder="Введите полное имя"
              value={userInput.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4 text-left">
            <label>Телефон</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="tel"
              name="phone"
              placeholder="Введите телефон"
              value={userInput.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4 text-left">
            <label>Водительское удостоверение (категория)</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="licenseCategory"
              placeholder="Например: B, C, D"
              value={userInput.licenseCategory}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4 text-left">
            <label>Опыт вождения</label>
            <textarea
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-24 resize-none"
              name="experience"
              placeholder="Опишите ваш опыт вождения и предыдущие места работы"
              value={userInput.experience}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button className="bg-blue-600 text-white py-2 px-12 rounded">Отправить</button>
        </form>
      )}
    </div>
  );
};

export default Driver;
