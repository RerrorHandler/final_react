import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bulma/css/bulma.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary"
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
    <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
