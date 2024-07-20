// import React from 'react'

// export default function CategoryList() {
//   return (
//     <div>CategoryList</div>
//   )
// }

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
// import "./Temple.scss";

export default function CategoryList() {
  const [originalData, setOriginalData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = () => {
    Api.get(`/categories/getAllCategoriesData`).then(res =>
      setFilteredData(res.data)
    );
  };

  const handleDeleteItem = vendor_id => {
    Api.delete(`/categories/deleteCategory/${vendor_id}`).then(res =>
      setFilteredData(prev => prev.filter(data => data.vendor_id !== vendor_id))
    );
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
      title: "Category",
      dataIndex: "Categories",
    },
    {
      title: "Sub-Category",
      dataIndex: "SubCategories",
    },
    {
      title: "Company Name",
      dataIndex: "CompanyName",
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
                navigate("/vendor/vendorCategory", { state: { ...record } });
              }}
              className="me-4"
            />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDeleteItem(record.vendor_id)}
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
    navigate(`/vendor/vendorCategory`);
  };

  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`Category List ( ${filteredData.length} )`}
      handleAddNewBtn={handleAddNewBtn}
    />
  );
}
