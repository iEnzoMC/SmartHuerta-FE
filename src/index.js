import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/main.css";
import App from "./App.jsx";
import { configureAppStore } from "./redux/configureStore";
import { Provider } from "react-redux";

const store = configureAppStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
