import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Track from './tables/Track';
import Artist from './tables/Artist';
import Album from './tables/Album';

import types from './types';

const Tables = ({ items, selectedType, pageLimit, offset }) => {
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

Tables.propTypes = {
  items: PropTypes.array.isRequired,
  selectedType: PropTypes.string.isRequired,
  pageLimit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
};

export default Tables;
