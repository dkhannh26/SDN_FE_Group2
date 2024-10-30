import React from "react";
import { Route } from "react-router-dom";
import Layout from "../components/layout";
import Register from "../pages/Register";
import SuccessRegister from "../pages/SuccessRegister";
import User from "../pages/User";
import ResetPassword from "../pages/ResetPassword";
import Payment from '../pages/Payment';
import PaymentModel from '../components/payment/PaymentModel';
import Cart from '../pages/Cart';
import CartList from '../components/cart/CartList';
import OrderCustomer from '../components/order/OrderCustomer';

export const CustomerRoutes = (
  <>
    <Route path="customer" element={<Layout />}>
      <Route path="profile" element={<User />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="order" element={<OrderCustomer />}></Route>
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
    <Route path='customer'>
      <Route path='cart' element={<Cart />}>
        <Route index element={<CartList />} />
      </Route>
      <Route path='payment' element={<Payment />}>
        <Route index element={<PaymentModel />} />
      </Route>
    </Route>
  </>
);
