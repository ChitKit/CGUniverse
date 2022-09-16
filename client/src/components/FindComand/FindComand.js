/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost_THUNK, getPosts_THUNK } from '../../redux/actions/postsAction';
import './FindComand.css';

export default function FindComand({ setModalActive, setwind }) {
  const { auth } = useSelector((state) => state);
  const { posts } = useSelector((state) => state);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPosts_THUNK());
  }, []);

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
          {posts.length === 0
            ? (
              <h1 className="FindComand-noPost">Постов пока нет. Вы можете добавить объявлениe</h1>
            ) : (
              posts.map((el) => (
                <div
                  className="FindComand-post"
                >
                  <div
                    className="FindComand-photo-contener"
                    onClick={() => {
                      setwind('Favatar');
                      setModalActive(true);
                    }}
                  >
                    <span className="FindComand-photo-text">Изменить фотографию</span>
                    {
          el?.images
            ? <img className="FindComand-image" src={`http://localhost:3002/${el.images}`} alt="пустое фото" />

            : <img className="FindComand-image" src="/noPhoto.jpeg" alt="пустое фото" />

          }
                  </div>
                  {/* <img className="FindComand-image" src="/noPhoto.jpeg" alt="" /> */}
                  <div className="FindComand-text-container">
                    <h1 className="FindComand-post-title">{el.title}</h1>
                    <p className="FindComand-post-description">{el.description}</p>
                    {
                      (el.user_id === auth?.id) ? (
                        <img
                          className="FindComand-del"
                          src="/del.png"
                          alt="del"
                          onClick={() => {
                            if (el.user_id === auth?.id) {
                              dispatch(deletePost_THUNK(el.id));
                            }
                          }}
                        />
                      ) : (null)

                  }

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
