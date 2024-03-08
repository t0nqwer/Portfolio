import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import CanvasLoader from "./components/Loader";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
