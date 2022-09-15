/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createLike_THUNK, deleteLike_THUNK } from '../../redux/actions/likeAction';
import { searchModels_THUNK } from '../../redux/actions/searchAction';
import './OneCard.css';


export default function OneCard({
  model, setwind, setModelId, setModalActive, authCategory,
}) {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchModels_THUNK(model));
  }, []);

  const deleteLikeHandler = (e) => {
    // e.preventDefault();
    if (model.flag) {
      dispatch(deleteLike_THUNK(model.id, authCategory));
    } else {
      dispatch(createLike_THUNK(model.id, authCategory));
    }
  };
  return (
    <div className="card">
      <img
        className="model-img"
        src={`http://localhost:3002/${model.pic}`}
        alt="img"
        onClick={() => {
          {
            setModelId(model.id);
            setwind('onemodel');
            setModalActive(true);
            dispatch(searchModels_THUNK(model.id));
            setSearchQuery('');
          }
        }}
      />
      <div className="card-footer">
        <div className="card-footer-left" onClick={() => (console.log('author`s profile'))}>
          <img
            className="card-footer-avatar"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
            alt="img"
          />
          <p className="model-name-title">{model?.name}</p>
        </div>
        <div className="card-footer-rigth">
          {/* <div className="icon">
            <img className="icon-img" src="/icons/2102115.png" alt="..." />
            <p className="card-footer-text">1000</p>
          </div> */}
          {/* <div className="icon comment" onClick={() => (console.log('comment'))}>
            <img className="icon-img" src="/icons/chat.png" alt="..." />
            <p className="card-footer-text">1000</p>
          </div> */}
          {/* <div className="icon favorite" onClick={() => (console.log('favorite'))}>
            <img className="icon-img" src="/icons/star.png" alt="..." />
            <p className="card-footer-text">{model?.LikeModels?.length ?? 0}</p>
          </div> */}
          { (model.flag) ? (
            <div className="icon">
              <button type="button" onClick={deleteLikeHandler} className="icon-button">
                <img className="icon-img" src="/icons/star-yellow.png" alt="..." />
              </button>
              <p className="card-footer-text">{model?.LikeModels?.length ?? 0}</p>
            </div>
          ) : (
            <div className="icon">
              <button type="button" onClick={deleteLikeHandler} className="icon-button">
                <img className="icon-img" src="/icons/star.png" alt="..." />
              </button>
              <p className="card-footer-text">{model?.LikeModels?.length ?? 0}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
