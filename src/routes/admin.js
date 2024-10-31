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
import TshirtAdmin from '../pages/product-admin/TshirtAdmin';
import TshirtTable from '../components/tshirt/TshirtTable';
import TshirtModel from '../components/tshirt/TshirtModel';
import PantTable from '../components/pant/PantTable';
import PantModel from '../components/pant/PantModel';
import AccessoryAdmin from '../pages/product-admin/AccessoryAdmin';
import AccessoryTable from '../components/accessory/AccessoryTable';
import AccessoryModel from '../components/accessory/AccessoryModel';
import ShoesAdmin from '../pages/product-admin/ShoesAdmin';
import ShoesTable from '../components/shoes/ShoesTable';
import ShoesModel from '../components/shoes/ShoesModel';
import PantShirtSizeTable from '../components/size/PantShirtSizeTable';
import PantShirtSizeModel from '../components/size/PantShirtSizeModel';
import ShoesSizeTable from '../components/size/ShoesSizeTable';
import ShoesSizeModel from '../components/size/ShoesSizeModel';
import Statistic from '../pages/Statistic';

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
            <Route path='tshirt' element={<TshirtAdmin />}>
                <Route index element={<TshirtTable />} />
                <Route path='create' element={<TshirtModel type='create' />} />
                <Route path='edit/:id' element={<TshirtModel type='edit' />} />
            </Route>
            <Route path='pant' element={<TshirtAdmin />}>
                <Route index element={<PantTable />} />
                <Route path='create' element={<PantModel type='create' />} />
                <Route path='edit/:id' element={<PantModel type='edit' />} />
            </Route>
            <Route path='shoes' element={<ShoesAdmin />}>
                <Route index element={<ShoesTable />} />
                <Route path='create' element={<ShoesModel type='create' />} />
                <Route path='edit/:id' element={<ShoesModel type='edit' />} />
            </Route>
            <Route path='accessory' element={<AccessoryAdmin />}>
                <Route index element={<AccessoryTable />} />
                <Route path='create' element={<AccessoryModel type='create' />} />
                <Route path='edit/:id' element={<AccessoryModel type='edit' />} />
            </Route>
            <Route path='pantTshirtSize' element={<Size />}>
                <Route index element={<PantShirtSizeTable />} />
                <Route path='create' element={<PantShirtSizeModel type='create' />} />
                <Route path='edit/:id' element={<PantShirtSizeModel type='edit' />} />
            </Route>
            <Route path='shoesSize' element={<Size />}>
                <Route index element={<ShoesSizeTable />} />
                <Route path='create' element={<ShoesSizeModel type='create' />} />
                <Route path='edit/:id' element={<ShoesSizeModel type='edit' />} />
            </Route>
            <Route path='statistic' element={<Statistic />}></Route>
        </Route>
    </>
);
