import React, { useEffect, useState } from 'react';
import { Button, Col, Flex, message, Row, Space, Table, Modal } from 'antd';
import axios from 'axios'
import Title from 'antd/es/typography/Title';
import moment from 'moment';
import { DeleteOutlined, EditOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { API_PATH } from '../../config/api.config';
import { useLocation, useNavigate } from 'react-router-dom';
import { DISCOUNT_URL } from '../../config/url.config';

const formatDate = (dateString) => {
    return moment(dateString).format('DD/MM/YYYY');
};

const DiscountTable = () => {
    const [discounts, setDiscounts] = useState([])
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage()
    const location = useLocation();
    const { state } = location;
    const { confirm } = Modal;

    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Are you sure delete this discount?',
            icon: <ExclamationCircleFilled />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                axios.delete(API_PATH.discount + `/${id}`)
                    .then(() => {

                        success('Delete Succesfully')
                    })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

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
            dataIndex: '_id',
            render: (_id) => {
                return (
                    <Space>
                        <Button shape="round" icon={<EditOutlined />} onClick={() => navigate(`edit/${_id}`)} ></Button>
                        <Button danger shape="round" icon={<DeleteOutlined />} onClick={() => showDeleteConfirm(_id)} ></Button>
                    </Space>
                )
            },
            width: '5%',
        },
    ];

    const success = (message) => {
        messageApi.open({
            type: 'success',
            content: message,
        });
    };

    useEffect(() => {
        if (state?.message === 'Create successfully!') {
            console.log('message', state?.message)
            success(state.message);
            navigate(location.pathname, { replace: true }); //xóa state sau khi sử dụng
        } else if (state?.message === 'Update successfully!') {
            console.log('message', state?.message)
            success(state.message);
            navigate(location.pathname, { replace: true });
        }

        axios.get(API_PATH.discount)
            .then((res) => {
                setDiscounts(res.data)
                console.log(res.data)
            })
    }, [state, navigate, success, location.pathname])


    return (
        <>
            <Flex gap="middle" align="center" justify='space-between'>
                {contextHolder}
                <Col>
                    <Title level={2}>Discount Management</Title>
                </Col>
                <Col className="gutter-row" style={{ display: 'flex', justifyContent: 'flex-end  !important', alignItems: 'center !important', height: '100%' }}>
                    <Button onClick={() => navigate(DISCOUNT_URL.CREATE)}>Insert</Button>
                </Col>
            </Flex>
            <Table columns={columns} dataSource={discounts} />
        </>
    )
}

export default DiscountTable;