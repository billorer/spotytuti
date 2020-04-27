import React, { useReducer } from 'react';
import axios from 'axios';
import searchReducer from './searchReducer';
import SearchContext from './searchContext';
import { SEARCH_SUCCESS } from '../types';

const SearchState = (props) => {
  const initialState = {
    items: null,
  };

  const [state, dispatch] = useReducer(searchReducer, initialState);

  const search = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.get(
        'https://api.spotify.com/v1/search?Muse&type=track',
        {},
        config
      );
      console.log(res);
      // dispatch({ type: SEARCH_SUCCESS, payload: res.data });
    } catch (error) {
      // dispatch({ type: AUTH_ERROR });
    }
  };

  return (
    <SearchContext.Provider
      value={{
        items: state.items,
        search,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchState;
