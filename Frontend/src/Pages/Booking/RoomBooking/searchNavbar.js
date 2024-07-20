import React, { useState } from "react";
import "./searchNavbar.scss";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Menu,
  Row,
  Select,
} from "antd";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Navbars() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const increase = (type, e) => {
    e.stopPropagation();
    if (type === "adults") {
      setAdults(adults + 1);
    } else if (type === "children") {
      setChildren(children + 1);
    } else if (type === "rooms") {
      setRooms(rooms + 1);
    }
  };

  const decrease = (type, e) => {
    e.stopPropagation();
    if (type === "adults" && adults > 1) {
      setAdults(adults - 1);
    } else if (type === "children" && children > 0) {
      setChildren(children - 1);
    } else if (type === "rooms" && rooms > 1) {
      setRooms(rooms - 1);
    }
  };
  const options = [
    { value: "1", label: "BANGALORE" },
    { value: "2", label: "CHENNAI" },
    { value: "3", label: "GOA" },
    { value: "4", label: "COORG" },
    { value: "5", label: "MADURAI" },
    { value: "6", label: "KOVILPATTI" },
  ];
  const { RangePicker } = DatePicker;

  const menu = (
    <Menu style={{ width: "280px", border: "1px solid #ccc" }}>
      <Menu.Item key="1">
        <Row>
          <Col md={12} lg={10} style={{ fontWeight: "700" }}>
            Adult
          </Col>
          <Col md={12} lg={14}>
            <Button onClick={(e) => decrease("adults", e)}>
              <AiOutlineMinus />
            </Button>
            &nbsp;&nbsp;
            {adults}&nbsp;&nbsp;
            <Button onClick={(e) => increase("adults", e)}>
              <AiOutlinePlus />
            </Button>
          </Col>
        </Row>
      </Menu.Item>
      <Menu.Item key="2">
        <Row>
          <Col md={12} lg={10} style={{ fontWeight: "700" }}>
            Children
          </Col>
          <Col md={12} lg={14}>
            <Button onClick={(e) => decrease("children", e)}>
              <AiOutlineMinus />
            </Button>
            &nbsp;&nbsp;
            {children}&nbsp;&nbsp;
            <Button onClick={(e) => increase("children", e)}>
              <AiOutlinePlus />
            </Button>
          </Col>
        </Row>
      </Menu.Item>
      <Menu.Item key="3">
        <Row>
          <Col md={12} lg={10} style={{ fontWeight: "700" }}>
            Rooms
          </Col>
          <Col md={12} lg={14}>
            <Button onClick={(e) => decrease("rooms", e)}>
              <AiOutlineMinus />
            </Button>
            &nbsp;&nbsp;
            {rooms}&nbsp;&nbsp;
            <Button onClick={(e) => increase("rooms", e)}>
              <AiOutlinePlus />
            </Button>
          </Col>
        </Row>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <nav className="custom-navbar">
        {/* <div className="navbar-container">
          <img
            src="https://pages.trip.com/images/group-home/trip-intl-light.png"
            style={{ width: "130px", height: "28px", color: "white" }}
          />
          <div>
            <button className="button_navbar">Sign in / Register</button>
          </div>
        </div> */}
        {/* <div className="trip_homepage">
          <p>Your Trip Starts Here</p>
        </div> */}
        {/* <div className="payment_homepage">
          <div className="aa"></div>
          <p>Secure Payment</p>&nbsp;
          <Divider type="vertical" className="divider" /> &nbsp;
          <div className="bb"></div>
          <p>Support Assistant</p>
        </div> */}
        <div className="trip_card">
          <Card className="search_navbar_css">
            <Row gutter={16}>
              <Col span={7}>
                <label style={{ fontWeight: "700", fontSize: "15px" }}>
                  Where
                </label>
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Search to Select"
                  className="select_value"
                  optionFilterProp="children"
                  filterOption={(input, option) => {
                    console.log("Input:", input);
                    console.log("Option:", option);
                    return option.label
                      ?.toLowerCase()
                      .includes(input.toLowerCase());
                  }}
                  filterSort={(optionA, optionB) =>
                    optionA.label
                      ?.toLowerCase()
                      .localeCompare(optionB.label.toLowerCase())
                  }
                >
                  {options.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col span={7}>
                <label style={{ fontWeight: "700", fontSize: "15px" }}>
                  Date
                </label>
                <RangePicker
                  style={{ width: "230px" }}
                  className="select_value"
                />
              </Col>
              <Col span={7}>
                <label style={{ fontWeight: "700", fontSize: "15px" }}>
                  Add Guests
                </label>
                <Dropdown
                  overlay={menu}
                  trigger={["click"]}
                  className="select_value"
                >
                  <Button>
                    {adults} Adults . {children} Children . {rooms} Rooms
                  </Button>
                </Dropdown>
              </Col>
              <Col span={3}>
                <br />
                <Button
                  style={{ background: "#3264ff", color: "white" }}
                  className="select_value"
                >
                  <BiSearch
                    style={{ position: "relative", top: "3px", color: "white" }}
                  />
                  &nbsp;Search
                </Button>
              </Col>
            </Row>
          </Card>
        </div>
      </nav>
    </div>
  );
}

export default Navbars;
