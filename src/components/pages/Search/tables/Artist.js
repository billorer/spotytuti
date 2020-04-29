import React from 'react';
import { Link } from 'react-router-dom';

const Artist = (props) => {
  const { items } = props;
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
            <td><Link to={`/artist/${t.id}`}>{t.name}</Link></td>
            <td>{t.genres}</td>
            <td>{t.popularity}</td>
            <td>{t.followers.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Artist;
