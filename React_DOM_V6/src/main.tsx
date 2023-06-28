import React from "react";
import ReactDOM from "react-dom/client";
import "./style/styleGlobal.css";
//import components
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Menu } from "./components/Menu/Menu";
import { Posts } from "./components/Posts/Posts";
import { Post } from "./components/Post/Post";
import { Redirect } from "./components/Redirect/Redirect";
import { NotFound } from "./components/NotFound/NotFound";

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
        <Route path="/posts" element={<Posts />}>
          {/* Rota alinhada */}
          <Route path=":id" element={<Post />} />
        </Route>
        <Route path="/posts" element={<Posts />} />
        * <Route path="/posts/:id" element={<Posts />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
