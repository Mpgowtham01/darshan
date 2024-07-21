import React, { useState, useEffect } from "react";
import { Table, Modal } from "antd";
import "antd/dist/antd.min.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AiFillEye, AiOutlineCloseCircle } from "react-icons/ai";

export default function EnquiryList() {
  const [originalData, setOriginalData] = useState([]);
  const [show, setShow] = useState(false);
  const [filteredData, setFilteredData] = useState([
    {
      firstName: "John",
      lastName: "David",
      email: "johndavid@gmail.com",
      phoneNumber: "9876543112",
      status: "pending",
    },
    {
      firstName: "Bob",
      lastName: "David",
      email: "john@gmail.com",
      phoneNumber: "9876543112",
      status: "accept",
    },
  ]);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "x",
      editable: true,
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "x",
      editable: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "x",
      editable: true,
      render: (_, text, record) => (
        <>
          <div>
            {text.status === "pending" ? (
              <p className="mb-0">
                {text.email.replace(/(?<=.).(?=[^@]*?@)/g, "*")}
              </p>
            ) : (
              <p className="mb-0">{text.email}</p>
            )}
          </div>
        </>
      ),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "x",
      editable: true,
      render: (_, text, record) => (
        <>
          <div>
            {text.status === "pending" ? (
              <p className="mb-0">{text.phoneNumber.replace(/\d(?!\d{0,3}$)/gm, "*")}</p>
            ) : (
              <p className="mb-0">{text.phoneNumber}</p>
            )}
          </div>
        </>
      ),
    },
    {
      title: "Activity",
      dataIndex: "",
      key: "x",
      render: (_, text, record) => (
        <>
          {text.status === "pending" ? (
            <div>
              <AiFillEye
                style={{ cursor: "pointer", fontSize: 20, marginRight: 10 }}
                onClick={info}
              />
            </div>
          ) : (
            <div>
              <AiFillEye
                style={{ cursor: "pointer", fontSize: 20, marginRight: 10 }}
                onClick={()=>success(text)}
              />
            </div>
          )}
        </>
      ),
    },
  ];

  const info = () => {
    Modal.info({
      content: (
        <div>
          <p>If you want contact details for this user, </p>
          <p>
            please contact{" "}
            <span style={{ fontWeight: "bold" }}>+91-9791036735</span>
          </p>
        </div>
      ),
      onOk() {},
    });
  };

  const success = (text) => {
    Modal.success({
      title:"Details for user",
      content: (
        <div>
          <hr/>
          <p><span style={{fontWeight:"bold"}}>Name: &nbsp;</span>{`${text.firstName} ${text.lastName}`}</p>
          <p><span style={{fontWeight:"bold"}}>Email: &nbsp;</span>{text.email}</p>
          <p><span style={{fontWeight:"bold"}}>Contact: &nbsp;</span>{text.phoneNumber}</p>
        </div>
      ),
      onOk() {},
    });
  };
  return (
    <div>
      <h4
        style={{
          fontWeight: 700,
          fontFamily: "Playfair Display, serif",
          marginBottom: 20,
        }}
      >
        Enquiry List
      </h4>
      <div className="course-list table__container-list-table">
        <Table
          columns={columns}
          rowKey={(record, index) => index}
          dataSource={filteredData}
          pagination={{
            showSizeChanger: true,
            position: ["bottomCenter"],
          }}
          className="mt-2"
        />
      </div>
    </div>
  );
}
