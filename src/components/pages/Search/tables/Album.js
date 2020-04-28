import React from 'react';

const Album = (props) => {
  const { items } = props;
  return (
    <table className='highlight'>
      <thead>
        <tr>
          <th>Album</th>
          <th>Artists</th>
          <th>Release</th>
          <th>Number of tracks</th>
        </tr>
      </thead>
      <tbody>
        {items.map((t) => (
          <tr key={t.id}>
            <td>{t.name}</td>
            <td>{t.artists.map((artist) => `${artist.name}/`)}</td>
            <td>{t.release_date}</td>
            <td>{t.total_tracks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Album;
