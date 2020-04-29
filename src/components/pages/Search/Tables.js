import React, { Fragment } from 'react';

import Track from './tables/Track';
import Artist from './tables/Artist';
import Album from './tables/Album';

import types from './types';

const Tables = (props) => {
  const { items, selectedType, pageLimit, offset } = props;

  const filteredItems = items.filter(
    (item, index) => index >= offset && index < offset + pageLimit
  );

  switch (selectedType) {
    case types.track:
      return <Track items={filteredItems}></Track>;
    case types.album:
      return <Album items={filteredItems}></Album>;
    case types.artist:
      return <Artist items={filteredItems}></Artist>;
    default:
      return (
        <Fragment>
          <h5 className='center'>No Search yet</h5>
        </Fragment>
      );
  }
};

export default Tables;
