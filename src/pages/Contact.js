import React from 'react';
import { Flex, Input, Col, Row, List, Avatar } from 'antd';
const { TextArea } = Input;
const onChange = (e) => {
    console.log('Change:', e.target.value);
};

const Contact = () => {
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];
    return (
        <div style={{width: 1200, margin: "auto"}}>
            <Row>
                <Col span={12}>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </List.Item>
                        )}
                    />
                </Col>
                <Col span={12}>
                    <Flex vertical gap={32}>
                        <Input showCount maxLength={20} onChange={onChange} />
                        <TextArea showCount maxLength={100} onChange={onChange} placeholder="can resize" />
                        <TextArea
                            showCount
                            maxLength={100}
                            onChange={onChange}
                            placeholder="disable resize"
                            style={{
                                height: 120,
                                resize: 'none',
                            }}
                        />
                    </Flex>
                </Col>



            </Row>

        </div>
    );
};
export default Contact;
