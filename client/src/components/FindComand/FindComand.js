import React, { useEffect, useState } from 'react';
import './FindComand.css';

export default function FindComand({ setModalActive, setwind, postFlag }) {
  const [post, setpost] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/posts')
      .then((res) => res.json())
      .then((result) => setpost(result));
  }, [postFlag]);

  return (
    <div className="FindComand-body">
      <section className="FindComand-section">
        <div className="FindComand-title">Поиск команды</div>
        <div className="FindComand-btn-add-post">
          <button
            type="button"
            className="btn btn-add-post"
            onClick={() => {
              setwind('addPost');
              setModalActive(true);
            }}
          >
            Добавить пост

          </button>
        </div>
        <main className="FindComand-container-form">
          {post.length === 0
            ? (
              <h1>Постав пока нет. Вы можете добавить объявления</h1>
            ) : (
              post.map((el) => (
                <div className="FindComand-post">
                  <img className="FindComand-image" src="/noPhoto.jpeg" alt="" />
                  <div className="FindComand-text-container">
                    <h1 className="FindComand-post-title">{el.title}</h1>
                    <p className="FindComand-post-description">{el.description}</p>
                  </div>
                  <button type="button" className="FindComand-btn">Откликнуться</button>
                </div>
              ))
            )}
        </main>
      </section>
    </div>
  );
}
