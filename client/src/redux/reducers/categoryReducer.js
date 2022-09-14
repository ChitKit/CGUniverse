
import { GET_CATEGORY } from '../types/types';

export default (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORY:
      return payload;
    default:
      return state;
  }
};

