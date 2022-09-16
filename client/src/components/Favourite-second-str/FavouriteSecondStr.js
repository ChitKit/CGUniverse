/* eslint-disable no-lone-blocks */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchModels_THUNK } from '../../redux/actions/searchAction';
import { getSModels_THUNK } from '../../redux/actions/secondModelsActions';
import '../Favourite/Favourite.css';
import './FavouriteSecondStr.css';

export default function FavouriteSecondStr({ setwind, setModelId, setModalActive }) {
  const { SModels } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSModels_THUNK());
  }, []);
  const [isPauzet, setIsPauzet] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="Favourite-second-BG">
      <div className="Favourite-second-container" onMouseEnter={() => (setIsPauzet(true))} onMouseLeave={() => (setIsPauzet(false))}>
        {SModels?.map((el) => (
          <div
            key={el.id}
            onClick={() => {
              {
                setModelId(el.id);
                setwind('onemodel');
                setModalActive(true);
                dispatch(searchModels_THUNK(el.id));
              }
            }}
            className={`Favourite-second-card ${isPauzet && 'paused'}`}
          >
            <img className="Favourite-card-img" src={`http://localhost:3002${el.pic}`} />
            <h1>{el.name}</h1>
          </div>
        ))}
        {/* <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
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
        </div> */}
      </div>
      <div>
        <button
          className="btn btn-all-model"
          onClick={() => {
            navigate('/page');
          }}
        >
          ПОСМОТРЕТЬ ВСЕ МОДЕЛИ

        </button>
      </div>
    </div>
  );
}
