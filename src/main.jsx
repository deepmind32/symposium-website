import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./stylesheets/index.css";
import "./stylesheets/utilities.css";
import "./stylesheets/scrollbar.css";
import "./stylesheets/components.css";

import App from "./app.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
