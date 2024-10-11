import React  from 'react';
import { Col, Row, Badge, Popover, Empty, Menu } from "antd";
import '../assets/css/header.css'
import Logo from '../assets/images/logo.webp'
import { DownOutlined, UserOutlined, ShoppingOutlined, SearchOutlined } from '@ant-design/icons';

const Header = () => {
    const loginPopover = (
        <div className='login-pop'>
            <div className='login-pop-title'>
                <p className='login-pop-title__1'>Đăng nhập tài khoản</p>
                <p className='login-pop-title__2 text'>Nhập email và mật khẩu của bạn:</p>
            </div>
            <div className='login-pop-input'>
                <input required />
                <label className='text'>Email</label>
            </div>
            <div className='login-pop-input'>
                <input required />
                <label className='text'>Password</label>
            </div>
            <div className='login-pop-recaptcha'>
                This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer"> Privacy Policy </a>
                and <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer"> Terms of Service </a>apply.
            </div>
            <button className='login-pop-btn'>
                <span>ĐĂNG NHẬP</span>
            </button>
            <div className='login-pop-navigate text'>
                <p>Khách hàng mới?
                    <a href="/"> Tạo tài khoản</a>
                </p>
                <p>Quên mật khẩu?
                    <a href="/"> Khôi phục mật khẩu</a>
                </p>
            </div>
        </div>
    );

    const cartPopover = (
        <div className='cart-pop'>
            <div className='card-pop-title text'>
                <p>GIỎ HÀNG</p>
            </div>
            <Empty image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg01rpxlqIYNzFCaI-E5pwTAji-IFfa9P2Eg&s' description='Hiện chưa có sản phẩm' />
            <div className='flex-space-between'>
                <p className='text'>TỔNG TIỀN:</p>
                <p style={{ color: "red", fontWeight: "600", fontSize: 16 }}>0đ</p>
            </div>
            <div className='flex-space-between cart-pop-navigate'>
                <button className='login-pop-btn'>
                    <span>XEM GIỎ HÀNG</span>
                </button>
                <button className='login-pop-btn'>
                    <span>THANH TOÁN</span>
                </button>
            </div>
        </div>
    );

    const items = [
        {
            label: 'HOME',
            key: 'HOME'
        },
        {
            label: 'T-SHIRT',
            key: 'T-SHIRT'
        },
        {
            label: 'PANTS',
            key: 'PANTS'
        },
        {
            label: 'SHOES',
            key: 'SHOES'
        },
        {
            label: 'ACCESSORIES',
            key: 'ACCESSORIES'
        },

        {
            label: 'ABOUT',
            key: 'ABOUT',
        },
        {
            label: 'EXCHANGE POLICY',
            key: 'EXCHANGE POLICY',
        },
        {
            label: 'SALE',
            key: 'SALE',
        },
    ];
    return (
        <div className='header'>
            <Row className='top-bar'>
                <p className='container'>Miễn phí vận chuyển với đơn hàng trên 500K. Hàng pre-order còn được giảm thêm 5%.</p>
            </Row>
            <Row className='container header-middle flex-center'>
                <Col span={4}>
                    <img src={Logo} alt='logo' className='logo' />
                </Col>
                <Col span={9} className='flex-center'>
                    <input name="search" placeholder='Tìm kiếm sản phẩm...' className='search-input' />
                    <div className='search-btn'>
                        <SearchOutlined />
                    </div>
                </Col>
                <Col span={8} className='login-cart flex-center'>
                    <Popover content={loginPopover} trigger="click" className='login-box flex-center '>
                        <div className='user-icon'>
                            <UserOutlined className='icon' />
                        </div>
                        <div className='login'>
                            <p style={{ color: '#333333' }}>Đăng nhập / Đăng ký</p>
                            <p style={{ fontWeight: 500 }}>Tài khoản của tôi <DownOutlined /></p>
                        </div>
                    </Popover>
                    <Popover placement="bottomRight" content={cartPopover} trigger="click" className='cart flex-center'>
                        <Badge count={0} showZero style={{ backgroundColor: "#333333" }}>
                            <ShoppingOutlined className='icon' />
                        </Badge>
                        <p style={{ marginLeft: 10 }}>Giỏ hàng</p>
                    </Popover>
                </Col>
            </Row>
            <Row className='container header-menu'>
                <Menu mode="horizontal" items={items} />
            </Row>
        </div>
    );
};

export default Header;