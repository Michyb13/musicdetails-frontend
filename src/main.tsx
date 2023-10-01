import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MusicContextProvider from "./context/MusicContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MusicContextProvider>
      <App />
    </MusicContextProvider>
  </React.StrictMode>
);
