/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import './ModelUploader.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory_THUNK } from '../../redux/actions/categoryAction';


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
      <form onSubmit={submitModelHandler}>
        <label>Название модели:</label>
        <input type="text" name="name" onChange={(e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))} />

        <label>Модель:</label>
        <input className="file" type="file" name="model" onChange={(e) => setFiles((prev) => [...prev, ...e.target.files])} />

        <label>Изображение модели:</label>
        <input type="file" name="pic" onChange={(e) => setFiles((prev) => [...prev, ...e.target.files])} />
        <select
          onChange={(e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
          name="categ_id"
          value={inputs.categ_id}

        >
          <option hidden>Выберите категорию</option>
          {category?.map((el) => <option key={el.id} value={el.id}>{el.name}</option>)}
        </select>
        <button type="submit">Загрузить</button>
      </form>
      {/* <div className="uploadImageModel">Перетащите изображение модели сюда</div> */}
    </div>
  );
}
