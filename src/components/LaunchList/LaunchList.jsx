import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LAUNCHES } from './queries';
import styles from './LaunchList.scss';

const LaunchList = (props) => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  console.log(data);
  return null;
};

export default LaunchList;
