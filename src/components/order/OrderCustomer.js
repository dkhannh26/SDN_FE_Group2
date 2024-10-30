import { EyeInvisibleOutlined, EyeOutlined, TruckOutlined } from "@ant-design/icons";
import { Button, Image, List, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getListDoneOrder, getListOrder, getListPendingOrder, getOrderDetails } from "../../services/order.service";
const { Text } = Typography;

const OrderCustomer = () => {
    const [status, setStatus] = useState("pending"); // Trạng thái hiện tại
    const [order, setOrders] = useState([]);
    const [orderDetails, setOrderDetails] = useState([]);
    const [expandedRowKeys, setExpandedRowKeys] = useState([]);
    const columns = [
        {
            title: 'No.',
            render: (text, record, index) => index + 1,
            width: '10%',
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
    ];


    console.log(order);
    const toggleExpand = (id) => {
        const newExpandedRowKeys = expandedRowKeys.includes(id)
            ? expandedRowKeys.filter((key) => key !== id)
            : [...expandedRowKeys, id];
        setExpandedRowKeys(newExpandedRowKeys);

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
        const filteredData = order.filter(item => item.status === status);
        return (
            <>
                <List
                    header={
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20 }}>
                            <div style={{ textAlign: 'right', fontSize: 20, color: 'gray' }}>
                                <TruckOutlined style={{ marginRight: 10 }} />
                                {status === "pending" ? "Pending" : "Successful delivery"}
                            </div>
                        </div>
                    }
                    footer={
                        <div style={{ textAlign: 'right', fontSize: 20, display: 'flex', justifyContent: 'space-between' }}>
                            <Button color="danger" variant="solid">
                                Feedback
                            </Button>
                            <p><b style={{ marginRight: 10 }}>Total:</b> <span>{record.total_price}</span></p>
                        </div>
                    }

                    itemLayout="horizontal"
                    dataSource={details}
                    bordered
                    style={{ marginBottom: 10 }}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    item.productImage ? (
                                        <Image width={100} src={`http://localhost:3000/uploads/${item.productImage._id}${item.productImage.file_extension}`} />
                                    ) : (
                                        <Image width={100} src="path-to-default-image" />
                                    )
                                }
                                title={`${item.product.name} - Size: ${item.size ? item.size.size_name : "Không có kích thước"}`}
                                description={`x${item.quantity}`}
                            />
                            <div>{item.product.price}đ</div>
                        </List.Item>
                    )}
                />
            </>
        );
    };

    useEffect(() => {
        if (status === "pending") {
            getListPendingOrder(setOrders);
        } else if (status === "done") {
            getListDoneOrder(setOrders);
        }
    }, [status]);


    return (
        <>
            <div style={{ justifyContent: 'center', display: 'flex', margin: '1%' }}>
                <Button onClick={() => setStatus("pending")} type={status === "pending" ? "primary" : "default"} style={{ marginRight: '1%' }}>
                    Pending
                </Button>
                <Button onClick={() => setStatus("done")} type={status === "done" ? "primary" : "default"}>
                    Done
                </Button>
            </div>
            <Table
                columns={columns}
                dataSource={order}
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
                    expandedRowRender: expandedRowRender,
                    expandedRowKeys: expandedRowKeys,
                    onExpand: (expanded, record) => toggleExpand(record._id),
                }}

            />
        </>

    )
}

export default OrderCustomer;
