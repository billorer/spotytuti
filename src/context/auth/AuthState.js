import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { AUTHORIZE, AUTHORIZE_FAIL } from '../types';
import hash from '../../utils/hash';
import setAuthToken from '../../utils/setAuthToken';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const authorize = () => {
    const token = hash.access_token;

    if (token !== null && token !== undefined && token !== '') {
      setAuthToken(localStorage.token);
      dispatch({
        type: AUTHORIZE,
        payload: token,
      });
    } else {
      dispatch({
        type: AUTHORIZE_FAIL,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        authorize,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
