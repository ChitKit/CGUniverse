/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import './Filter.css';

export default function Filter({ setAuthCategory }) {
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);
  const [category, setCategory] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3002/api/category')
      .then((res) => res.json())
      .then((res) => setCategory(res));
  }, []);
  const handlerClick = (e) => {
    setAuthCategory(e.target.innerText);
  };

  return (
    <div className="filter-container">
      <div className="filter-content-header">
        <div className="filters">
          <div className="filters-filter" onClick={() => setFilter((prev) => !prev)}>
            <div className="filter-category">
              <span className="filter-header">Категории</span>
              <span className="filter-drop-down">
                <span className={filter ? 'filter-drop-down-label-value' : 'filter-drop-down-label-value-open'}>
                  Все категории
                </span>
              </span>
              <div className={filter ? 'filter-dd-menu' : 'filter-dd-none'}>
                {/* выпадающий список */}
                <ul className="filter-ul">
                  {category.map((el) => (
                    <li className="filter-dd-el" onClick={handlerClick}>{el.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sortBy">
          <div className="filters-filter" onClick={() => setSort((prev) => !prev)}>
            <div className="filter-category">
              <span className="filter-header">Сортировать</span>
              <span className="filter-drop-down">
                <span className={sort ? 'filter-drop-down-label-value' : 'filter-drop-down-label-value-open'}>
                  По дате добавления
                </span>
              </span>

            </div>
            <div className={sort ? 'filter-dd-menu' : 'filter-dd-none'}>
              {/* выпадающий список */}
              <ul className="filter-ul">
                <li className="filter-dd-el" onClick={handlerClick}>По дате добавления</li>
                <li className="filter-dd-el" onClick={handlerClick}>По популярности</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
