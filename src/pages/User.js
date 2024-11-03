import React, { useEffect, useState } from "react";
import "../assets/css/profile.css";
import {
  Button,
  Col,
  Form,
  Input,
  List,
  notification,
  Row,
  Select,
} from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";
import axios from "axios";
import { PATH } from "../config/api.config";
import { options } from "./ProvinceData";
import { TruckOutlined } from "@ant-design/icons";

const User = () => {
  const navigate = useNavigate();

  const {
    isAuthenticated,
    setIsAuthenticated,
    setUsername,
    user,
    setUser,
  } = useAuth();

  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
  });
  const [dataSource, setDataSource] = useState([
    // {
    //   key: 1,
    //   id: 1,
    //   createdAt: Date.now(),
    //   total_price: 200.0,
    //   payment: "Ordered",
    //   status: "ok",
    // },
    // {
    //   key: 2,
    //   id: 2,
    //   createdAt: Date.now(),
    //   total_price: 200.0,
    //   payment: "Ordered",
    //   status: "ok",
    // },
    // {
    //   key: 3,
    //   id: 3,
    //   createdAt: Date.now(),
    //   total_price: 200.0,
    //   payment: "Ordered",
    //   status: "ok",
    // },
    // {
    //   key: 4,
    //   id: 4,
    //   createdAt: Date.now(),
    //   total_price: 200.0,
    //   payment: "Ordered",
    //   status: "ok",
    // },
    // {
    //   key: 5,
    //   id: 5,
    //   createdAt: Date.now(),
    //   total_price: 200.0,
    //   payment: "Ordered",
    //   status: "ok",
    // },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated) {
        await axios
          .get(`${PATH.profile}/${user.username}`)
          .then((res) => {
            console.log(res.data.user);

            setInitialValues({
              username: res?.data?.user?.username,
              email: res?.data?.user?.email,
              phone: res?.data?.user?.phone,
              address: res?.data?.user?.address,
            });
            // let orders = res?.data?.user?.order_id;
            const formattedOrders = res?.data?.user?.order_id.map((order) => ({
              ...order,
              createdAt: new Date(order.createdAt).toLocaleDateString("en-GB"), // Chuyển đổi createdAt
            }));

            setDataSource(formattedOrders);
          });
      }
    };

    fetchData();
  }, [isAuthenticated]);

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [initialValues, form]);

  const onFinish = (values) => {
    const { email, phone, address } = values;

    try {
      axios
        .put(`${PATH.updateProfile}/${user.username}`, {
          email,
          phone,
          address,
        })
        .then((res) => {
          if (res.data.success) {
            notification.success({
              message: res.data.message,
              description: "success",
            });
            // setIsAuthenticated(true);
            setUser({ ...user, email, phone, address });
            navigate("/customer/profile");
          } else {
            notification.error({
              message: res.data.message,
              description: "error",
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      title: "Order ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Order Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Total Amount",
      dataIndex: "total_price",
      key: "total_price",
    },

    {
      title: "Transport",
      dataIndex: "status",
      key: "status",
    },
  ];

  const data = [
    {
      avatar: '	https://product.hstatic.net/1000344185/product/img_4125_4feb7a360b3b4f00bd2465a85ef2d9e3_small.jpg',
      title: 'Ant Design Title 1',
      quantity: 2,
      price: <p><del>440,000₫</del>400,000₫</p>,
      size: 'M'
    },
    {
      avatar: '	https://product.hstatic.net/1000344185/product/img_4125_4feb7a360b3b4f00bd2465a85ef2d9e3_small.jpg',
      title: 'Ant Design Title 2',
      quantity: 2,
      price: <p><del>440,000₫</del>400,000₫</p>,
      size: 'M'
    },
    {
      avatar: '	https://product.hstatic.net/1000344185/product/img_4125_4feb7a360b3b4f00bd2465a85ef2d9e3_small.jpg',
      title: 'Ant Design Title 3',
      quantity: 2,
      price: <p><del>440,000₫</del>400,000₫</p>,
      size: 'M'
    },
    {
      avatar: '	https://product.hstatic.net/1000344185/product/img_4125_4feb7a360b3b4f00bd2465a85ef2d9e3_small.jpg',
      title: 'Ant Design Title 4',
      quantity: 2,
      price: <p><del>440,000₫</del>400,000₫</p>,
      size: 'M'
    },
  ];

  return (
    <div className="container profile">
      <h1 className="profile-title">My Profile</h1>
      <Row className="profile-content">
        <Col span={6} className="profile-item">
          <div>
            <h3 className="account-title">Account</h3>
          </div>
          <div>
            <ul style={{ listStyleType: "circle" }}>
              <li>
                <Button
                  style={{ border: "none", marginBottom: 5, fontSize: "15px" }}
                  onClick={() => {
                    navigate("/customer/profile");
                  }}
                >
                  Account information
                </Button>
              </li>

              <li>
                <Button
                  style={{ border: "none", marginBottom: 5, fontSize: "15px" }}
                  onClick={() => {
                    navigate("/customer/order");
                  }}
                >
                  Order
                </Button>
              </li>

              <li>
                <Button
                  style={{ border: "none", marginBottom: 5, fontSize: "15px" }}
                  onClick={() => {
                    localStorage.clear("token");
                    setIsAuthenticated(false);
                    setUsername("");
                    navigate("/customer");
                  }}
                >
                  Logout
                </Button>
              </li>
            </ul>
          </div>
        </Col>
        <Col span={18} className="profile-item">
          <h3 className="account-title">Account information</h3>
          <Form
            onFinish={onFinish}
            // variant={componentVariant}
            form={form}
            layout="vertical"
          >
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                disabled={true}
                placeholder="Username"
                className="register-input"
              />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="Email" className="register-input" />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
                {
                  pattern: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits!",
                },
              ]}
            >
              <Input placeholder="Phone" className="register-input" />
            </Form.Item>
            <Form.Item
              name="address"
              label="Address"
              rules={[
                {
                  required: true,
                  message: "Please select your address!",
                },
              ]}
            >
              <Select placeholder="Address" options={options} />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: "1%", height: "auto", fontSize: "16px" }}
              >
                Save
              </Button>
              <Button
                color="default"
                variant="solid"
                type="default"
                onClick={() => {
                  form.setFieldsValue(initialValues);
                }}
                style={{ height: "auto", fontSize: "16px" }}
              >
                Cancel
              </Button>
            </Form.Item>
          </Form>

          <div style={{ paddingTop: 30 }} className="customer_order_list">
            <h3 className="account-title">List of latest order</h3>
            {/* <Table
              pagination={{ pageSize: 3 }}
              dataSource={dataSource}
              columns={columns}
              rowKey={"id"}
              expandable={{
                expandedRowRender: (record) => (
                  <List
                    itemLayout="horizontal"
                    dataSource={listData}
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
                ),
                rowExpandable: (record) => record.name !== 'Not Expandable',
                expandIcon: ({ expanded, onExpand, record }) =>
                  expanded ? (
                    <CaretUpOutlined onClick={e => onExpand(record, e)} />
                  ) : (
                    <CaretDownOutlined onClick={e => onExpand(record, e)} />
                  )
              }}
            /> */}
            <List
              header={<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20 }}>
                <div>delivery date: 2024</div>
                <div style={{ textAlign: 'right', fontSize: 20, color: 'gray' }}><TruckOutlined style={{ marginRight: 10 }} />Successful delivery</div>
              </div>}
              footer={<div style={{ textAlign: 'right', fontSize: 20, display: 'flex', justifyContent: 'space-between' }}>
                <Button color="danger" variant="solid">
                  Feedback
                </Button>
                <p><b style={{ marginRight: 10 }}>Total:</b> <span>200</span></p>
              </div>}
              itemLayout="horizontal"
              dataSource={data}
              bordered
              style={{ marginBottom: 10 }}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<img src={item.avatar} alt="" style={{ width: '100%' }} />}
                    title={item.title + ' - Size: ' + item.size}
                    description={'x' + item.quantity}
                  />
                  <div>{item.price}</div>
                </List.Item>
              )}
            />

          </div>
        </Col>
      </Row>
    </div>
  );
};

export default User;
