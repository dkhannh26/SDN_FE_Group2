import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { PATH } from "../config/api.config";
import axios from "axios";
import { Button, Result } from "antd";
// import "../assets/css/register.success.css";

const SuccessRegister = () => {
  const { token } = useParams();

  const [message, setMessage] = useState("");
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const res = await axios.post(`${PATH.register}/${token}`, token);
        if (isMounted) {
          setMessage(res.data.message);
        }

        // console.log(res.data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Result
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
      status="success"
      title="Your account has been created successfully"
      subTitle=""
      extra={[
        <Button href="/customer" type="primary" key="console">
          Back to home page
        </Button>,
        // <Button key="buy">Close this page</Button>,
      ]}
    />
  );
};

SuccessRegister.propTypes = {};

export default SuccessRegister;
