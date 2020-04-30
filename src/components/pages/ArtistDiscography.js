import React, { useContext, useEffect } from 'react';
import ArtistDiscographyContext from '../../context/artistDiscography/artistDiscographyContext';

const ArtistDiscography = props => {
  const artistDiscographyContext = useContext(ArtistDiscographyContext);
  const artistId = props.match.params.artistId;
  console.log('disco context', artistDiscographyContext);

  useEffect(() => {
    artistDiscographyContext.discography(artistId);
  }, []);

  return (
    <div>
      <h3>diszko diszko party</h3>
    </div>
  )
}

export default ArtistDiscography;
