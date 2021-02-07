import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LAUNCHES } from './queries';
import MasonryItem from '../MasonryItem';
import ListItem from '../ListItem';
import './LaunchList.scss';

const LaunchList = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  return <div className="list-launch">
    {!loading && (
      <MasonryItem data={data.launchesPast}>
        {(launch, key) => <ListItem {...launch} key={key}/>}
      </MasonryItem>
    )
    }
  </div>;
};

export default LaunchList;
