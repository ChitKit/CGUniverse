import {
  GET_SMODELS,
} from '../types/types';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SMODELS:
      return payload;

    default:
      return state;
  }
};

