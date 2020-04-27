import React, { Component } from 'react';
import './App.css';
export const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = '54fad05207f743d2b90e188ac639e837';
const redirectUri = 'http://localhost:3000/redirect';
const scopes = ['user-read-currently-playing', 'user-read-playback-state'];

// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split('&')
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = '';

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
    };
  }
  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token,
      });
      console.log(_token);
    }
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          {!this.state.token && (
            <a
              className='btn btn--loginApp-link'
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                '%20'
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
          {this.state.token && <h1>Got the token!</h1>}
        </header>
      </div>
    );
  }
}

export default App;
