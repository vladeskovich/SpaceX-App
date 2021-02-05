import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { useLocation, useRouteMatch } from 'react-router-dom';
import LaunchList from '../../components/LaunchList/LaunchList';
import styles from './App.scss';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <LaunchList/>
  </ApolloProvider>
);

export default App;
