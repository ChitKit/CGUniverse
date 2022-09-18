/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteLike_THUNK } from '../../redux/actions/likeAction';


export default function UserLikes({
  el, like, setModelId, setwind, setModalActive,
}) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(el, 'ELEMENT');
  console.log(like, 'LIKE');


  const setLikeHandler = (e) => {
    dispatch(deleteLike_THUNK(el.id));
  };

  return (
    <div className="card">
      <img
        className="model-img"
        src={`http://localhost:3002${el.pic}`}
        alt={el.name}
        onClick={() => {
          setModelId(el.id);
          setwind('onemodel');
          setModalActive(true);
        }}
      />
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
          {/* {(el. )} */}
          <div className="icon">
            <button type="button" onClick={setLikeHandler} className="icon-button">
              <img className="icon-img" src="/icons/star-yellow.png" alt="..." />
            </button>
            <p className="card-footer-text">{like?.length}</p>
            {/* {console.log(like)} */}
          </div>
        </div>
      </div>
    </div>
  );
}
