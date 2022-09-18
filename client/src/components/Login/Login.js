/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux/actions/authActions';
import './Login.css';

export default function Login({ setModalActive }) {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3002/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(inputs),
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setAuth(data));
      setModalActive(false);
    }
  };

  return (
    <>
      <div>
        <h1 className="form-title">
          Логин
        </h1>
      </div>
      <section className="form-section form-section-log">
        <form className="form-log" method="post" onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="email" className="block mar-b-1">Email</label>
            <input name="email" onChange={changeHandler} value={inputs.email} type="email" className="block w-100 no-outline no-border pad-1 mar-b-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="block mar-b-1">Password</label>
            <input name="password" onChange={changeHandler} value={inputs.password} type="password" className="block w-100 no-outline no-border pad-1 mar-b-2" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-registration btn-color">Войти</button>
        </form>
      </section>
    </>
  );
}
