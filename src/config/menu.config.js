import {
    AppstoreOutlined,
    UserOutlined
} from '@ant-design/icons';
import React from 'react';

export const menu = [
    {
        icon: UserOutlined,
        title: 'User',
        key: '/user'
    },
    {
        icon: AppstoreOutlined,
        title: 'Discount',
        key: '/discount'
    },
].map((item, index) => ({
    key: '/admin' + item.key,
    icon: React.createElement(item.icon),
    label: item.title,
}));