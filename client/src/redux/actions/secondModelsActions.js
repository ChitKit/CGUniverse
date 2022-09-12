import {
  GET_SMODELS,
} from '../types/types';

export const getSModels = (data) => ({ type: GET_SMODELS, payload: data });


export const getSModels_THUNK = () => (dispatch) => {
  fetch('http://localhost:3002/api/models/second/10')
    .then((res) => res.json())
    .then((res) => {
      dispatch(getSModels(res));
    });
};


