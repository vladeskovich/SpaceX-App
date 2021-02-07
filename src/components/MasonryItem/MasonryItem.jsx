import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import './MasonryItem.scss';

const MasonryItem = ({ data, children }) => (
    <ResponsiveMasonry
      columnsCountBreakPoints={{
        350: 1, 768: 3, 1000: 4, 1200: 5,
      }}
    >
      <Masonry gutter={16}>
        {data.map((launch, index) => children(launch, index))}
      </Masonry>
    </ResponsiveMasonry>
);

export default MasonryItem;
