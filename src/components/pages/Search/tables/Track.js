import React from 'react';
import PropTypes from 'prop-types';

const Track = ({ items }) => {
  return (
    <table className='highlight'>
      <thead>
        <tr>
          <th>Album</th>
          <th>Track</th>
          <th>Artists</th>
          <th>Popularity</th>
          <th>Number of discs</th>
        </tr>
      </thead>
      <tbody>
        {items.map((t) => (
          <tr key={t.id}>
            <td>{t.album.name}</td>
            <td>{t.name}</td>
            <td>{t.artists.map((artist) => `${artist.name}/`)}</td>
            <td>{t.popularity}</td>
            <td>{t.disc_number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Track.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Track;
