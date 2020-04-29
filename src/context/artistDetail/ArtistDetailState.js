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

  const artist = async (artistId) => {
    try {
      const res = await axios.get(`/api/artists/${artistId}`);
      dispatch({ type: ARTISTDETAIL_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: ARTISTDETAIL_FAIL });
    }
  };

  return (
    <ArtistDetailContext.Provider
      value={{
        artistData: state.artistData,
        artist,
      }}
    >
      {props.children}
    </ArtistDetailContext.Provider>
  );
};

export default ArtistDetailState;
