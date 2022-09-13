/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function EditProgile({ auth, setModalActive }) {
  const [inputsUpdate, setInputsUpdate] = useState(auth);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('effect');
    setInputsUpdate(auth);
  }, []);

  const changeHandler = (e) => {
    console.log(e.target, e.target.name);
    setInputsUpdate((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const respone = await fetch('/api/changeUser', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputsUpdate),
    });
    if (respone.ok) {
      const data = await respone.json();
      //   setAuthState(data);
      setModalActive(false);
    }
  };
  return (

    <form onSubmit={submitHandler}>
      <div className="divMainPage">
        <div>
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /></div>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Настройки профиля</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12">
                    <label className="labels">Имя</label>
                    <input onChange={changeHandler} name="name" type="text" className="form-control" placeholder="first name" value={inputsUpdate.name} />
                  </div>
                  {/* <div className="col-md-6">
                  <label className="labels">Фамилия</label>
                  <input type="text" className="form-control" value="" placeholder="surname" />
                </div> */}
                </div>
                <div className="col-md-12">
                  <label className="labels">Email</label>
                  <input onChange={changeHandler} name="email" type="email" className="form-control" placeholder="enter email id" value={inputsUpdate.email || ''} />
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">АВАТАРКА!!</label>
                    {/* <input onChange={changeHandler} name="phone" type="text" className="form-control" placeholder="enter phone number" value={inputsUpdate.phone || ''} /> */}
                  </div>
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit">Сохранить изменения</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
