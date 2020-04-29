import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { AUTHORIZE, AUTHORIZE_FAIL, LOGOUT, ACCESS_TOKEN } from '../types';
import setAuthToken from '../../utils/setAuthToken';
import axios from 'axios';
import config from '../../config.json';
import qs from 'qs';

const AuthState = (props) => {
  const token = localStorage.getItem('token');
  const access_token = localStorage.getItem('access_token');
  const initialState = {
    token,
    access_token,
    isAuthenticated: token ? true : null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  const setAccessToken = (token) => {
    dispatch({
      type: ACCESS_TOKEN,
      payload: token,
    });
  };

  const authorize = async () => {
    const headers = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: config.clientId,
        password: config.clientSecret,
      },
    };
    const data = {
      grant_type: 'authorization_code',
      redirect_uri: config.redirectUri,
      code: localStorage.getItem('access_token'),
      scope: config.scopes.join(' '),
    };

    try {
      const response = await axios.post(
        'https://accounts.spotify.com/api/token',
        qs.stringify(data),
        headers
      );
      const token = response.data.access_token;
      setAuthToken(token);
      dispatch({ type: AUTHORIZE, payload: token });
    } catch (error) {
      dispatch({ type: AUTHORIZE_FAIL });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        access_token: state.access_token,
        authorize,
        setAccessToken,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
