import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArtistDetailContext from '../../context/artistDetail/artistDetailContext';

const ArtistDetail = props => {
  const artistDetailContext = useContext(ArtistDetailContext);
  const artistId = props.match.params.artistId;
  const artist = { ...artistDetailContext.artistData };

  useEffect(() => {
    artistDetailContext.artist(artistId);
    // eslint-disable-next-line
  }, []);

  return (
    artistDetailContext.artistData && (
      <div className="row valign-wrapper">
        <div className="col s3">
          <img src={artist.images[0] && artist.images[0].url} alt={artist.name} className="circle responsive-img" />
        </div>
        <div className="col s9">
          <h1>{artist.name}</h1>
          <p>genres: {artist.genres}</p>
          <p>followers: {artist.followers.total}</p>
          <p>popularity: {artist.popularity}</p>
          <p>
            <a href={artist.uri}>more about {artist.name}&nbsp;</a>
          </p>
          <div>
            <Link to={`/artist/${artistId}/discography`} className="btn waves-effect waves-light">diszko</Link>
          </div>
        </div>
      </div>
    )
  );
};

export default ArtistDetail;
