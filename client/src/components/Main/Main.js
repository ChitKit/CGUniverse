
import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Favourite from '../Favourite/Favourite';
import HeaaderModel from '../HeaaderModel/HeaaderModel';
import FavouriteSecondStr from '../Favourite-second-str/FavouriteSecondStr';
import './Main.css';

export default function Main({ setModalActive, setwind, setModelId }) {
  return (
    <div className="main">
      <HeaaderModel setModalActive={setModalActive} setwind={setwind} />
      <AboutUs setModalActive={setModalActive} setwind={setwind} />
      <Favourite setwind={setwind} setModelId={setModelId} setModalActive={setModalActive} />
      <FavouriteSecondStr setwind={setwind} setModelId={setModelId} setModalActive={setModalActive} />
    </div>
  );
}
