import React from 'react';
import { Route, Switch } from "react-router-dom";
import IndexLayout from './component/IndexLayout.jsx';
import Admin from './component/Admin.jsx';
import Caterers from './component/Caterers.jsx';
import Profile from './component/Profile.jsx';

const App = () => (
  <div className="">
  <Switch>
    <Route exact path="/" component={IndexLayout} />
    <Route path="/admin" component={Admin} />
    <Route exact path="/caterers" component={Caterers} />
    {/* <Route exact path="/profile" component={Profile} /> */}
    </Switch>
  </div>
);
export default App;