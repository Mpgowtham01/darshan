
import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import { Popconfirm } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import "./Temple.scss";

import DataListTable from "../../../../components/shared/DataListTable";

export default function Temple() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
const [count, setCount] = useState()
  useEffect(() => {
    getTempleData();
  }, []);

  const getTempleData = () => {
    const id=localStorage.getItem("id")
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/temple/getTempleBasedOnUserId/${id}`)
      .then(res => {
        setOriginalData(res.data);
        setFilteredData(res.data);
        setCount(res.data.length)
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
    setCount(newData.length)

    if (temple_name === "") {
      setFilteredData(originalData);
      setCount(originalData.length)
    }
  };

  const columns = [
    {
      title: "Temple List",
      dataIndex: "temple_name",
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
                navigate("/user/Temple/Templeform", { state: { ...record } });
              }}
              className="me-4"
            />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDeleteItem(record.id)}>
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
    navigate("/user/Temple/Templeform");
  };

  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={count > 0 ? `Temple List (${count})` : "Temple List"}
      handleAddNewBtn={handleAddNewBtn}
    />
  );
}

