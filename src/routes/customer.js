import React from 'react';
import { Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import CartList from '../components/cart/CartList';

export const CustomerRoutes = (
    <>
        <Route path='Customer'>
            <Route path='cart' element={<Cart />}>
                <Route index element={<CartList />} />
            </Route>
        </Route>
    </>
);


