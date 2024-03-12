import React from "react";
import Feeds from "./Feeds";
import Post1 from "./Post1";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function App21() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Feeds</Link> | <Link to="/post">Post</Link>
        <Routes>
            <Route path="/post" element={<Post1/>}></Route>
            <Route path="/" index element={<Feeds/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}