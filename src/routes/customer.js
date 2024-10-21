import React from 'react';
import { Route } from 'react-router-dom';
import Payment from '../pages/Payment';
import PaymentModel from '../components/payment/PaymentModel';
import Cart from '../pages/Cart';
import CartList from '../components/cart/CartList';

export const CustomerRoutes = (
    <>
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


