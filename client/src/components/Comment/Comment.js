import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/authActions';
import { createComment_THUNK, getComment_THUNK } from '../../redux/actions/commentAction';
import { getModel, getModel_THUNK } from '../../redux/actions/oneModelAction';

export default function Comment({ modelId }) {
  const [data, setData] = useState({ text: '' });
  const model = useSelector((state) => state.onemodel);
  const comment = useSelector((state) => state.comment);

  const dispatch = useDispatch();

  useEffect(() => {
    if (model) {
      dispatch(getComment_THUNK(model.id));
      console.log(model, 'MODEL');
    }
  }, [model]);

  const inputHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // console.log(comment, 'COMMENT');

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(createComment_THUNK(data, model.id));
  };


  // console.log(model, 'MODEL');
  return (
    <div>
      <div>
        <button type="button">
          Скачать
        </button>
      </div>
      <div>
        <h2>Comments</h2>
        <div>
          <form onSubmit={submitHandler}>
            <input type="text" name="text" onChange={inputHandler} value={data?.text} placeholder="Оставь комментарий" />
          </form>
        </div>
        <div>
          {comment?.map((el) => (
            <div>
              <p>{el?.User?.name}</p>
              <p>
                {el?.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div />
    </div>
  );
}
