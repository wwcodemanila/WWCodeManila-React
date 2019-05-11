import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/styles/global.scss";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import productsReducer from "./Products/reducers/productsReducer";
import userReducer from "./Products/reducers/userReducer";

const allreducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

const store = createStore(
  allreducers,
  {
    products: [
      {
        name: "Iphone",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ],
    user: "guest"
  }
  // window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
