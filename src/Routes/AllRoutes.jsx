import React from "react";
import { Routes, Route } from "react-router-dom";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>TODO APP</h1>}></Route>
    </Routes>
  );
};
