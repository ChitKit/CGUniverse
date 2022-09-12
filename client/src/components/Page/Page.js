import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getModels_THUNK } from '../../redux/actions/modelAction';
import OneCard from '../OneCard/OneCard';
import Filter from './Filter/Filter';
import './Page.css';

export default function Page() {
  const { model } = useSelector((s) => s);
  const [authCategory, setAuthCategory] = useState();
  console.log(authCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getModels_THUNK());
  }, []);
  return (
    <div className="container">
      <Filter setAuthCategory={setAuthCategory} />
      <main className="content">
        <div className="content-header">
          <h1 className="content-header-text">Models</h1>
        </div>
        <div className="modules-page">
          {model.length
            ? (model?.map((el) => (<OneCard model={el} key={el.id} />)))
            : (<h1>В данной категории нет моделей</h1>)}
        </div>
        {/* button`s place */}
      </main>
    </div>
  );
}
