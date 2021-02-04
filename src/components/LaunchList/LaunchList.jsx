import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LAUNCHES } from './queries';

const LaunchList = (props) => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  console.log(data);
  return (
    <h1>Hello</h1>
  );
};

export default LaunchList;
