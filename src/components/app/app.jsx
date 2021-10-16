import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Page from '../page/page';

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
