import {
  faPenToSquare,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Pagination, Popconfirm, Table } from "antd";
import "antd/dist/antd.min.css";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DataListTable from "../../../components/shared/DataListTable";
import axios from "axios";
const SubCategories = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    SubCategories();
  }, []);

  const SubCategories = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/subCategoriesList/getAllSubcategories`)
      .then(res => {
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch(error => console.log(error));
  };
  console.log('originalData@@', originalData)

  const deleteMaingod = id => {
    axios
      .delete(`${process.env.REACT_APP_DEV_BASE_URL}/subCategoriesList/deleteSubcategoriesList/${id}`)
      .then(res => {
        if (res.status === 200) {
          const newOne = filteredData.filter(item => item.categoryId != id);
          setFilteredData(newOne);
        }
      });
  };

  const handleSearch = e => {
    const subCategoryName = e.target.value;
    const newData = filteredData.filter(list =>
      list.subCategoryName.toLowerCase().includes(subCategoryName.toLowerCase())
    );
    console.log(newData);
    setFilteredData(newData);

    if (subCategoryName === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "SubCategories",
      dataIndex: "subCategoryName",
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
                navigate("/admin/subCategoriesForm", {
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
    navigate("/admin/subCategoriesForm");
  };

  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`SubCategory List ( ${filteredData.length} )`}
      handleAddNewBtn={handleAddNewBtn}
    />
  );
};

export default SubCategories;
