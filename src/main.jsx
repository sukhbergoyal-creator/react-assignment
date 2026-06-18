import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./context/UsersContext";
import "./i18n";

import "./index.css";
import App from "./App";
import AuthProvider from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <UsersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </UsersProvider>
    </AuthProvider>
  </StrictMode>
);
