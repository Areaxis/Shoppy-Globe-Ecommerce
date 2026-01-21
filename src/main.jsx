// import react
import React from "react";

// import react dom to render app
import ReactDOM from "react-dom/client";

// import main App component
import App from "./App";

// import provider to connect redux to react
import { Provider } from "react-redux";

// import redux store
import { store } from "./utils/store";

// import global css file
import "./index.css";

// render app to root element
ReactDOM.createRoot(document.getElementById("root")).render(
  // wrap app with provider to use redux
  <Provider store={store}>
    <App />
  </Provider>
);