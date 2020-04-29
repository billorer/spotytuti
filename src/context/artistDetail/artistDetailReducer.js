import { ARTISTDETAIL_SUCCESS, ARTISTDETAIL_FAIL } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ARTISTDETAIL_SUCCESS:
      return {
        ...state,
        artistData: action.payload
      };
    case ARTISTDETAIL_FAIL:
      return {
        ...state,
        artistData: null
      };
    default:
      return state;
  }
};
