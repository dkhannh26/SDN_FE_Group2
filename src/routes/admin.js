import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Discount from '../pages/Discount';
import Voucher from '../pages/Discount';
import Size from '../pages/Size';
import DiscountTable from '../components/discount/DiscountTable';
import DiscountModel from '../components/discount/DiscountModel';
import VoucherTable from '../components/voucher/VoucherTable';
import VoucherModel from '../components/voucher/VoucherModel';
import SizeTable from '../components/size/SizeTable';
import SizeModel from '../components/size/SizeModel';

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
            <Route path='size' element={<Size />}>
                <Route index element={<SizeTable />} />
                <Route path='create' element={<SizeModel type='create' />} />
                <Route path='edit/:id' element={<SizeModel type='edit' />} />
            </Route>
        </Route>
    </>
);
