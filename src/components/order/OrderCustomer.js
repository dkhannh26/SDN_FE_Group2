import { EyeInvisibleOutlined, EyeOutlined, TruckOutlined } from "@ant-design/icons";
import { Button, Image, List, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getListDoneOrder, getListOrder, getListPendingOrder, getOrderDetails } from "../../services/order.service";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { PATH } from "../../config/api.config";
const { Text, Title } = Typography;

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
                                        <Image width={100} height={200} src={`http://localhost:3000/uploads/${item.productImage._id}${item.productImage.file_extension}`} />
                                    ) : (
                                        <Image width={170} height={200} src="https://product.hstatic.net/1000344185/product/img_4125_4feb7a360b3b4f00bd2465a85ef2d9e3_small.jpg" />
                                    )
                                }
                                title={`${item.product.name} - Size: ${item.size ? item.size.size_name : "Không có kích thước"}`}
                                description={`x${item.quantity}`}
                            />
                            <Title level={3}>{item.product.price}đ</Title>
                        </List.Item>
                    )}
                />
            </>
        );
    };
    const {
        isAuthenticated,
        user,
    } = useAuth();

    const [initialValues, setInitialValues] = useState({
        userId: "",
        username: "",
        email: "",
        phone: "",
        address: "",
    });
    useEffect(() => {
        const fetchData = async () => {
            if (isAuthenticated) {
                try {
                    const res = await axios.get(`${PATH.profile}/${user.username}`);
                    setInitialValues({
                        userId: res.data.user._id,
                        username: res?.data?.user?.username,
                        email: res?.data?.user?.email,
                        phone: res?.data?.user?.phone,
                        address: res?.data?.user?.address,
                    });
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };

        fetchData();
    }, [isAuthenticated]);
    useEffect(() => {
        if (initialValues.userId) {
            if (status === "pending") {
                getListPendingOrder(initialValues.userId, setOrders);
            } else if (status === "done") {
                getListDoneOrder(initialValues.userId, setOrders);
            }
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
