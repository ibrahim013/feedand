import React from "react"; 
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import './style/main.scss';

import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));



ReactDOM.render(
   <Provider store={store}> 
       <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
 ,
  document.getElementById("app"),
);