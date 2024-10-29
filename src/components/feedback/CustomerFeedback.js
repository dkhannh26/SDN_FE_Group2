import { Button, Col, Form, List, Modal, Row } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';
import '../../assets/css/feedback.css';

const CustomerFeedback = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const listFeedback = [
        {
            name: 'customer',
            createAt: 'thoi gian viet feedback',
            content: 'Giao hàng siêu nhanh, chăm sóc khách hàng tốt, áo dày dặn, vải mát đường may đẹp, nói chung là mua đi mọi người ơi 10 điểm cho shoppppp',
        },
        {
            name: 'customer',
            createAt: 'thoi gian viet feedback',
            content: 'Giao hàng siêu nhanh, chăm sóc khách hàng tốt, áo dày dặn, vải mát đường may đẹp, nói chung là mua đi mọi người ơi 10 điểm cho shoppppp',
        },
        {
            name: 'customer',
            createAt: 'thoi gian viet feedback',
            content: 'Giao hàng siêu nhanh, chăm sóc khách hàng tốt, áo dày dặn, vải mát đường may đẹp, nói chung là mua đi mọi người ơi 10 điểm cho shoppppp',
        },
        {
            name: 'customer',
            createAt: 'thoi gian viet feedback',
            content: 'Giao hàng siêu nhanh, chăm sóc khách hàng tốt, áo dày dặn, vải mát đường may đẹp, nói chung là mua đi mọi người ơi 10 điểm cho shoppppp',
        },
    ];

    return (
        <div style={{ width: 900, margin: 'auto'}}>
            <Row style={{ justifyContent: 'space-between', marginBottom: 30 }}>
                <p style={{ fontSize: 25 }}>Feedback</p>
                <Button type="primary" onClick={showModal}>
                    Write Feedback
                </Button>
            </Row>
            <Modal title="Write new feedback" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Form
                    className='customer-feedback'
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >

                    <Form.Item
                        // name='content' --- muốn báo lỗi input thì tắt cmt
                        rules={[
                            {
                                required: true,
                                message: 'Content length must be between 3 and 1000 characters, please re-enter.',
                            },
                        ]}
                    >
                        <p>Content:</p>
                        <TextArea autoSize={{
                            minRows: 4,
                            maxRows: 5,
                        }} />
                    </Form.Item>

                    <Form.Item style={{ marginTop: 20 }}>
                        <Button color="default" variant="solid" htmlType="submit" style={{ marginRight: 15 }}>
                            Send feedback
                        </Button>
                        <Button color="default" variant="outlined" onClick={handleCancel}>
                            Cancel
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>


            <List
                itemLayout="horizontal"
                dataSource={listFeedback}
                split={false}
                renderItem={(item, index) => (
                    <List.Item style={{marginBottom: 10}}>
                        <Row>
                            <Col span={6}>
                                <b>{item.name}</b>
                                <p>{item.createAt}</p>
                            </Col>
                            <Col span={18}>
                                {item.content}
                                <Row style={{marginTop: 10}}>
                                    <Button style={{ backgroundColor: 'green', color: 'white', marginRight: 10 }}>Edit</Button>
                                    <Button style={{ backgroundColor: 'red', color: 'white' }}>Remove</Button>
                                </Row>
                            </Col>
                        </Row>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default CustomerFeedback;