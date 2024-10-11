import { Button, Col, DatePicker, Form, InputNumber, Row, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_PATH } from '../../config/api.config';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const DiscountModel = ({ type }) => {
    const [date, setDate] = useState()
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const { id } = useParams();

    const onFinish = (values) => {
        const discount = {
            percent: values.percent,
            expired_at: date
        }

        console.log(type)
        if (type === 'create') {
            axios.post(API_PATH.discount, discount)
                .then(
                    navigate('/admin/discount', {
                        state: { message: 'Create successfully!' }
                    })
                )
                .catch(error => {
                    console.log(error)
                })
        } else {
            axios.put(API_PATH.discount + `/${id}`, discount)
                .then(
                    navigate('/admin/discount', {
                        state: { message: 'Update successfully!' }
                    })
                )
                .catch(error => {
                    console.log(error)
                })
        }


    };

    const onDateChange = (dateString) => {
        setDate(dateString)
    };


    useEffect(() => {
        axios.get(API_PATH.discount + `/${id}`)
            .then((res) => {
                const date = dayjs(res.data.expired_at);
                form.setFieldsValue({
                    percent: res.data.percent,
                    date: date,
                });
            })
    }, [id])


    return (
        <>
            <Row>
                <Title level={3}>
                    {type === 'create' ? 'New Discount' : 'Edit Discount'}
                </Title>
            </Row>
            <Row >
                <Col offset={4} span={12}>
                    <Form
                        {...layout}
                        form={form}
                        name="control-hooks"
                        onFinish={onFinish}
                        style={{
                            maxWidth: 600,
                        }}
                    >
                        <Form.Item
                            name="percent"
                            label="Percent"
                            rules={[
                                {
                                    required: true,
                                    type: 'number',
                                    min: 0,
                                    max: 100,
                                },
                            ]}

                        >
                            <InputNumber suffix="%" style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item
                            name="date"
                            label="Expire At"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <DatePicker onChange={onDateChange} style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
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

export default DiscountModel;