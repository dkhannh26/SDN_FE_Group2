import React from 'react';
import { List, Image, Button, Row, Col, Typography, InputNumber, Card, Form, Input } from 'antd';
import Title from 'antd/es/typography/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import {
    CloseOutlined
} from '@ant-design/icons';

const { Text } = Typography;

const CartList = () => {
    const data = [
        {
            id: 1,
            title: 'LOUD TEE - BLACK',
            price: 380000,
            size: 'S',
            imageUrl: 'https://product.hstatic.net/1000344185/product/swe_0012_c129a74253e847e384cd78fbf59b5fcc_medium.jpg'
        },
        {
            id: 2,
            title: '24 TEE - RED',
            price: 300000,
            size: 'S',
            imageUrl: 'https://product.hstatic.net/1000344185/product/swe_0012_c129a74253e847e384cd78fbf59b5fcc_medium.jpg'
        }, {
            id: 1,
            title: 'LOUD TEE - BLACK',
            price: 380000,
            size: 'S',
            imageUrl: 'https://product.hstatic.net/1000344185/product/swe_0012_c129a74253e847e384cd78fbf59b5fcc_medium.jpg'
        },
        {
            id: 2,
            title: '24 TEE - RED',
            price: 300000,
            size: 'S',
            imageUrl: 'https://product.hstatic.net/1000344185/product/swe_0012_c129a74253e847e384cd78fbf59b5fcc_medium.jpg'
        }, {
            id: 1,
            title: 'LOUD TEE - BLACK',
            price: 380000,
            size: 'S',
            imageUrl: 'https://product.hstatic.net/1000344185/product/swe_0012_c129a74253e847e384cd78fbf59b5fcc_medium.jpg'
        },
        {
            id: 2,
            title: '24 TEE - RED',
            price: 300000,
            size: 'S',
            imageUrl: 'https://product.hstatic.net/1000344185/product/swe_0012_c129a74253e847e384cd78fbf59b5fcc_medium.jpg'
        }, {
            id: 1,
            title: 'LOUD TEE - BLACK',
            price: 380000,
            size: 'S',
            imageUrl: 'https://product.hstatic.net/1000344185/product/swe_0012_c129a74253e847e384cd78fbf59b5fcc_medium.jpg'
        },
        {
            id: 2,
            title: '24 TEE - RED',
            price: 300000,
            size: 'S',
            imageUrl: 'https://product.hstatic.net/1000344185/product/swe_0012_c129a74253e847e384cd78fbf59b5fcc_medium.jpg'
        }, {
            id: 1,
            title: 'LOUD TEE - BLACK',
            price: 380000,
            size: 'S',
            imageUrl: 'https://product.hstatic.net/1000344185/product/swe_0012_c129a74253e847e384cd78fbf59b5fcc_medium.jpg'
        },
        {
            id: 2,
            title: '24 TEE - RED',
            price: 300000,
            size: 'S',
            imageUrl: 'https://product.hstatic.net/1000344185/product/swe_0012_c129a74253e847e384cd78fbf59b5fcc_medium.jpg'
        },
    ];

    const onChange = (value) => {
        console.log('changed', value);
    };
    const handleContinueShopping = () => {
        console.log('Tiếp tục mua hàng');
    };

    const totalAmount = data.reduce((acc, item) => acc + item.price, 0);

    return (
        <div style={{ padding: '20px' }}>

            <Row gutter={16} style={{ marginTop: '20px' }}>
                <Col xs={24} md={16}>
                    <Text strong style={{ fontSize: '16px', backgroundColor: '#f5f5f5', padding: '10px', display: 'block', textAlign: 'left', color: '#888' }}>
                        Có <Text style={{ color: 'blue', fontSize: '16px' }}>{data.length} sản phẩm</Text>  trong giỏ hàng
                    </Text>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Image width={100} src={item.imageUrl} />}
                                    title={
                                        <Text style={{ display: 'block', textAlign: 'left', fontSize: '15px', fontWeight: 'bold' }}>{item.title}</Text>
                                    }
                                    description={(
                                        <div style={{ marginTop: '5px', display: 'block', textAlign: 'left' }}>
                                            <Text style={{ color: '#888' }}>{item.price.toLocaleString()}<Text style={{ fontSize: '10px', color: '#888', textDecorationLine: 'underline' }}>đ</Text></Text>
                                            <br />
                                            <Text style={{ color: '#888' }}>Kích thước: {item.size}</Text>
                                            <br />
                                            <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />
                                        </div>
                                    )}
                                    style={{ marginLeft: '10px' }}
                                />
                                <div style={{ textAlign: 'right' }}>
                                    <Button type="link"><CloseOutlined style={{ color: 'black' }} /></Button>
                                    <br />
                                    <br />
                                    <br />
                                    <Text style={{ fontSize: '15px', color: 'black', fontWeight: 'bold' }}>{item.price.toLocaleString()}<Text style={{ fontSize: '10px', color: 'black', textDecorationLine: 'underline' }}>đ</Text></Text>
                                </div>
                            </List.Item>
                        )}
                    />
                    <Card bordered={false} style={{ backgroundColor: '#f5f5f5' }}>
                        <Text strong style={{ fontSize: '16px', textAlign: 'left', display: 'block', color: '#888' }}>Ghi chú đơn hàng</Text>
                        <Form.Item style={{ marginTop: '10px' }}>
                            <Input.TextArea rows={4} placeholder="Nhập ghi chú đơn hàng của bạn" style={{ width: '100%', borderColor: '#000000' }} />
                        </Form.Item>
                    </Card>
                </Col>

                <Col xs={24} md={8}>
                    <div style={{ position: 'sticky', top: '20px' }}>
                        <Card
                            title={<Title level={4} style={{ textAlign: 'left' }}>Thông tin đơn hàng</Title>}
                            bordered={false}
                            style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}
                        >
                            <Row justify="space-between" align="middle">
                                <Text style={{ fontWeight: 'bold', color: '#888' }}>Tổng tiền:</Text>
                                <Text style={{ fontSize: '20px', color: 'red', fontWeight: 'bold' }}>
                                    {totalAmount.toLocaleString()}<Text style={{ fontSize: '15px', color: 'red', textDecorationLine: 'underline' }}>đ</Text>
                                </Text>
                            </Row>
                            <Button type="primary" block style={{ marginTop: '20px', backgroundColor: 'red', borderColor: 'red' }}>
                                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: '14px' }}>THANH TOÁN</Text>
                            </Button>
                        </Card>
                        <div style={{ textAlign: 'center', marginTop: '10px' }}>
                            <Text type="secondary" style={{ cursor: 'pointer' }} onClick={handleContinueShopping}>
                                <FontAwesomeIcon icon={faReply} /> Tiếp tục mua hàng
                            </Text>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default CartList;
