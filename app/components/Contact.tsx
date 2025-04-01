import React from 'react';

const Contact = () => {
  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact">
      <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Свяжитесь{' '}
        <span className="undeline undeline-offset-4 decoration-1 under font-light ">
          с нами
        </span>{' '}
      </h2>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Готовы сделать шаг вперёд? Свяжитесь с нами и начните своё путешествие уже сегодня!
      </p>

      <form action="" className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Ваше имя
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              placeholder="Ваше имя"
              name="Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Ваш Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 "
              placeholder="Ваш Email"
              name="Email"
              type="email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Сообщение
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            id=""
            placeholder="Ваше сообщение"
            required></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">
          Отправить сообщение
        </button>
      </form>
    </div>
  );
};

export default Contact;
