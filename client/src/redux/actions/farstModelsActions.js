import {
  GET_FMODELS,
} from '../types/types';

export const getFModels = (data) => ({ type: GET_FMODELS, payload: data });


export const getFModels_THUNK = () => (dispatch) => {
  fetch('http://localhost:3002/api/models/farst/10')
    .then((res) => res.json())
    .then((res) => {
      dispatch(getFModels(res));
    });
};

