import React, { useContext, useEffect } from 'react';
import ArtistDetailContext from '../../context/artistDetail/artistDetailContext';

const ArtistDetail = props => {
  const artistDetailContext = useContext(ArtistDetailContext);
  const artistId = props.match.params.artistId;
  const artist = { ...artistDetailContext.artistData };
  console.log(artistId);

  useEffect(() => {
    artistDetailContext.artist(artistId);
    // eslint-disable-next-line
  }, []);

  return (
    <h3>im the artist detail</h3>
  );
};

export default ArtistDetail;
