import React from 'react';

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
            <td>{t.name}</td>
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
