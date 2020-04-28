import React, { Fragment } from 'react';
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

import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <SearchState>
        <Router>
          <Fragment>
            <div className='container'>
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <Route exact path='/authenticate' component={Authenticate} />
                <Route exact path='/about' component={About} />
                <PrivateRoute exact path='/search' component={Search} />
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
