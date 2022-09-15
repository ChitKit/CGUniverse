import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterAllModels_THUNK, filterModels_THUNK } from '../../redux/actions/actionFIlterSort';
import { sortModels_THUNK } from '../../redux/actions/sortActions';
import OneCard from '../OneCard/OneCard';
import Filter from './Filter/Filter';
import './Page.css';

export default function Page({
  setwind, setModelId, setModalActive, setAuthCategory, authCategory,
}) {
  // const [authCategory, setAuthCategory] = useState('');
  const [authSort, setAuthSort] = useState('');
  const filterModel = useSelector((s) => s.filterModel);
  // const model = useSelector((s) => s.model);
  const auth = useSelector((s) => s.auth);
  console.log(authCategory);

  const dispatch = useDispatch();

  useEffect(() => {
    if (authCategory !== 'Все категории') {
      dispatch(filterModels_THUNK(authCategory));
    } else if (authCategory === 'Все категории') {
      dispatch(filterModels_THUNK('allModels'));
    }
  }, [authCategory]);
  return (
    <div className="container">
      <Filter setAuthCategory={setAuthCategory} setAuthSort={setAuthSort} />
      <main className="content">
        <div className="content-header">
          <h1 className="content-header-text">Models</h1>
        </div>
        <div className="modules-page">
          {(authCategory === 'Все категории' && Array.isArray(filterModel))
            ? (filterModel.UserModels?.map((el) => (
              <OneCard
                model={el}
                key={el.id}
                setwind={setwind}
                setModelId={setModelId}
                setModalActive={setModalActive}
              />
            )))
            : (filterModel?.UserModels?.length > 0
              ? (filterModel?.UserModels?.map((a) => (
                <OneCard
                  model={a}
                  key={a.id}
                  setwind={setwind}
                  setModelId={setModelId}
                  setModalActive={setModalActive}
                  authCategory={authCategory}
                />
              )))
              : (<h1>В данной категории нет моделей</h1>))}
        </div>
      </main>
    </div>
  );
}


