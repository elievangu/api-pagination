//npm import
import React from 'react';
import ReactDOM from 'react-dom';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';

//local import
import App from './Components/App';
import rootReducer from './Reducers/index';
import './index.css';

let store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    logger
  )
)

const ApiCall = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}



ReactDOM.render(<ApiCall />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
