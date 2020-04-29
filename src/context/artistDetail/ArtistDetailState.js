import React, { useReducer } from 'react';
import axios from 'axios';
import artistDetailReducer from './artistDetailReducer';
import ArtistDetailContext from './artistDetailContext';
import { ARTISTDETAIL_SUCCESS, ARTISTDETAIL_FAIL } from '../types';

const ArtistDetailState = (props) => {
  const initialState = {
    artistData: null,
  };

  const [state, dispatch] = useReducer(artistDetailReducer, initialState);
  console.log(props);

  const artist = async (artistId) => {
    try {
      const res = await axios.get(`/api/artists/${artistId}`);
      dispatch({ type: ARTISTDETAIL_SUCCESS, payload: res.data });
      console.log(res);
    } catch (error) {
      dispatch({ type: ARTISTDETAIL_FAIL });
    }
  };

  return (
    <ArtistDetailContext.Provider
      value={{
        artistData: state.profileData,
        artist,
      }}
    >
      {props.children}
    </ArtistDetailContext.Provider>
  );
};

export default ArtistDetailState;
