/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import './Filter.css';

export default function Filter({ setAuthCategory, setAuthSort }) {
  const [filter, setFilter] = useState(false); // drop down list filter
  const [sort, setSort] = useState(false); // drop down list sort
  const [category, setCategory] = useState([]); // array category
  const [categoryName, setCategoryName] = useState(''); // categorye`s name
  const [sortName, setSortName] = useState(''); // sort`s name

  useEffect(() => {
    fetch('http://localhost:3002/api/category')
      .then((res) => res.json())
      .then((res) => setCategory(res));
  }, []);
  const handlerClick = (e) => {
    setAuthCategory(e.target.innerText);
    setCategoryName(e.target.innerText);
  };
  const handlerSortClick = (e) => {
    setAuthSort(e.target.innerText);
    setSortName(e.target.innerText);
  };

  return (
    <div className="filter-container">
      <div className="filter-content-header">
        <div className="filters">
          <div className="filters-filter" onClick={() => setFilter((prev) => !prev)}>
            <div className="filter-category">
              <span className="filter-header">Категории</span>
              <span className="filter-drop-down">
                {!categoryName
                  ? (
                    <span className={filter ? 'filter-drop-down-label-value' : 'filter-drop-down-label-value-open'}>
                      Все категории
                    </span>
                  )
                  : (
                    <span className={filter ? 'filter-drop-down-label-value' : 'filter-drop-down-label-value-open'}>
                      {categoryName}
                    </span>
                  )}
              </span>
              <div className={filter ? 'filter-dd-menu' : 'filter-dd-none'}>
                {/* выпадающий список */}
                <ul className="filter-ul">
                  <li className="filter-dd-el" onClick={handlerClick}>Все категории</li>
                  {category.map((el) => (
                    <li className="filter-dd-el" onClick={handlerClick}>{el.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="sortBy">
          <div className="filters-filter" onClick={() => setSort((prev) => !prev)}>
            <div className="filter-category">
              <span className="filter-header">Сортировать</span>
              <span className="filter-drop-down">
                {!sortName
                  ? (
                    <span className={sort ? 'filter-drop-down-label-value' : 'filter-drop-down-label-value-open'}>
                      По дате добавления
                    </span>
                  )
                  : (
                    <span className={sort ? 'filter-drop-down-label-value' : 'filter-drop-down-label-value-open'}>
                      {sortName}
                    </span>
                  )}
              </span>

            </div>
            <div className={sort ? 'filter-dd-menu' : 'filter-dd-none'}>
              <ul className="filter-ul">
                <li className="filter-dd-el" onClick={handlerSortClick}>По дате добавления</li>
                <li className="filter-dd-el" onClick={handlerSortClick}>По популярности</li>
                <li className="filter-dd-el" onClick={handlerSortClick}>По стоимости</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
