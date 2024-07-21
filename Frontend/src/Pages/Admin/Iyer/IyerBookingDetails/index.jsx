import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import axios from "axios";

import DataListTable from "../../../../components/shared/DataListTable";
import IyerActions from "./IyerActions";

export default function IyerBookingList() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getIyerList();
  }, []);

  const getIyerList = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/iyerbooking/getallIyer`)
      .then(res => {
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch(error => console.log(error));
  };

  const handleSearch = e => {
    const UserName = e.target.value;
    const newData = filteredData.filter(list => list.UserName.toLowerCase().includes(UserName.toLowerCase()));

    setFilteredData(newData);

    if (UserName === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "UserName",
    },
    {
      title: "Funciton name",
      dataIndex: "function_name",
    },

    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => (<IyerActions record={record} />),
    },
  ];

  return (
    <DataListTable
      showAddNewBtn={false}
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title="Priest Booking"
    />
  );
}
