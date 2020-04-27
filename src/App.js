import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';
import AuthState from './context/auth/AuthState';

import PrivateRoute from './components/PrivateRoute';
import Home from './components/pages/Home';
import Authenticate from './components/pages/Authenticate';
// import About from './components/pages/About';

import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <Router>
        <Fragment>
          <div className='container'>
            <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/authenticate' component={Authenticate} />
              <Redirect to='/' />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </AuthState>
  );
};

export default App;
