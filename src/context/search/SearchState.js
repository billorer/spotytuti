import React, { useReducer } from 'react';
import axios from 'axios';
import searchReducer from './searchReducer';
import SearchContext from './searchContext';
import { SEARCH_SUCCESS, SEARCH_FAIL } from '../types';

const SearchState = (props) => {
  const initialState = {
    items: null,
  };

  const [state, dispatch] = useReducer(searchReducer, initialState);

  const search = async (text, type, limit = 10) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.get(
        `/api/search?q=${text}&type=${type}&limit=${limit}`,
        {},
        config
      );
      console.log(res);
      console.log(res.data[`${type}s`].items);
      console.log(res.data[`${type}s`].items[0].name);
      dispatch({ type: SEARCH_SUCCESS, payload: res.data[`${type}s`].items });
    } catch (error) {
      dispatch({ type: SEARCH_FAIL });
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
