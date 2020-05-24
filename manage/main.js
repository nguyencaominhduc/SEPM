import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//write the first reducer:
function products(state = [], action) {
  if (action.type == 'FETCH_PRODUCTS') return action.payload;
  else if (action.type == 'ADD_PRODUCT')
    return [].concat(state, action.payload);
  else if (action.type == 'DELETE_PRODUCT') {
    return state.filter(s => s._id != action.payload);
  }
  else return state;
}

function product(state = [],action) {
  if (action.type == 'EDIT_PRODUCT') return action.payload;
  else return state;
}
//reducers
function authenticate(state = { loggedin: false }, action) {
  if (action.type == 'AUTHENTICATED')
    return { loggedin: true, access_token: action.payload };
  else if (action.type == 'LOGOUT') return { loggedin: false };
  return state;
}

var centralState = combineReducers({
  products,
  product,
  authenticate
});

var store = createStore(
  centralState,
  composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
