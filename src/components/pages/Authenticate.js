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
    <div className='container valign-wrapper' style={{ height: '800px' }}>
      <div className='row valign'>
        <h2 className='center'>Welcome</h2>
        <h5 className='center grey-text'>Please follow the rules</h5>
        <div className='center'>
          <button className='btn center' onClick={getspotifytoken}>
            Login to Spotify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authenticate;
