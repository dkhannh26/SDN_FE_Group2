import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Col, Flex, message, Space, Table } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { API_PATH } from '../../config/api.config';
import { MESSAGE } from '../../config/message.config';
import { ACCOUNT_URL, DISCOUNT_URL } from '../../config/url.config';
import { getListDiscount } from '../../services/discount.service';
import { showDeleteConfirm, success } from '../../utils/helper';
import { getListAccount } from '../../services/account.service';

const AccountTable = () => {
    const [accounts, setAccounts] = useState([])
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
            title: 'Username',
            dataIndex: 'username',
            width: '5%',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: '5%',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            width: '15%',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
            width: '15%',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            width: '15%',
        },
        {
            title: 'Action',
            dataIndex: '_id',
            render: (_id) => {
                return (
                    <Space>
                        <Button shape="round" icon={<EditOutlined />} onClick={() => navigate(`edit/${_id}`)} ></Button>
                        <Button danger shape="round" icon={<DeleteOutlined />} onClick={() => showDeleteConfirm(_id, messageApi, getListDiscount, setAccounts, API_PATH.discount)} ></Button>
                    </Space>
                )
            },
            width: '5%',
        },
    ];

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

        getListAccount(setAccounts)
    }, [state, navigate, messageApi, location.pathname])

    return (
        <>
            <Flex gap="middle" align="center" justify='space-between'>
                {contextHolder}
                <Col>
                    <Title level={2}>Account Management</Title>
                </Col>
                <Col className="gutter-row" style={{ display: 'flex', justifyContent: 'flex-end  !important', alignItems: 'center !important', height: '100%' }}>
                    <Button onClick={() => navigate(ACCOUNT_URL.CREATE)}>Insert Staff</Button>
                </Col>
            </Flex>
            <Table columns={columns} dataSource={accounts} />
        </>
    )
}

export default AccountTable;