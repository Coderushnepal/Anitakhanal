import React from "react";
import thunk from "redux-thunk";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import "./public";
import App from "./components/App";
import fetechBeers from "./reducers/beer";

const store = createStore(
    fetechBeers,
   (applyMiddleware(thunk))
  );


ReactDOM.render(
    <React.StrictMode>
        <Provider store = {store}>
        <App />
        </Provider>
    </React.StrictMode> ,
    document.getElementById("root")
);