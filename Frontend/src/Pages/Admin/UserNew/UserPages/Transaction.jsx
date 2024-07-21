// import React from 'react'

// export default function Transaction() {
//   return (
//     <div>Transaction</div>
//   )
// }


import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import { Popconfirm } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import "./Temple.scss";

import DataListTable from "../../../../components/shared/DataListTable";

export default function Transaction() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = () => {
    // axios
    //   .get(`${process.env.REACT_APP_DEV_BASE_URL}/temple/getAll/admin`)
    //   .then(res => {
    //     setOriginalData(res.data);
    //     setFilteredData(res.data);
    //   })
    //   .catch(error => console.log(error));
  };

  const handleSearch = e => {
    // const temple_name = e.target.value;
    // const newData = filteredData.filter(list =>
    //   list.temple_name.toLowerCase().includes(temple_name.toLowerCase())
    // );
    // setFilteredData(newData);

    // if (temple_name === "") {
    //   setFilteredData(originalData);
    // }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "temple_name",
    },
    {
        title: "Amount",
        dataIndex: "temple_name",
      },
      {
        title: "Status",
        dataIndex: "temple_name",
      },
  ];
  const navigate = useNavigate();

  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title="Transaction List"
      showAddNewBtn={false}
    />
  );
}

