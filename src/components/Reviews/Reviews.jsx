import React, { useState } from 'react';

const Reviews = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(5);
    const [submitting, setSubmitting] = useState(false);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setSubmitting(true);
  
      try {

        console.log('Submitting review...');
        await new Promise((resolve) => setTimeout(resolve, 2000)); // delay
  
        setName('');
        setEmail('');
        setReview('');
        setRating(5);
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    };
    
  return (
    <section className="reviews bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Оставьте отзыв</h2>

        <div className="flex flex-col items-center">
          <div className="mb-10">
            <p className="text-gray-700">
              Поделитесь своим опытом работы с нами. Ваш отзыв поможет нам
              улучшиться!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-gray-700 font-medium"
              >
                Ваше имя:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-gray-700 font-medium"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="review"
                className="block mb-2 text-gray-700 font-medium"
              >
                Ваш отзыв:
              </label>
              <textarea
                id="review"
                name="review"
                rows={5}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="rating"
                className="block mb-2 text-gray-700 font-medium"
              >
                Рейтинг:
              </label>
              <select
                id="rating"
                name="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`w-full p-3 mt-4 rounded-md bg-blue-500 text-white ${
                submitting ? 'cursor-not-allowed opacity-75' : 'hover:bg-blue-600'
              }`}
            >
              {submitting ? 'Отправка...' : 'Отправить отзыв'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
