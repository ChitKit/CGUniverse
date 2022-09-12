import { FILTER_MODELS } from '../types/types';

export const filterModels = (data) => ({ type: FILTER_MODELS, payload: data });

export const filterModels_THUNK = (categ) => (dispatch) => {
  try {
    fetch('http://localhost:3002/api/category')
      .then((res) => res.json())
      .then((res) => {
        dispatch(filterModels(res.filter((el) => (el.name === categ))));
      });
  } catch (error) {
    console.log(error, 'ERROR');
  }
};
