import React, { useState } from 'react';
import { Button, Col, DatePicker, Form, Input, Radio, Row } from "antd";
import '../assets/css/register.css';
import { ArrowLeftOutlined } from '@ant-design/icons';

const Register = () => {

    const [componentVariant, setComponentVariant] = useState('filled');

    return (
        <Row className='container flex-center'>
            <Col span={12} className='register-item'>
                <h1 className='register-title'>Register</h1>
            </Col>
            <Col span={12} className='register-item'>
                <Form
                    variant={componentVariant}
                    rules={[
                        {
                            required: true,
                            message: 'Please fill out this field.',
                        },
                    ]}>
                    <Form.Item>
                        <Input placeholder='First name' className='register-input' />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder='Last name' className='register-input' />
                    </Form.Item>
                    <Form.Item>
                        <Radio.Group >
                            <Radio value="Female">Female</Radio>
                            <Radio value="Male">Male</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                        <DatePicker placeholder='Select birthday' className='register-input' />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder='Email' className='register-input' />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder='Password' className='register-input' />
                    </Form.Item>
                </Form>
                <div className='login-pop-recaptcha' style={{ fontSize: 14 }}>
                    This site is protected by reCAPTCHA and the Google
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer"> Privacy Policy </a>
                    and <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer"> Terms of Service </a>apply.
                </div>
                <Row>
                    <button className='login-pop-btn' style={{ width: 120, height: 55, marginTop: 20 }}>
                        <span>SIGN UP</span>
                    </button>
                </Row>
                <Button style={{ marginTop: 15, color: "black", padding: 0 }} type="link" >
                    <ArrowLeftOutlined />
                    Back to Home
                </Button>
            </Col>
        </Row>
    );
};

export default Register;