import { Card, Col, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react';
import { getListPant } from '../../services/product/pant.service';
import { useNavigate } from 'react-router-dom';

const PantsCustomer = () => {
    const [pants, setPants] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        getListPant(setPants)
        console.log(pants)
    }, [])
    return (
        <Row>
            <Col offset={1} span={21}>
                <Title level={2} style={{ marginTop: '20px' }}>Pants</Title>
                <Row style={{ margin: '20px', marginLeft: 0 }}>Filter</Row>
                <Row>
                    {pants.map((pant) => {
                        return (
                            <Col span={6}>
                                <Card
                                    onClick={() => navigate(`${pant.pantId}`)}
                                    bordered={false}
                                    hoverable
                                    style={{ width: '95%', marginLeft: '5%' }}
                                    cover={<img alt="example" style={{ width: 258, height: 310 }} src={`http://localhost:3000${pant.pantImg}`} />}
                                >
                                    <Meta
                                        title={pant.pantName}
                                        description={
                                            <>
                                                <p>Giá gốc: {pant.pantPrice.toLocaleString('vi-VN')}₫</p>
                                                {pant.pantDiscountPercent ?
                                                    <p>Giá khuyến mãi:{' '}
                                                        {(pant.pantPrice - (pant.pantPrice * pant.pantDiscountPercent / 100)).toLocaleString('vi-VN')}₫ (-{pant.pantDiscountPercent}%)
                                                    </p>
                                                    :
                                                    <p>Chưa có khuyến mãi</p>
                                                }
                                            </>
                                        }
                                    />
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Col>
        </Row>
    );
};

export default PantsCustomer;