/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../../redux/actions/authActions';

export default function Registration() {
  const dispatch = useDispatch();
  const [data, setData] = useState({ role: 'user' });
  const [pass, setPass] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.name !== '') {
      if ((data?.password === data?.dublPassword) && (data?.password !== '')) {
        setPass(false);
      }
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
      navigate('/');
    }
  };

  return (
    <>
      <div>Регистрация</div>
      <section>
        <form className="form" method="post" onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Имя</label>
            <input type="text" className="form-control" name="name" onChange={inputHandler} value={data?.name || ''} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="form-control" name="email" onChange={inputHandler} value={data?.email || ''} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Пароль</label>
            <input type="password" className="form-control" name="password" onChange={inputHandler} value={data?.password || ''} />
          </div>
          <div className="mb-3">
            <label htmlFor="dublPassword" className="form-label">Повторите пароль</label>
            <input type="password" className="form-control" name="dublPassword" onChange={inputHandler} value={data?.dublPassword || ''} />
          </div>
          <button onChange={inputHandler} disabled={pass} type="submit" className="btn btn-registration">Зарегистрироваться</button>
        </form>
      </section>
    </>
  );
}
