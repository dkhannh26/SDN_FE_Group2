import React from "react";
import { Route } from "react-router-dom";
import Layout from "../components/layout";
import Register from "../pages/Register";
import SuccessRegister from "../pages/SuccessRegister";
import User from "../pages/User";
import ResetPassword from "../pages/ResetPassword";
import PantsCustomer from "../pages/product-customer/PantsCustomer";
import PantDeital from "../pages/product-customer/PantDetail";
export const CustomerRoutes = (
  <>
    <Route path="customer" element={<Layout />}>
      <Route path="profile" element={<User />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="pant/:id" element={<PantDeital />} />
      <Route path="pant" element={<PantsCustomer />} />
    </Route>
    <Route
      path="customer/register/:token"
      element={<SuccessRegister />}
    ></Route>

    <Route
      path="customer/update/:id/:token"
      element={<SuccessRegister />}
    ></Route>

    <Route
      path="customer/reset-password/:token"
      element={<ResetPassword />}
    ></Route>
  </>
);
