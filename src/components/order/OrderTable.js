import { DeleteOutlined, EyeInvisibleOutlined, CheckOutlined, CloseOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Col, Flex, Space, Table, message } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MESSAGE } from '../../config/message.config';
import { ORDER_URL } from '../../config/url.config';
import { cancelOrder, confirmOrder, getListOrder, getOrderDetails } from '../../services/order.service';
import { API_PATH } from "../../config/api.config";
import { showDeleteConfirm, success } from '../../utils/helper';

const OrderTable = () => {
    const [orders, setOrders] = useState([])
    const [expandedRowKeys, setExpandedRowKeys] = useState([]);
    const [orderDetails, setOrderDetails] = useState({});
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage()
    const location = useLocation();
    const { state } = location;


    const columns = [
        {
            title: 'No.',
            render: (text, record, index) => index + 1,
            width: '10%',
        },
        {
            title: 'Account',
            dataIndex: 'account_id',
            width: '15%',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            width: '20%',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            width: '20%',
        },
        {
            title: 'Total',
            dataIndex: 'total_price',
            sorter: (a, b) => a.total_price - b.total_price,
            width: '10%',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            width: '10%',
            sorter: (a, b) => {
                if (a.status === 'pending' && b.status !== 'pending') return -1;
            },
        },
        {
            title: 'Action',
            dataIndex: '_id',
            render: (_id, record) => {
                return (
                    <Space>
                        {record.status === 'pending' && (
                            <>
                                <Button shape="round" icon={<CloseOutlined style={{ color: 'red' }} />} onClick={() => cancelOrder(_id, messageApi, getListOrder, setOrders)}></Button>
                                <Button shape="round" icon={<CheckOutlined style={{ color: 'green' }} />} onClick={() => confirmOrder(_id, messageApi, getListOrder, setOrders)}></Button>
                            </>
                        )}
                        <Button danger shape="round" icon={<DeleteOutlined />} onClick={() => showDeleteConfirm(_id, messageApi, getListOrder, setOrders, API_PATH.order)}></Button>
                    </Space>
                )
            },
            width: '10%',
        },
    ];

    const toggleExpand = (id) => {
        const newExpandedRowKeys = expandedRowKeys.includes(id)
            ? expandedRowKeys.filter((key) => key !== id)
            : [...expandedRowKeys, id];
        setExpandedRowKeys(newExpandedRowKeys);

        // Gọi hàm lấy chi tiết đơn hàng khi mở rộng
        if (!orderDetails[id]) {
            getOrderDetails(id, (details) => {
                setOrderDetails((prev) => ({ ...prev, [id]: details }));
            });
        }
    };

    const expandedRowRender = (record) => {
        const details = orderDetails[record._id];
        console.log(details);
        if (!details || details.length === 0) return null;
        return (
            <div>
                {details.map((detail) => (
                    <div key={detail._id}>
                        <p><b>Order ID:</b> {detail.order_id}</p>
                        <p><b>T-shirt Name:</b> {detail.pantShirt?.tshirt_name}</p>
                        <p><b>T-shirt Price:</b> {detail.pantShirt?.tshirt_price}</p>
                        <p><b>Quantity:</b> {detail.quantity}</p>
                    </div>
                ))}
            </div>
        );
    };

    useEffect(() => {
        if (state?.message === MESSAGE.CREATE_SUCCESS) {
            console.log('message', state?.message)
            success(state.message, messageApi);
            navigate(location.pathname, { replace: true }); //xóa state sau khi sử dụng
        } else if (state?.message === MESSAGE.UPDATE_SUCCESS) {
            console.log('message', state?.message)
            success(state.message, messageApi);
            navigate(location.pathname, { replace: true });
        }

        getListOrder(setOrders)
    }, [state, navigate, messageApi, location.pathname])

    return (
        <>
            <Flex gap="middle" align="center" justify='space-between'>
                {contextHolder}
                <Col>
                    <Title level={2}>Order Management</Title>
                </Col>
                <Col className="gutter-row" style={{ display: 'flex', justifyContent: 'flex-end  !important', alignItems: 'center !important', height: '100%' }}>
                    <Button onClick={() => navigate(ORDER_URL.CREATE)}>Insert</Button>
                </Col>
            </Flex>
            <Table
                columns={columns}
                dataSource={orders}
                rowKey="_id"
                expandable={{
                    expandIcon: ({ onExpand, expanded, record }) => (
                        <Button
                            shape="round"
                            icon={expanded ? <EyeOutlined style={{ color: 'blue' }} /> : <EyeInvisibleOutlined />}
                            onClick={() => {
                                onExpand(record);
                            }}
                        />
                    ),
                    expandedRowRender: expandedRowRender, // Xử lý hiển thị nội dung mở rộng
                    expandedRowKeys: expandedRowKeys, // Các hàng hiện đang mở rộng
                    onExpand: (expanded, record) => toggleExpand(record._id), // Điều khiển mở rộng khi nhấp vào                   
                }}

            />
        </>
    )
}

export default OrderTable;
