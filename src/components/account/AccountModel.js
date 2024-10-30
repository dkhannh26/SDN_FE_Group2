import { Button, Col, Form, Input, Row, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { layout } from '../../config/style.config';
import { createDiscount, editDiscount, getDiscount } from '../../services/discount.service';
import { getListAccount } from '../../services/account.service';

const AccountModel = ({ type }) => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const { id } = useParams();

    const onFinish = (values) => {
        const discount = {
            percent: values.percent,

        }

        if (type === 'create') {
            createDiscount(discount, navigate)
        } else {
            editDiscount(id, discount, navigate)
        }
    };

    useEffect(() => {
        if (type === 'edit') getAccount(id, form)
    }, [id, type, form])

    return (
        <>
            <Row>
                <Title level={3}>
                    {type === 'create' ? 'New Staff' : 'Edit Staff'}
                </Title>
            </Row>
            <Row >
                <Col offset={4} span={12}>
                    <Form
                        name="basic"
                        {...layout}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Phone"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your address!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>


                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Space>
                                <Button type="primary" htmlType="submit" >
                                    {type === 'create' ? 'Insert' : 'Edit'}
                                </Button>
                                <Button htmlType="button" onClick={() => navigate(-1)}>
                                    Cancel
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default AccountModel;