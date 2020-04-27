import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.authorize();
    // eslint-disable-next-line
  }, []);

  return <h1>Home</h1>;
};

export default Home;
