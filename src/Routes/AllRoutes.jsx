import { Heading } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../Pages/Body/Homepage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route
        path="/furniture"
        element={<Heading pt={"150px"}>Furniture page</Heading>}
      ></Route>
      <Route
        path="/rugs"
        element={<Heading pt={"150px"}>Rugs page</Heading>}
      ></Route>
      <Route
        path="/bedding"
        element={<Heading pt={"150px"}>Bedding page</Heading>}
      ></Route>
    </Routes>
  );
};
