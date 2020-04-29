import React, { useContext, useState, Fragment } from 'react';
import SearchContext from '../../../context/search/searchContext';

import types from './types';
import Tables from './Tables';

import M from 'materialize-css/dist/js/materialize.min.js';

const Search = () => {
  const [text, setText] = useState('');
  const [type, setType] = useState('');
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const searchContext = useContext(SearchContext);

  const { clearSearch, search, items, selectedType } = searchContext;

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '' || type === '' || limit > 50 || limit <= 0) {
      M.toast({ html: 'Please enter the required fields' });
    } else {
      setCurrentPage(1);
      setOffset(0);
      search(text, type, limit, offset);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setOffset(offset - pageLimit);
    }
  };

  const nextPage = () => {
    if (currentPage < getMaxPageLimit()) {
      setCurrentPage(currentPage + 1);
      setOffset(offset + pageLimit);
    }
  };

  const getMaxPageLimit = () => {
    return Math.ceil(items.length / pageLimit);
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
            <label>Select type</label>
          </div>
          <div className='input-field'>
            <input
              id='limit'
              type='number'
              className='validate'
              placeholder='Limit...'
              value={limit}
              min='1'
              max='50'
              onChange={(e) => setLimit(e.target.value)}
            />
            <label htmlFor='limit'>Select item limit (max 50)</label>
          </div>
          <div className='input-field'>
            <select
              className='validate'
              value={pageLimit}
              onChange={(e) => setPageLimit(e.target.value)}
              required
            >
              <option value='' disabled>
                Select page limit
              </option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
            </select>
            <label>Select page limit</label>
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
        {items && (
          <Fragment>
            <div className='row'>
              <Tables
                selectedType={selectedType}
                items={items}
                pageLimit={pageLimit}
                offset={offset}
              ></Tables>
            </div>
            <div className='row valign-wrapper'>
              <button className='btn left col s3 valign' onClick={previousPage}>
                <i className='material-icons'>chevron_left</i>
              </button>
              <div className='center col s6 valign'>
                {currentPage} / {getMaxPageLimit()}
              </div>
              <button className='btn right col s3 valign' onClick={nextPage}>
                <i className='material-icons'>chevron_right</i>
              </button>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Search;
