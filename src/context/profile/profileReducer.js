import { PROFILE_SUCCESS, PROFILE_FAIL } from '../types';

export default (state, action) => {
  switch (action.type) {
    case PROFILE_SUCCESS:
      return {
        ...state,
        profileData: action.payload
      };
    case PROFILE_FAIL:
      return {
        ...state,
        profileData: null
      };
    default:
      return state;
  }
};
