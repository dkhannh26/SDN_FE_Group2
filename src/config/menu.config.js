import {
    AreaChartOutlined,
    CodepenOutlined,
    CompressOutlined,
    DollarOutlined,
    FileDoneOutlined,
    ProductOutlined,
    TagOutlined,
    UsergroupDeleteOutlined,
    UserOutlined,
} from '@ant-design/icons';
import React from 'react';

export const menu = [
    {
        icon: UserOutlined,
        title: 'My Profile',
        key: '/profile'
    },
    {
        icon: UsergroupDeleteOutlined,
        title: 'Account',
        key: '/account'
    },
    {
        icon: TagOutlined,
        title: 'Discount',
        key: '/discount'
    },
    {
        icon: DollarOutlined,
        title: 'Voucher',
        key: '/voucher'
    },
    {
        icon: AreaChartOutlined,
        title: 'Statistic',
        key: '/statistic'
    },
    {
        icon: CodepenOutlined,
        title: 'Import',
        key: '/import'
    },
    {
        icon: ProductOutlined,
        title: 'Product',
        children: [
            {
                key: 'tshirt',
                label: 'T-shirt',
            },
            {
                key: 'pant',
                label: 'Pant',
            },
            {
                key: 'shoes',
                label: 'Shoes',
            },
            {
                key: 'accessory',
                label: 'Accessory',
            },
        ],
    },
    {
        icon: CompressOutlined,
        title: 'Size',
        key: '/size'
    },
    {
        icon: FileDoneOutlined,
        title: 'Order',
        key: '/order'
    },

].map((item, index) => ({
    key: '/admin' + item.key,
    icon: React.createElement(item.icon),
    label: item.title,
    children: item.children
}));