/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Favourite/Favourite.css';
import './FavouriteSecondStr.css';

export default function FavouriteSecondStr() {
  const [isPauzet, setIsPauzet] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="Favourite-second-BG">
      <div className="Favourite-second-container" onMouseEnter={() => (setIsPauzet(true))} onMouseLeave={() => (setIsPauzet(false))}>
        <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Пушка</h1>
        </div>
        <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Пушка</h1>
        </div>
        <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Пушка</h1>
        </div>
        <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="http://localhost:3002/img_models/bomb_pic.png" />
          <h1>Пушка</h1>
        </div>
        <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Пушка</h1>
        </div>
        <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Пушка</h1>
        </div>
        <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Пушка</h1>
        </div>
        <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Пушка</h1>
        </div>
        <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Пушка</h1>
        </div>
        <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Пушка</h1>
        </div>
      </div>
      <div>
        <button
          className="btn btn-all-model"
          onClick={() => {
            navigate('/profile');
          }}
        >
          ПОСМОТРЕТЬ ВСЕ МОДЕЛИ

        </button>
      </div>
    </div>
  );
}
