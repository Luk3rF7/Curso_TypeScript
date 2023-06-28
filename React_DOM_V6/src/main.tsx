import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home";
import "./style/styleGlobal.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
