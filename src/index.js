import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore({
  items: { items: {}, sumBonus: 0, sumPoints: 0 }
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
