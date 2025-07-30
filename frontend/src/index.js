import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { AuthProvider } from "./context/AuthContext";
import { IdeaProvider } from "./context/IdeaContext";
import { ThemeProvider } from "./context/ThemeContext";

import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/responsive.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthProvider>
      <IdeaProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </IdeaProvider>
    </AuthProvider>
  </BrowserRouter>
);
