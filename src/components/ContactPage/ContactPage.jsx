import React from 'react';

const Contact = () => {
  return (
    <section className="contact bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Свяжитесь с нами</h2>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="contact-info w-full md:w-1/2">
            <p>
              Мы всегда рады ответить на ваши вопросы и помочь вам с любыми проблемами.
            </p>

            <ul className="list-none mt-4">
              <li className="flex items-center mb-2">
                <svg
                  className="h-6 w-6 mr-2 text-gray-500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l4.615 4.615A2.113 2.113 0 108.185 5.385L12 3"
                  />
                </svg>
                <span className="text-gray-700">
                  Email: <a href="mailto:info@example.com">rerrorhandler@gmail.com</a>
                </span>
              </li>
              <li className="flex items-center mb-2">
                <svg
                  className="h-6 w-6 mr-2 text-gray-500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 8l-4-4m0 0l-4 4m0 0l4 4"
                  />
                </svg>
                <span className="text-gray-700">
                  Телефон: +7 (776) 006-19-08
                </span>
              </li>
              <li className="flex items-center mb-2">
                <svg
                  className="h-6 w-6 mr-2 text-gray-500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 10c0 4-3 7-7 7-4 0-7-3-7-7 0-4 3-7 7-7 4 0 7 3 7 7z" />
                </svg>
                <span className="text-gray-700">
                  Адрес: г. ул. Гагарина
                </span>
              </li>
            </ul>
        </div>
        </div>
    </div>
</section>
  )
}; 

export default Contact;
