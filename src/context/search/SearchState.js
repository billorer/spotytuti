import React, { useReducer } from 'react';
import axios from 'axios';
import searchReducer from './searchReducer';
import SearchContext from './searchContext';
import { SEARCH_SUCCESS, SEARCH_FAIL, CLEAR_SEARCH } from '../types';

const SearchState = (props) => {
  const initialState = {
    items: null,
    selectedType: '',
  };

  const [state, dispatch] = useReducer(searchReducer, initialState);

  const search = async (text, type, limit = 10, offset = 0) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.get(
        `/api/search?q=${text}&type=${type}&limit=${limit}&offset=${0}`,
        {},
        config
      );
      dispatch({
        type: SEARCH_SUCCESS,
        payload: { items: res.data[`${type}s`].items, type },
      });
    } catch (error) {
      dispatch({ type: SEARCH_FAIL });
    }
  };

  const clearSearch = () => {
    dispatch({
      type: CLEAR_SEARCH,
    });
  };

  return (
    <SearchContext.Provider
      value={{
        items: state.items,
        selectedType: state.selectedType,
        search,
        clearSearch,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchState;
