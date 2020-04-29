import { AUTHORIZE_FAIL, AUTHORIZE, LOGOUT, ACCESS_TOKEN } from '../types';

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
      localStorage.removeItem('access_token');
      return {
        ...state,
        token: null,
        access_token: null,
        isAuthenticated: false,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('access_token');
      return {
        ...state,
        token: null,
        access_token: null,
        isAuthenticated: false,
      };
    case ACCESS_TOKEN:
      localStorage.setItem('access_token', action.payload);
      return {
        ...state,
        access_token: action.payload,
      };
    default:
      return state;
  }
};
