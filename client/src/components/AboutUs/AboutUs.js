/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './AboutUs.css';

export default function AboutUs({ setModalActive, setwind }) {
  const { auth } = useSelector((state) => state);
  const navigate = useNavigate();
  return (
    <div className="AboutUs-body">
      <div className="AboutUs-container">
        <div className="AboutUs-card">
          {
              !auth?.id
                ? (
                  <>
                    <img className="AboutUs-card-img" src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/home/b23570d4e6681f42b143b822fccbb1a6-v2.svg" />
                    <div className="AboutUs-container-title">
                      <h1 className="AboutUs-card-title">Присоединяйтесь к нам и продемонстрируйте свою работу</h1>
                    </div>
                    <button
                      className="btn AboutUs-card-btn"
                      onClick={() => {
                        setwind('basket');
                        setModalActive(true);
                      }}
                    >
                      ПРИСОЕДИНИТЬСЯ

                    </button>
                  </>
                ) : (
                  <>
                    <img className="AboutUs-card-img" src="/LK.png" />
                    <div className="AboutUs-container-title">
                      <h1 className="AboutUs-card-title">Перейти в личный кабинет</h1>
                    </div>
                    <button
                      className="btn AboutUs-card-btn"
                      onClick={() => {
                        navigate('/profile');
                      }}
                    >
                      ЛИЧНЫЙ КАБИНЕТ

                    </button>
                  </>
                )

          }
        </div>
        <div className="AboutUs-card">
          <img className="AboutUs-card-img" src="/go-to-shop.png" />
          <div className="AboutUs-container-title">
            <h1 className="AboutUs-card-title">Покупайте и продавайте 3D-модели в магазине</h1>
          </div>
          <button className=" btn AboutUs-card-btn"><Link to="/page" className="header-model-btn-text"><h3 className="header-model-btn-text">ПЕРЕЙТИ В МАГАЗИН</h3></Link></button>
        </div>
        <div className="AboutUs-card">
          <img className="AboutUs-card-img" src="/add-people.jpeg" />
          <div className="AboutUs-container-title">
            <h1 className="AboutUs-card-title">Объединяйтесь и создавайте 3D модели вместе</h1>
          </div>
          <button className=" btn AboutUs-card-btn"><Link to="/page" className="header-model-btn-text"><h3 className="header-model-btn-text">НАЙТИ КОМАНДУ</h3></Link></button>
        </div>
      </div>
    </div>
  );
}
