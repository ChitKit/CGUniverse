import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterModels_THUNK } from '../../redux/actions/actionFIlterSort';
import { getModels_THUNK } from '../../redux/actions/modelAction';
import OneCard from '../OneCard/OneCard';
import Filter from './Filter/Filter';
import './Page.css';

export default function Page() {
  const [authCategory, setAuthCategory] = useState('Все категории');
  const { filterModel, model } = useSelector((s) => s);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterModels_THUNK(authCategory));
  }, [authCategory]);
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
          {(authCategory === 'Все категории')
            ? (model.map((el) => (<OneCard model={el} key={el.id} />)))
            : (filterModel[0]?.UserModels?.length > 0
              ? (filterModel.map((el) => el.UserModels.map((a) => (<OneCard model={a} />))))
              : (<h1>В данной категории нет моделей</h1>)) }
        </div>
      </main>
    </div>
  );
}


// (filter.map((el) => (<OneCard model={el} key={el.id} />)))
