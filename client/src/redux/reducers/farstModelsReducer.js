import {
  GET_FMODELS,
} from '../types/types';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_FMODELS:
      return payload;

    default:
      return state;
  }
};
