import { Button, Card, Checkbox, Col, Image, Input, List, Row, Typography } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useState } from 'react';
import LocationSelector from './LocationSelector';
import { MoneyCollectOutlined, MoneyCollectTwoTone } from '@ant-design/icons';
const { Text } = Typography;

const PaymentModel = () => {
    const [shippingMethods, setShippingMethods] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedWard, setSelectedWard] = useState(null);
    const [selectedShippingMethod, setSelectedShippingMethod] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0); // Mock total amount for payment

    // Mock function to simulate fetching shipping methods based on location
    const fetchShippingMethods = (city, district, ward) => {
        if (city && district && ward) {
            setShippingMethods([
                'Standard Shipping (5-7 days)',
                'Express Shipping (2-3 days)',
                'Same-day Delivery',
            ]);
        }
    };

    // Trigger fetching of shipping methods when location is selected
    const handleLocationSelect = (city, district, ward) => {
        setSelectedCity(city);
        setSelectedDistrict(district);
        setSelectedWard(ward);
        fetchShippingMethods(city, district, ward);
    };

    // Handle selection of a shipping method
    const handleShippingMethodSelect = (method) => {
        setSelectedShippingMethod(method);
        // Mock calculation of total amount based on shipping method
        if (method === 'Standard Shipping (5-7 days)') {
            setTotalAmount(500000); // 500,000 VND
        } else if (method === 'Express Shipping (2-3 days)') {
            setTotalAmount(600000); // 600,000 VND
        } else if (method === 'Same-day Delivery') {
            setTotalAmount(700000); // 700,000 VND
        }
    };
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const carts = [
        {
            _id: '1',
            image: {
                _id: 'image1',
                file_extension: '.jpg',
            },
            tshirt: {
                name: 'Áo thun màu đỏ',
                price: 200000,
                quantity: 5,
            },
            quantity: 2,
            size: {
                size_name: 'M',
            },
        },
        {
            _id: '2',
            image: {
                _id: 'image2',
                file_extension: '.png',
            },
            tshirt: {
                name: 'Áo thun màu xanh',
                price: 150000,
                quantity: 3,
            },
            quantity: 1,
            size: {
                size_name: 'L',
            },
        },
        {
            _id: '3',
            image: {
                _id: 'image3',
                file_extension: '.jpg',
            },
            tshirt: {
                name: 'Áo thun màu trắng',
                price: 180000,
                quantity: 2,
            },
            quantity: 1,
            size: {
                size_name: 'S',
            },
        },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <Row gutter={16} style={{ marginTop: '3%' }}>
                <Col xs={24} md={14} style={{ textAlign: 'left', paddingLeft: '15%', paddingRight: '5%' }}>
                    <Title level={3}>Thông tin giao hàng</Title>
                    <Title level={4} style={{ color: '#888' }}>Bạn đã có tài khoản? <a>Đăng nhập</a></Title>
                    <Input size="large" placeholder="Họ và Tên" />
                    <Row style={{ marginTop: '3%', display: 'flex', justifyContent: 'space-between' }}>
                        <Col xs={14}>
                            <Input size="large" placeholder="Số điện thoại" />
                        </Col>
                        <Col xs={8}>
                            <Input size="large" placeholder="Email" />
                        </Col>
                    </Row>
                    <Input size="large" placeholder="Địa chỉ" style={{ marginTop: '3%' }} />

                    {/* Location Selector */}
                    <LocationSelector onSelect={handleLocationSelect} />

                    {/* Conditionally render shipping methods based on location */}
                    {selectedCity && selectedDistrict && selectedWard && (
                        <Card title="Phương thức vận chuyển" bordered style={{ marginTop: '20px' }}>
                            {shippingMethods.map((method, index) => (
                                <div key={index} style={{ marginBottom: '10px' }}>
                                    <Text
                                        strong
                                        onClick={() => handleShippingMethodSelect(method)}
                                        style={{ cursor: 'pointer', color: selectedShippingMethod === method ? 'blue' : 'black' }}
                                    >
                                        {method}
                                    </Text>
                                </div>
                            ))}
                        </Card>
                    )}
                    <Title level={4}>Phương thức thanh toán</Title>
                    <Card style={{ padding: '16px' }}>
                        <Checkbox onChange={onChange} style={{ fontSize: '18px', lineHeight: '24px' }}>
                            <Title level={5} style={{ margin: 0, fontSize: '18px', color: '#888' }}>
                                <MoneyCollectTwoTone /> Thanh toán khi nhận hàng (COD)
                            </Title>
                        </Checkbox>
                    </Card>
                    <Row style={{ alignItems: 'center', justifyContent: 'space-between', marginTop: '3%' }}>
                        <Col>
                            <a>Giỏ hàng</a>
                        </Col>
                        <Col>
                            <Button type='primary'>Hoàn tất đơn hàng</Button>
                        </Col>
                    </Row>
                </Col>

                <Col xs={24} md={8} style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
                    <Title level={3}>Thông tin thanh toán</Title>

                    <List
                        itemLayout="horizontal"
                        dataSource={carts}
                        renderItem={(item) => (

                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Image width={100} src={`http://localhost:3000/uploads/${item.image._id}${item.image.file_extension}`} />}
                                    title={
                                        <Text style={{ display: 'block', textAlign: 'left', fontSize: '15px', fontWeight: 'bold' }}>{item.tshirt.name}</Text>
                                    }
                                    description={(
                                        <div style={{ marginTop: '5px', display: 'block', textAlign: 'left' }}>
                                            <Text style={{ color: '#888' }}>Kích thước: {item.size.size_name}</Text>
                                        </div>
                                    )}
                                    style={{ marginLeft: '10px' }}
                                />
                                <div style={{ textAlign: 'right' }}>
                                    <Text style={{ fontSize: '15px', color: 'black', fontWeight: 'bold' }}>{(item.tshirt.price * item.quantity).toLocaleString()}<Text style={{ fontSize: '10px', color: 'black', textDecorationLine: 'underline' }}>đ</Text></Text>
                                </div>
                            </List.Item>
                        )}
                    />
                    <Card bordered={false} style={{ backgroundColor: '#f5f5f5' }}>
                        <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                            <Col>
                                <Text strong style={{ fontSize: '16px', textAlign: 'left', display: 'block', color: '#888' }}>Tạm Tính</Text>
                            </Col>
                            <Col>
                                420.000<Text style={{ fontSize: '10px', color: 'black', textDecorationLine: 'underline' }}>đ</Text>
                            </Col>
                        </Row>
                        <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                            <Col>
                                <Text strong style={{ fontSize: '16px', textAlign: 'left', display: 'block', color: '#888' }}>Phí vận chuyển</Text>
                            </Col>
                            <Col>
                                420.000<Text style={{ fontSize: '10px', color: 'black', textDecorationLine: 'underline' }}>đ</Text>
                            </Col>
                        </Row>
                    </Card>
                    <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <Col>
                            <Title level={4}>Tổng cộng</Title>
                        </Col>
                        <Col>
                            <Title level={3}>840.000<Text style={{ fontSize: '20px', color: 'black', textDecorationLine: 'underline' }}>đ</Text></Title>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default PaymentModel;
