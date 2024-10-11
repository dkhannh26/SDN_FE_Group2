import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Discount from '../pages/Discount';
import DiscountTable from '../components/discount/DiscountTable';
import DiscountModel from '../components/discount/DiscountModel';

export const AdminRoutes = (
    <>
        <Route path='admin' element={<Dashboard />}>
            <Route path='discount' element={<Discount />}>
                <Route index element={<DiscountTable />} />
                <Route path='create' element={<DiscountModel />} />
                <Route path='edit' element={<DiscountModel />} />
            </Route>
        </Route>
    </>
);
