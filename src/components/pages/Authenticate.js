import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Authenticate = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
  }, [isAuthenticated, props.history]);

  const getspotifytoken = () => {
    authContext.authorize();
  };

  return (
    <Fragment>
      <button onClick={getspotifytoken}>Login to Spotify</button>
    </Fragment>
  );
};

export default Authenticate;
