import React from 'react';
import { Outlet, Route } from 'react-router-dom';
import Layout from '../components/layout';
import Register from '../pages/Register';

export const CustomerRoutes = (
    <Route path='customer' element={<Layout />}>
        <Route path='register' element={<Register/>}>

        </Route>
    </Route>
);


