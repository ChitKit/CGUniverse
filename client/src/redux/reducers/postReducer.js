/* eslint-disable default-param-last */
import {
  GET_POSTS,
  DELETE_POST,
  CREATE_POST,
} from '../types/types';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_POST:
      return [...state, payload];

    case GET_POSTS:
      return payload;

    case DELETE_POST:
      return state.filter((post) => post.id !== payload);
      //   case CREATE_POST:
      //     return [...state, payload];

      //   case DELETE_POST:
      //     return state.filter((post) => post.id !== payload);

    default:
      return state;
  }
};
