import React, { useContext, useEffect } from 'react';
import ArtistDetailContext from '../../context/artistDetail/artistDetailContext';

const ArtistDetail = props => {
  const artistDetailContext = useContext(ArtistDetailContext);
  const artistId = props.match.params.artistId;
  const artist = { ...artistDetailContext.artistData };
  console.log(artistId);
  console.log('artistdetail context', artistDetailContext);

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
          <a href={artist.uri}>more about {artist.name}&nbsp;</a>
        </div>
      </div>
    )
  );
};

export default ArtistDetail;
