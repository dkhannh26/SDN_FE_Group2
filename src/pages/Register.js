import React, { useState } from "react";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  notification,
  Radio,
  Row,
} from "antd";
import "../assets/css/register.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PATH } from "../config/api.config";

const Register = () => {
  const [componentVariant, setComponentVariant] = useState("filled");
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { username, phone, address, email, password } = values;

    // const res = await createUserApi(name, email, password);
    const res = await axios.post(`${PATH.register}`, values);
    if (res.data.success) {
      notification.success({
        message: res.data.message,
        // description: "success",
      });
      //   navigate("/login");
    } else {
      notification.error({
        message: res.data.message,
        description: "error",
      });
    }
    console.log("Success:", res);
  };

  return (
    <Row className="container flex-center">
      <Col span={12} className="register-item">
        <h1 className="register-title">Register</h1>
      </Col>
      <Col span={12} className="register-item">
        <Form
          onFinish={onFinish}
          variant={componentVariant}
          rules={[
            {
              required: true,
              message: "Please fill out this field.",
            },
          ]}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Username" className="register-input" />
          </Form.Item>
          <Form.Item
            name="address"
            rules={[
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <Input placeholder="Address" className="register-input" />
          </Form.Item>
          {/* <Form.Item>
            <Radio.Group>
              <Radio value="Female">Female</Radio>
              <Radio value="Male">Male</Radio>
            </Radio.Group> */}
          {/* </Form.Item> */}
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            {/* <DatePicker
              placeholder="Select birthday"
              className="register-input"
            /> */}
            <Input placeholder="Phone" className="register-input" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="Email" className="register-input" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Password" className="register-input" />
          </Form.Item>
          <div className="login-pop-recaptcha" style={{ fontSize: 14 }}>
            This site is protected by reCAPTCHA and the Google
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Privacy Policy{" "}
            </a>
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Terms of Service{" "}
            </a>
            apply.
          </div>
          <Row>
            <Form.Item>
              <Button
                className="login-pop-btn"
                style={{ width: 120, height: 55, marginTop: 20 }}
                htmlType="submit"
              >
                SIGN UP
              </Button>
            </Form.Item>
          </Row>
          <Form.Item>
            <Button
              style={{ marginTop: 15, color: "black", padding: 0 }}
              type="link"
              href="/customer"
            >
              <ArrowLeftOutlined />
              Back to Home
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
