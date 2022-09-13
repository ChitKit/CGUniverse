import { GET_MODEL } from '../types/types';

export default (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MODEL:
      return payload;

    default:
      return state;
  }
};




