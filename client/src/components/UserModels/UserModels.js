import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function UserModels({ el }) {
  const [likeOrNot, setLikeOrNot] = useState(false);
  const dispatch = useDispatch();
  const { model } = useSelector((state) => state);

  // useEffect(() => {
  //   fetch(`http://localhost:3002/model/like/${el.id}}`)
  //   dispatch()
  // }, []);

  // console.log(likesModel, 'likesModel=====');

  const setLikeHandler = (e) => {

  };
  return (
    <div className="card">
      <img
        className="model-img"
        src={`http://localhost:3002/${el.pic}`}
        alt={el.name}
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
          <div onClick={setLikeHandler} className="icon">
            <img className="icon-img" src="/icons/star.png" alt="..." />
            <p className="card-footer-text">1000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
