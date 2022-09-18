import { SEARCH_MODELS } from '../types/types';


export const searchModels = (data) => ({ type: SEARCH_MODELS, payload: data });

export const searchModels_THUNK = (text) => (dispatch) => {
  try {
    fetch('http://localhost:3002/api/modelForSearch')
      .then((res) => res.json())
      .then((res) => {
        dispatch(searchModels(res.filter(
          (el) => el.name.toLowerCase()
            .includes(text.toLowerCase()),
        )));
      });
  } catch (error) {
    console.log(error, 'ERROR');
  }
};
