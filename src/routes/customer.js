import React from "react";
import { Outlet, Route } from "react-router-dom";
import Layout from "../components/layout";
import Product from '../pages/Product';
import Home from "../pages/Home";

export const CustomerRoutes = (
  <Route path="customer" element={<Layout />}>
    <Route path="product" element={<Product />}></Route>
    <Route path="" element={<Home />}></Route>
  </Route>
);
