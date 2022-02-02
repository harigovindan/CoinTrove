import React, { useState, useEffect } from "react";
import { Row, Col, Dropdown, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./appHeader.scss";
import { AppRoutes } from "../../routes";
import logo from "../../assets/images/logo.jpeg";
import ProfileImage from "../ProfileImage";
import {
  UserOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

function AppHeader() {
  const navigate = useNavigate();

  const location = useLocation();

  const [pathname, setPathname] = useState(location.pathname);

  const [showHeader, setShowHeader] = useState(false);

  const handleLogout = () => {
    navigate(AppRoutes.LOGIN);
  };

  const hideHeaderRoutes = [];

  const menu = (
    <Menu className="app-header__profile-dropdown-menu">
      <Menu.Item
        key="0"
        className={`app-header__profile-menu-item ${
          pathname === AppRoutes.USER_PROFILE ? "active" : ""
        }`}
      >
        <Link to={AppRoutes.USER_PROFILE}>
          <span>
            <UserOutlined />
          </span>
          <span>My Profile</span>
        </Link>
      </Menu.Item>
      <Menu.Item
        key="1"
        className={`app-header__profile-menu-item ${
          pathname === AppRoutes.MY_FUNDS ? "active" : ""
        }`}
      >
        <Link to={AppRoutes.MY_FUNDS}>
          <span>
            <ShoppingCartOutlined />
          </span>
          <span>My Baskets</span>
        </Link>
      </Menu.Item>
      <Menu.Item
        key="3"
        className="app-header__profile-menu-item"
        onClick={handleLogout}
      >
        <span>
          <LogoutOutlined />
        </span>
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  );

  const menuItems = [
    { route: AppRoutes.DASHBOARD, label: "Dashboard" },
    { route: AppRoutes.FUNDS, label: "Funds" },
    { route: AppRoutes.HOLDINGS, label: "Holdings" },
    { route: AppRoutes.ORDER_HISTORY, label: "Order History" },
    { route: AppRoutes.COIN_TRACKER, label: "Tracker" },
  ];

  useEffect(() => {
    setPathname(location.pathname);
    setShowHeader(() => {
      const item = hideHeaderRoutes.find((_item) =>
        location.pathname.startsWith(_item)
      );
      return !item;
    });
  }, [location]);

  return (
    <div className="app-header" id="app-header">
      <div className="app-header__container">
        <Row align="middle">
          <Col span={1}>
            <Link to={AppRoutes.DASHBOARD}>
              <img src={logo} alt="App Logo" className="app-header__logo" />
            </Link>
          </Col>
          <Col span={13} offset={10} className="text-right">
            <ul className="app-header__menu-items">
              {menuItems.map((item, i) => (
                <Link to={item.route} key={i}>
                  <li
                    className={`app-header__menu-item ${
                      pathname.includes(item.route) ? "active" : ""
                    }`}
                  >
                    <span>{item.label}</span>
                  </li>
                </Link>
              ))}
            </ul>
            <ul className="app-header__profile-items">
              <li className="app-header__profile-dropdown">
                <Dropdown overlay={menu} trigger={["click"]}>
                  <a onClick={(e) => e.preventDefault()}>
                    <ProfileImage name="Krishna Uppili" size="small" />
                  </a>
                </Dropdown>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppHeader;
