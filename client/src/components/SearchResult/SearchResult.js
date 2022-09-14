import React, {
  useEffect, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchModels_THUNK } from '../../redux/actions/searchAction';
import './SearchResult.css';

export default function SearchResult({
  setModelId, searchQuery, setModalActive, setwind, setSearchQuery, setActiveSearch,
}) {
  const search = useSelector((s) => s.search);
  const dispatch = useDispatch();
  const deb = useRef();
  useEffect(() => {
    if (deb.current) {
      clearTimeout(deb.current);
    }
    deb.current = setTimeout(() => {
      dispatch(searchModels_THUNK(searchQuery));
    }, 400);
  }, [searchQuery]);

  return (
    <div className="searchresult-container">
      <ul className="searchresult-answers">
        {search.map((el) => (
          <li
            className="searchresult-answers-li"
            onClick={() => {
              setModelId(el.id);
              setwind('onemodel');
              setModalActive(true);
              dispatch(searchModels_THUNK(el.id));
              setSearchQuery('');
            }}
          >
            <div className="searchresult-answer-text">{el.name}</div>
            <div className="searchresult-answer-img">
              <img
                className="searchresult-answer-img-img"
                src={`http://localhost:3002/${el.pic}`}
                alt="..."
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
