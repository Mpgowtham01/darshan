import React, { useState } from "react";
import {
  HomeOutlined,
  UnorderedListOutlined,
  SlackOutlined,
  SnippetsOutlined,
  TeamOutlined,
  UserAddOutlined,
  UserOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import { Button, Drawer, Layout, Menu } from "antd";

//style
import "../../components/Css/sass/SideBar.scss";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <div className="sidebarcontent mt-5 pb-5 ">
      <div
        className="mobileView"
        style={{
          backgroundColor: "#6e808e",
          minHeight: "100vh",
          marginTop: "5%",
        }}>
        <Button
          type="primary"
          onClick={showDrawer}
          style={{ position: "absolute", margin: "16px" }}>
          Open
        </Button>
        <Drawer
          placement="left"
          onClose={onClose}
          visible={visible}
          width={300}
          closable={false}>
          <div className="logo mt-5">
            {" "}
            <img
              src="images/footerlogo.png"
              width={150}
              height={50}
              alt="Footer logo"></img>{" "}
            <button className="close-btn" onClick={closeDrawer}>
              X
            </button>
          </div>
          <Menu
            className="side-menu"
            theme=""
            defaultSelectedKeys={["1"]}
            mode="inline"
            style={{ backgroundColor: "#6e808e" }}>
            <Menu.Item key="/dashboard">
              <HomeOutlined />
              <span>Dashboard</span>
              <Link to="/dashboard" />
            </Menu.Item>
            <SubMenu
              className="submenu"
              key="sub1"
              title={
                <span>
                  <UnorderedListOutlined />
                  &nbsp; &nbsp;Temple
                </span>
              }
              style={{ backgroundColor: "#6e808e" }}>
              <Menu.Item key="/templelist">
                <PieChartOutlined />
                <span>TempleList</span>
                <Link to="/add-temple-list" />
              </Menu.Item>
              <Menu.Item key="/maingod">
                <PieChartOutlined />
                <span>Maingod</span>
                <Link to="/maingod-list" />
              </Menu.Item>
              <Menu.Item key="/p">
                <PieChartOutlined />
                <span>Pariharam</span>
                <Link to="/pariharam-list" />
              </Menu.Item>
              <Menu.Item key="/country-list">
                <PieChartOutlined />
                <span>CountryList</span>
                <Link to="/country-list" />
              </Menu.Item>
              <Menu.Item key="/state">
                <PieChartOutlined />
                <span>State</span>
                <Link to="/state" />
              </Menu.Item>
              <Menu.Item key="/b">
                <PieChartOutlined />
                <span>District</span>
                <Link to="/district-list" />
              </Menu.Item>
              <Menu.Item key="/cddd">
                <PieChartOutlined />
                <span>City</span>
                <Link to="/CityList" />
              </Menu.Item>
              <Menu.Item key="/d">
                <PieChartOutlined />
                <span>Area</span>
                <Link to="/AreaList" />
              </Menu.Item>
              <Menu.Item key="/a">
                <SnippetsOutlined />
                <span>Amenity</span>
                <Link to="/amenities" />
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="/Festival">
              <SlackOutlined />
              <span>Festivals</span>
              <Link to="/Festival" />
            </Menu.Item>

            <Menu.Item key="/Aboutus">
              <SnippetsOutlined />
              <span>About us</span>
              <Link to="/about-list" />
            </Menu.Item>

            <Menu.Item key="/eventAndBlogs">
              <SnippetsOutlined />
              <span>Event & Blogs</span>
              <Link to="/blog-list" />
            </Menu.Item>

            <SubMenu
              className="submenu"
              key="sub2"
              title={
                <span>
                  <UserAddOutlined />
                  Event & Blog
                </span>
              }>
              <Menu.Item key="/Event">
                <SnippetsOutlined />
                <span>Event</span>
                <Link to="/blog-list" />
              </Menu.Item>

              <Menu.Item key="/Blogs">
                <SnippetsOutlined />
                <span>Blogs</span>
                <Link to="/blog-list" />
              </Menu.Item>
            </SubMenu>

            {/* start */}
            <Menu.Item key="/g">
              <TeamOutlined />
              <span>User</span>
              <Link to="/userlist" />
            </Menu.Item>

            <SubMenu
              className="submenu"
              key="sub3"
              title={
                <span>
                  <UserAddOutlined />
                  &nbsp; &nbsp;Vendor
                </span>
              }
              style={{ backgroundColor: "#6e808e" }}>
              <Menu.Item key="/h">
                <span className="ms-4">Vendor Details</span>
                <Link to="vendor-details" />
              </Menu.Item>
              <SubMenu
                className="submenu"
                key="sub4"
                title={<span>&nbsp; &nbsp; &nbsp; &nbsp;Categories</span>}
                style={{ backgroundColor: "#6e808e" }}>
                <Menu.Item key="/main">
                  <span>Main-Categories</span>
                  <Link to="/main-categories" />
                </Menu.Item>
                <Menu.Item key="/sub">
                  <span>Sub-Categories</span>
                  <Link to="/sub-categories" />
                </Menu.Item>
              </SubMenu>
            </SubMenu>

            {/* end */}

            <Menu.Item key="/i">
              <UserOutlined />
              <span>Iyer</span>
              <Link to="/iyerlist" />
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
      <div className="mobileHide" style={{ backgroundColor: "#6e808e" }}>
        <Sider
          // collapsible
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
          style={{
            backgroundColor: "#6e808e",

            left: 0,
          }}>
          <div className="logo"></div>
          <Menu
            className="side-menu mt-4"
            theme=""
            defaultSelectedKeys={["1"]}
            mode="inline"
            style={{ backgroundColor: "#6e808e" }}>
            {/* <Menu.Item key="/dd">
              <img
                src="images/footerlogo.png"
                width={150}
                height={50}
                alt="logo"></img>
            </Menu.Item> */}
            <Menu.Item key="/dashboard">
              <HomeOutlined />
              <span>Dashboard</span>
              <Link to="/dashboard" />
            </Menu.Item>
            <SubMenu
              className="submenu"
              key="sub1"
              title={
                <span>
                  <UnorderedListOutlined />
                  &nbsp; &nbsp;Temple{" "}
                </span>
              }
              style={{ backgroundColor: "#6e808e" }}>
              <Menu.Item key="/templelist">
                <PieChartOutlined />
                <span>TempleList</span>
                <Link to="/temple" />
              </Menu.Item>
              <Menu.Item key="/maingod">
                <PieChartOutlined />
                <span>Maingod</span>
                <Link to="/maingod-list" />
              </Menu.Item>
              <Menu.Item key="/p">
                <PieChartOutlined />
                <span>Pariharam</span>
                <Link to="/pariharam-list" />
              </Menu.Item>
              <Menu.Item key="/country-list">
                <PieChartOutlined />
                <span>CountryList</span>
                <Link to="/country-list" />
              </Menu.Item>
              <Menu.Item key="/State-list">
                <PieChartOutlined />
                <span>StateList</span>
                <Link to="/State-list" />
              </Menu.Item>
              <Menu.Item key="/b">
                <PieChartOutlined />
                <span>District</span>
                <Link to="/district-list" />
              </Menu.Item>
              <Menu.Item key="/c">
                <PieChartOutlined />
                <span>City</span>
                <Link to="/city-list" />
              </Menu.Item>
              <Menu.Item key="/d">
                <PieChartOutlined />
                <span>Area</span>
                <Link to="/area-list" />
              </Menu.Item>
              <Menu.Item key="/sp">
                <PieChartOutlined />
                <span>Speciality</span>
                <Link to="/speciality" />
              </Menu.Item>
              <Menu.Item key="/a">
                <PieChartOutlined />
                <span>Amenity</span>
                <Link to="/amenities" />
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="/Festival">
              <SlackOutlined />
              <span>Festivals</span>
              <Link to="/Festival" />
            </Menu.Item>
            <Menu.Item key="/f">
              <SnippetsOutlined />
              <span>Blog</span>
              <Link to="/blog-list" />
            </Menu.Item>
            <Menu.Item key="/vf">
              <SnippetsOutlined />
              <span>AddFunction</span>
              <Link to="/viewFunction" />
            </Menu.Item>
            <Menu.Item key="/Aboutus">
              <SnippetsOutlined />
              <span>About us</span>
              <Link to="/about-list" />
            </Menu.Item>
            {/* <Menu.Item key="/g">
              <TeamOutlined />
              <span>User</span>
              <Link to="/userlist" />
            </Menu.Item> */}
            <SubMenu
              className="submenu"
              key="sub3"
              title={
                <span>
                  &nbsp;
                  <UserOutlined />
                  &nbsp;User
                </span>
              }
              style={{ backgroundColor: "#6e808e" }}>
              <Menu.Item key="/UL">
                <span>User List</span>
                <Link to="/userlist" />
              </Menu.Item>
              <Menu.Item key="/UD">
                <span>User Dashboard</span>
                <Link to="/userdashboad" />
              </Menu.Item>
            </SubMenu>
            <SubMenu
              className="submenu"
              key="sub2"
              title={
                <span>
                  <UserAddOutlined />
                  &nbsp; &nbsp;Vendor
                </span>
              }
              style={{ backgroundColor: "#6e808e" }}>
              <Menu.Item key="/h">
                <span>Vendor Details</span>
                <Link to="/vendor-details" />
              </Menu.Item>
              <Menu.Item key="/vd">
                <span>Vendor Dashboard</span>
                <Link to="/vendordashboad" />
              </Menu.Item>
              <SubMenu
                className="submenu"
                key="sub3"
                title={<span>&nbsp; &nbsp; &nbsp; &nbsp;Categories</span>}
                style={{ backgroundColor: "#6e808e" }}>
                <Menu.Item key="/main">
                  <span>Main-Categories</span>
                  <Link to="/main-categories" />
                </Menu.Item>
                <Menu.Item key="/sub">
                  <span>Sub-Categories</span>
                  <Link to="/sub-categories" />
                </Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              className="submenu"
              key="sub4"
              title={
                <span>
                  &nbsp;
                  <UserOutlined />
                  &nbsp; Iyer
                </span>
              }
              style={{ backgroundColor: "#6e808e" }}>
              <Menu.Item key="/main1">
                <span>Iyer list</span>
                <Link to="/iyerlist" />
              </Menu.Item>
              <Menu.Item key="/sub1">
                <span>Iyer Dashboard</span>
                <Link to="/iyerdashboad" />
              </Menu.Item>
              <Menu.Item key="/ID">
                <span>Iyer Details</span>
                <Link to="/iyerdetails" />
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </div>
    </div>
  );
}

export default SideBar;
