import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import { searchModels_THUNK } from '../../redux/actions/searchAction';
import './SearchResult.css';

export default function SearchResult({ searchQuery }) {
  const search = useSelector((s) => s.search);
  const [result, setResult] = useState('');
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

  const handleClick = (e) => {
    // console.log(e.target.innerText);
    setResult(e.target.innerText);
  };
  return (
    <div className="searchresult-container">
      <ul className="searchresult-answers">
        {search.map((el) => <li onClick={handleClick}>{el.name}</li>)}
      </ul>
    </div>
  );
}
