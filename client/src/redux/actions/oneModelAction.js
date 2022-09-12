import { GET_MODEL } from '../types/types';

export const getModel = (data) => ({ type: GET_MODEL, payload: data });

export const getModel_THUNK = (modelId) => (dispatch) => {
  fetch(`http://localhost:3002/api/models/${modelId || 0}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(getModel(res));
    });
};
