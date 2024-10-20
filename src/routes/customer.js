import React from 'react';
import { Route } from 'react-router-dom';
import Payment from '../pages/Payment';
import PaymentModel from '../components/payment/PaymentModel';

export const CustomerRoutes = (
    <>
        <Route path='customer'>
            <Route path='payment' element={<Payment />}>
                <Route index element={<PaymentModel />} />
            </Route>
        </Route>
    </>
);


