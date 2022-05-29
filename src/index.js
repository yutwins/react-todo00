import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
console.log("test");

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
