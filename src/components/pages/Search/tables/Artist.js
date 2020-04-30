import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Artist = ({ items }) => {
  return (
    <table className='highlight'>
      <thead>
        <tr>
          <th>Artist</th>
          <th>Genres</th>
          <th>Popularity</th>
          <th>Followers</th>
        </tr>
      </thead>
      <tbody>
        {items.map((t) => (
          <tr key={t.id}>
            <td>
              <Link to={`/artist/${t.id}`}>{t.name}</Link>
            </td>
            <td>{t.genres}</td>
            <td>{t.popularity}</td>
            <td>{t.followers.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Artist.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Artist;
