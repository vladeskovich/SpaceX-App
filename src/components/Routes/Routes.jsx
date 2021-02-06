import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import LaunchList from "../LaunchList";
import Header from "../Header";
import './Routes.scss';

const routes = [
  {
    path: '/',
    exact: true,
    component: LaunchList,
  },
  {
    path: '/launch/:launchId',
    exact: true,
    component: Header,
  },
  /*{
    component: NotFound,
  },*/
];

const Routes = (props) => (
  <Switch>
    {routes.map(({ component: Component, ...route }, index) => (
      <Route
        key={index}
        {...route}
        render={() => <Component {...props}/>}
      />
    ))}
  </Switch>
);

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
