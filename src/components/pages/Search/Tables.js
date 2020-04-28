import React, { Fragment } from 'react';

import Track from './tables/Track';
import Artist from './tables/Artist';
import Album from './tables/Album';

import types from './types';

const Tables = (props) => {
  const { items, selectedType } = props;
  switch (selectedType) {
    case types.track:
      return <Track items={items}></Track>;
    case types.album:
      return <Album items={items}></Album>;
    case types.artist:
      return <Artist items={items}></Artist>;
    default:
      return (
        <Fragment>
          <h5 className='center'>No Search yet</h5>
        </Fragment>
      );
  }
};

export default Tables;
