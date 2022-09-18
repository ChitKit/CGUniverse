/* eslint-disable no-lone-blocks */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFModels_THUNK } from '../../redux/actions/farstModelsActions';
import { searchModels_THUNK } from '../../redux/actions/searchAction';
import './Favourite.css';

export default function Favourite({
  setwind, setModelId, setModalActive, setModelFlag,
}) {
  const { FModels } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFModels_THUNK());
  }, []);
  const [isPauzet, setIsPauzet] = useState(false);

  return (
    <div className="favourite-back">
      <h1 className="Favourite-title">Наши рекомендации:</h1>
      <div
        className="Favourite-container"

        onMouseEnter={() => (setIsPauzet(true))}
        onMouseLeave={() => (setIsPauzet(false))}
      >
        {FModels?.map((el) => (
          <div
            key={el.id}
            onClick={() => {
              {
                setModelFlag(true);
                setModelId(el.id);
                setwind('onemodel');
                setModalActive(true);
                dispatch(searchModels_THUNK(el.id));
              }
            }}
            className={`Favourite-card ${isPauzet && 'paused'}`}
          >

            <img className="Favourite-card-img" src={`http://localhost:3002${el.pic}`} />
            <h1>{el.name}</h1>
          </div>
        ))}
        {/* <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div>
        <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div>
        <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div>
        <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div>
        <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div>
        <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div>
        <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div>
        <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div>
        <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div> */}
      </div>
    </div>
  );
}
