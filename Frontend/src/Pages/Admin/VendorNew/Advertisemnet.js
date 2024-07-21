import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popconfirm } from "antd";
import "antd/dist/antd.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataListTable from "../../../components/shared/DataListTable";
import { TogglecheckboxForTemple } from "../Vendor/VendorList/ToggleSwitch";
import Api from "../../../Api";

export default function Advertisement() {
  const Id = localStorage.getItem("id");
  const [originalData, setOriginalData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);
  console.log("filteredData :>> ", filteredData);
  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = () => {
    Api.get(`/vendor/getAdBasedOnUserId/${Id}`).then((res) => {
      console.log("object@@", res);
      setFilteredData(res.data);
    });
  };

  const handleDeleteItem = (id) => {
    Api.delete(`/vendor/deletes/${id}`).then((res) =>
      setFilteredData((prev) => prev.filter((data) => data.id !== id))
    );
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
      title: "Bussiness Name",
      dataIndex: "name",
    },
    // {
    //   title: "Category",
    //   dataIndex: "categoryname",
    // },

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
                navigate("/vendor/AddAdvertisement", { state: { ...record } });
              }}
              className="me-4"
            />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDeleteItem(record.id)}
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
    navigate(`/vendor/AddAdvertisement`);
  };

  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`Category ( ${filteredData.length} )`}
      handleAddNewBtn={handleAddNewBtn}
    />
  );
}
