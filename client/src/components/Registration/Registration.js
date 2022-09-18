/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../../redux/actions/authActions';
import './Registration.css';

export default function Registration({ setModalActive }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({ role: 'user' });
  const [pass, setPass] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if ((data?.password === data?.dublPassword) && (data?.password !== '')) {
      setPass(false);
    } else {
      setPass(true);
    }
  }, [data]);

  const inputHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3002/auth/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data2 = await response.json();
      dispatch(setAuth(data2));
      setModalActive(false);
    }
  };

  return (
    <div className="reg-page">
      <div>
        <h1 className="form-title">
          Регистрация
        </h1>
      </div>
      <section className="form-section">
        <form className="form form-reg" method="post" onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label-reg">Имя</label>
            <input type="text" className="form-control" name="name" onChange={inputHandler} value={data?.name || ''} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label-reg">Email</label>
            <input type="text" className="form-control" name="email" onChange={inputHandler} value={data?.email || ''} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label-reg">Пароль</label>
            <input type="password" className="form-control" name="password" onChange={inputHandler} value={data?.password || ''} />
          </div>
          <div className="mb-3 mb-3-rep">
            <label htmlFor="dublPassword" className="form-label-reg">Повторите пароль</label>
            <input type="password" className="form-control" name="dublPassword" onChange={inputHandler} value={data?.dublPassword || ''} />
          </div>
          <button disabled={pass} type="submit" className="btn btn-registration btn-color">Зарегистрироваться</button>
        </form>
      </section>
    </div>
  );
}
