import { ALL_CATEGORY, FILTER_MODELS } from '../types/types';

export const filterModels = (data) => ({ type: FILTER_MODELS, payload: data });
export const filterAllModels = (data) => ({ type: FILTER_MODELS, payload: data });
export const allCategory = (data) => ({ type: ALL_CATEGORY, payload: data });


export const filterModels_THUNK = (categ) => (dispatch) => {
  try {
    fetch('http://localhost:3002/api/category', { credentials: 'include' })
      .then((res) => res.json())
      .then((res) => {
        dispatch(filterModels(res.filter((el) => (el.name === categ))));
      });
  } catch (error) {
    console.log(error, 'ERROR');
  }
};

export const filterAllModels_THUNK = () => (dispatch) => {
  try {
    fetch('http://localhost:3002/api/category/allModels')
      .then((res) => res.json())
      .then((res) => {
        dispatch(filterAllModels(res));
      });
  } catch (error) {
    console.log(error, 'ERROR');
  }
};

export const allCategory_THUNK = () => (dispatch) => {
  try {
    fetch('http://localhost:3002/api/category')
      .then((res) => res.json())
      .then((res) => dispatch(allCategory(res)));
  } catch (error) {
    console.log(error, 'ERROR');
  }
};
