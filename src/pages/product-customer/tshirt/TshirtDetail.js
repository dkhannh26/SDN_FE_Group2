import { Button, Col, Image, InputNumber, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from 'antd/es/typography/Title';
import '../../../assets/css/sizeBtn.css'
import { getTshirtCustomer } from '../../../services/product/tshirt.service';
import CustomerFeedback from '../../../components/feedback/CustomerFeedback';
const { Text } = Typography;
const TshirtDetail = () => {
    const [canvas, setCanvas] = useState('https://top10hoabinh.com/wp-content/uploads/2022/10/anh-dang-load-2.jpg')
    const { id } = useParams();
    const [tshirt, setTshirt] = useState()
    const [images, setImages] = useState()
    const [sizeSelected, setSizeSelected] = useState('')
    const [sizeNumber, setSizeNumber] = useState(1)
    const selectSize = (size, number) => {
        setSizeSelected(size)
        setSizeNumber(number)
        setCount(1)
    }

    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        if (count < sizeNumber) setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    useEffect(() => {
        getTshirtCustomer(id, setTshirt, setImages, setCanvas, selectSize)
    }, [id])
    return (
        <>
            <Row style={{ margin: 40 }}>
                <Col span={14}>
                    <Row>
                        <Col span={4}>
                            {images?.map(image => {
                                return (
                                    <Image
                                        onClick={() => setCanvas(image.url)}
                                        preview={false}
                                        style={{
                                            marginBottom: 10,
                                            cursor: 'pointer',
                                            border: image?.url === canvas ? '1px solid black' : ''
                                        }}
                                        width={80}
                                        src={image.url}
                                    />
                                )
                            })}
                        </Col>
                        <Col offset={0.5} span={19}>
                            <Image
                                preview={false}
                                style={{ marginBottom: 10 }}
                                width={'80%'}
                                src={canvas}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={10}>
                    <Row>
                        <Title level={4}>{tshirt?.name}</Title>
                    </Row>
                    <Row
                        style={{
                            marginTop: 20,
                            marginBottom: 20,
                            fontSize: 12,
                            color: '#a3a5a7'
                        }}
                    >
                        <span style={{ fontWeight: 700 }}>SKU:{' '} </span>{id}
                    </Row>
                    <Row
                        style={{
                            paddingTop: 15,
                            paddingBottom: 15,
                            borderTop: '1px solid #F5F5F5',
                            borderBottom: '1px solid #F5F5F5',
                            alignItems: 'center',
                        }}
                    >
                        {
                            tshirt?.discount?.percent ? <Row
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 60,
                                    height: 35,
                                    backgroundColor: '#F5F5F5',
                                    margin: '0 10px',
                                    color: 'red',
                                    fontSize: 16,
                                    fontWeight: 700
                                }}
                            >
                                - {tshirt?.discount?.percent}%
                            </Row> : ''
                        }



                        {
                            tshirt?.discount?.percent ?
                                <>
                                    <Text type="danger" style={{ marginRight: 10, fontWeight: 650, fontSize: 20 }}>
                                        {(tshirt?.price - (tshirt?.price * tshirt?.discount?.percent / 100)).toLocaleString('vi-VN')}₫
                                    </Text>
                                    <Text delete> {(tshirt?.price)?.toLocaleString('vi-VN')}₫</Text>
                                </>
                                :
                                <Text type="danger" style={{ marginRight: 10, fontWeight: 650, fontSize: 20 }}>
                                    {(tshirt?.price)?.toLocaleString('vi-VN')}₫
                                </Text>
                        }


                    </Row>
                    <Row
                        style={{
                            alignItems: 'center',
                            paddingTop: 20,
                            paddingBottom: 20,
                            borderTop: '1px solid #F5F5F5',
                            borderBottom: '1px solid #F5F5F5'
                        }}
                    >
                        <Col span={18}>
                            {tshirt?.size.map((item, index) => {
                                return (
                                    <Button color="default"
                                        variant={sizeSelected === Object.keys(item)[0] ? "solid" : ''}
                                        className="size-button"
                                        onClick={() => selectSize(Object.keys(item)[0], Object.values(item)[0])}
                                    >
                                        {Object.keys(item)[0]}
                                    </Button>
                                )
                            })}
                        </Col>
                        <Col span={6}>
                            {
                                sizeNumber !== 0 ?
                                    `${sizeNumber} sản phẩm có sẵn`
                                    :
                                    `Tạm hết hàng`
                            }
                        </Col>
                    </Row>
                    <Row
                        style={{
                            paddingTop: 20,
                            paddingBottom: 20,
                            borderTop: '1px solid #F5F5F5',
                            borderBottom: '1px solid #F5F5F5'
                        }}
                    >
                        <div>
                            <Button onClick={handleDecrement} variant='filled' color='default'>-</Button>
                            <InputNumber min={1} value={count} onChange={setCount} readOnly />
                            <Button onClick={handleIncrement} variant='filled' color='default' >+</Button>
                        </div>
                    </Row>
                    {
                        sizeNumber !== 0 ?
                            <Row style={{ marginTop: 30 }}>
                                <div class="box-1">
                                    <div class="btn btn-one">
                                        <span>THÊM VÀO GIỎ HÀNG</span>
                                    </div>
                                </div>
                            </Row>
                            :
                            <Row style={{ marginTop: 30 }}>
                                <div class="box-1 unavailable">
                                    <div class="btn btn-one">
                                        <span>HẾT HÀNG</span>
                                    </div>
                                </div>
                            </Row>
                    }

                </Col>
            </Row>
            <Row>
                <CustomerFeedback></CustomerFeedback>
            </Row>
        </>
    );
};

export default TshirtDetail;