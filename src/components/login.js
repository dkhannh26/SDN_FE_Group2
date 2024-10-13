import axios from "axios";
import React, { useState } from "react";
import { PATH } from "../config/api.config";

import { Button, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
const LoginPopover = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    // const { email, password } = values;
    // alert(this.state.value);
    try {
      let res = axios
        .post(`${PATH.login}`, {
          username,
          password,
        })
        .then((res) => {
          console.log(res.data);
          if (res && res.data.EC === 0) {
            localStorage.setItem("username", res.data.user.username);

            notification.success({
              message: res.data.message,
              description: "success",
            });
            navigate("/account");
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
    //   .catch(() => {
    //     console.log("error");
    //   });
    // const res = await loginApi(email, password);
    // debugger;

    // if (res && res.data.EC === 0) {
    //   localStorage.setItem("access_token", res.data.accessToken);
    //   notification.success({
    //     message: "LOGIN USER",
    //     description: "success",
    //   });
    //   setAuth({
    //     isAuthenticated: true,
    //     user: {
    //       email: res.data.user.email ?? "",
    //       name: res.data.user.name ?? "",
    //     },
    //   });
    //   navigate("/");
    // } else {
    //   notification.error({
    //     message: "LOGIN USER",
    //     description: res?.EM ?? "error",
    //   });
    // }
    // console.log("Success:", res);
  };

  return (
    <form className="login-pop" onSubmit={onSubmit}>
      <div className="login-pop-title">
        <p className="login-pop-title__1">Đăng nhập tài khoản</p>
        <p className="login-pop-title__2 text">
          Nhập email và mật khẩu của bạn:
        </p>
      </div>
      <div className="login-pop-input">
        <input
          name="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label className="text">Username</label>
      </div>
      <div className="login-pop-input">
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
        />
        <label className="text">Password</label>
      </div>
      <div className="login-pop-recaptcha">
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
      <button type="submit" className="login-pop-btn">
        <span>ĐĂNG NHẬP</span>
      </button>
      <div className="login-pop-navigate text">
        <p>
          Khách hàng mới?
          <a href="/"> Tạo tài khoản</a>
        </p>
        <p>
          Quên mật khẩu?
          <a href="/"> Khôi phục mật khẩu</a>
        </p>
      </div>
    </form>
  );
};

export default LoginPopover;
