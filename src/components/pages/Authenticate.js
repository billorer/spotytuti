import React, { Fragment, useContext, useEffect } from 'react';
import config from '../../config.json';
import AuthContext from '../../context/auth/authContext';

const Authenticate = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
  }, [isAuthenticated, props.history]);
  return (
    <Fragment>
      <a
        className='btn btn--loginApp-link'
        href={`https://accounts.spotify.com/authorize?client_id=${
          config.clientId
        }&redirect_uri=${config.redirectUri}&scope=${config.scopes.join(
          '%20'
        )}&response_type=token&show_dialog=true`}
      >
        Login to Spotify
      </a>
    </Fragment>
  );
};

export default Authenticate;
