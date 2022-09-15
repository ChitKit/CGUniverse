import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteLike_THUNK, createLike_THUNK, getLike_THUNK } from '../../redux/actions/likeAction';
import { getModels_THUNK } from '../../redux/actions/modelAction';



export default function UserModels({
  el, setModelId, setwind, setModalActive,
}) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);



  const deleteLikeHandler = (e) => {
    // e.preventDefault();
    if (el.flag) {
      dispatch(deleteLike_THUNK(el.id));
    } else {
      dispatch(createLike_THUNK(el.id));
    }
  };

  // console.log(el.LikeModels, 'el.LikeModels');
  return (
    <div
      className="card"
    >
      <div onClick={() => {
        setModelId(el.id);
        setwind('onemodel');
        setModalActive(true);
      }}
      >
        {' '}
        <img
          className="model-img"
          src={`http://localhost:3002${el.pic}`}
          alt={el.name}
        />
      </div>
      <div className="card-footer">
        <div className="card-footer-left">
          {/* <img
      className="card-footer-avatar"
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
      alt="img"
    /> */}
          <p className="model-name-title">{el.name}</p>
        </div>
        <div className="card-footer-rigth">
          {/* <div className="icon">
            <img className="icon-img" src="/icons/2102115.png" alt="..." />
            <p className="card-footer-text">1000</p>
          </div>
          <div className="icon">
            <img className="icon-img" src="/icons/chat.png" alt="..." />
            <p className="card-footer-text">1000</p>
          </div> */}
          { (el.flag) ? (
            <div className="icon">
              <button type="button" onClick={deleteLikeHandler} className="icon-button">
                <img className="icon-img" src="/icons/star-yellow.png" alt="..." />
              </button>
              <p className="card-footer-text">{el.LikeModels.length}</p>
            </div>
          ) : (
            <div className="icon">
              <button type="button" onClick={deleteLikeHandler} className="icon-button">
                <img className="icon-img" src="/icons/star.png" alt="..." />
              </button>
              <p className="card-footer-text">{el.LikeModels.length}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
