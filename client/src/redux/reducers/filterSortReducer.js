import {
  ALL_CATEGORY,
  FILTER_ALL_MODELS,
  FILTER_MODELS,
} from '../types/types';

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FILTER_MODELS:
      return payload;
    case FILTER_ALL_MODELS:
      return payload;
    case ALL_CATEGORY:
      return payload;
    default:
      return state;
  }
};
