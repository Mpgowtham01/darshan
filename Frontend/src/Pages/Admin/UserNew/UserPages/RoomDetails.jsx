import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import { Popconfirm } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import "./Temple.scss";
import DataListTable from "../.././../../components/shared/DataListTable";

export default function RoomDetails() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  console.log("originalData :>> ", originalData);
  useEffect(() => {
    getTempleData();
  }, []);

  const getTempleData = () => {
    const id = localStorage.getItem("id");
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/roombook/getRoomByUser/${id}`)
      .then((res) => {
        setOriginalData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteItem = (id) => {
    console.log("id :>> ", id);
    axios
      .delete(
        `${process.env.REACT_APP_DEV_BASE_URL}/iyerbooking/deletebooking/${id}`
      )
      .then((res) => {
        console.log("res :>> ", res);
        getTempleData();
      });
  };

  const columns = [
    {
      title: "Hotel Name",
      dataIndex: "hotelName",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Price",
      dataIndex: "offerPrice",
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
                // navigate("/user/priestbook/update", { state: { ...record } });
              }}
              className="me-4"
            />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => {
                console.log("record :>> ", record);
                handleDeleteItem(record?.id);
              }}
            >
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

  const handleAddNewBtn = () => {
    // navigate("/user/priestBook");
  };

  return (
    <DataListTable
      columns={columns}
      dataList={originalData}
      handleSearch={""}
      title="Room Booking"
      handleAddNewBtn={handleAddNewBtn}
    />
  );
}
