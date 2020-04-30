import { ARTISTDISCOGRAPHY_SUCCESS, ARTISTDISCOGRAPHY_FAIL } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ARTISTDISCOGRAPHY_SUCCESS:
      return {
        ...state,
        discographyData: [...action.payload.items]
      };
    case ARTISTDISCOGRAPHY_FAIL:
      return {
        ...state,
        discographyData: null
      };
    default:
      return state;
  }
};
