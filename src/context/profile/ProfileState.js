import React, { useReducer } from 'react';
import axios from 'axios';
import profileReducer from './profileReducer';
import ProfileContext from './profileContext';
import { PROFILE_SUCCESS, PROFILE_FAIL } from '../types';

const ProfileState = (props) => {
  const initialState = {
    profileData: null,
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);

  const profile = async () => {
    try {
      const res = await axios.get('/api/me');
      dispatch({ type: PROFILE_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: PROFILE_FAIL });
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        profileData: state.profileData,
        profile,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
