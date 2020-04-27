import React, { useContext, useEffect } from 'react';
import SearchContext from '../../context/search/searchContext';

const Search = () => {
  const searchContext = useContext(SearchContext);
  useEffect(() => {
    searchContext.search();
    // eslint-disable-next-line
  }, []);

  return <h1>Search</h1>;
};

export default Search;
