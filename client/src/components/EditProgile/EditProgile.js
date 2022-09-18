/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux/actions/authActions';
import './EditProfile.css';

export default function EditProgile({ auth, setModalActive }) {
  const [inputsUpdate, setInputsUpdate] = useState(auth);

  const dispatch = useDispatch();

  useEffect(() => {
    setInputsUpdate(auth);
  }, []);

  const changeHandler = (e) => {
    setInputsUpdate((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const respone = await fetch('/auth/profileEdit', {
      credentials: 'include',
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputsUpdate),
    });
    if (respone.ok) {
      const data = await respone.json();
      dispatch(setAuth(data));
      setModalActive(false);
    }
  };
  return (
    <div className="uploader">
      <form onSubmit={submitHandler}>
        <div className="divMainPage">
          <div>
            <div className="row">
              <div className="col-md-3 border-right">
                <div className="br d-flex flex-column align-items-center text-center p-3 py-5">
                  {
          (auth?.avatar)
            ? <img className="rounded-circle mt-5" width="150px" src={`http://localhost:3002/${auth?.avatar}`} alt="пустое фото" />
            : <img className="rounded-circle mt-5" width="150px" src="profile-photo.jpeg" alt="пустое фото" />
          }
                </div>
              </div>
              <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Настройки профиля</h4>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12">
                      <label className="labels">Имя</label>
                      <input onChange={changeHandler} name="name" type="text" className="form-control input-edit" placeholder="first name" value={inputsUpdate.name} />
                    </div>
                    {/* <div className="col-md-6">
                  <label className="labels">Фамилия</label>
                  <input type="text" className="form-control" value="" placeholder="surname" />
                </div> */}
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Email</label>
                    <input onChange={changeHandler} name="email" type="email" className="form-control input-edit" placeholder="enter email id" value={inputsUpdate.email || ''} />
                  </div>
                  <div className="mt-5 text-center"><button className="btn btn-pad btn-color btn-size" type="submit">Сохранить изменения</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
