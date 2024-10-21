import React, { useEffect, useState } from 'react';
import { Button, Col, Flex, Space, Table } from 'antd';
import axios from 'axios'
import Title from 'antd/es/typography/Title';
import moment from 'moment';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { PATH } from '../../config/api.config';
import { useNavigate } from 'react-router-dom';
import { DISCOUNT_URL } from '../../config/url.config';

const columns = [
    {
        title: 'No.',
        render: (text, record, index) => index + 1,
        width: '10%',
    },
    {
        title: 'Percent',
        dataIndex: 'percent',
        sorter: (a, b) => a.age - b.age,
        width: '15%',
    },
    {
        title: 'Expiry',
        dataIndex: 'expired_at',
        render: (date) => {
            return formatDate(date)
        },
        width: '20%',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        render: () => {
            return (
                <Space>
                    <Button shape="round" icon={<EditOutlined />} ></Button>
                    <Button danger shape="round" icon={<DeleteOutlined />} ></Button>
                </Space>
            )
        },
        width: '5%',
    },
];


const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const formatDate = (dateString) => {
    return moment(dateString).format('DD/MM/YYYY');
};


const DiscountTable = () => {
    const [discounts, setDiscounts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(PATH.discount)
            .then((res) => {
                console.log(res.data)
                setDiscounts(res.data)
            })
    }, [])

    return (
        <>
            <Flex gap="middle" align="center" justify='space-between'>
                <Col>
                    <Title level={2}>Discount Management</Title>
                </Col>
                <Col className="gutter-row" style={{ display: 'flex', justifyContent: 'flex-end  !important', alignItems: 'center !important', height: '100%' }}>
                    <Button onClick={() => navigate(DISCOUNT_URL.CREATE)}>Insert</Button>
                </Col>
            </Flex>
            <Table columns={columns} dataSource={discounts} onChange={onChange} />
        </>
    )
}

export default DiscountTable;