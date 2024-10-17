import React from 'react';
import { Outlet, Route } from 'react-router-dom';
import Layout from '../components/layout';
import About from '../pages/About';
import ExchangePolicy from '../pages/ExchangePolicy';
import Contact from '../pages/Contact';

export const CustomerRoutes = (
    <Route path='customer' element={<Layout />}>
        <Route path='about' element={<About />}></Route>
        <Route path='exchange-policy' element={<ExchangePolicy />}></Route>
        <Route path='contact' element={<Contact />}></Route>
    </Route>
);


