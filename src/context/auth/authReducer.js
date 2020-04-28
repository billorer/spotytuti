import { AUTHORIZE_FAIL, AUTHORIZE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case AUTHORIZE:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    case AUTHORIZE_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
