import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import { Footer } from 'antd/es/layout/layout';

const Layout = () => {
    return (
        <>

            <Header/>
            <Outlet></Outlet>
            <Footer/>
        </>
    );
};

export default Layout;