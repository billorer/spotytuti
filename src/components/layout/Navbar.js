import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import SearchContext from '../../context/search/searchContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const searchContext = useContext(SearchContext);
  const { isAuthenticated, logout } = authContext;
  const { clearSearch } = searchContext;

  const onLogout = () => {
    clearSearch();
    logout();
  };

  const authLinks = (
    <Fragment>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/search'>
          <i className='material-icons left'>search</i>Search
        </Link>
      </li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='material-icons left'>exit_to_app</i>
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/'>Login</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </Fragment>
  );

  return (
    <nav>
      <div className='nav-wrapper teal'>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
