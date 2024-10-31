import React from "react";

import {
  DownOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Col, Empty, List, Menu, Popover, Row } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/header.css";
import Logo from "../assets/images/logo.webp";
import { getSearchList } from "../services/product/search.service";
import { useAuth } from "./context/AuthContext";
import LoginPopover from "./login";
import { CART_URL } from "../config/url.config";

const Header = () => {
  const [searchFocus, setSearchForcus] = useState(false)
  const [searchList, setSearchList] = useState([])

  const cartPopover = (
    <div className="cart-pop">
      <div className="card-pop-title text">
        <p>GIỎ HÀNG</p>
      </div>
      <Empty
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg01rpxlqIYNzFCaI-E5pwTAji-IFfa9P2Eg&s"
        description="Hiện chưa có sản phẩm"
      />
      <div className="flex-space-between">
        <p className="text">TỔNG TIỀN:</p>
        <p style={{ color: "red", fontWeight: "600", fontSize: 16 }}>0đ</p>
      </div>
      <div className="flex-space-between cart-pop-navigate">
        <button className="login-pop-btn" onClick={() => navigate(CART_URL.INDEX)} >
          <span>XEM GIỎ HÀNG</span>
        </button>
        <button className="login-pop-btn">
          <span>THANH TOÁN</span>
        </button>
      </div>
    </div>
  );

  const items = [
    {
      label: "HOME",
      key: "HOME",
    },
    {
      label: (
        <Link to='/customer/tshirt'>T-SHIRT</Link>
      ),
      key: "T-SHIRT",
    },
    {
      label: (
        <Link to='/customer/pant'>PANTS</Link>
      ),
      key: "PANTS"
    },
    {
      label: (
        <Link to='/customer/shoes'>SHOES</Link>
      ),
      key: "SHOES",
    },
    {
      label: (
        <Link to='/customer/accessory'>ACCESSORIES</Link>
      ),
      key: "ACCESSORIES",
    },

    {
      label: "ABOUT",
      key: "ABOUT",
    },
    {
      label: "EXCHANGE POLICY",
      key: "EXCHANGE POLICY",
    },
    {
      label: "SALE",
      key: "SALE",
    },
  ];

  const navigate = useNavigate()
  const { isAuthenticated, username } =
    useAuth();

  return (
    <div className="header">
      <Row className="top-bar">
        <p className="container">
          Miễn phí vận chuyển với đơn hàng trên 500K. Hàng pre-order còn được
          giảm thêm 5%.
        </p>
      </Row>
      <Row className="container header-middle flex-center">
        <Col span={4}>
          <img src={Logo} alt="logo" className="logo" />
        </Col>
        <Col span={9} style={{ position: "relative" }}>
          <div className="flex-center">
            <input
              onFocus={() => {
                setSearchForcus(true)

              }}
              onBlur={() => {
                setTimeout(() => setSearchForcus(false), 100)
              }}
              onChange={(e) => {
                let text = e.target.value
                if (!text) setSearchList([])
                if (text.startsWith(" ")) {
                  text = text.trimStart();
                } else {
                  if (text) {
                    getSearchList(text, setSearchList)
                  }
                }
              }}
              pattern="^[^\s].*"
              name="search"
              placeholder="Tìm kiếm sản phẩm..."
              className="search-input"
              autocomplete="off"
            />
            <div className="search-btn">
              <SearchOutlined />
            </div>
          </div>
          {searchFocus ? <div className="search-item">
            {
              searchList?.tshirts && (searchList?.tshirts?.length !== 0) ?
                <List
                  itemLayout="horizontal"
                  dataSource={searchList?.tshirts}
                  renderItem={(item, index) => (
                    <List.Item
                      style={{ cursor: 'pointer' }}
                    >
                      <List.Item.Meta
                        onClick={() => {
                          console.log('ao')
                          navigate(`/customer/tshirt/${item.tshirtId}`)
                        }}
                        avatar={<img src={'http://localhost:3000' + item.tshirtImg} alt="" />}
                        title={<p>{item.tshirtName}</p>}
                        description=
                        {item.tshirtDiscountPercent ?
                          <p>
                            {(item.tshirtPrice - (item.tshirtPrice * item.tshirtDiscountPercent / 100)).toLocaleString('vi-VN')}₫
                            <del>{(item.tshirtPrice).toLocaleString('vi-VN')}₫</del>
                          </p>
                          :
                          <p>
                            {(item.tshirtPrice).toLocaleString('vi-VN')}₫
                          </p>
                        }
                      />
                    </List.Item>
                  )}
                /> : <div></div>
            }
            {
              searchList?.pants && (searchList?.pants?.length !== 0) ?
                <List
                  itemLayout="horizontal"
                  dataSource={searchList?.pants}
                  renderItem={(item, index) => (
                    <List.Item
                      style={{ cursor: 'pointer' }}
                    >
                      <List.Item.Meta
                        onClick={() => {
                          console.log('ao')
                          navigate(`/customer/pant/${item.pantId}`)
                        }}
                        avatar={<img src={'http://localhost:3000' + item.pantImg} alt="" />}
                        title={<p>{item.pantName}</p>}
                        description=
                        {item.pantDiscountPercent ?
                          <p>
                            {(item.pantPrice - (item.pantPrice * item.pantDiscountPercent / 100)).toLocaleString('vi-VN')}₫
                            <del>{(item.pantPrice).toLocaleString('vi-VN')}₫</del>
                          </p>
                          :
                          <p>
                            {(item.pantPrice).toLocaleString('vi-VN')}₫
                          </p>
                        }

                      />
                    </List.Item>
                  )}
                /> : ''
            }
            {
              searchList?.shoesList && (searchList?.shoesList?.length !== 0) ?
                <List
                  itemLayout="horizontal"
                  dataSource={searchList?.shoesList}
                  renderItem={(item, index) => (
                    <List.Item
                      style={{ cursor: 'pointer' }}
                    >
                      <List.Item.Meta
                        onClick={() => {
                          navigate(`/customer/shoes/${item.shoesId}`)
                        }}
                        avatar={<img src={'http://localhost:3000' + item.shoesImg} alt="" />}
                        title={<p >{item.shoesName}</p>}
                        description=
                        {item.shoesDiscountPercent ?
                          <p>
                            {(item.shoesPrice - (item.shoesPrice * item.shoesDiscountPercent / 100)).toLocaleString('vi-VN')}₫
                            <del>{(item.shoesPrice).toLocaleString('vi-VN')}₫</del>
                          </p>
                          :
                          <p>
                            {(item.shoesPrice).toLocaleString('vi-VN')}₫
                          </p>
                        }
                      />
                    </List.Item>
                  )}
                /> : ''
            }
            {
              searchList?.accessories && (searchList?.accessories?.length !== 0) ?
                <List
                  itemLayout="horizontal"
                  dataSource={searchList?.accessories}
                  renderItem={(item, index) => (
                    <List.Item
                      style={{ cursor: 'pointer' }}
                    >
                      <List.Item.Meta
                        onClick={() => {
                          navigate(`/customer/accessory/${item.accessoryId}`)
                        }}
                        avatar={<img src={'http://localhost:3000' + item.accessoryImg} alt="" />}
                        title={<p>{item.accessoryName}</p>}
                        description=
                        {item.accessoryDiscountPercent ?
                          <p>
                            {(item.accessoryPrice - (item.accessoryPrice * item.accessoryDiscountPercent / 100)).toLocaleString('vi-VN')}₫
                            <del>{(item.accessoryPrice).toLocaleString('vi-VN')}₫</del>
                          </p>
                          :
                          <p>
                            {(item.accessoryPrice).toLocaleString('vi-VN')}₫
                          </p>
                        }
                      />
                    </List.Item>
                  )}
                /> : ''
            }
          </div> : ''}

        </Col>
        <Col span={8} className="login-cart flex-center">
          {isAuthenticated ? (
            <Popover
              content={LoginPopover}
              trigger="click"
              className="login-box flex-center "
            >
              <div className="user-icon">
                <UserOutlined className="icon" />
              </div>
              <div className="login">
                <p style={{ color: "#333333" }}>Tài khoản của</p>
                <p style={{ fontWeight: 500 }}>
                  {username} <DownOutlined />
                </p>
              </div>
            </Popover>
          ) : (
            <Popover
              content={LoginPopover}
              trigger="click"
              className="login-box flex-center "
            >
              <div className="user-icon">
                <UserOutlined className="icon" />
              </div>
              <div className="login">
                <p style={{ color: "#333333" }}>Đăng nhập / Đăng ký</p>
                <p style={{ fontWeight: 500 }}>
                  Tài khoản của tôi <DownOutlined />
                </p>
              </div>
            </Popover>
          )}
          <Popover
            placement="bottomRight"
            content={cartPopover}
            trigger="click"
            className="cart flex-center"
          >
            <Badge count={0} showZero style={{ backgroundColor: "#333333" }}>
              <ShoppingOutlined className="icon" />
            </Badge>
            <p style={{ marginLeft: 10 }}>Giỏ hàng</p>
          </Popover>
        </Col>
      </Row>
      <Row className="container header-menu">
        <Menu mode="horizontal" items={items} />
      </Row>
    </div >
  );
};

export default Header;
