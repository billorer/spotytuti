import { SEARCH_SUCCESS, SEARCH_FAIL } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        items: [action.payload.items],
      };
    case SEARCH_FAIL:
      return {
        ...state,
        items: null,
      };
    default:
      return state;
  }
};
