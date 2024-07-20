import React, { useState, useEffect } from "react";
import { Table, Button, Popconfirm } from "antd";
import { Modal } from "react-bootstrap";
import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

//style
import axios from "axios";
import DataListTable from "../../../components/shared/DataListTable";

export default function MainCategories() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    MainCategories();
  }, []);

  const MainCategories = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/categoriesList/getCategories`)
      .then(res => {
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch(error => console.log(error));
  };
  console.log('originalData@@', originalData)

  const deleteMaingod = id => {
    axios
      .delete(`${process.env.REACT_APP_DEV_BASE_URL}/categoriesList/delete/${id}`)
      .then(res => {
        if (res.status === 200) {
          const newOne = filteredData.filter(item => item.categoryId != id);
          setFilteredData(newOne);
        }
      });
  };

  const handleSearch = e => {
    const categoryName = e.target.value;
    const newData = filteredData.filter(list =>
      list.categoryName.toLowerCase().includes(categoryName.toLowerCase())
    );
    console.log(newData);
    setFilteredData(newData);

    if (categoryName === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "MainCategories",
      dataIndex: "categoryName",
      key: "x",
      editable: true,
    },
    {
      title: "Activity",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <>
          {console.log(record, "ADF")}
          <div>
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ cursor: "pointer" }}
              onClick={() => {
                console.log("Record", record);
                // const { id, code, country } = record;
                navigate("/admin/mainCategoriesForm", {
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
                deleteMaingod(record.categoryId);
              }}>
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
    navigate("/admin/mainCategoriesForm");
  };

  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`Main Categories ( ${filteredData.length} )`}
      handleAddNewBtn={handleAddNewBtn}
    />
  );
}
