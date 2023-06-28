import React from "react";
import ReactDOM from "react-dom/client";
import "./style/styleGlobal.css";
//import components
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Menu } from "./components/Menu/Menu";
import { Post } from "./components/Post/Post";

import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route
          path="/" // como fosse condição
          element={<Home />} //renderizar  component
        />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
