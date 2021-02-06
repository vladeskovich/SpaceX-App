import React from 'react';
import { useQuery } from '@apollo/client';
import MagicGrid from 'magic-grid-react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { GET_LAUNCHES } from './queries';
import ListItem from '../ListItem';
import './LaunchList.scss';

const LaunchList = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  console.log(loading, data);

  return <div className="list-launch">
    {!loading && (
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          350: 1, 768: 3, 1000: 4, 1200: 5,
        }}
      >
        <Masonry gutter={16}>
          {data.launchesPast.map((launch, index) => (
            <ListItem
              key={index}
              {...launch}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    )
    }
  </div>;
};

export default LaunchList;

/*
(
  <MagicGrid gutter={16}
             useMin={1200}
  >
    {data.launchesPast.map((launch) => (
      <ListItem {...launch}/>
    ))}
  </MagicGrid>
) */
