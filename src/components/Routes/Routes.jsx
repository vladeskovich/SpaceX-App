import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LaunchList from '../LaunchList';
import LaunchDetail from '../LaunchDetail';
import NotFound from '../NotFound';

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
    component: LaunchDetail,
  },
  {
    component: NotFound,
  },
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

export default Routes;
