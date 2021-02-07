import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import PropTypes from 'prop-types';
import './MasonryItem.scss';

const MasonryItem = ({ data, children: renderItem }) => (
    <ResponsiveMasonry
      columnsCountBreakPoints={{
        374: 1, 375: 2, 768: 3, 1000: 4, 1200: 5,
      }}
    >
      <Masonry gutter={16}>
        {data.map((launch, index) => renderItem(launch, index))}
      </Masonry>
    </ResponsiveMasonry>
);

MasonryItem.propTypes = {
  data: PropTypes.array,
  children: PropTypes.func,
};

export default MasonryItem;
