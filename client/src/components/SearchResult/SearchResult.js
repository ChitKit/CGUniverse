import React, {
  useEffect, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchModels_THUNK } from '../../redux/actions/searchAction';
import './SearchResult.css';

export default function SearchResult({
  setModelId, searchQuery, setModalActive, setwind, setSearchQuery,
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
          <li onClick={() => {
            setModelId(el.id);
            setwind('onemodel');
            setModalActive(true);
            dispatch(searchModels_THUNK(el.id));
            setSearchQuery('');
          }}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
