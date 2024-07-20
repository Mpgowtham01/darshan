import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "../trainer.css";
import { Table } from "antd";
import "antd/dist/antd.min.css";

export default function StudentList() {
  const [courseDetails, setCourseDetails] = useState([
    {
      title: "Tirupavvai",
      StudentList: [
        {
          firstName: "John",
          lastName: "David",
          email: "johndavid@gmail.com",
          phoneNumber: "9876543210",
        },
        {
          firstName: "Bob",
          lastName: "David",
          email: "bobdavid@gmail.com",
          phoneNumber: "9876543210",
        },
      ],
    },
    {
      title: "Lakshmi Nrisimha karavalambam",
      StudentList: [
        {
          firstName: "John",
          lastName: "David",
          email: "johndavid@gmail.com",
          phoneNumber: "9876543210",
        },
        {
          firstName: "Bob",
          lastName: "David",
          email: "bobdavid@gmail.com",
          phoneNumber: "9876543210",
        },
      ],
    },
  ]);
  const [showIndex, setshowIndex] = useState("");

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
              <p className="mb-0">
                {text.phoneNumber.replace(/\d(?!\d{0,3}$)/gm, "*")}
              </p>
            ) : (
              <p className="mb-0">{text.phoneNumber}</p>
            )}
          </div>
        </>
      ),
    },
  ];

  return (
    <div>
      <h4
        style={{
          fontWeight: 700,
          fontFamily: "Playfair Display, serif",
          marginBottom: 20,
        }}
      >
        Student List
      </h4>
      {courseDetails.map((list, index) => (
        <div>
          <div
            className="d-flex justify-content-between align-items-center student-list mb-3 mt-2 ms-4"
            style={{ width: "80%" }}
          >
            <h6>{list.title}</h6>
            {showIndex === index ? (
              <IoIosArrowUp
                onClick={() => {
                  setshowIndex("");
                }}
              />
            ) : (
              <IoIosArrowDown
                onClick={() => {
                  setshowIndex(index);
                }}
              />
            )}
          </div>
          {showIndex === index && (
            <div className="course-list table__container-list-table ms-4">
              <Table
                columns={columns}
                rowKey={(record, index) => index}
                dataSource={list.StudentList}
                pagination={{
                  showSizeChanger: true,
                  position: ["bottomCenter"],
                }}
                className="mt-2"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
