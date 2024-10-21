import { MoneyCollectTwoTone } from '@ant-design/icons';
import { Button, Card, Checkbox, Col, Image, Input, List, Row, Typography } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react';
import { getListCart } from '../../services/cart.service';
import LocationSelector from './LocationSelector';
import { useLocation, useNavigate } from 'react-router';

const { Text } = Typography;


const PaymentModel = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [shippingMethods, setShippingMethods] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedWard, setSelectedWard] = useState(null);
    const [selectedShippingMethod, setSelectedShippingMethod] = useState(null);
    const [carts, setCarts] = useState([])
    const { voucherTotal } = location.state;
    const [total, setTotal] = useState(Number);
    const [totalAmount, setTotalAmount] = useState(0);
    const [name, setName] = useState('Nguyen Thanh Son');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('sonntce171760@fpt.edu.vn');
    const [address, setAddress] = useState('');

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

    const onFinish = () => {
        const values = {
            name,
            phone,
            email,
            address
        };
    }

    useEffect(() => {
        getListCart(setCarts, (total) => {
            setTotal(total);
        });
        console.log(voucherTotal);
    }, []);



    return (
        <div style={{ padding: '20px' }}>
            <Row gutter={16} style={{ marginTop: '3%' }}>
                <Col xs={24} md={14} style={{ textAlign: 'left', paddingLeft: '15%', paddingRight: '5%' }}>
                    <Title level={3}>Thông tin giao hàng</Title>
                    <Title level={4} style={{ color: '#888' }}>Bạn đã có tài khoản? <a>Đăng nhập</a></Title>
                    <Input
                        size="large"
                        placeholder="Họ và Tên"
                        disabled
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Row style={{ marginTop: '3%', display: 'flex', justifyContent: 'space-between' }}>
                        <Col xs={14}>
                            <Input
                                size="large"
                                placeholder="Số điện thoại"
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Col>
                        <Col xs={8}>
                            <Input
                                size="large"
                                placeholder="Email"
                                defaultValue={email}
                                disabled
                            />
                        </Col>
                    </Row>
                    <Input
                        size="large"
                        placeholder="Địa chỉ"
                        style={{ marginTop: '3%' }}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <LocationSelector onSelect={handleLocationSelect} />

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
                            <Button type='primary' onclick={onFinish}>Hoàn tất đơn hàng</Button>
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
                            <Col style={{ fontWeight: 'bold' }}>
                                {total.toLocaleString()}<Text style={{ fontSize: '15px', textDecorationLine: 'underline' }}>đ</Text>
                            </Col>
                        </Row>
                        <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                            <Col>
                                <Text strong style={{ fontSize: '16px', textAlign: 'left', display: 'block', color: '#888' }}>Voucher giảm</Text>
                            </Col>
                            <Col style={{ fontWeight: 'bold' }}>
                                {(total - voucherTotal).toLocaleString()}<Text style={{ fontSize: '15px', textDecorationLine: 'underline' }}>đ</Text>
                            </Col>
                        </Row>
                    </Card>
                    <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <Col>
                            <Title level={4}>Tổng cộng</Title>
                        </Col>
                        <Col>
                            <Title level={3}>{voucherTotal}<Text style={{ fontSize: '20px', color: 'black', textDecorationLine: 'underline' }}>đ</Text></Title>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default PaymentModel;
