import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link, } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Destinations",
            key: "/destinations",
            icon: <ShopOutlined />,
          },
          {
            label: "Counter",
            key: "/counter",
            icon: <ShoppingCartOutlined />,
          },
        ]}
      />
    </div>
  );
}
export default SideMenu;
