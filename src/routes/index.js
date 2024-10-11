import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App';
import { AdminRoutes } from './admin';
import { CustomerRoutes } from './customer';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            {AdminRoutes}
            {CustomerRoutes}
        </Route>
    )
);


export default router;
