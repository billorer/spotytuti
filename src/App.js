import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';
import AuthState from './context/auth/AuthState';
import SearchState from './context/search/SearchState';

import PrivateRoute from './components/PrivateRoute';
import Home from './components/pages/Home';
import Authenticate from './components/pages/Authenticate';
import About from './components/pages/About';
import Search from './components/pages/Search';
import Profile from './components/pages/Profile';

import setAuthToken from './utils/setAuthToken';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Navbar from './components/layout/Navbar';
import ProfileState from './context/profile/ProfileState';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <AuthState>
      <SearchState>
        <Router>
          <Fragment>
            <Navbar></Navbar>
            <div className='container'>
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <Route exact path='/authenticate' component={Authenticate} />
                <Route exact path='/about' component={About} />
                <PrivateRoute exact path='/search' component={Search} />
                <ProfileState>
                  <Route exact path='/profile' component={Profile} />
                </ProfileState>
                <Redirect to='/' />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </SearchState>
    </AuthState>
  );
};

export default App;
