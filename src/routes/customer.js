import React from "react";
import { Outlet, Route } from "react-router-dom";
import Layout from "../components/layout";
import User from '../pages/User'

export const CustomerRoutes = (
  <Route path="customer" element={<Layout />}>
    <Route path="user" element={<User/>}></Route>
  </Route>
);
