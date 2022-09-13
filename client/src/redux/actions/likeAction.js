import { CREATE_LIKE, DELETE_LIKE, GET_LIKES } from '../types/types';
import { getModels_THUNK } from './modelAction';

export const createLike = (data) => ({ type: CREATE_LIKE, payload: data });
export const deleteLike = (data) => ({ type: DELETE_LIKE, payload: data });
export const getLikes = (data) => ({ type: GET_LIKES, payload: data });

export const getLike_THUNK = (userId) => (dispatch) => {
  fetch(
    `http://localhost:3002/apilike/like?userId=${userId}`,
    { credentials: 'include' },

  )
    .then((res) => res.json())
    .then((res) => {
      dispatch(getLikes(res));
    });
};

export const createLike_THUNK = (id) => (dispatch) => {
  fetch(
    `http://localhost:3002/apilike/like/${id}`,
    {
      method: 'POST',
      credentials: 'include',
    },
  ).then((res) => res.json())
    .then((res) => {
      dispatch(createLike(res));
    })
    .then((res) => {
      dispatch(getModels_THUNK());
    })
    .then((res) => {
      dispatch(getLike_THUNK());
    });
};

// dispatch(getModels_THUNK());
// dispatch(getLike_THUNK());
export const deleteLike_THUNK = (id) => (dispatch) => {
  fetch(
    `http://localhost:3002/apilike/like/${id}`,
    {
      method: 'delete',
      credentials: 'include',
    },
  ).then((res) => {
    if (res.status === 200) {
      dispatch(deleteLike(id));
    }
  })
    .then(() => {
      dispatch(getModels_THUNK());
    })
    .then(() => {
      dispatch(getLike_THUNK());
    });
};
