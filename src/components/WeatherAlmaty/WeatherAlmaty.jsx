import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Iframe from 'react-iframe'
const WeatherAlmaty = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Almaty,KZ&appid=c3ca8199635d8b5088c6316ac33bd1b4';
      try {
        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchWeather();
  }, []);

  if (error) {
    return <div>Ошибка: "{error.message}" сегодня без погоды</div>;
  }

  if (!weatherData) {
    return <div>Загрузка погоды...</div>;
  }


  const { main, weather } = weatherData;
  const temperature = (main.temp - 273.15).toFixed(2); // Convert from Kelvin to Celsius
  const description = weather[0].description;

  return (
    <div>
        <div class="card">
        <div class="card-content">
        <div class="content">
            <h2>Текущая погода в Алматы:</h2>
            <p>Температура: {temperature}°C</p>
            <p>Описание: {description}</p>
        </div>
        </div>
    </div>
    <div>
    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186085.46041708376!2d76.78770995333144!3d43.21818631704564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e7d16c5cbab%3A0x3d44668fad986d76!2z0JDQu9C80LDRgtGL!5e0!3m2!1sru!2skz!4v1715388529101!5m2!1sru!2skz"
        width="1980px"
        height="1280px"
        id=""
        className=""
        display="block"
        position="relative"/>
    </div>
    </div>
  );
};

export default WeatherAlmaty;