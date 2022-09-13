import { SEARCH_MODELS } from '../types/types';

export const searchModels = (data) => ({ type: SEARCH_MODELS, payload: data });

export const searchModels_THUNK = (text) => (dispatch) => {
  try {
    fetch('http://localhost:3002/api/like/models')
      .then((res) => res.json())
      .then((res) => {
        setTimeout(() => dispatch(searchModels(res.filter(
          (el) => el.name.toLowerCase().includes(text.toLowerCase()),
        ))), 300);
        // dispatch(searchModels(text));
        console.log(text);
      });
  } catch (error) {
    console.log(error, 'ERROR');
  }
};
