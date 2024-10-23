import React from "react";
import { Route } from "react-router-dom";
import Layout from "../components/layout";
import Register from "../pages/Register";
import SuccessRegister from "../pages/SuccessRegister";
import User from "../pages/User";
import ResetPassword from "../pages/ResetPassword";
import PantsCustomer from "../pages/product-customer/pant/PantsCustomer";
import PantDetail from "../pages/product-customer/pant/PantDetail";
import ShoesCustomer from "../pages/product-customer/shoes/ShoesCustomer";
import ShoesDetail from "../pages/product-customer/shoes/ShoesDetail";
import AccessoryCustomer from "../pages/product-customer/accessory/AccessoryCustomer";
import AccessoryDetail from "../pages/product-customer/accessory/AccessoryDetail";
import TshirtCustomer from "../pages/product-customer/tshirt/TshirtCustomer";
import TshirtDetail from "../pages/product-customer/tshirt/TshirtDetail";
export const CustomerRoutes = (
  <>
    <Route path="customer" element={<Layout />}>
      <Route path="profile" element={<User />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="pant/:id" element={<PantDetail />} />
      <Route path="pant" element={<PantsCustomer />} />
      <Route path="shoes/:id" element={<ShoesDetail />} />
      <Route path="shoes" element={<ShoesCustomer />} />
      <Route path="accessory/:id" element={<AccessoryDetail />} />
      <Route path="accessory" element={<AccessoryCustomer />} />
      <Route path="tshirt/:id" element={<TshirtDetail />} />
      <Route path="tshirt" element={<TshirtCustomer />} />
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
