import { Heading } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../Pages/Body/Homepage";
import Product_page_new from "../Pages/Product_page/product_index";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route
        path="/furniture"
        element={<Product_page_new/>}
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
