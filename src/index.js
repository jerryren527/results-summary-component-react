import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="stylesheet" href="style.css" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
      <title>Frontend Mentor | Results summary component</title>
    </Helmet>
    <App />
  </React.StrictMode>
);
