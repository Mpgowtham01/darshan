import React, { useState } from "react";
import { Table, Button, Popconfirm, Switch } from "antd";
import { Modal, Form } from "react-bootstrap";
import Select from "react-select";
import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// import { Switch } from 'antd';

const onChange = checked => {
  console.log(`switch to ${checked}`);
};

const data = [
  {
    Id: 1,
    Name: "Man Power",
    Type: "Iyer",
    Activity: <Switch defaultChecked onChange={onChange} />,
  },
  {
    Id: 2,
    Name: "Transport",
    Type: "Tours&Travel",
    Activity: <Switch defaultChecked onChange={onChange} />,
  },
  {
    Id: 3,
    Name: "Speciality",
    Type: "Toilet",
    Activity: <Switch defaultChecked onChange={onChange} />,
  },
  {
    Id: 4,
    Name: "Service",
    Type: "Service",
    Activity: <Switch defaultChecked onChange={onChange} />,
  },
  // {
  //   Id: 5,
  //   Name: "Man Power",
  //   Type: "Portal",
  //    },
  // {
  //   Id: 6,
  //   Name: "Speciality",
  //   Type: "Bathing",
  //   },
];

const VendorDetails = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeData = id => {
    fetch(id, {
      method: "DELETE",
      headers: {
        Accept: "",
        "content-Type": "",
      },
    })
      .then(console.log("Deleted"))
      .catch(err => console.log(err));
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "x",
      editable: true,
    },
    {
      title: "Type",
      dataIndex: "Type",
      key: "x",
    },
    {
      title: "Activity",
      dataIndex: "Activity",
      key: "x",
    },
    {
      title: "Delete vendor",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <>
          {console.log(record, "ADF")}
          <div>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => removeData(record.key)}>
              <FontAwesomeIcon
                icon={faTrashCan}
                style={{ cursor: "pointer" }}
              />
            </Popconfirm>
          </div>
        </>
      ),
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="temple-form-main">
      <h3 className="temple-form-header">Vendor Details</h3>
      <div className="temple-form-top mt-4 py-4 px-3">
        <input placeholder="Search..." className="temple-form-search ps-2" />
        <Button
          type="light"
          onClick={handleShow}
          className="temple-form-button">
          <FontAwesomeIcon icon={faPlus} />
          &nbsp; Add
        </Button>
      </div>
      <div className="temple-form-table">
        <Table
          columns={columns}
          dataSource={data}
          pagination={true}
          className="mt-2"
        />
      </div>
      <div className="temple-form-model">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="py-3 temple-form-model-header">
            <h4>
              <b>Create Vendor Detail</b>
            </h4>
          </Modal.Header>
          <Modal.Body className="px-5 temple-form-model-body">
            <div>
              <h6 className="mb-3">Vendor Detail List</h6>
              <input
                type="text"
                className="temple-form-modal-feild mb-3 ps-3"></input>
            </div>
          </Modal.Body>
          <Modal.Footer className="temple-form-model-footer">
            <button
              onClick={handleClose}
              className="temple-form-model-btn px-4">
              Save
            </button>
            <button
              onClick={handleClose}
              className="temple-form-model-btn px-4">
              Cancel
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default VendorDetails;
