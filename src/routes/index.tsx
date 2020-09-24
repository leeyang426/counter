import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from 'pages/Home';
import Demo from 'pages/Demo';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/demo" exact component={Demo} />
      <Route path="*" exact render={() => <Redirect to="/home" />} />
    </Switch>
  );
};

export default Routes;
