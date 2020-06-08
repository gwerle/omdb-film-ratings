import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './GlobalStyles';

import { createStore } from 'redux';
import favoriteMoviesReducer from './store/reducer';

import { composeWithDevTools } from 'redux-devtools-extension';

export function configureStore () {
  return createStore(
    favoriteMoviesReducer,
    composeWithDevTools());
}

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
