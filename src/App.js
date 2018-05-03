import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div className="">
  <Switch>
    <Route exact path="/" component={IndexLayout} />
    <Route component={NoMatch}/>
    </Switch>
  </div>
);
export default App;