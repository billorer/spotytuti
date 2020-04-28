import React, { useContext, useState } from 'react';
import SearchContext from '../../../context/search/searchContext';

import types from './types';
import Tables from './Tables';

import M from 'materialize-css/dist/js/materialize.min.js';

const Search = () => {
  const [text, setText] = useState('');
  const [type, setType] = useState('');
  const [limit, setLimit] = useState(10);

  const searchContext = useContext(SearchContext);

  const { search, items, selectedType } = searchContext;

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '' || type === '') {
      M.toast({ html: 'Please enter the required fields' });
    } else {
      search(text, type, limit);
    }
  };

  return (
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
            className='btn'
            onClick={onSubmit}
          />
        </div>
      </form>
      {items && <Tables selectedType={selectedType} items={items}></Tables>}
    </div>
  );
};

export default Search;
