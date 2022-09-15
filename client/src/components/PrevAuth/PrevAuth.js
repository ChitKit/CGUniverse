import React from 'react';
import { useSelector } from 'react-redux';
import './PrevAuth.css';

export default function PrevAuth({ children }) {
  const auth = useSelector((state) => state.auth);


  if (!auth.id) {
    return (
      <div className="prevauth-body">
        <div className="prevauth-container">
          <h1>
            Для использования нашего сайта, пожалуйста, пройдите регистрацию или авторизацию
          </h1>
        </div>
      </div>
    );
  }

  return children;
}
