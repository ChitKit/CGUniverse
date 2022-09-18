import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost_THUNK } from '../../redux/actions/postsAction';
import './AddPost.css';

export default function AddPost({ setModalActive }) {
  const [userInput, setUserInput] = useState({});
  const [dealList, setDealList] = useState([]);
  const dispatch = useDispatch();


  function submitHAndler(e) {
    e.preventDefault();
    dispatch(createPost_THUNK(userInput));
    // fetch('http://localhost:3002/api/posts', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   credentials: 'include',
    //   body: JSON.stringify(userInput),
    // })
    //   .then((res) => res.json())
    //   .then((data) => setDealList((prev) => [...prev, data]));
    setUserInput('');
    setModalActive(false);
  }

  return (
    <div className="AddPost-container">
      <h1 className="form-title">Размещение Объявления</h1>
      <section className="form-section form-section-log">
        <form method="post form-log" onSubmit={submitHAndler}>
          <input type="text" className="inputADD" value={userInput?.title} name="title" placeholder="Заголовок" onChange={(e) => setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))} />
          <div />
          <input type="text" className="inputADD" value={userInput?.description} name="description" placeholder="Описание" onChange={(e) => setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))} />
          <div />
          <button
            className="btn btn-registration btn-color"
            type="submit"
          >
            Найти членов команды

          </button>
        </form>
      </section>
    </div>
  );
}
