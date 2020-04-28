import React, { useContext, useState, Fragment } from 'react';
import SearchContext from '../../../context/search/searchContext';

import types from './types';
import Tables from './Tables';

import M from 'materialize-css/dist/js/materialize.min.js';

const Search = () => {
  const [text, setText] = useState('');
  const [type, setType] = useState('');
  const [limit, setLimit] = useState(10);

  const searchContext = useContext(SearchContext);

  const { clearSearch, search, items, selectedType } = searchContext;

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '' || type === '') {
      M.toast({ html: 'Please enter the required fields' });
    } else {
      search(text, type, limit);
    }
  };

  return (
    <Fragment>
      <h2 className='center'>Search</h2>
      <div className='row'>
        <form className='col s12'>
          <div className='input-field'>
            <input
              id='search'
              type='text'
              className='validate'
              placeholder='Search for...'
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <div className='input-field'>
            <select
              className='validate'
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value='' disabled>
                Choose type
              </option>
              <option value={types.track}>Track</option>
              <option value={types.artist}>Artist</option>
              <option value={types.album}>Album</option>
            </select>
          </div>
          <div className='input-field'>
            <input
              id='limit'
              type='number'
              className='validate'
              placeholder='Limit...'
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
            />
          </div>
          <div className='input-field'>
            <input
              type='submit'
              value='Search'
              className='btn right'
              onClick={onSubmit}
            />
            <button className='btn btn-flat right' onClick={clearSearch}>
              Clear search
            </button>
          </div>
        </form>
        {items && <Tables selectedType={selectedType} items={items}></Tables>}
      </div>
    </Fragment>
  );
};

export default Search;
