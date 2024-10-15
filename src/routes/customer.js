import React from "react";
import { Outlet, Route } from "react-router-dom";
import Layout from "../components/layout";
import Register from "../pages/Register";
import SuccessRegister from "../pages/SuccessRegister";
export const CustomerRoutes = (
  <>
    <Route path="customer" element={<Layout />}>
      <Route path="register" element={<Register />}></Route>
    </Route>
    <Route
      path="customer/register/:token"
      element={<SuccessRegister />}
    ></Route>
  </>
);
