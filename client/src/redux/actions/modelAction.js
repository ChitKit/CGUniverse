import {
  CREATE_MODEL, DELETE_MODEL, EDIT_MODEL, FILTER_MODELS, GET_MODELS,
} from '../types/types';

export const createModel = (data) => ({ type: CREATE_MODEL, payload: data });
export const deleteModel = (data) => ({ type: DELETE_MODEL, payload: data });
export const editModel = (data) => ({ type: EDIT_MODEL, payload: data });
export const getModels = (data) => ({ type: GET_MODELS, payload: data });
export const filterModels = (data) => ({ type: FILTER_MODELS, payload: data });

export const deleteModel_THUNK = (id) => (dispatch) => {
  fetch(
    `http://localhost:3002/model/${id}`,
    {
      method: 'delete',
    },
  ).then((res) => {
    if (res.status === 200) {
      dispatch(deleteModel(id));
    }
  });
};

export const editModel_THUNK = (modelId) => (dispatch) => {
  fetch(`http://localhost:3002/model?modelId=${modelId || 0}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(editModel(res));
    });
};

export const getModels_THUNK = (userId) => (dispatch) => {
  fetch(`http://localhost:3002/api/models?userid=${userId || 0}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(getModels(res));
    });
};

export const filterModels_THUNK = (categ) => (dispatch) => {
  fetch('http://localhost:3002/api/models')
    .then((res) => res.json())
    .then((res) => dispatch(filterModels()));
};

