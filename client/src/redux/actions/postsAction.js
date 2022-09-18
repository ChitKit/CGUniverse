import { GET_POSTS, DELETE_POST, CREATE_POST } from '../types/types';

export const getPosts = (data) => ({ type: GET_POSTS, payload: data });
export const deletePost = (data) => ({ type: DELETE_POST, payload: data });
export const createPost = (data) => ({ type: CREATE_POST, payload: data });

export const getPosts_THUNK = () => (dispatch) => {
  fetch('http://localhost:3002/api/posts')
    .then((res) => res.json())
    .then((res) => {
      dispatch(getPosts(res));
    });
};

export const deletePost_THUNK = (id) => (dispatch) => {
  fetch(
    `http://localhost:3002/api/posts/${id}`,
    // http://localhost:3002/api/posts/${el.id}
    {
      method: 'delete',
    },
  ).then((res) => {
    if (res.status === 200) {
      dispatch(deletePost(id));
    }
  });
};

export const createPost_THUNK = (e) => (dispatch) => {
  fetch(
    'http://localhost:3002/api/posts',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(e),
    },
  )
    .then((res) => res.json())
    .then((res) => {
      dispatch(createPost(res));
    });
};
