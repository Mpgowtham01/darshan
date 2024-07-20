import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popconfirm } from "antd";
import "antd/dist/antd.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataListTable from "../../../components/shared/DataListTable";
import { TogglecheckboxForTemple } from "../Vendor/VendorList/ToggleSwitch";
import "./Temple.scss";

export default function TempleList() {
  const [originalData, setOriginalData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/temple/getAll/admin`)
      .then(res => {
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch(error => console.log(error));
  };

  const handleDeleteItem = id => {
    axios
      .delete(`${process.env.REACT_APP_DEV_BASE_URL}/temple/delete/${id}`)
      .then(res => {
        if (res.status === 200) {
          setFilteredData(prev => {
            const newOne = [...prev].filter(
              item => parseInt(item.id) != parseInt(id)
            );
            return newOne;
          });
        }
      });
  };

  const handleSearch = e => {
    const temple_name = e.target.value;
    const newData = filteredData.filter(list =>
      list.temple_name.toLowerCase().includes(temple_name.toLowerCase())
    );
    setFilteredData(newData);

    if (temple_name === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "Temple List",
      dataIndex: "temple_name",
    },
    {
      title: "Famous Temples",
      dataIndex: "isActive",
      key: "isActive",
      render: (_, record) => {
        console.log(record, "rrrrr");
        return (
          <TogglecheckboxForTemple
            record={record}
            // updateApi={updateApi}
            style={{ marginLeft: "5%" }}
          />
        );
      },
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
                navigate("/admin/templeForm", { state: { ...record } });
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
    navigate("/admin/templeForm");
  };

  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`Created Temple List ( ${filteredData.length} )`}
      handleAddNewBtn={handleAddNewBtn}
    />
  );
}
