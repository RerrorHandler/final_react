import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);

  function catchError(error, info) {
    console.error('Error in component:', error);
    console.error('Error info:', info);
    setError(error);
    setInfo(info);
  }

  return (
    <>
      {error ? (
        <div>
          <h1>Ошибка!</h1>
          <p>Сообщение ошибки: {error.message}</p>
          <p>Детали ошибки: {info}</p>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default ErrorBoundary;
