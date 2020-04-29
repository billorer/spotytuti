import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import config from '../../config.json';

const Authenticate = (props) => {
  const authContext = useContext(AuthContext);
  const { access_token, isAuthenticated, setAccessToken } = authContext;
  useEffect(() => {
    if (
      window.location.href.includes('code=') &&
      !isAuthenticated &&
      !access_token
    ) {
      const code = window.location.href.split('code=')[1];
      setAccessToken(code);
    }

    if (isAuthenticated) {
      props.history.push('/');
    }
  }, [setAccessToken, isAuthenticated, props.history]);

  const getspotifytoken = () => {
    authContext.authorize();
  };

  return (
    <div className='container valign-wrapper' style={{ height: '800px' }}>
      <div className='row valign'>
        <h2 className='center'>Welcome</h2>
        <h5 className='center grey-text'>Please follow the rules</h5>
        <div className='center'>
          {access_token ? (
            <button className='btn center' onClick={getspotifytoken}>
              Login to Spotify
            </button>
          ) : (
            <a
              className='btn center'
              href={`https://accounts.spotify.com/authorize?client_id=${
                config.clientId
              }&redirect_uri=${config.redirectUri}&scope=${config.scopes.join(
                '%20'
              )}&response_type=code&show_dialog=true`}
            >
              Authorize at Spotify
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Authenticate;
