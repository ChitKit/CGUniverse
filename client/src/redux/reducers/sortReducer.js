import { SORT_MODELS } from '../types/types';

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SORT_MODELS:
      return payload;
    default:
      return state;
  }
};
