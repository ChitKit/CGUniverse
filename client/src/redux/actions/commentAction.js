import { CREATE_COMMENT, DELETE_COMMENT, GET_COMMENTS } from '../types/types';

export const createComment = (data) => ({ type: CREATE_COMMENT, payload: data });
export const deleteComment = (data) => ({ type: DELETE_COMMENT, payload: data });
export const getComments = (data) => ({ type: GET_COMMENTS, payload: data });


export const deleteComment_THUNK = (id) => (dispatch) => {
  fetch(
    `http://localhost:3002/api/comment/${id}`,
    {
      method: 'delete',
    },
  ).then((res) => {
    if (res.status === 200) {
      dispatch(deleteComment(id));
    }
  });
};

export const getComment_THUNK = (modelId) => (dispatch) => {
  console.log(modelId, 'getComment_THUNK');
  fetch(`http://localhost:3002/api/comment/?modelId=${modelId}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(getComments(res));
    });
};

export const createComment_THUNK = (obj, id) => (dispatch) => {
  fetch(
    `http://localhost:3002/api/comment/${id}`,
    {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(obj),
    },
  )
    .then((res) => res.json())
    .then((res) => {
      dispatch(createComment(res));
    });
};
