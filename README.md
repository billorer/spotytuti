# SpotyTuti

### Using Spotify

SpotyTuti is a small project for react starters.

## Installation

- You have to create a user at spotify and connect to [spotify developer](https://developer.spotify.com/dashboard/login)
- You have to create a little project after logging in at the site mentioned above
- You have to create a config.json in the projects /src folder with the following format

```
  {
    "clientId": "YOUR_CLIENT_ID",
    "clientSecret": "YOUR_CLIENT_SECRET",
    "redirectUri": "URL EX." => "http://localhost:3000/",
    "scopes": "SCOPES AIMED AT THE TOKEN REQUEST EX." => ["user-read-currently-playing", "user-read-playback-state"]
  }
```

- DON'T forget to run npm install
