import React, { useContext, useEffect } from 'react';
import ArtistDiscographyContext from '../../context/artistDiscography/artistDiscographyContext';

const ArtistDiscography = props => {
  const artistDiscographyContext = useContext(ArtistDiscographyContext);
  const artistId = props.match.params.artistId;

  useEffect(() => {
    artistDiscographyContext.discography(artistId);
  }, []);

  return (
    artistDiscographyContext.discographyData && (
      <div>
        <h3>Discography</h3>
        <div className="row">
          {artistDiscographyContext.discographyData.map(album => (
            <div key={album.id} className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src={album.images[0].url} />
                  <span className="card-title">{album.name}</span>
                </div>
                <div className="card-content">
                  <p>Release date: {album.release_date}</p>
                </div>
                <div className="card-action">
                  <a href={album.uri}>Check out the album</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default ArtistDiscography;
