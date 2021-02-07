import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloConsumer,
} from '@apollo/client';
import { useLocation, useRouteMatch } from 'react-router-dom';
import Header from '../../components/Header';
import Routes from '../../components/Routes';
import './App.scss';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="appWrapper">
      <Header/>
      <Routes/>
    </div>
  </ApolloProvider>
);

export default App;
