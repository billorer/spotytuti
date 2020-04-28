import { SEARCH_SUCCESS, SEARCH_FAIL } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        selectedType: action.payload.type,
      };
    case SEARCH_FAIL:
      return {
        ...state,
        items: null,
        selectedType: '',
      };
    default:
      return state;
  }
};
