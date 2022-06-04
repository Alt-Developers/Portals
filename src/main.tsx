import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./sass/main.css";
import { Provider } from "react-redux";
import { store } from "./context/store";
import SimpleModal from "./lib/SimpleModal/SimpleModal";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SimpleModal>
          <App />
        </SimpleModal>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
