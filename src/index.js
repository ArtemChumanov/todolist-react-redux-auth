import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { Provider } from "react-redux";
import todoApp from "./redux/reducers/index";
import thunk from "redux-thunk";
import App from "./App/app";



const store = createStore(
  todoApp,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
