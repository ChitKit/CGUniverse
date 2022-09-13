import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterAllModels_THUNK, filterModels_THUNK } from '../../redux/actions/actionFIlterSort';
import { sortModels_THUNK } from '../../redux/actions/sortActions';
import OneCard from '../OneCard/OneCard';
import Filter from './Filter/Filter';
import './Page.css';

export default function Page() {
  const [authCategory, setAuthCategory] = useState('Все категории');
  const [authSort, setAuthSort] = useState('');
  const filterModel = useSelector((s) => s.filterModel);
  // const model = useSelector((s) => s.model);
  const auth = useSelector((s) => s.auth);

  console.log(auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (authCategory !== 'Все категории') {
      dispatch(filterModels_THUNK(authCategory));
    } else if (authCategory === 'Все категории') {
      dispatch(filterAllModels_THUNK());
    }
  }, [authCategory]);
  // useEffect(() => {
  //   dispatch(sortModels_THUNK(authSort));
  // }, [authSort]);
  // useEffect(() => {
  //   dispatch(filterAllModels_THUNK());
  // }, []);
  console.log(filterModel);
  return (
    <div className="container">
      <Filter setAuthCategory={setAuthCategory} setAuthSort={setAuthSort} />
      <main className="content">
        <div className="content-header">
          <h1 className="content-header-text">Models</h1>
        </div>
        <div className="modules-page">
          {(authCategory === 'Все категории')
            ? (filterModel.map((el) => (<OneCard model={el} key={el.id} />)))
            : (filterModel[0]?.UserModels?.length > 0
              ? (filterModel.map((el) => el.UserModels
                .map((a) => (<OneCard model={a} key={a.id} />))))
              : (<h1>В данной категории нет моделей</h1>))}
        </div>
      </main>
    </div>
  );
}


