import React from 'react';
import '../assets/css/profile.css'
import { Col, Row } from 'antd';

const User = () => {
    return (
        <div className='container profile'>
            <h1 className='profile-title'>My Profile</h1>
            <Row className='profile-content'>
                <Col span={6} className='profile-item'>
                    <b>Account</b>
                    <p>Account information</p>
                </Col>
                <Col span={18} className='profile-item'> 
                <b>Account information</b>
                <p>user name</p>
                <p>Email</p>
                <p>sđt</p>
                <p>address</p>

                </Col>
            </Row>
        </div>
    );
};

export default User;