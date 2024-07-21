import React, { Suspense, useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import routes from "./Routers";
import HeaderNavBar from "../components/HeaderNavBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { Layout, Menu } from "antd";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "../../src/components/Css/sass/SideBar.scss";
import Errorpg1 from "../Pages/Errorpage/Errorpg1";
import Vendorsidebar from "../Pages/Vendor/Vendorsidebar";

function DefaultLayout() {
  const [show, setShow] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const { push } = useNavigate();

  const iconChange = () => {
    setShow(!show);
  };
  const { Header, Content, Sider } = Layout;
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
      getItem("district", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    ]),
    getItem("Team", "sub2", <TeamOutlined />, [
      getItem("Team 1", "6"),
      getItem("Team 2", "8"),
    ]),
    getItem("Files", "9", <FileOutlined />),
  ];

  return (
    <div>
      <Layout>
        <HeaderNavBar />
        <Layout>
          {/* <SideBar
            open={show}
            handleChange={iconChange}
            style={{ backgroundColor: "red" }}
          /> */}
          <Vendorsidebar/>
          <Layout>
            <Content>
              <div className={`${show === true && "main-content mt-5"}`}>
                <Suspense>
                  <Routes>
                    {routes.map((route, idx) => {
                      return (
                        route.element && (
                          <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            element={<route.element />}
                          />
                        )
                      );
                    })}
                    <Route
                      path="/"
                      element={<Navigate to={"/home-page"} replace={true} />}
                    />
                    <Route path="*" element={<Errorpg1 />} />
                  </Routes>
                </Suspense>
              </div>
            </Content>
          </Layout>
        </Layout>
        {/* <Footer /> */}
      </Layout>
    </div>
  );
}

export default DefaultLayout;
