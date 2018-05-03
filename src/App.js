import React from 'react';
import { Route, Switch } from "react-router-dom";
import IndexLayout from './component/IndexLayout.jsx';

const App = () => (
  <div className="">
  <Switch>
    <Route exact path="/" component={IndexLayout} />
    </Switch>
  </div>
);
export default App;