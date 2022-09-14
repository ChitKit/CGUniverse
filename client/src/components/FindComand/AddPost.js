import React, { useState } from 'react';

export default function AddPost({ setpostFlag, postFlag }) {
  const [userInput, setUserInput] = useState({});
  const [dealList, setDealList] = useState([]);


  function submitHAndler(e) {
    e.preventDefault();
    fetch('http://localhost:3002/api/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(userInput),
    })
      .then((res) => res.json())
      .then((data) => setDealList((prev) => [...prev, data]));
    setUserInput('');
  }

  return (
    <div className="AddPost-container">
      <h1>Размещение Объявления</h1>
      <section>
        <div>
          <h1>h</h1>
        </div>
        <div>
          <form method="post" onSubmit={submitHAndler}>
            <input value={userInput?.title} name="title" placeholder="Заголовок" onChange={(e) => setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))} />
            <input value={userInput?.description} name="description" placeholder="Описание" onChange={(e) => setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))} />
            <button
              type="submit"
              onClick={() => {
                if (postFlag === true) {
                  setpostFlag(false);
                } else {
                  setpostFlag(true);
                }
              }}
            >
              Найти членов команды

            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
