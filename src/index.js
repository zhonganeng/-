import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers";
//引入PersistGate标签，和persistor
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor } from "./store";

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
