/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux/actions/authActions';

export default function EditBiography({ auth, setModalActive }) {
  const [inputsUpdate, setInputsUpdate] = useState(auth.bio || '');

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/bioEdit', {
      credentials: 'include',
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputsUpdate),
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setAuth(data));
      setModalActive(false);
    }
  };
  const changeHandler = (e) => {
    setInputsUpdate((prev) => ({
      ...prev,
      bio: e.target.value,
    }));
  };
  useEffect(() => {
    setInputsUpdate(auth);
  }, []);
  console.log(inputsUpdate.bio);
  return (
    <form onSubmit={submitHandler}>
      <div className="divMainPage">
        <div>
          <div className="row">
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Обо мне: </h4>
                </div>
                <div className="col-md-12">
                  <label className="labels">
                    Введите текст:
                    <textarea
                      onChange={changeHandler}
                      name="bio"
                      type="textarea"
                      className="form-control"
                      placeholder="Введите текст..."
                      value={inputsUpdate.bio || ''}
                    />
                  </label>
                </div>
                <div className="mt-5 text-center">
                  <button className="btn btn-primary profile-button" type="submit">Сохранить изменения</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
