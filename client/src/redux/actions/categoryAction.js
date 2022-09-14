import { GET_CATEGORY } from '../types/types';

export const getCategory = (data) => ({ type: GET_CATEGORY, payload: data });

export const getCategory_THUNK = (text) => (dispatch) => {
  fetch('http://localhost:3002/api/category')
    .then((res) => res.json())
    .then((res) => dispatch(getCategory(res.filter((el) => (el.name === text)))));
};
