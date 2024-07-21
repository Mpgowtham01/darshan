import React, { useState, useEffect } from "react";
import { Popconfirm } from "antd";
import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Modal } from "react-bootstrap";

//style
import axios from "axios";
import DataListTable from "../../../../components/shared/DataListTable";

export default function MatrimonialList() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { groupName } = useParams();
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    matrimonialData();
  }, []);

  const matrimonialData = () => {
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/communityTemple/getCurrentTempleMeta`,
        { withCredentials: true }
      )
      .then((res) => {
        setOriginalData(res.data.result);
        setFilteredData(res.data.result);
      })
      .catch((error) => console.log(error));
  };

  const deleteMatrimonials = (id) => {
    axios
      .delete(
        `${process.env.REACT_APP_DEV_BASE_URL}/communityTemple/deleteCommunityTempleMeta/${id}`
      )
      .then((res) => {
        if (res.status === 200) {
          const newOne = filteredData.filter((item) => item.id != id);
          setFilteredData(newOne);
        }
      });
  };

  const handleSearch = (e) => {
    const name = e.target.value;
    const newData = filteredData.filter((list) =>
      list.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredData(newData);

    if (name === "") {
      setFilteredData(originalData);
    }
  };
  const columns = [
    {
      title: "About",
      dataIndex: "about_description",
      key: "x",
      editable: true,
    },
    {
      title: "Activity",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <>
          <div>
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ cursor: "pointer" }}
              onClick={() => {
                console.log("Record", record);
                // const { id, code, country } = record;
                navigate(`/community/${groupName}/AddcommunityInformation`, {
                  state: {
                    ...record,
                  },
                  // replace: true,
                });
              }}
              className="me-5"
            />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => {
                deleteMatrimonials(record.id);
              }}
            >
              <FontAwesomeIcon
                icon={faTrashCan}
                style={{ cursor: "pointer" }}
              />
            </Popconfirm>
            {/* <FontAwesomeIcon
              icon={faEye}
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleShow();
                setDetails(record);
              }}
              className="ms-5"
            /> */}
          </div>
        </>
      ),
    },
  ];

  const navigate = useNavigate();

  const handleAddNewBtn = () => {
    navigate(`/community/${groupName}/AddcommunityInformation`);
  };

  return (
    <>
      <DataListTable
        columns={columns}
        dataList={filteredData}
        handleSearch={handleSearch}
        title="About Details"
        handleAddNewBtn={handleAddNewBtn}
      />
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex mb-3">
            <Col
              md={4}
              sm={4}
              className="d-flex justify-content-end align-items-start pe-3">
              <p className="mb-0" style={{ fontWeight: "bold" }}>
                Name :{" "}
              </p>
            </Col>
            <Col>
              <p className="mb-0">&nbsp;{details?.name}</p>
            </Col>
          </div>
          <div className="d-flex mb-3">
            <Col
              md={4}
              sm={4}
              className="d-flex justify-content-end align-items-start pe-3">
              <p className="mb-0" style={{ fontWeight: "bold" }}>
                Educational :{" "}
              </p>
            </Col>
            <Col>
              <p className="mb-0">&nbsp;{details?.education_qualification}</p>
            </Col>
          </div>
          <div className="d-flex mb-3">
            <Col
              md={4}
              sm={4}
              className="d-flex justify-content-end align-items-start pe-3">
              <p className="mb-0" style={{ fontWeight: "bold" }}>
                Date of Birth :{" "}
              </p>
            </Col>
            <Col>
              <p className="mb-0">&nbsp;{details?.date_of_birth}</p>
            </Col>
          </div>
          <div className="d-flex mb-3">
            <Col
              md={4}
              sm={4}
              className="d-flex justify-content-end align-items-start pe-3">
              <p className="mb-0" style={{ fontWeight: "bold" }}>
                Gender :{" "}
              </p>
            </Col>
            <Col>
              <p className="mb-0">
                &nbsp;{details?.gender === "M" ? "Male" : "Female"}
              </p>
            </Col>
          </div>
          <div className="d-flex mb-3">
            <Col
              md={4}
              sm={4}
              className="d-flex justify-content-end align-items-start pe-3">
              <p className="mb-0" style={{ fontWeight: "bold" }}>
                Zodiac Sign :{" "}
              </p>
            </Col>
            <Col>
              <p className="mb-0">&nbsp;{details?.zodiac_sign}</p>
            </Col>
          </div>
          <div className="d-flex mb-3">
            <Col
              md={4}
              sm={4}
              className="d-flex justify-content-end align-items-start pe-3">
              <p className="mb-0" style={{ fontWeight: "bold" }}>
                Star :{" "}
              </p>
            </Col>
            <Col>
              <p className="mb-0">&nbsp;{details?.star}</p>
            </Col>
          </div>
          <div className="d-flex mb-3">
            <Col
              md={4}
              sm={4}
              className="d-flex justify-content-end align-items-start pe-3">
              <p className="mb-0" style={{ fontWeight: "bold" }}>
                Salary :{" "}
              </p>
            </Col>
            <Col>
              <p className="mb-0">&nbsp;{details?.salary}</p>
            </Col>
          </div>
          <div className="d-flex mb-3">
            <Col
              md={4}
              sm={4}
              className="d-flex justify-content-end align-items-start pe-3">
              <p className="mb-0" style={{ fontWeight: "bold" }}>
                Address :{" "}
              </p>
            </Col>
            <Col>
              <p className="mb-0" style={{ flexWrap: "wrap" }}>
                &nbsp;{details?.address}
              </p>
            </Col>
          </div>
          <div className="d-flex mb-3">
            <Col
              md={4}
              sm={4}
              className="d-flex justify-content-end align-items-start pe-3">
              <p className="mb-0" style={{ fontWeight: "bold" }}>
                Phone Number :{" "}
              </p>
            </Col>
            <Col>
              <p className="mb-0">&nbsp;{details?.phone_number}</p>
            </Col>
          </div>
        </Modal.Body>
      </Modal> */}
    </>
  );
}
