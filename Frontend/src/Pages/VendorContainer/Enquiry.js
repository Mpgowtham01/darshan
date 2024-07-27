import React, { useState } from "react";
import { Row, Card, Col, Button, Dropdown, NavDropdown } from "react-bootstrap";
import { Table } from "antd";

import "./index.scss";

function Enquiry() {
  const [data, setData] = useState([]);

  const columns = [
    {
      title: "#",
      dataIndex: "#",
    },
    {
      title: "Name",
      dataIndex: "Name",
    },
    {
      title: "Mobile",
      dataIndex: "Mobile",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Function Date  ",
      dataIndex: "FunctionDate",
    },
    {
      title: "Function Type ",
      dataIndex: "FunctionType",
    },
    {
      title: "Function Time ",
      dataIndex: "FunctionTime",
    },
  ];
  return (
    <div>
      <Row className="enquiryrow">
        <Col>
          <h4 style={{ color: "red" }}>List of Enquiry</h4>
        </Col>
        <Col>
          {" "}
          <p className="paratagenq">
            If you want to see enquiry need to be purchase package.
          </p>
          {/* <br/> */}
          <div className="enqbutton mb-3">
            <Button variant="danger">Show List</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="enquirytable">
          <div className="data-list-table">
            <Table
              scroll={{ x: true }}
              columns={columns}
              dataSource={data}
              className="mt-2"
            />
          </div>
        </div>
      </Row>
    </div>
  );
}

export default Enquiry;
