import React, { useContext, useEffect } from 'react';
import SearchContext from '../../context/search/searchContext';

const Search = () => {
  const searchContext = useContext(SearchContext);
  useEffect(() => {
    searchContext.search();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='row'>
      <form className='col s12'>
        <div className='input-field'>
          <input id='search' type='text' className='validate' />
          <label for='search'>Search</label>
        </div>
        <input type='submit' value='Search' className='btn' />
      </form>
    </div>
  );
};

export default Search;
