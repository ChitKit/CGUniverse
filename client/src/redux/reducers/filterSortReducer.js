import {
  FILTER_MODELS,
} from '../types/types';

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FILTER_MODELS:
      return payload;

    default:
      return state;
  }
};
