import React, { useReducer } from 'react';
import axios from 'axios';
import artistDiscographyReducer from './artistDiscographyReducer';
import ArtistDiscographyContext from './artistDiscographyContext';
import { ARTISTDISCOGRAPHY_SUCCESS, ARTISTDISCOGRAPHY_FAIL } from '../types';

const ArtistDiscographyState = props => {
  const initialState = {
    discographyData: null
  };
  console.log('hebawebaewb')

  const [state, dispatch] = useReducer(artistDiscographyReducer, initialState);

  const discography = async artistId => {
    try {
      const res = await axios.get(`/api/artists/${artistId}/albums`);
      dispatch({ type: ARTISTDISCOGRAPHY_SUCCESS, payload: res.data });
      console.log(res.data)
    } catch (error) {
      dispatch({ type: ARTISTDISCOGRAPHY_FAIL });
    }
  };

  return (
    <ArtistDiscographyContext.Provider
      value={{
        discographyData: state.discographyData,
        discography
      }}
    >
      {props.children}
    </ArtistDiscographyContext.Provider>
  );
};

export default ArtistDiscographyState;
