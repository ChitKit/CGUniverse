import { CREATE_LIKE, DELETE_LIKE, GET_LIKES } from '../types/types';

export const createLike = (data) => ({ type: CREATE_LIKE, payload: data });
export const deleteLike = (data) => ({ type: DELETE_LIKE, payload: data });
export const getLikes = (data) => ({ type: GET_LIKES, payload: data });


export const deleteLike_THUNK = (id) => (dispatch) => {
  fetch(
    `http://localhost:3002/apilike/like/${id}`,
    {
      method: 'delete',
    },
  ).then((res) => {
    if (res.status === 200) {
      dispatch(deleteLike(id));
    }
  });
};

export const createLike_THUNK = (id) => (dispatch) => {
  fetch(
    `http://localhost:3002/apilike/like/${id}`,
    {
      method: 'POST',
    },
  ).then((res) => {
    if (res.status === 200) {
      dispatch(createLike(id));
    }
  });
};

export const getLike_THUNK = (userId) => (dispatch) => {
  console.log(userId);
  fetch(`http://localhost:3002/apilike/like?user_id=${userId}`)
    .then((res) => res.json())
    .then((res) => {
      console.log('getLike_THUNK', res);
      dispatch(getLikes(res));
    });
};
