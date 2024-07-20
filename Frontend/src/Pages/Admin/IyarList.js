import { Table } from "antd";
import { Button, Modal } from "antd";
import React, { useState } from "react";

//style
import "../../components/Css/sass/IyarList.scss";

const data = [
  {
    key: "1",
    name: "Mukesh",
    status: "Approved",
  },
  {
    key: "2",
    name: "Suman",
  },
  {
    key: "3",
    name: "Suresh",
  },
  {
    key: "4",
    name: "Durga",
  },
  {
    key: "5",
    name: "Preethi",
  },
  {
    key: "6",
    name: "Priya",
  },
  {
    key: "7",
    name: "Kiki",
  },
  {
    key: "8",
    name: "Priya",
  },
];

const IyarList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="d-flex flex-direction-row">
          <button
            className="iyar-view-button p-2"
            onClick={() => {
              setIsModalVisible(true);
            }}
          >
            {"View"}
          </button>
          {record.status === "Approved" ? (
            <p className="ms-3">Approved</p>
          ) : record.status === "Rejected" ? (
            <p>Rejected</p>
          ) : (
            record.status !== "Rejected" &&
            record.status !== "Approved" && (
              <>
                <button className="iyar-approved-button p-2 ms-2">
                  {"Approved"}
                </button>
                <button className="iyar-reject-button p-2 ms-2">
                  {"Reject"}
                </button>
              </>
            )
          )}
        </div>
      ),
    },
  ];
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className="iyer-list-main">
        <h3 className="iyer-list-header">Iyer List</h3>
        <div className="iyer-list-top mt-4 py-4 px-3">
          <input placeholder="Search..." className="iyer-list-search ps-2" />
        </div>
        <div className="iyer-list-table">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="mt-2"
          />
          {/* <Button
          className="iyar-view-button p-2"
          type="primary"
          onClick={showModal}
        >
          View
        </Button>
        <Modal
          title="Iyerdetails"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal> */}
        </div>
      </div>
      <Modal
        title="Iyerdetails"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default IyarList;
