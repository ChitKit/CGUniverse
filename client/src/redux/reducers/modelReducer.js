import {
  CREATE_MODEL,
  DELETE_MODEL,
  GET_MODELS,
  EDIT_MODEL,
  FILTER_MODELS,
} from '../types/types';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_MODEL:
      return [...state, payload];

    case DELETE_MODEL:
      return state.filter((model) => model.id !== payload);

    case EDIT_MODEL:
      return [...state, payload];

    case GET_MODELS:
      return payload;

    case FILTER_MODELS:
      return payload;

    default:
      return state;
  }
};
