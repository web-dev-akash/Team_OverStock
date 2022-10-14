import { Heading } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../Pages/Body/Homepage";
import Product_page_new from "../Pages/Product_page/product_index";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/furniture" element={<Product_page_new />}></Route>
      <Route path="/rugs" element={<Product_page_new />}></Route>
      <Route path="/decor" element={<Product_page_new />}></Route>
      <Route path="/bedding" element={<Product_page_new />}></Route>
      <Route path="/home_improvement" element={<Product_page_new />}></Route>
      <Route path="/kitchen" element={<Product_page_new />}></Route>
      <Route path="/outdoor" element={<Product_page_new />}></Route>
      <Route path="/lighting" element={<Product_page_new />}></Route>
      <Route path="/kids_baby" element={<Product_page_new />}></Route>
      <Route path="/more" element={<Product_page_new />}></Route>
    </Routes>
  );
};
