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
      <div>
        {artist.name && <p>artist name: {artist.name}</p>}
      </div>
      
    )
  );
};

export default ArtistDetail;
