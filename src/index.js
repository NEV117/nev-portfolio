import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LanguageContextProvider from "./hooks/LanguageContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <App />
    </LanguageContextProvider>
  </React.StrictMode>
);
