import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<p>about page works</p>} />
      <Route path="blog" element={<p>blog page works</p>} />
      <Route path="contactus" element={<p>contact page works</p>} />
    </Routes>
  );
};
