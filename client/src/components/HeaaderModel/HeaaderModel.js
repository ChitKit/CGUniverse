/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Scene from '../Scene/Scene';
import './HeaaderModel.css';


export default function HeaaderModel({ setModalActive, setwind }) {
  const { auth } = useSelector((state) => state);

  return (
    <div className="heaader-model-body">
      <div className="heaader-model-container-first">
        <div className="heaader-model-box-title">
          <h1 className="heaader-model-title">
            Платформа для покупки
            <br />
            {' '}
            и продажи 3D в
            {' '}
            <br />
            Интернете
          </h1>
        </div>
        <div className="heaader-model-box-text">
          <p className="heaader-model-text">
            Управляйте
            своими 3D-ресурсами.
            Распространяйте опыт 3D. Сотрудничайте с другими. Продемонстрируйте свою работу.
            <br />
            {' '}
            Покупайте и продавайте 3D модели.
          </p>
        </div>
        <div className="heaader-model-btn-container">
          {!auth?.id
            ? (
              <button
                className="btn header-model-btn-reg"
                type="button"
                onClick={() => {
                  setwind('reg');
                  setModalActive(true);
                }}
              >
                <h3 className="header-model-btn-text">ЗАРЕГИСТРИРОВАТЬСЯ</h3>
              </button>
            ) : (
              null
            )}
          <button className="btn header-model-btn-models-list" type="button"><Link to="/page" className="header-model-btn-text"><h3 className="header-model-btn-text">ПОСМОТРЕТЬ МОДЕЛИ</h3></Link></button>
        </div>
      </div>
      <div id="canvas" className="heaader-model-container-second">
        <Scene className="heaader-model-canvas" width="800" height="650" />
        {/* <canvas className='heaader-model-canvas' width='800' height='650'></canvas> */}
      </div>
    </div>
  );
}
