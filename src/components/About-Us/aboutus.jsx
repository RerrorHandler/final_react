import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">О нас</h2>

        <div className="flex flex-wrap flex-col justify-center items-center gap-10">
          <div className="w-full flex justify-center items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/4583/4583405.png" alt="Изображение о нас" className="rounded-lg shadow-md w-32" />
          </div>

          <div className="w-full md:w-1/2 prose">
            <p>
              Surefok - это компания, занимающаяся продажи яблок и не только.
              Мы - команда увлеченных людей с общим 0 летним опытом работы в продаже.
            </p>
            <p>
              Наши основные ценности - это продавать.
              Эти ценности лежат в основе всего, что мы делаем, от продуктов и услуг, которые мы предлагаем, до того, как мы взаимодействуем с нашими клиентами.
            </p>
            <p>
              Мы стремимся предоставлять нашим клиентам лучшие яблоки.
              Мы считаем, что важно строить прочные отношения с нашими клиентами и делать все возможное, чтобы превзойти их ожидания.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
