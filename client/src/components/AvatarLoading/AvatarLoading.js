/* eslint-disable max-len */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux/actions/authActions';
import './AvatarLoading.css';

export default function AvatarLoading({
  img, setImg, setAvatar, setModalActive,
}) {
  const disptach = useDispatch();
  const sendFile = (e) => {
    const data = new FormData();
    data.append('avatar', img);
    console.log(data);
    axios.post('http://localhost:3002/upload/photoAvatar', data, {
      headers: {
        'Content-Type': 'mulpipart/form-data',
      },
      withCredentials: true,
    })

      .then((res) => { setAvatar(res.data.path); disptach(setAuth(res.data)); });
  };
  return (
    <div className="loading-container">
      <div className="loading-container-title">
        <h1 className="loading-title">Загрузите главную фотографию профиля</h1>
      </div>
      <div className="input__wrapper">
        <input name="file" type="file" name="file" id="input__file" className="input input__file" multiple onChange={(e) => setImg(e.target.files[0])} />
        <label htmlFor="input__file" className="input__file-button">
          <span className="input__file-icon-wrapper">
            <img className="input__file-icon" src="./file.png" alt="Выбрать файл" width="25" />
          </span>
          <span className="input__file-button-text">Выберите файл</span>
        </label>
      </div>
      {/* <input className="loading-input" type="file" onChange={(e) => setImg(e.target.files[0])} /> */}
      <button className="btn btn-color" type="button" onClick={sendFile}>Save</button>
    </div>
  );
}
