import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

import Header from '../../components/Header';
import Routes from '../../components/Routes';
import Footer from '../../components/Footer';

import './App.scss';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="app-wrapper">
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  </ApolloProvider>
);

export default App;
