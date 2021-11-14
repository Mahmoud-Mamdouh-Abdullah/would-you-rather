import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
import middlewares from './middlewares';


const store = createStore(reducers, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);