import React from "react";
import { Routes, Route } from "react-router-dom";
import Pagination from "../components/hooks/Pagination";
// import { TodoList } from "../components/hooks/TodoList";
import Home from "../components/pages/Home";
import Todo from "../components/pages/Todo";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/pagination" element={<Pagination />} />
      <Route path="about" element={<p>about page works</p>} />
      <Route path="blog" element={<p>blog page works</p>} />
      <Route path="contactus" element={<p>contact page works</p>} />
    </Routes>
  );
};
