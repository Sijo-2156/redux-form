import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer as formReducer } from "redux-form";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
//import ReduxForm from "./ReduxForm";
import FieldArraysForm from "./FieldArraysForm";
//import App from "./App";

const rootReducer = combineReducers({
  form: formReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <FieldArraysForm />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
