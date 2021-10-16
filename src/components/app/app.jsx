import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Page />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

export default App;
