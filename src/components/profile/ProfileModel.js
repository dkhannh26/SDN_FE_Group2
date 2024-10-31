import React, { useEffect, useState } from "react";
import "../../assets/css/profile.css";
import {
  Button,
  Col,
  Form,
  Input,
  notification,
  Row,
  Select,
  Table,
} from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/context/AuthContext";

import axios from "axios";
import { PATH } from "../../config/api.config";
import { options } from "./../ProvinceData";

const ProfileTable = () => {
  const navigate = useNavigate();

  const { isAuthenticated, setIsAuthenticated, setUsername, user, setUser } =
    useAuth();

  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
  });
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated) {
        await axios.get(`${PATH.profile}/${user.username}`).then((res) => {
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

  return (
    <div className="container profile">
      <Row className="profile-content">
        <Col span={6} className="profile-item">
          <div>
            <ul style={{ listStyleType: "circle" }}></ul>
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
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileTable;
