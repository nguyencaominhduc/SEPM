import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

function products(state = [], action) {
  if (action.type == 'FETCH_PRODUCTS') return action.payload;
  else if (action.type == 'ADD_PPRODUCT')
    return [].concat(state, action.payload);
  else if (action.type == 'DELETE_PRODUCT') {
    return state.filter(s => s.id != action.payload);
  } else return state;
}

var centralState = combineReducers({
  products
});

var store = createStore(
  centralState,
  composeWithDevTools(applyMiddleware(thunk))
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
