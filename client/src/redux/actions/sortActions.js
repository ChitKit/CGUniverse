import { SORT_MODELS } from '../types/types';

export const sortModels = (data) => ({ type: SORT_MODELS, payload: data });

export const sortModels_THUNK = (typeSorting) => (dispatch) => {
  fetch('http://localhost:3002/api/models')
    .then((res) => res.json())
    .then((res) => {
      switch (typeSorting) {
        case 'По дате добавления':
          return dispatch(sortModels(res.sort((a, b) => (a - b))));
        case 'По популярности':
          return dispatch(sortModels(res.sort((a, b) => (a - b))));
        case 'По стоимости':
          return dispatch(sortModels(res.sort((a, b) => (a - b))));
        default:
          return dispatch(sortModels(res));
      }
    });
};
