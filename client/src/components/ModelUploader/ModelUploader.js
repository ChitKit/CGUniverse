/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import './ModelUploader.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory_THUNK } from '../../redux/actions/categoryAction';
import { getModels_THUNK } from '../../redux/actions/modelAction';


export default function ModelUploader({ setModalActive }) {
  const [inputs, setInputs] = useState({
    name: '', categ_id: '',
  });
  console.log(inputs);
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);
  const category = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(getCategory_THUNK());
  }, []);


  const submitModelHandler = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append('model', files[0]);
    data.append('pic', files[1]);
    data.append('categ_id', inputs.categ_id);
    data.append('name', inputs.name);

    console.log(Object.fromEntries(data), 'dataAAAAAAA');
    axios.post('http://localhost:3002/upload/model', data, {
      headers: {
        'Content-Type': 'mulpipart/form-data',
      },
      withCredentials: true,

    })
      .then((res) => { setModalActive(false); dispatch(getModels_THUNK()); });

    //       .then((res) => setAvatar(res.data.path));
  };

  return (
    <div className="uploader">
      <h1 className="loading-title uploader-title">Загрузить новую модель</h1>
      <form onSubmit={submitModelHandler} className="formEdit">
        <label className="input-text">Название модели:</label>
        <input type="text" name="name" onChange={(e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))} />
        <div className="input__wrapper">
          <input id="input__file" className="input input__file" type="file" name="model" onChange={(e) => setFiles((prev) => [...prev, ...e.target.files])} />
          <label htmlFor="input__file" className="input__file-button">
            <span className="input__file-icon-wrapper">
              <img className="input__file-icon" src="./file.png" alt="Выбрать файл" width="25" />
            </span>
            <span className="input__file-button-text">Загрузить модель</span>
          </label>
        </div>
        <div className="input__wrapper">
          <input type="file" id="input__file" className="input input__file" name="pic" onChange={(e) => setFiles((prev) => [...prev, ...e.target.files])} />
          <label htmlFor="input__file" className="input__file-button">
            <span className="input__file-icon-wrapper">
              <img className="input__file-icon" src="./file.png" alt="Выбрать файл" width="25" />
            </span>
            <span className="input__file-button-text">Загрузить изображение модели</span>
          </label>
        </div>
        <select
          className="select"
          onChange={(e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
          name="categ_id"
          value={inputs.categ_id}

        >
          <option hidden>Выберите категорию</option>
          {category?.map((el) => <option key={el.id} value={el.id}>{el.name}</option>)}
        </select>
        <button type="submit" className="btn btn-color btn-pad">Загрузить</button>
      </form>
      {/* <div className="uploadImageModel">Перетащите изображение модели сюда</div> */}
    </div>
  );
}
