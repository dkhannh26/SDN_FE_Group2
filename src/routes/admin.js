import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Discount from '../pages/Discount';
import Voucher from '../pages/Discount';
import DiscountTable from '../components/discount/DiscountTable';
import DiscountModel from '../components/discount/DiscountModel';
import VoucherTable from '../components/voucher/VoucherTable';
import VoucherModel from '../components/voucher/VoucherModel';

export const AdminRoutes = (
    <>
        <Route path='admin' element={<Dashboard />}>
            <Route path='discount' element={<Discount />}>
                <Route index element={<DiscountTable />} />
                <Route path='create' element={<DiscountModel type='create' />} />
                <Route path='edit/:id' element={<DiscountModel type='edit' />} />
            </Route>
            <Route path='voucher' element={<Voucher />}>
                <Route index element={<VoucherTable />} />
                <Route path='create' element={<VoucherModel type='create' />} />
                <Route path='edit/:id' element={<VoucherModel type='edit' />} />
            </Route>
        </Route>
    </>
);
